import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cont from './pages/cont.tsx'
import Prov from './pages/prov.tsx'
import Layout from './components/layout/layout.tsx'
import axios from 'axios'
import { API_PRODUCT, TOKEN } from './helpers/helper.ts'
import { IProductCard } from './components/product-card/productCard.type.ts'
import IsLoginToken from './components/isLoginToken/isLoginToken.tsx'


const Menu = lazy(()=> import(`./pages/menu/menu.tsx`));
const ProductPage= lazy(()=> import(`./pages/product/product.tsx`));
const NotFound = lazy(()=> import('./pages/not-found.tsx'))
const AuthLayout = lazy (()=> import("./components/authLoyaut/authLoyaut.tsx"))
const Registr = lazy (()=>import("./components/authLoyaut/registr/regist.tsx"))
const Login = lazy (()=> import("./components/authLoyaut/login/login.tsx"))

const rout = createBrowserRouter([{
  path:"/",
  element: <IsLoginToken><Layout/></IsLoginToken>,
  children:[{
    path:"/",
    element:<Menu/>,
  },
  {
    path:"/cont",
    element:<Cont/>
  },
  {
    path:"product/:id",
    element:<ProductPage/>,
    errorElement: <h1>Ошибка запроса</h1>,
    loader: async ( {params} )=> {
      const { id } = params; 
      const { data } = await axios<IProductCard[]>(`${API_PRODUCT}/products/${id}`, {
        headers: {
          Authorization :`Bearer ${TOKEN}`
        }
      });
      return data
    }
  }]
},
{
  path:"/cont",
  element:<Cont/>
},
{
  path:"/auth",
  element: <AuthLayout/>,
  children: [
    {
      path: "login",
      element: <Login/>
    },
    {
      path: "registr",
      element:<Registr/>
    }
  ]
},
 {
  path:"*",
  element: <NotFound/>,
 }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
    <RouterProvider router={rout}/>
    </Suspense>
  </StrictMode>,
)

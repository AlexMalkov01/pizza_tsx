import './index.css'
import { lazy, StrictMode, Suspense } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cont from './pages/cont.tsx'
import Layout from './components/layout/layout.tsx'
import axios from 'axios'
import { API_PRODUCT, TOKEN } from './helpers/helper.ts'
import { IProductCard } from './components/product-card/productCard.type.ts'
import IsLoginToken from './components/isLoginToken/isLoginToken.tsx'
import { STOREGE_KEYS } from './enams/storege.enam.ts'
import { loadState } from './store/storege.ts'




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
          Authorization :`Bearer ${loadState<{ jwt:string }>(STOREGE_KEYS.JWT)?.jwt }`
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
    <Provider store={store}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <RouterProvider router={rout}/>
      </Suspense>
    </Provider>
  </StrictMode>,
)

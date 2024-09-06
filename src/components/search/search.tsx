import { ISearch } from "./search.type";
import style from "./search.module.css"
import cn from "classnames"

function Search ({placeholder, className,...props}:ISearch) {

    const searchIconUrl = "/src/assets/search-icon.svg"

    return (
        <>
        <div className={cn(style.search)}>
        <label htmlFor="search">
            <img className={cn(style.searchIcon)} src={searchIconUrl} alt="search"/>
        </label>
        <input type="text" 
        placeholder={placeholder}
        className={cn(style.searchInput, className)}
        {...props} 
        id="search"
        />
        
        </div>

        </>
    )
}


export default Search 
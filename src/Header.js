import React from 'react'; 
import "./Header.css"; 
import { Link } from "react-router-dom"; 
import SearchIcon from "@material-ui/icons/Search"; 
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "./StateProvider.js"; 
import { auth } from './firebase';
function Header() {
    
    const [{basket,user},dispatch] = useStateValue(); 
    
    const login = () => {
        if (user) {
            auth.signOut(); 
        }
    }

    return (
        <nav className="header">
            
            {/* logo on the left. using the link functionality from react-router   */}
            <Link to="/">
            <img className ="header_logo" src="https://m.media-amazon.com/images/G/39/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_ae-main._CB441728605_.png" ></img>
            </Link>


            {/* search box */}
            <div className="header_search">
            <input className="header_searchInput" type="text" ></input>
            <SearchIcon className ="header_searchIcon"></SearchIcon>
            </div>
            
            {/* 4 links  */}
            <div className="header_nav">
                {/* 1st link */}
                   {/* href in the anchor tag causes a refresh , but this link tag does note make the whole page refresh */}
                <Link to={!user && "/login"} className="header_link">
                    <div onClick={login} className="header_option">
                    <span className="header_optionlineone">Hello {!user?'Guest': user.email}</span>
                    <span className="header_optionlinetwo">{user?"Sign Out":"Sign in"} </span>
                    </div>
                </Link>
                
                {/* 2nd link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                    <span className="header_optionlineone">Returns</span>
                    <span className="header_optionlinetwo">& Orders </span>
                    </div>
                 </Link>
            
                {/* 3rd link */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                    <span className="header_optionlineone">Your</span>
                    <span className="header_optionlinetwo">Prime </span>
                    </div>
                 </Link>
        
                {/* 4th link */}
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        {/* shopping basket icon */}
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                        {/* Number of items in the basket */}
                        {/*                                                     this question makes sure than only after the basket is pulled from th edata layer,then only this code is run. */}
                        <span className="header_optionlinetwo header_basketcount">{basket?.length}</span>

                    </div>
                    
                </Link>

             </div>
              

            {/* basket icon with a number, representing the number of items you have in your cart */}
           
            
        </nav>
    )
}

export default Header

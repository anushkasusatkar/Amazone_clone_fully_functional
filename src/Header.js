import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header_search">
        <input className="header_search_Input" type="text" />
        <SearchIcon className="header_searchicon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionlineone">Hello Pratik</span>
          <span className="header_optionlinetwo">sign in !</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineone">Returns</span>
          <span className="header_optionlinetwo">&Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineone">Your</span>
          <span className="header_optionlinetwo">Prime</span>
        </div>
        <div className="header_optionbasket">
             <ShoppingBasketIcon />
             <span className="header_optionlinetwo header_basketcount">
              0
             </span>
        </div>
      </div>
    </div>
  );
}

export default Header;

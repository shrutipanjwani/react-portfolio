import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png"

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='row space-between'>
          <div className='logo'>
            <Link to="/"><img className="logo" src={logo} alt="shruti"/></Link>
          </div>
          <div className='menu'>
            <Link to="/navigation">MENU</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
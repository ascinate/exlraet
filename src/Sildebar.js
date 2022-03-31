import React from "react";
import {NavLink } from "react-router-dom";
import logo from "../src/images/logo.svg";
import icon1 from "../src/images/dashbord-icon.svg";
import icon2 from "../src/images/icon2.svg";
import icon3 from "../src/images/iconn.svg";
import icon4 from "../src/images/icon3.svg";
import icon5 from "../src/images/icon4.svg";
import icon6 from "../src/images/icon5.svg";
import icon7 from "../src/images/icon6.svg";
import { FaBars } from "react-icons/fa";
function Sidebar(){
    return(
        <>
        <div className="inside0div">
            <div className="logo-admin">
              <NavLink to="/" >
                 <img src={logo} alt="logo"/>
              </NavLink>
              <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"
               className="d-block d-md-none bar-icon1">  
                 <FaBars/> 
              </a>
            </div>
            
            <div className="main-menu d-none d-md-block">
               <ul className="list-unstyled">
                 <li>
                   <NavLink to="/" activeClassName="menu_active"> <span> <img src={icon1} alt="icon1"/> </span> Dashboard </NavLink>
                   <NavLink to="/booking" activeClassName="menu_active"> <span> <img src={icon2} alt="icon1"/> </span> New Bookings </NavLink>
                   <NavLink to="/booking" activeClassName="menu_active"> <span> <img src={icon3} alt="icon1"/> </span> Analytics </NavLink>
                   <NavLink to="/booking" activeClassName="menu_active"> <span> <img src={icon4} alt="icon1"/> </span> Tests </NavLink>
                   <NavLink to="/payement" activeClassName="menu_active"> <span> <img src={icon5} alt="icon1"/> </span> Payment </NavLink>
                   <NavLink to="/booking" activeClassName="menu_active"> <span> <img src={icon6} alt="icon1"/> </span> Settings </NavLink>
                   <NavLink to="/booking" activeClassName="menu_active"> <span> <img src={icon7} alt="icon1"/> </span> Support </NavLink>
                 </li>
               </ul>
            </div>
        </div>
        </>
    );
}
export default Sidebar;
import React from "react";
import {NavLink } from "react-router-dom";
import logo from "../src/images/logo.svg";
import logosmall from "../src/images/logo-icon.svg";
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
                 <img src={logo} className="big-logo" alt="logo"/>
                 <img src={logosmall} className="closap-logo" alt="logosm"/>
              </NavLink>
              <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"
               className="d-block d-lg-none bar-icon1">  
                 <FaBars/> 
              </a>
            </div>
            
            <div className="main-menu d-none d-lg-block">
               <ul className="list-unstyled">
                 <li>
                   <NavLink to="/dashbord" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={icon1} alt="icon1"/> </span> <span className="menu-text"> Dashboard </span>  </NavLink>
                   <NavLink to="/booking" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={icon2} alt="icon1"/> </span> <span className="menu-text"> New Bookings </span> </NavLink>
                   <NavLink to="/analytics" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={icon3} alt="icon1"/> </span> <span className="menu-text"> Analytics </span> </NavLink>
                   <NavLink to="/tests" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={icon4} alt="icon1"/> </span> <span className="menu-text"> Tests </span>  </NavLink>
                   <NavLink to="/payement" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={icon5} alt="icon1"/> </span> <span className="menu-text"> Payment </span>  </NavLink>
                   <NavLink to="/settings" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={icon6} alt="icon1"/> </span> <span className="menu-text"> Settings </span> </NavLink>
                   <NavLink to="/support" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={icon7} alt="icon1"/> </span> <span className="menu-text"> Support </span> </NavLink>
                 </li>
               </ul>
            </div>
        </div>
        </>
    );
}
export default Sidebar;
import React from "react";
import {NavLink } from "react-router-dom";
import logo from "../src/images/logo.svg";
import logosmall from "../src/images/logo-icon.svg";
import icon1 from "../src/images/dashbord-icon.svg";
import icon2 from "../src/images/add-booking.svg";
import icon3 from "../src/images/slot-icon.svg";
import icon4 from "../src/images/icon2.svg";
import icon5 from "../src/images/test-icon2.svg";
import icon6 from "../src/images/lab-icon.svg";
import icon7 from "../src/images/inventory-icon.svg";
import icon8 from "../src/images/icon4.svg";
import icon9 from "../src/images/admin-setting.svg";
import icon10 from "../src/images/icon-support-admin.svg";
import icontechnic from "../src/images/techni-icon.svg";
import iconn from "../src/images/notification.svg";
import { FaBars } from "react-icons/fa";
function AdminSidebar(){
    return(
        <>
        <div className="inside0div">
            <div className="logo-admin">
              <NavLink to="/adminlogin" >
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
                   <NavLink to="/admindashbord" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={icon1} alt="icon1"/> </span> <span className="menu-text"> Dashboard </span>  </NavLink>
                   <NavLink to="/adminbooking" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={icon2} alt="icon1"/> </span> <span className="menu-text"> Add Bookings </span> </NavLink>
                   <NavLink to="/availableslot" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={icon3} alt="icon1"/> </span> <span className="menu-text"> Available Slots </span> </NavLink>
                   <NavLink to="/adminbookingmain" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={icon4} alt="icon1"/> </span> <span className="menu-text"> Bookings </span>  </NavLink>
                   <NavLink to="/admintestnew" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={icon5} alt="icon1"/> </span> <span className="menu-text"> Tests </span>  </NavLink>
                   <NavLink to="/adminlab" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={icon6} alt="icon1"/> </span> <span className="menu-text"> Lab </span> </NavLink>
                   <NavLink to="/inventory" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={icon7} alt="icon1"/> </span> <span className="menu-text"> Inventory </span> </NavLink>
                   
                   <NavLink to="/technician" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={icontechnic} alt="icon1"/> </span> <span className="menu-text"> Technician </span> </NavLink>
                   <NavLink to="/adminpayment" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={icon8} alt="icon1"/> </span> <span className="menu-text"> Payment </span> </NavLink>
                   <NavLink to="/adminnotificationpage" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={iconn} alt="icon1"/> </span> <span className="menu-text"> Notification  </span> </NavLink>
                   <NavLink to="/adminsettings" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={icon9} alt="icon1"/> </span> <span className="menu-text"> Settings </span> </NavLink>
                   <NavLink to="/adminsupport" activeClassName="menu_active"> <span className="menu-icon-new"> <img src={icon10} alt="icon1"/> </span> <span className="menu-text"> Support </span> </NavLink>
                   
                 </li>
               </ul>
            </div>
        </div>
        </>
    );
}
export default AdminSidebar;
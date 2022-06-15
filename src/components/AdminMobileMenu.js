import React from "react";
import {NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import icon1 from "../images/dashbord-icon.svg";
import icon2 from "../images/add-booking.svg";
import icon3 from "../images/slot-icon.svg";
import icon4 from "../images/icon2.svg";
import icon5 from "../images/test-icon2.svg";
import icon6 from "../images/lab-icon.svg";
import icon7 from "../images/inventory-icon.svg";
import icon8 from "../images/icon4.svg";
import icon9 from "../images/admin-setting.svg";
import icon10 from "../images/icon-support-admin.svg";
import icontechnic from "../images/techni-icon.svg";
function AdminMobileMenu(){
    return(
        <>
          <div className="offcanvas offcanvas-start mobile-menu-div2" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                  <div className="offcanvas-header">
                  <button type="button" class="close-menu" data-bs-dismiss="offcanvas" aria-label="Close">
                  <span> Close </span> <i class="fas fa-long-arrow-alt-right"></i>
                 </button>
                  </div>
                  <div className="offcanvas-body">
                      
                  <div className="head-contact">
                      <NavLink to="/" className="logo-side">
                         <img src={logo} alt="logo"/>
                      </NavLink>
                  
                      <div className="mobile-menu-sec mt-3">
                        <ul className="list-unstyled">
                          <li data-bs-dismiss="offcanvas">
                          <NavLink to="/admindashbord" activeClassName="menu_active"> <span  className="sp-mobilemenu"> <img src={icon1} alt="icon1"/> </span> Dashboard </NavLink>
                          <NavLink to="/adminbooking" activeClassName="menu_active"> <span className="sp-mobilemenu"> <img src={icon2} alt="icon1"/> </span>  Add Bookings  </NavLink>
                          <NavLink to="/availableslot" activeClassName="menu_active"> <span className="sp-mobilemenu"> <img src={icon3} alt="icon1"/> </span>  Available Slots  </NavLink>
                          <NavLink to="/adminbookingmain" activeClassName="menu_active"> <span className="sp-mobilemenu"> <img src={icon4} alt="icon1"/> </span>  Bookings  </NavLink>
                          <NavLink to="/admintest" activeClassName="menu_active"> <span className="sp-mobilemenu"> <img src={icon5} alt="icon1"/> </span>  Tests </NavLink>
                          <NavLink to="/adminlab" activeClassName="menu_active"> <span className="sp-mobilemenu"> <img src={icon6} alt="icon1"/> </span>  Lab  </NavLink>
                          <NavLink to="/inventory" activeClassName="menu_active"> <span className="sp-mobilemenu"> <img src={icon7} alt="icon1"/> </span>  Inventory  </NavLink>
                          <NavLink to="/technician" activeClassName="menu_active"> <span className="sp-mobilemenu"> <img src={icontechnic} alt="icon1"/> </span>   Technician  </NavLink>
                          <NavLink to="/adminpayment" activeClassName="menu_active"> <span className="sp-mobilemenu"> <img src={icon8} alt="icon1"/> </span>   Payment  </NavLink>
                          <NavLink to="/adminsettings" activeClassName="menu_active"> <span className="sp-mobilemenu"> <img src={icon9} alt="icon1"/> </span>  Settings   </NavLink>
                          <NavLink to="/adminsupport" activeClassName="menu_active"> <span className="sp-mobilemenu"> <img src={icon10} alt="icon1"/> </span>   Support    </NavLink>
                          </li>
                        </ul>
                      </div>
                  
                 
                  </div>
                      
                  </div>
         </div>
        </>
    );
}
export default AdminMobileMenu;
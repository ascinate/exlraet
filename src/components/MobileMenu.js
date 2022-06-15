import React from "react";
import {NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import icon1 from "../images/dashbord-icon.svg";
import icon2 from "../images/icon2.svg";
import icon3 from "../images/iconn.svg";
import icon4 from "../images/icon3.svg";
import icon5 from "../images/icon4.svg";
import icon6 from "../images/icon5.svg";
import icon7 from "../images/icon6.svg";


class MobileMenu extends React.Component {
  render() {
    return (
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
                  <NavLink to="/dashbord"  activeClassName="menu_active"> <span className="sp-mobilemenu"> <img src={icon1} alt="icon1"/> </span> Dashboard </NavLink>
                  <NavLink to="/booking" activeClassName="menu_active"> <span className="sp-mobilemenu"> <img src={icon2} alt="icon1"/> </span> Add Bookings </NavLink>
                  <NavLink to="/userslotpage" activeClassName="menu_active"> <span className="sp-mobilemenu"> <img src={icon3} alt="icon1"/> </span> Available Slots  </NavLink>
                  <NavLink to="/newuserbooking" activeClassName="menu_active"> <span className="sp-mobilemenu"> <img src={icon3} alt="icon1"/> </span> Bookings  </NavLink>
                  <NavLink to="/tests" activeClassName="menu_active"> <span className="sp-mobilemenu"> <img src={icon4} alt="icon1"/> </span> Tests </NavLink>
                  <NavLink to="/payement" activeClassName="menu_active"> <span className="sp-mobilemenu"> <img src={icon5} alt="icon1"/> </span> Payment </NavLink>
                  <NavLink to="/settings" activeClassName="menu_active"> <span className="sp-mobilemenu"> <img src={icon6} alt="icon1"/> </span> Settings </NavLink>
                  <NavLink to="/support" activeClassName="menu_active"> <span className="sp-mobilemenu"> <img src={icon7} alt="icon1"/> </span> Support </NavLink>
                  </li>
                </ul>
              </div>
          
        
          </div>
              
          </div>
       </div>
      </>
    );
  }
}



export default MobileMenu;
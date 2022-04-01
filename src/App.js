import React from "react";
import './App.css';
import logo from "../src/images/logo.svg";
import userimg from "../src/images/user-pic.png";
import {NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Sidebar from "./Sildebar";
import Dashbord from "./Dashbord";
import Booking from "./Booking";
import Payement from "./Payement";
import Analytics from "./Analytics";
import Tests from "./Tests";
import Settings from "./Settings";
import Support from "./Support";
import TopMenu from"./components/TopMenu";
import icon1 from "../src/images/dashbord-icon.svg";
import icon2 from "../src/images/icon2.svg";
import icon3 from "../src/images/iconn.svg";
import icon4 from "../src/images/icon3.svg";
import icon5 from "../src/images/icon4.svg";
import icon6 from "../src/images/icon5.svg";
import icon7 from "../src/images/icon6.svg";
import Login from "./Login";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { BsFilterLeft, BsSearch, BsBell } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import $ from "jquery";

class App extends React.Component {
  componentWillMount(){

    $(document).ready(function(){
      $("#togle-icon").click(function(e) {
          e.preventDefault();
          $("#navAccordion").toggleClass("active");
          $("main").toggleClass("full-width");
          $("footer").toggleClass("full-width");
    
    });
    });
    
  }
  render() {
    return (
      <Router>
          <div className='page-wrapper chiller-theme toggled'>
             <div className="main-sec d-md-flex">
                <div className="sidebar-menu" id="navAccordion">
                  <Sidebar/>
                </div>
                <main className="body-total content-wrapper float-start w-100">
                   <div className="container-fluid">
                      
                     <TopMenu/>

                      <Routes>
                  
                          <Route exact="true" path="/" element={<Dashbord/>}/>
                          <Route exact="true" path="/booking" element={<Booking/>}/>
                          <Route exact="true" path="/payement" element={<Payement/>}/>
                          <Route exact="true" path="/analytics" element={<Analytics/>}/>
                          <Route exact="true" path="/tests" element={<Tests/>}/>
                          <Route exact="true" path="/settings" element={<Settings/>}/>
                          <Route exact="true" path="/support" element={<Support/>}/>
                          <Route exact="true" path="/login" element={<Login/>}/>
                          
                          
                        
                      </Routes>
                      
                   </div>
                </main>




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
                          <li>
                          <NavLink to="/" activeClassName="menu_active"> <span> <img src={icon1} alt="icon1"/> </span> Dashboard </NavLink>
                          <NavLink to="/booking" activeClassName="menu_active"> <span> <img src={icon2} alt="icon1"/> </span> New Bookings </NavLink>
                          <NavLink to="/analytics" activeClassName="menu_active"> <span> <img src={icon3} alt="icon1"/> </span> Analytics </NavLink>
                          <NavLink to="/tests" activeClassName="menu_active"> <span> <img src={icon4} alt="icon1"/> </span> Tests </NavLink>
                          <NavLink to="/payement" activeClassName="menu_active"> <span> <img src={icon5} alt="icon1"/> </span> Payment </NavLink>
                          <NavLink to="/settings" activeClassName="menu_active"> <span> <img src={icon6} alt="icon1"/> </span> Settings </NavLink>
                          <NavLink to="/support" activeClassName="menu_active"> <span> <img src={icon7} alt="icon1"/> </span> Support </NavLink>
                          </li>
                        </ul>
                      </div>
                  
                 
                  </div>
                      
                  </div>
                </div>


             </div>
          </div>
      </Router>
    );
  }
}

export default App;

import React from "react";
import {NavLink } from "react-router-dom";
import { BsFilterLeft, BsSearch, BsBell } from "react-icons/bs";
import userimg from "../images/user-pic.png";
import DashbordNotification from "./DashbordNotification";
import { FaBars, FaSearch } from "react-icons/fa";
import $ from "jquery";

class TopMenu extends React.Component {
    componentWillMount(){

        $(document).ready(function(){
            $("#ser-text").click(function(){
              $("#serch-div-top").show();
              $("#ser-text").hide();
            });

            
          });
    }
    render() {
      return(
          <>
            
          <div className="d-none d-lg-block col-lg-7">
                
                <div className="right-menu-sec">

                <div id="serch-div-top" className="col-lg-6">
                <div className="d-flex serch-sec-div position-relative form-control align-items-center">
                    <FaSearch/>
                    <input type="text" className="form-control" placeholder="Search for Anything"/>
                  
                </div>
            </div>
                   
                        <ul className="list-unstyled m-0 d-flex">
                            <li>
                            <a id="ser-text">
                                <BsSearch/>
                            </a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <BsBell/>
                            </a>
                            <ul className="dropdown-menu cart-dropdown-ne notificaion-dp shadow" aria-labelledby="navbarDropdown">
                                <li>
                                    <div className="d-flex pt-2 px-3 justify-content-between align-content-center">
                                        <h4 className="mb-0"> Notificaions </h4>
                                        <a id="#" className="clear-bnt"> Clear All </a>
                                    </div> 
                                    
                                    <hr/>
                                    <DashbordNotification/>
                                    <NavLink to="/notification" className="ms-auto btn allnoti-btn text-center d-table">
                                        See All
                                    </NavLink>
                                </li>
                            </ul>
                            </li>
                            
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="user-div-top d-flex align-items-center">
                                    <h6>  John Doe
                                    <span className="d-block"> Admin </span>  </h6>
                                    <figure className="m-0 ms-2">
                                        <img src={userimg} alt="user"/>
                                    </figure>
                                </div>

                                </a>
                                <ul className="dropdown-menu account-div shadow" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item">
                                            Login id
                                            <span className="d-block"> john489@gmail.com </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item">
                                        User Profile
                                            
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item">
                                            Branch Name
                                            <span className="d-block"> ABC Branch </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item">
                                            Logout
                                        </a>
                                    </li>
                                    
                                </ul>
                            </li>
                            
                        </ul>
                </div>
  
           </div>
          </>
      );
    }
  }
export default TopMenu;
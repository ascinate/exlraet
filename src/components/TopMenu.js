import React from "react";
import {NavLink } from "react-router-dom";
import { BsFilterLeft, BsSearch, BsBell } from "react-icons/bs";
import userimg from "../images/user-pic.png";
import DashbordNotification from "./DashbordNotification";
import { FaBars } from "react-icons/fa";

function TopMenu(){
    return(
        <>
            <div className="d-none d-lg-block">
                
                        <div className="right-menu-sec">
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
                                    <h4 className="pt-2 ps-3"> Notificaions </h4>
                                    <hr/>
                                    <DashbordNotification/>
                                    <NavLink to="/notification" className="m-auto btn allnoti-btn text-center d-table">
                                        View All Notificaion 
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
                                           Phone Number
                                            <span className="d-block"> 0000000000 </span>
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
export default TopMenu;
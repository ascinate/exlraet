import React from "react";
import AdminSidebar from "./AdminSidebar";
import TopMenu from"./components/TopMenu";
import SettingsIcon from "../src/images/seting-icon.svg";
import tabsicon1 from "../src/images/tabs-icon1.svg";
import tabsicon2 from "../src/images/tabs-icon2.svg";
import tabsicon3 from "../src/images/tabs-icon3.svg";
import tabsicon4 from "../src/images/tabs-icon4.svg";
import tabsicon5 from "../src/images/tabs-icon5.svg";
import tabsicon6 from "../src/images/tabs-icon6.svg";
import tabsicon7 from "../src/images/tabs-icon7.svg";
import editicon from "../src/images/edit-icon.svg";
import AddUserAdd from "./components/AddUserAdd";
import AddBrunchAdd from "./components/AddBrunchAdd";
import { FaRegEye, FaSistrix, FaBars } from "react-icons/fa";
import ViewUser from "./components/ViewUser";
import ViewBrunch from "./components/ViewBrunch";
import helpicon from "../src/images/help-icon.svg";
import $ from "jquery";
import AdminMobileMenu from "./components/AdminMobileMenu";
import AdminUserAdd from "./components/AdminUserAdd";
import AdminAddBrunchAdd from "./components/AdminAddBrunchAdd";
import AdminViewUser from "./components/AdminViewUser";



class AdminSettings extends React.Component {
    componentWillMount(){

        $(document).ready(function(){
          $(".togle-icon").click(function(e) {
              e.preventDefault();
              $("#navAccordion").toggleClass("active");
              $("main").toggleClass("full-width");
              $("footer").toggleClass("full-width");
        
        });
        });
        
      }
    render() {
      return(
          <>
           <div className='page-wrapper chiller-theme toggled'>

                <div className="main-sec d-md-flex">
                    <div className="sidebar-menu" id="navAccordion">
                    <AdminSidebar/>
                    </div>
                </div>
                <main className="body-total content-wrapper float-start w-100">
                    <div className="container-fluid">
                    <div className="d-none d-lg-block">
                        <div className="top-bar-menu shadow float-start">
                            <a className="tog-btn togle-icon">
                            <FaBars/>
                            </a>
                            <TopMenu/>
                        </div>
                    </div>
                    <div className="dasb-div bk-div  pe-lg-3 float-start w-100">
                            <div className="bk-inside-div">
                                <div className="col-lg-12 ps-lg-0">
                                    <div className="show-date-details d-lg-flex shadow mb-5 mb-lg-0">
                                        
                                        <h6 className="my-4 my-md-0 cm-heading-page"> <span> <img src={SettingsIcon} alt="cl"/> </span> Settings </h6>
                                    
                                        
                                        
                                    
                                    </div>
                                </div>

                                
                            </div> 

                            <div className="totals-tabs-sec mt-4">
                                
                                <div className="d-lg-flex align-items-start w-100">
                                    <div className="nav shadow flex-column nav-pills me-lg-3 col-lg-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <button className="nav-link " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#set-menu1" type="button"
                                        role="tab" aria-controls="v-pills-home" aria-selected="true">
                                        
                                            <div className="cm-se-menu">
                                                <span>
                                                    <img src={tabsicon1} alt="icon"/>
                                                </span>   
                                                <span>
                                                <b className="d-block"> Edit Profile </b> 
                                                Make changes to your account
                                                </span> 
                                            </div>  

                                        </button>
                                        <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#set-menu2" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                            
                                        <div className="cm-se-menu">
                                            <span>
                                                <img src={tabsicon2} alt="icon"/>
                                            </span>   
                                            <span>
                                            <b className="d-block"> Change Password </b> 
                                            Manage your saved account
                                            </span> 
                                            </div> 
                                        
                                        </button>
                                        <button className="nav-link d-none" id="v-pills-messages-tab" data-bs-toggle="pill"
                                        data-bs-target="#set-menu3" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                        
                                        <div className="cm-se-menu">
                                            <span>
                                                <img src={tabsicon3} alt="icon"/>
                                            </span>   
                                            <span>
                                            <b className="d-block"> Change Language </b> 
                                            Manage your language
                                            </span> 
                                        </div>      

                                        </button>
                                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" 
                                        data-bs-target="#set-menu4" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                        
                                            <div className="cm-se-menu">
                                                <span>
                                                    <img src={tabsicon4} alt="icon"/>
                                                </span>   
                                                <span>
                                                <b className="d-block"> Add  Account </b> 
                                                Manage your Account
                                                </span> 
                                            </div> 
                                        </button>

                                        <button className="nav-link active" id="v-pills-settings-tab" data-bs-toggle="pill" 
                                        data-bs-target="#set-menu5" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                        
                                            <div className="cm-se-menu">
                                                <span>
                                                    <img src={tabsicon5} alt="icon"/>
                                                </span>   
                                                <span>
                                                <b className="d-block">View Account </b> 
                                                View your Account
                                                </span> 
                                            </div> 
                                        </button>

                                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" 
                                        data-bs-target="#set-menu6" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                        
                                            <div className="cm-se-menu">
                                                <span>
                                                    <img src={tabsicon6} alt="icon"/>
                                                </span>   
                                                <span>
                                                <b className="d-block"> Roles & Permissions </b> 
                                                Manage your Account
                                                </span> 
                                            </div> 
                                        </button>

                                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" 
                                        data-bs-target="#set-menu7" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                        
                                            <div className="cm-se-menu">
                                                <span>
                                                    <img src={tabsicon7} alt="icon"/>
                                                </span>   
                                                <span>
                                                <b className="d-block"> Help & Support </b> 
                                                Contact for any query or claim issues
                                                </span> 
                                            </div> 
                                        </button>

                                    </div>
                                    <div className="tab-content" id="v-pills-tabContent">
                                        <div className="tab-pane fade " id="set-menu1" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            
                                            <div className="edit-tabs-div">
                                                <div className="d-flex w-100 justify-content-between align-items-center">
                                                    <h2> Edit Profile </h2>
                                                    <button className="btn edit-btn mb-0 mb-md-0">
                                                        <span> <img src={editicon} alt="dn"/> </span> Edit
                                                    </button>
                                                </div>
                                                <hr/>

                                                <div className="edit-form col-lg-7">
                                                    <div className="form-group">
                                                        <label> Name </label>
                                                        <input type="text" className="form-control" placeholder="San Jhon"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label> Email Id </label>
                                                        <input type="email" className="form-control" placeholder="Sam@gmail.com"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label> Phone Number </label>
                                                        <input type="email" className="form-control" placeholder="85232323303"/>
                                                    </div>
                                                    <div className="form-group pssword-fom">
                                                        <label> Password </label>
                                                        <div className="form-control d-flex justify-content-between align-items-center">
                                                            <input type="password" className="col-lg-11" placeholder="**********"/>
                                                            <FaRegEye/>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="submit" className="btn submit-btn" value="Save"/>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div className="tab-pane fade" id="set-menu2" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                                
                                            <div className="edit-tabs-div add-account-div-ts">
                                                <div className="d-flex w-100 justify-content-between align-items-center">
                                                <h2> Change Password </h2>
                                                
                                                </div>
                                                <hr/>

                                                <div className="edit-form col-lg-7">
                                                    <div className="form-group">
                                                        <label> Current Password </label>
                                                        <input type="password" className="form-control" placeholder="**********"/>
                                                    </div>
                                            
                                                
                                                    <div className="form-group pssword-fom">
                                                        <label> New Password </label>
                                                        <div className="form-control d-flex align-items-center">
                                                            <input type="password" className="col-lg-11" placeholder="**********"/>
                                                            <FaRegEye/>
                                                        </div>
                                                        
                                                    </div>

                                                    <div className="form-group pssword-fom">
                                                        <label> Confirm Password </label>
                                                        <div className="form-control d-flex align-items-center">
                                                            <input type="password" className="col-lg-11" placeholder="**********"/>
                                                            <FaRegEye/>
                                                        </div>
                                                        
                                                    </div>

                                                <div className="form-group">
                                                    <input type="submit" className="btn submit-btn" value="Change Passowrd"/>
                                                </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div className="tab-pane fade" id="set-menu3" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                                        <div className="tab-pane fade" id="set-menu4" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                            
                                        <div className="edit-tabs-div">
                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                            <h2> Add Account </h2>
                                            
                                            </div>
                                            <hr/>
                                            
                                            <div className="add-tabs-section mt-4">
                                                <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                                                    <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#user-add"
                                                    type="button" role="tab" aria-controls="pills-home" aria-selected="true">Add User</button>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#brunch-add" 
                                                    type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Add Branches</button>
                                                    </li>
                                            
                                                </ul>
                                                <div class="tab-content" id="pills-tabContent">
                                                    <div class="tab-pane fade show active" id="user-add" role="tabpanel" aria-labelledby="pills-home-tab">
                                                        <div className="add-user-section">
                                                            <AdminUserAdd/>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="brunch-add" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                        
                                                            <AdminAddBrunchAdd/>
                                                        
                                                        

                                                    </div>
                                                    
                                                </div>


                                            </div>
                                        
                                        </div>
                                        
                                        </div>
                                        <div className="tab-pane fade show active" id="set-menu5" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                        
                                            <div className="view-acount-tabs edit-tabs-div">
                                                <div className="d-sm-flex w-100 justify-content-between align-items-center">
                                                <h2 className="mb-4 mb-sm-0"> View Account </h2>
                                                    <div className="serach-div-input">
                                                    <div className="form-group">
                                                        <FaSistrix/>
                                                        <input type="text" className="form-control" placeholder="Search for anything" />
                                                    </div>
                                                    </div>
                                                </div>
                                                <hr/>
                                        
                                                <div className="add-tabs-section mt-4">
                                                    <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                                                        <li class="nav-item" role="presentation">
                                                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#user-add-view"
                                                        type="button" role="tab" aria-controls="pills-home" aria-selected="true">User</button>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#brunch-add-view" 
                                                        type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Branches</button>
                                                        </li>
                                            
                                                    </ul>
                                                    <div class="tab-content" id="pills-tabContent">
                                                        <div class="tab-pane fade show active" id="user-add-view" role="tabpanel" aria-labelledby="pills-home-tab">
                                                            <div className="add-user-section">
                                                              <p className="ms-lg-2 mt-4">15 Results Found</p> 
                                                                <AdminViewUser/>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane fade" id="brunch-add-view" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                                <div className="add-view-brunch">
                                                                        <ViewBrunch/>
                                                                </div>

                                                        </div>
                                                        
                                                    </div>


                                                </div>
                                    
                                            </div>
                                        
                                        </div>
                                        <div className="tab-pane fade" id="set-menu6" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                                
                                            <div className="edit-tabs-div">
                                                <div className="d-flex w-100 justify-content-between align-items-center">
                                                    <h2> Roles & Permission </h2>
                                                
                                                </div>
                                                <hr/>

                                                <div className="reel-div">
                                                   <div className="row">
                                                      <div className="col-lg-7 ps-lg-0">
                                                        <div className="row row-cols-1 row-cols-lg-2">
                                                            <div className="col ps-lg-0">
                                                                <div className="comon-ruels-div">
                                                                <h5>  Booking </h5>
                                                                    <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="New-Booking-cs"/>
                                                                    <label className="form-check-label" for="New-Booking-cs">
                                                                    Add Booking 
                                                                    </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="Analytics-cs"/>
                                                                    <label className="form-check-label" for="Analytics-cs">
                                                                    Bookings
                                                                    </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="Analytics-cs1"/>
                                                                    <label className="form-check-label" for="Analytics-cs1">
                                                                    Available Slots 
                                                                    </label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col">
                                                                <div className="comon-ruels-div">
                                                                <h5>  Accounts </h5>
                                                                    <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="add-us-cs"/>
                                                                    <label className="form-check-label" for="add-us-cs">
                                                                       Add User
                                                                    </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="vs-cs"/>
                                                                    <label className="form-check-label" for="vs-cs">
                                                                    View User
                                                                    </label>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            


                                                            <div className="col ps-lg-0">
                                                                <div className="comon-ruels-div">
                                                                <h5>  Tests </h5>
                                                                    <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="bulck-cs"/>
                                                                    <label className="form-check-label" for="bulck-cs">
                                                                        Upload Single & Bulk
                                                                    </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="vt-cs"/>
                                                                    <label className="form-check-label" for="vt-cs">
                                                                    View Tests
                                                                    </label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col">
                                                                <div className="comon-ruels-div">
                                                                
                                                                    <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="re-cs"/>
                                                                    <label className="form-check-label" for="re-cs">
                                                                    Revenue
                                                                    </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="pt-cs"/>
                                                                    <label className="form-check-label" for="pt-cs">
                                                                    Payment
                                                                    </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="sp-cs"/>
                                                                    <label className="form-check-label" for="sp-cs">
                                                                    Support
                                                                    </label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col ps-lg-0">
                                                                <div className="comon-ruels-div">
                                                                    <h5>  Inventory </h5>
                                                                        <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value="" id="bulck-cs1"/>
                                                                        <label className="form-check-label" for="bulck-cs1">
                                                                        View
                                                                        </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value="" id="vt-cs1"/>
                                                                        <label className="form-check-label" for="vt-cs1">
                                                                        Edit
                                                                        </label>
                                                                        </div>
                                                                </div>
                                                            </div>

                                                            <div className="col">
                                                                <div className="comon-ruels-div">
                                                                    <h5>  Lab </h5>
                                                                        <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value="" id="bulck-cs2"/>
                                                                        <label className="form-check-label" for="bulck-cs2">
                                                                        View
                                                                        </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value="" id="vt-cs2"/>
                                                                        <label className="form-check-label" for="vt-cs2">
                                                                        Edit
                                                                        </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value="" id="vt-cs3"/>
                                                                        <label className="form-check-label" for="vt-cs3">
                                                                        Add
                                                                        </label>
                                                                        </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                      </div>
                                                        <div className="col-lg-5">
                                                            <div className="comon-ruels-div">
                                                            <h5>  Select User </h5>
                                                            <select class="form-select" aria-label="Default select example">
                                                                <option selected>--Select--</option>
                                                                <option value="1">Rakesh Branch</option>
                                                                <option value="2">Sachin Branch</option>
                                                                <option value="3">Rober William Branch</option>
                                                                <option value="3">Sam Peter Branch</option>
                                                            </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <input type="submit" className="btn submit-btn" value="Save"/>
                                            </div>
                                        
                                        
                                        </div>
                                        <div className="tab-pane fade" id="set-menu7" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                                
                                            <div className="edit-tabs-div">
                                                <div className="d-flex w-100 justify-content-between align-items-center">
                                                    <h2> Help & Support </h2>
                                            
                                                </div>
                                                <hr/>

                                                <div className="help-num">
                                                    <div className="d-md-flex align-items-center">
                                                        <span>
                                                        <img src={helpicon} alt="hlp"/>
                                                        </span>
                                                        <h5 className="mt-4 mt-sm-0"> Help Desk
                                                        <span className="d-block">  For more enquiry you can call us at <b> 0000000000 </b>  & Drop us a message below. </span> </h5>
                                                    </div>
                                                    
                                                    
                                                </div>

                                                <div className="col-lg-7 help-form mt-4">
                                                    <div className="form-group">
                                                        <label> Name </label>
                                                        <input type="text" className="form-control"/>
                                                    </div>

                                                    <div className="form-group">
                                                        <label> Email ID </label>
                                                        <input type="email" className="form-control"/>
                                                    </div>

                                                    <div className="form-group">
                                                        <label> Phone </label>
                                                        <input type="text" className="form-control"/>
                                                    </div>

                                                    <div className="form-group">
                                                        <label> Your Query </label>
                                                        <input type="text" className="form-control"/>
                                                    </div>


                                                </div>

                                                <input type="submit" className="btn submit-btn" value="Submit"/>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>

                            </div>
                        
                    
                        </div>
                    </div>
                </main>
            </div> 

            <AdminMobileMenu/>
          </>
      );
    }
  }

export default AdminSettings;
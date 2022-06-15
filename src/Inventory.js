import React from "react";
import dsicn from "../src/images/ds-icon.png";
import clicn from "../src/images/calender-icon.svg";
import coloricon from "../src/images/cl-icon-color.svg";
import timeicon from "../src/images/time.svg";
import useicon from "../src/images/user-cion.svg";
import downloadicon from "../src/images/download-icon.svg";
import editicon from "../src/images/edit-icon.svg";
import filtericon from "../src/images/filter-icon.svg";
import fileicon from "../src/images/file.svg";
import roketicon from "../src/images/rocket-icon.svg";
import flagicon from "../src/images/flag-icon.svg";
import chckicon from "../src/images/check-icon.svg";
import calnderColorIcon from "../src/images/color-caldender.svg";
import subicon from "../src/images/file-ck.svg";
import PaymentTable from "./components/PaymentTable";
import AdminLeftCalender from "./components/AdminLeftCalender";
import pmicon from "../src/images/pm-table-icon.svg";
import { FaRupeeSign, FaBell, FaBars, FaAngleLeft } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import TopMenu from"./components/TopMenu";
import $ from "jquery";
import PaymentFilter from "./components/PaymentFilter";
import AdminMobileMenu from "./components/AdminMobileMenu";
import CountingNew from "./components/CountingNew";
import FilerDashboard from "./components/FilerDashboard";
import AdminRightCalender from "./components/AdminRightCalender";
import DashbordCalender from "./components/DashbordCalender";
import InventoryCalender from "./components/InventoryCalender";



class Inventory extends React.Component {
    componentWillMount(){

        $(document).ready(function(){
          $(".togle-icon").click(function(e) {
              e.preventDefault();
              $("#navAccordion").toggleClass("active");
              $("main").toggleClass("full-width");
              $("footer").toggleClass("full-width");
        
        });

        $("#edit-infom-btn").click(function(){
            $("#invent-infomation").hide();
            $("#edit-infomation").show();
        });

        $("#history-btn").click(function(){
            $("#invent-infomation").hide();
            $("#edit-infomation").hide();
            $("#history-div").show();
            $("#topbar-section").hide();
            
        });


        $("#back-infom-btn").click(function(){
            $("#invent-infomation").show();
            $("#edit-infomation").hide();
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
                    <div className="dasb-div bk-div float-start w-100  mb-5 pe-lg-3  payment-div">


                               


                                <div id="topbar-section" className="shadow total-inventory-page bg-white">
                                     <div className="total-tabs-inventory">
                                         <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" 
                                            data-bs-target="#home" type="button" role="tab" aria-controls="home" 
                                            aria-selected="true">Inventory</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" 
                                            data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                                             aria-selected="false">Assign</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab"
                                             data-bs-target="#contact" type="button" role="tab" aria-controls="contact" 
                                             aria-selected="false">History</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel"
                                             aria-labelledby="home-tab">

                                             <div className="col-lg-12 ps-lg-0">
                                                    <div className="show-date-details d-lg-flex px-0  mb-5 mb-lg-0">
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="my-4 my-md-0 cm-heading-page"> Inventory </h6>
                                                       
                                                    </div> 
                                                        
                                                    <div className="calender-div-sec d-flex  align-items-center">
                                                        <p className="mb-0"> 15-03-2022</p>
                                                        <a className="btn cla-btn btn" data-bs-toggle="modal" data-bs-target="#caldenderModal2"> 
                                                        
                                                        <img src={calnderColorIcon} alt="iconn"/> </a>
                                                    </div>
                                                    
                                                        
                                                        
                                                    
                                                    </div>
                                              </div>
                                         
                                                <div className="inventory-body-1">
                                                    <div className="comon-file-incent px-0">
                                                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                                                            <div className="col ps-lg-0 mt-4">
                                                            <div className="form-group">
                                                                <label>Select Lab ID</label>
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option selected>--Select--</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                            </div>
                                                            <div className="col pe-lg-0 mt-4">
                                                            <div className="form-group">
                                                                <label>Select Technician</label>
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option selected>--Select--</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="invent-infomation" className="inventory-body-2 mt-5 pb-5">
                                                <div className="d-flex justify-content-between align-items-center">
                                                   <h2 className="mt-3"> Inventory Information </h2>
                                                   <a id="edit-infom-btn" className="btn edit-btn mb-4 mt-3 mb-md-0 me-lg-4">
                                                      <span> <img src={editicon} alt="dn"/> </span> Edit
                                                  </a>
                                                </div>
                                                  
                                                  <div className="comon-file-incent">
                                                     <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                                                         <div className="col ps-lg-0 mt-3">
                                                            <div className="form-group comon-filed-input d-flex justify-content-between
                                                            align-items-center new-comon-invent">
                                                               <label>  Syringe </label>
                                                                
                                                                <span className="iput-number">02</span>
                                                            </div>
                                                         </div>
                                                         <div className="col pe-lg-0 mt-3">
                                                              <div className="form-group comon-filed-input d-flex justify-content-between
                                                              align-items-center new-comon-invent">
                                                                  <label>  Gloves </label>
                                                                  
                                                                  <span className="iput-number">03</span>
                                                              </div>
                                                         </div>
                                                         <div className="col ps-lg-0">
                                                            <div className="form-group comon-filed-input d-flex justify-content-between
                                                            align-items-center new-comon-invent">
                                                                <label> Sanitizer Packet </label>
                                                                <span className="iput-number">02</span>
                                                            </div>
                                                         </div>
                                                         <div className="col pe-lg-0">
                                                              <div className="form-group comon-filed-input d-flex justify-content-between
                                                              align-items-center new-comon-invent">
                                                                  <label> Bio Degradable Packet </label>
                                                                  
                                                                  <span className="iput-number">13</span>
                                                              </div>
                                                         </div>
                                                         <div className="col ps-lg-0">
                                                            <div className="form-group comon-filed-input d-flex justify-content-between
                                                            align-items-center new-comon-invent">
                                                                <label> Cotton Swab </label>
                                                                
                                                                <span className="iput-number">13</span>
                                                            </div>
                                                         </div>
                                                         <div className="col pe-lg-0">
                                                              <div className="form-group comon-filed-input d-flex justify-content-between
                                                              align-items-center new-comon-invent">
                                                                  <label> Band Aid </label>
                                                                 
                                                                  <span className="iput-number">08</span>
                                                              </div>
                                                         </div>
                                                     </div>
                                                  </div>
          
                                                  <div className="virals-div-sec mt-5">
                                                     <div className="top-virls-1 d-flex align-items-center justify-content-between">
                                                        <h2> Vial </h2>
                                                        <span className="viral-n"> 88 </span>
                                                     </div>
                                                     
                                                     
                                                         <div className="comon-file-incent pt-3 pb-5">
                                                              <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                                                                  <div className="col ps-lg-0 mt-3">
                                                                      <div className="form-group comon-filed-input d-flex justify-content-between
                                                                      align-items-center new-comon-invent">
                                                                          <label> Stool </label>
                                                                          <span className="iput-number">08</span>
                                                                      </div>
                                                                  </div>
                                                                  <div className="col pe-lg-0 mt-3">
                                                                          <div className="form-group comon-filed-input d-flex justify-content-between
                                                                            align-items-center new-comon-invent">
                                                                              <label> Urine </label>
                                                                              <span className="iput-number">08</span>
                                                                          </div>
                                                                  </div>
                                                                  <div className="col ps-lg-0">
                                                                      <div className="form-group comon-filed-input d-flex justify-content-between
                                                                      align-items-center new-comon-invent">
                                                                           <label> VTM </label>
                                                                          <span className="iput-number">08</span>
                                                                      </div>
                                                                  </div>
                                                                  <div className="col pe-lg-0">
                                                                          <div className="form-group comon-filed-input d-flex justify-content-between
                                                                          align-items-center new-comon-invent">
                                                                               <label> Sodium Citrate </label>
                                                                             
                                                                              <span className="iput-number">08</span>
                                                                          </div>
                                                                  </div>
                                                                  <div className="col ps-lg-0">
                                                                      <div className="form-group comon-filed-input d-flex justify-content-between
                                                                      align-items-center new-comon-invent">
                                                                          <label> Serum </label>
                                                                          <span className="iput-number">08</span>
                                                                      </div>
                                                                  </div>
                                                                  <div className="col pe-lg-0">
                                                                          <div className="form-group comon-filed-input d-flex justify-content-between
                                                                          align-items-center new-comon-invent">
                                                                              <label> Sodium </label>
                                                                              <span className="iput-number">08</span>
                                                                          </div>
                                                                  </div>
                                                                  <div className="col ps-lg-0">
                                                                      <div className="form-group comon-filed-input d-flex justify-content-between
                                                                      align-items-center new-comon-invent">
                                                                           <label> Lithium Heparin </label>
                                                                          <span className="iput-number">08</span>
                                                                      </div>
                                                                  </div>
                                                                  <div className="col pe-lg-0">
                                                                          <div className="form-group comon-filed-input d-flex justify-content-between
                                                                          align-items-center new-comon-invent">
                                                                              <label> Potassium EDTA  </label>
                                                                              <span className="iput-number">08</span>
                                                                          </div>
                                                                  </div>
                                                                  <div className="col ps-lg-0">
                                                                          <div className="form-group comon-filed-input d-flex justify-content-between
                                                                          align-items-center new-comon-invent">
                                                                              <label> Blood Culture </label>
                                                                              <span className="iput-number">08</span>
                                                                          </div>
                                                                  </div>
                                                                  <div className="col pe-lg-0">
                                                                          <div className="form-group comon-filed-input d-flex justify-content-between
                                                                          align-items-center new-comon-invent">
                                                                              <label> Sputum </label>
                                                                              <span className="iput-number">08</span>
                                                                          </div>
                                                                  </div>
                                                                  
                                                              </div>
                                                          </div>
                                                     
                                                  </div>
                                              </div>


                                                <div id="edit-infomation" className="inventory-body-2 mt-5 pb-5">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <h2 className="mt-3"> Edit Inventory </h2>
                                                        <a id="back-infom-btn" className="btn back-invent mb-4 mt-3 mb-md-0 me-lg-4">
                                                        <FaAngleLeft/> Back
                                                    </a>
                                                    </div>
                                                    <div className="comon-file-incent">
                                                            <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                                                                <div className="col ps-lg-0 mt-3">
                                                                    <div className="form-group d-flex justify-content-between
                                                                    align-items-center new-comon-invent">
                                                                        <label> Syringe </label>
                                                                        <div className="col-3">
                                                                            <CountingNew/>
                                                                        </div> 
                                                                    </div>
                                                                </div>

                                                                <div className="col pe-lg-0 mt-3">
                                                                    <div className="form-group d-flex justify-content-between
                                                                    align-items-center new-comon-invent">
                                                                        <label> Gloves </label>
                                                                        <div className="col-3">
                                                                            <CountingNew/>
                                                                        </div> 
                                                                    </div>
                                                                </div>

                                                                
                                                                <div className="col ps-lg-0">
                                                                    <div className="form-group d-flex justify-content-between
                                                                    align-items-center new-comon-invent">
                                                                        <label> Sanitizer Packet </label>
                                                                        <div className="col-3">
                                                                            <CountingNew/>
                                                                        </div> 
                                                                    </div>
                                                                </div>

                                                                <div className="col pe-lg-0">
                                                                    <div className="form-group d-flex justify-content-between
                                                                    align-items-center new-comon-invent">
                                                                        <label> Bio Degradable Packet </label>
                                                                        <div className="col-3">
                                                                            <CountingNew/>
                                                                        </div> 
                                                                    </div>
                                                                </div>


                                                                <div className="col ps-lg-0">
                                                                    <div className="form-group d-flex justify-content-between
                                                                    align-items-center new-comon-invent">
                                                                        <label> Cotton Swab </label>
                                                                        <div className="col-3">
                                                                            <CountingNew/>
                                                                        </div> 
                                                                    </div>
                                                                </div>


                                                                <div className="col pe-lg-0">
                                                                    <div className="form-group d-flex justify-content-between
                                                                    align-items-center new-comon-invent">
                                                                        <label> Band Aid </label>
                                                                        <div className="col-3">
                                                                            <CountingNew/>
                                                                        </div> 
                                                                    </div>
                                                                </div>






                                                            </div>
                                                    </div>

                                                    <div className="virals-div-sec mt-5">
                                                    <div className="top-virls-1 d-flex align-items-center justify-content-between">
                                                        <h2> Vial </h2>
                                                        <span className="viral-n"> 15 </span>
                                                    </div>
                                                    
                                                    
                                                        <div className="comon-file-incent pt-3 pb-5">
                                                                <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                                                                    <div className="col ps-lg-0 mt-3">
                                                                        <div className="form-group d-flex justify-content-between
                                                                        align-items-center new-comon-invent">
                                                                            <label> Stool </label>
                                                                            <div className="col-3">
                                                                                <CountingNew/>
                                                                            </div> 
                                                                        </div>
                                                                    </div>
                                                                    <div className="col pe-lg-0 mt-3">
                                                                            <div className="form-group d-flex justify-content-between
                                                                            align-items-center new-comon-invent">
                                                                                <label> Urine </label>
                                                                                <div className="col-3">
                                                                                    <CountingNew/>
                                                                                </div> 
                                                                            </div>
                                                                    </div>
                                                                    <div className="col ps-lg-0">
                                                                        <div className="form-group d-flex justify-content-between
                                                                        align-items-center new-comon-invent">
                                                                            <label> VTM </label>
                                                                            <div className="col-3">
                                                                                <CountingNew/>
                                                                            </div> 
                                                                        </div>
                                                                    </div>
                                                                    <div className="col pe-lg-0">
                                                                        <div className="form-group d-flex justify-content-between
                                                                        align-items-center new-comon-invent">
                                                                            <label> Sodium Citrate  </label>
                                                                            <div className="col-3">
                                                                                <CountingNew/>
                                                                            </div> 
                                                                        </div>
                                                                    </div>
                                                                    <div className="col ps-lg-0">
                                                                        <div className="form-group d-flex justify-content-between
                                                                        align-items-center new-comon-invent">
                                                                            <label> Serum   </label>
                                                                            <div className="col-3">
                                                                                <CountingNew/>
                                                                            </div> 
                                                                        </div>
                                                                    </div>
                                                                    <div className="col pe-lg-0">
                                                                            <div className="form-group d-flex justify-content-between
                                                                            align-items-center new-comon-invent">
                                                                                <label> Sodium   </label>
                                                                                <div className="col-3">
                                                                                    <CountingNew/>
                                                                                </div> 
                                                                            </div>
                                                                    </div>
                                                                    <div className="col ps-lg-0">
                                                                        <div className="form-group d-flex justify-content-between
                                                                        align-items-center new-comon-invent">
                                                                            <label> Lithium Heparin   </label>
                                                                            <div className="col-3">
                                                                                <CountingNew/>
                                                                            </div> 
                                                                        </div>
                                                                    </div>
                                                                    <div className="col pe-lg-0">
                                                                        <div className="form-group d-flex justify-content-between
                                                                        align-items-center new-comon-invent">
                                                                            <label> Potassium EDTA   </label>
                                                                            <div className="col-3">
                                                                                <CountingNew/>
                                                                            </div> 
                                                                        </div>
                                                                    </div>
                                                                    <div className="col ps-lg-0">
                                                                        <div className="form-group d-flex justify-content-between
                                                                        align-items-center new-comon-invent">
                                                                            <label> Potassium Oxalate  </label>
                                                                            <div className="col-3">
                                                                                <CountingNew/>
                                                                            </div> 
                                                                        </div>
                                                                    </div>
                                                                    <div className="col pe-lg-0">
                                                                        <div className="form-group d-flex justify-content-between
                                                                        align-items-center new-comon-invent">
                                                                            <label> Sputum   </label>
                                                                            <div className="col-3">
                                                                                <CountingNew/>
                                                                            </div> 
                                                                        </div>
                                                                    </div>
                                                                    <div className="col ps-lg-0">
                                                                        <div className="form-group d-flex justify-content-between
                                                                        align-items-center new-comon-invent">
                                                                            <label> Blood Culture   </label>
                                                                            <div className="col-3">
                                                                                <CountingNew/>
                                                                            </div> 
                                                                        </div>
                                                                    </div>

                                                                    
                                                                </div>
                                                            </div>

                                                            
                                                    
                                                    </div>
                                                    <input type="submit" className="btn submit-btn" value="Submit"/>
                                                </div>
                                                
                                             </div>
                                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                  
                                                <div className="col-lg-12 ps-lg-0">
                                                        <div className="show-date-details d-lg-flex px-0  mb-5 mb-lg-0">
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="my-4 my-md-0 cm-heading-page">Assign </h6>
                                                        
                                                        </div> 
                                                            
                                                        <div className="calender-div-sec d-flex  align-items-center">
                                                            <p className="mb-0"> 15-03-2022</p>
                                                            <a data-bs-toggle="modal" data-bs-target="#caldenderModal2" className="btn cla-btn btn"> 
                                                            <img src={calnderColorIcon} alt="iconn"/> </a>
                                                        </div>
                                                        
                                                            
                                                            
                                                        
                                                        </div>
                                                </div>
                                 
                                                <div className="inventory-body-1">
                                                    <div className="comon-file-incent px-0">
                                                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                                                            <div className="col ps-lg-0 mt-4">
                                                            <div className="form-group">
                                                                <label>Select Lab ID</label>
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option selected>--Select--</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                            </div>
                                                            <div className="col pe-lg-0 mt-4">
                                                            <div className="form-group">
                                                                <label>Select Technician</label>
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option selected>--Select--</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="inventory-body-2 mt-5 pb-5">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <h2 className="mt-3 d-none"> Edit Inventory </h2>
                                                    
                                                        </div>
                                                        <div className="comon-file-incent pt-4">
                                                                <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                                                                    <div className="col ps-lg-0 mt-3">
                                                                        <div className="form-group d-flex justify-content-between
                                                                        align-items-center new-comon-invent">
                                                                            <label> Syringe </label>
                                                                            <div className="col-3">
                                                                                <CountingNew/>
                                                                            </div> 
                                                                        </div>
                                                                    </div>

                                                                    <div className="col pe-lg-0 mt-3">
                                                                        <div className="form-group d-flex justify-content-between
                                                                        align-items-center new-comon-invent">
                                                                            <label> Gloves </label>
                                                                            <div className="col-3">
                                                                                <CountingNew/>
                                                                            </div> 
                                                                        </div>
                                                                    </div>

                                                                    
                                                                    <div className="col ps-lg-0">
                                                                        <div className="form-group d-flex justify-content-between
                                                                        align-items-center new-comon-invent">
                                                                            <label> Sanitizer Packet </label>
                                                                            <div className="col-3">
                                                                                <CountingNew/>
                                                                            </div> 
                                                                        </div>
                                                                    </div>

                                                                    <div className="col pe-lg-0">
                                                                        <div className="form-group d-flex justify-content-between
                                                                        align-items-center new-comon-invent">
                                                                            <label> Bio Degradable Packet </label>
                                                                            <div className="col-3">
                                                                                <CountingNew/>
                                                                            </div> 
                                                                        </div>
                                                                    </div>


                                                                    <div className="col ps-lg-0">
                                                                        <div className="form-group d-flex justify-content-between
                                                                        align-items-center new-comon-invent">
                                                                            <label> Cotton Swab </label>
                                                                            <div className="col-3">
                                                                                <CountingNew/>
                                                                            </div> 
                                                                        </div>
                                                                    </div>


                                                                    <div className="col pe-lg-0">
                                                                        <div className="form-group d-flex justify-content-between
                                                                        align-items-center new-comon-invent">
                                                                            <label> Band Aid </label>
                                                                            <div className="col-3">
                                                                                <CountingNew/>
                                                                            </div> 
                                                                        </div>
                                                                    </div>






                                                                </div>
                                                        </div>

                                                        <div className="virals-div-sec mt-5">
                                                                <div className="top-virls-1 d-flex align-items-center justify-content-between">
                                                                    <h2> Vial </h2>
                                                                    <span className="viral-n"> 15 </span>
                                                                </div>
                                                        
                                                        
                                                            <div className="comon-file-incent pt-3 pb-5">
                                                                    <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                                                                        <div className="col ps-lg-0 mt-3">
                                                                            <div className="form-group d-flex justify-content-between
                                                                            align-items-center new-comon-invent">
                                                                                <label> Stool </label>
                                                                                <div className="col-3">
                                                                                    <CountingNew/>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="col pe-lg-0 mt-3">
                                                                                <div className="form-group d-flex justify-content-between
                                                                                align-items-center new-comon-invent">
                                                                                    <label> Urine </label>
                                                                                    <div className="col-3">
                                                                                        <CountingNew/>
                                                                                    </div> 
                                                                                </div>
                                                                        </div>
                                                                        <div className="col ps-lg-0">
                                                                            <div className="form-group d-flex justify-content-between
                                                                            align-items-center new-comon-invent">
                                                                                <label> VTM </label>
                                                                                <div className="col-3">
                                                                                    <CountingNew/>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="col pe-lg-0">
                                                                            <div className="form-group d-flex justify-content-between
                                                                            align-items-center new-comon-invent">
                                                                                <label> Sodium Citrate  </label>
                                                                                <div className="col-3">
                                                                                    <CountingNew/>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="col ps-lg-0">
                                                                            <div className="form-group d-flex justify-content-between
                                                                            align-items-center new-comon-invent">
                                                                                <label> Serum   </label>
                                                                                <div className="col-3">
                                                                                    <CountingNew/>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="col pe-lg-0">
                                                                                <div className="form-group d-flex justify-content-between
                                                                                align-items-center new-comon-invent">
                                                                                    <label> Sodium   </label>
                                                                                    <div className="col-3">
                                                                                        <CountingNew/>
                                                                                    </div> 
                                                                                </div>
                                                                        </div>
                                                                        <div className="col ps-lg-0">
                                                                            <div className="form-group d-flex justify-content-between
                                                                            align-items-center new-comon-invent">
                                                                                <label> Lithium Heparin   </label>
                                                                                <div className="col-3">
                                                                                    <CountingNew/>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="col pe-lg-0">
                                                                            <div className="form-group d-flex justify-content-between
                                                                            align-items-center new-comon-invent">
                                                                                <label> Potassium EDTA   </label>
                                                                                <div className="col-3">
                                                                                    <CountingNew/>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="col ps-lg-0">
                                                                            <div className="form-group d-flex justify-content-between
                                                                            align-items-center new-comon-invent">
                                                                                <label> Blood Culture   </label>
                                                                                <div className="col-3">
                                                                                    <CountingNew/>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="col pe-lg-0">
                                                                            <div className="form-group d-flex justify-content-between
                                                                            align-items-center new-comon-invent">
                                                                                <label> Sputum   </label>
                                                                                <div className="col-3">
                                                                                    <CountingNew/>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        

                                                                        
                                                                    </div>
                                                                </div>

                                                                
                                                        
                                                        </div>
                                                        <input type="submit" className="btn submit-btn" value="Submit"/>
                                                </div>
                                                   
                                            </div>
                                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                                <div className="bg-white inventory-history-page p-0">
                                                   <div className="col-lg-12 ps-lg-0">
                                                      <div className="show-date-details d-lg-flex px-0  mb-5 mb-lg-0">
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="my-4 my-md-0 cm-heading-page">Inventory History </h6>
                                                        
                                                        </div> 
                                                    
                                                        <div className="calender-div-sec d-flex  align-items-center">
                                                            <p className="mb-0"> From 12-05-2022 To  15-03-2022</p>
                                                            <a className="btn cla-btn btn"> 
                                                            <InventoryCalender/> <img src={calnderColorIcon} alt="iconn"/> </a>
                                                        </div>
                                                
                                                    
                                                    
                                                
                                                      </div>
                                                   </div>
        
                                                    <div className="his-table mt-3">
                                                        <table class="table">
                                                            <thead>
                                                            <tr>
                                                                <th scope="col">Date</th>
                                                                <th scope="col">Items</th>
                                                                <th scope="col">City</th>
                                                                <th scope="col">Qty on <br/>
                                                                date</th>
                                                                <th scope="col">Purchased <br/>
                                                                Qty.</th>
                                                                <th scope="col">Allocated <br/>
                                                                Qty.</th>
                                                                <th scope="col">Personnel <br/>
                                                                Name</th>
                                                                <th scope="col">Designation</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td >22-05-2021</td>
                                                                    <td>Syringe</td>
                                                                    <td>Pathankot</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>ABC</td>
                                                                    <td>Technician</td>
                                                                </tr>
                
                                                                <tr>
                                                                    <td >22-05-2021</td>
                                                                    <td>Sanitiers</td>
                                                                    <td>Pathankot</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>ABC</td>
                                                                    <td>Technician</td>
                                                                </tr>
                
                                                                <tr>
                                                                    <td >22-05-2021</td>
                                                                    <td>Cotton</td>
                                                                    <td>Pathankot</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>ABC</td>
                                                                    <td>Technician</td>
                                                                </tr>
                
                                                                <tr>
                                                                    <td >22-05-2021</td>
                                                                    <td>Gloves</td>
                                                                    <td>Pathankot</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>ABC</td>
                                                                    <td>Technician</td>
                                                                </tr>
                
                
                                                                <tr>
                                                                    <td >22-05-2021</td>
                                                                    <td>Band Aid</td>
                                                                    <td>Pathankot</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>ABC</td>
                                                                    <td>Technician</td>
                                                                </tr>
                
                                                                <tr>
                                                                    <td >22-05-2021</td>
                                                                    <td>Vial</td>
                                                                    <td>Pathankot</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>ABC</td>
                                                                    <td>Technician</td>
                                                                </tr>
                
                                                                <tr>
                                                                    <td >22-05-2021</td>
                                                                    <td>Stool</td>
                                                                    <td>Pathankot</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>ABC</td>
                                                                    <td>Technician</td>
                                                                </tr>
                
                                                                <tr>
                                                                    <td >22-05-2021</td>
                                                                    <td>Syringe</td>
                                                                    <td>Pathankot</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>ABC</td>
                                                                    <td>Technician</td>
                                                                </tr>
                
                                                                <tr>
                                                                    <td >22-05-2021</td>
                                                                    <td>Sanitiers</td>
                                                                    <td>Pathankot</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>ABC</td>
                                                                    <td>Technician</td>
                                                                </tr>
                
                                                                <tr>
                                                                    <td >22-05-2021</td>
                                                                    <td>Cotton</td>
                                                                    <td>Pathankot</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>100</td>
                                                                    <td>ABC</td>
                                                                    <td>Technician</td>
                                                                </tr>
                                                            
                                                            
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                   

                                   

                                    


                                </div>

                                

                            <div className="modal fade payment-st-modal design-payt-2" id="allmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Payout Information</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-7">
                                            <div className="left-sec-div-md">
                                                <div className="common-list">
                                                    <h5> Patient Name  </h5>
                                                    <h4> Veena Rao </h4>
                                                    <ul className="list-unstyled">
                                                        <li> <span className="sub-tl"> Order ID </span>  Order6758 </li>
                                                        <li> <span className="sub-tl"> Date </span>  11-05-2022 </li>
                                                        <li> <span className="sub-tl"> Test Name </span>  Thyroid </li>
                                                        <li> <span className="sub-tl"> Test Amount </span> Rs. 1400/- </li>
                                                        <li> <span className="sub-tl"> Collection Amount </span> Rs. 1000/- </li>
                                                        <li> <span className="sub-tl"> Commission Amount </span> Rs. 1200/- </li>
                                                        <li> <span className="sub-tl"> Status </span> <span className="padidl"> Paid </span>  </li>
                                                    </ul>
                                                </div>
                                                <div className="common-list">
                                                    <h5> Beneficiary 2  </h5>
                                                    <h4> Vikran Singh </h4>
                                                    <ul className="list-unstyled">
                                                        <li> <span className="sub-tl"> Order ID </span>  Ven456 </li>
                                                        <li> <span className="sub-tl"> Date </span>  11-05-20222 </li>
                                                        <li> <span className="sub-tl"> Test Name </span>  Thyroid </li>
                                                        <li> <span className="sub-tl"> Test Amount </span> Rs. 1400/- </li>
                                                        <li> <span className="sub-tl"> Collection Amount </span> Rs. 1000/- </li>
                                                        <li> <span className="sub-tl"> Commission Amount </span> Rs. 1200/- </li>
                                                        <li> <span className="sub-tl"> Status </span> <span className="uppadidl"> Unpaid </span>  </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="col-lg-5">
                                            <div className="total-payment mt-5 mt-lg-0">
                                                <h5> Total Payment </h5>
                                                <ul className="list-unstyled mt-4">
                                                    <li>
                                                    <span> Total Benficiary </span>
                                                    02
                                                    </li>
                                                    <li>
                                                    <span> Total Test Amount </span>
                                                    Rs. 2200/-
                                                    </li>
                                                    <li>
                                                    <span> Collection Amount </span>
                                                    Rs. 1500/-
                                                    </li>
                                                    <li>
                                                    <span> Commission Amount </span>
                                                    Rs. 120/-
                                                    </li>
                                                    <li className="grand-total-list bg-white">
                                                    <span> Grand Total </span>
                                                    Rs. 4900/-
                                                    </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                </div>
                            </div>


                    </div>
                    </div>
                </main>
          </div>
          <div className="modal fade calender-modal" id="caldenderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
               <div className="modal-content">
                  <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Calendar</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                      <div className="row row-cols-1 row-cols-lg-2">
                          <div className="col">
                               <div className="comon-calender">
                                   <AdminLeftCalender/>
                               </div>
                          </div>
                          <div className="col">
                             <div className="comon-calender">
                                <AdminRightCalender/>
                             </div>
                              
                          </div>
                      </div>
                  </div>
                  
               </div>
            </div>
         </div>

         <div className="modal fade calender-modal" id="caldenderModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
               <div className="modal-content">
                  <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Calendar</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                      <DashbordCalender/>
                  </div>
                  
               </div>
            </div>
         </div>
          <AdminMobileMenu/>
          </>
      );
    }
  }

export default Inventory;
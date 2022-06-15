import React from "react";
import {NavLink } from "react-router-dom";
import BookingCtWeek from "./components/BookingCtWeek";
import BookingCtMonth from "./components/BookingCtMonth";
import RevieCtWeek from "./components/RevieCtWeek";
import RevieCtMonth from "./components/RevieCtMonth";
import TotalCustomerGraph from "./components/TotalCustomerGraphMonth";
import AdminCustomerchart from "./components/AdminCustomerchart";
import AminRevinewLineCtWeek from "./components/AminRevinewLineCtWeek";
import dsicn from "../src/images/ds-icon.png";
import clicn from "../src/images/uil_calender.svg";
import coloricon from "../src/images/cl-icon-color.svg";
import timeicon from "../src/images/time.svg";
import useicon from "../src/images/user-cion.svg";
import downloadicon from "../src/images/download-icon.svg";
import startrating from "../src/images/start-r.svg";
import editicon from "../src/images/edit-icon.svg";
import filtericon from "../src/images/filter-icon.svg";
import fileicon from "../src/images/file.svg";
import roketicon from "../src/images/rocket-icon.svg";
import flagicon from "../src/images/flag-icon.svg";
import chckicon from "../src/images/check-icon.svg";
import subicon from "../src/images/file-ck.svg";
import BookingModal from "./components/BookingModal";
import roundck from "../src/images/round-check.svg";
import NewRevinew from "./components/NewRevinew";
import { BsEye  } from "react-icons/bs";
import { FaRupeeSign, FaBell, FaCircle } from "react-icons/fa";
import AdminMobileMenu from "./components/AdminMobileMenu";
import LashboardSidebar from "./LashboardSidebar";
import TopMenu from"./components/TopMenu";
import FilerDashboard from "./components/FilerDashboard";
import DashbordCalender from "./components/DashbordCalender";
import TotalCustomerGraphWeek from "./components/TotalCustomerGraphWeek";
import TotalCustomerGraphDay from "./components/TotalCustomerGraphDay";
import AdminReveiwNewWeek from "./components/AdminReveiwNewWeek";
import AdminRevinewDesign from "./components/AdminRevinewDesign";
import AdminNewDesignChart from "./components/AdminNewDesignChart";
import GraphcOne from "../src/images/newgraph.svg";
import Graphctwo from "../src/images/revenue-admin-graph.svg";
import Graphcthree from "../src/images/revenue-img.svg";
import { FaBars } from "react-icons/fa";
import CalenderMultiple from "./components/CalenderMultiple";
import FullGraph from "../src/images/full-graph-new.svg";
import BookingTable from "./components/BookingTable";
import $ from "jquery";


class AdminLashbord extends React.Component {
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
        <div className="main-sec d-lg-flex">
          <div className="sidebar-menu" id="navAccordion">
             <LashboardSidebar/>
          </div>
        </div>
        <main className="body-total lashbord-page-dashoard content-wrapper float-start w-100">
          <div className="container-fluid">
          

            <div className="d-none d-lg-block">
                  <div className="top-bar-menu shadow float-start">
                     <a className="tog-btn togle-icon">
                     <FaBars/>
                     </a>
                     <div className="d-none align-items-center col-lg-9">
                        <h5 className="mb-0 crm-newadd"> Lab ID: <span>  Lab1025 </span>  </h5>
                        <h5 className="mb-0 ms-3 crm-newadd"> Lab Name:<span> ADC Lab </span>  </h5>
                     </div>
                     <TopMenu/>
                  </div>
            </div>
             
             <div className="dasb-div bk-div float-start w-100">
             
                <div className="row g-lg-4">
                   <div className="col-lg-12 mt-0 ps-lg-0">
                      <div className="show-date-details d-md-flex shadow mb-5 mb-lg-0">
                         
                         <a  className="my-4 btn ds-calender my-md-0"> <span> <img src={clicn} alt="cl"/> </span>
                         <CalenderMultiple/> 25 February 2022 - 15  March 2022 </a>
                      
                         <p className="mb-0 mt-md-2 mt-lg-0"> <FaBell/>  Admin You have 2 new messages and 15 new tasks</p>
                         
                      
                      </div>
                   </div>
                   <div className="col-md-4 ps-lg-0">
                      <div className="comon-overview shadow mb-4 mb-lg-0">
                         <div className="d-flex w-100 justify-content-between align-items-center">
                               <div className="date-tx d-flex  align-items-center">
                                  <figure className="icon-f mb-0">
                                     <img src={coloricon} alt="icon"/>
                                  </figure>
                                  <h5 className="ms-2">
                                  21
                                  <span className="d-block"> New Bookings</span>
                                  </h5>
                               </div>
                               <div className="list-count">
                                  <ul className="list-unstyled m-0">
                                  <li>New Bookings: 18 </li>
                                  <li>Competed: 15 </li>
                                  <li>Pending: 07</li>
                                  </ul>
                               </div>
                         </div>
                         <div className="line-bar">
                            
                         </div>
                      </div>
                   </div>
                   <div className="col-md-4">
                      <div className="comon-overview md-overview shadow mb-4 mb-lg-0">
                         <div className="d-flex w-100 justify-content-between align-items-center">
                               <div className="date-tx d-flex align-items-center">
                                  <figure className="icon-f mb-0">
                                     <img src={timeicon} alt="icon"/>
                                  </figure>
                                  <h5 className="ms-2">
                                  15
                                  <span className="d-block"> Total Labs </span>
                                  </h5>
                               </div>
                               <div className="list-count">
                                  <ul className="list-unstyled m-0">
                                  <li>New: 10 </li>
                                  <li>Existing: 07</li>
                                  </ul>
                               </div>
                         </div>
                         <div className="line-bar">
                            
                         </div>
                      </div>
                   </div>
                   <div className="col-md-4">
                      <div className="comon-overview lst-overview shadow mb-4 mb-lg-0">
                         <div className="d-flex w-100 justify-content-between align-items-center">
                               <div className="date-tx d-flex align-items-center">
                                  <figure className="icon-f mb-0">
                                     <img src={useicon} alt="icon"/>
                                  </figure>
                                  <h5 className="ms-2">
                                  25
                                  <span className="d-block"> Total Customers</span>
                                  </h5>
                               </div>
                               <div className="list-count">
                                  <ul className="list-unstyled m-0">
                                  <li>Busy: 05 </li>
                                  <li>Available: 02</li>
                                  <li>Inactive: 05</li>
                                  </ul>
                               </div>
                         </div>
                         <div className="line-bar">
                            
                         </div>
                      </div>
                   </div>
                   <div className="col-lg-6 col-xl-12 ps-lg-0">
                      <div className="comon-chart-globe p-3 mb-4 mb-lg-0">
                            
                            <div className="d-flex justify-content-between align-items-center">
                               <h2 className="cm-heading mt-3 mt-md-0 mb-md-0"> Total Customers 
                                 <span className="new-number-add ms-2"> 1200</span>
                               </h2>
                               <ul class="nav nav-pills mb-0" id="pills-tab" role="tablist">
                                     <li class="nav-item" role="presentation">
                                     <button class="nav-link " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#customerday" type="button" role="tab" aria-controls="pills-home" 
                                     aria-selected="true">Day</button>
                                     </li>
                                     <li class="nav-item" role="presentation">
                                     <button class="nav-link " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#customerweek" type="button" role="tab" aria-controls="pills-home" 
                                     aria-selected="true">Week</button>
                                     </li>
                                     <li class="nav-item" role="presentation">
                                     <button class="nav-link active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#customermonth"
                                        type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Month</button>
                                     </li>
                               
                                     </ul>
                            </div>

                            <div class="tab-content mt-3" id="pills-tabContent">
                              <div class="tab-pane fade " id="customerday" role="tabpanel" aria-labelledby="pills-home-tab">
                                 <div className="custome-div1">
                                    <div className="top-graph-1 d-none">
                                       <ul className="mb-0 list-unstyled d-flex align-items-center">
                                          <li className="d-flex">
                                            <span className="crl-div me-2 mt-1"></span>
                                            <span> Unique <br/> <b> 1200  </b> </span> 

                                          </li>
                                          <li className="d-flex ms-4">
                                            <span className="crl-div2 me-2 mt-1"></span>
                                            <span> Repeat
                                             <br/> <b> 13000 </b> </span> 

                                          </li>
                                       </ul>
                                    </div>
                                    <figure className="full-graph-new ne-two-gf">
                                       <img src={FullGraph} alt="gf"/>
                                    </figure>
                                 </div>
                               </div>
                               <div class="tab-pane fade " id="customerweek" role="tabpanel" aria-labelledby="pills-home-tab">
                                 <div className="custome-div1">
                                   <div className="top-graph-1 d-none">
                                       <ul className="mb-0 list-unstyled d-flex align-items-center">
                                          <li className="d-flex">
                                            <span className="crl-div me-2 mt-1"></span>
                                            <span> Unique <br/> <b> 1200  </b> </span> 

                                          </li>
                                          <li className="d-flex ms-4">
                                            <span className="crl-div2 me-2 mt-1"></span>
                                            <span> Repeat
                                             <br/> <b> 13000 </b> </span> 

                                          </li>
                                       </ul>
                                    </div>
                                    <figure className="full-graph-new ne-two-gf">
                                    <img src={FullGraph} alt="gf"/>
                                 </figure>
                                 </div>
                               </div>
                               <div class="tab-pane fade show active" id="customermonth" role="tabpanel" aria-labelledby="pills-profile-tab">
                                  <div className="custome-div1">  
                                    <div className="top-graph-1 d-none">
                                       <ul className="mb-0 list-unstyled d-flex align-items-center">
                                          <li className="d-flex">
                                            <span className="crl-div me-2 mt-1"></span>
                                            <span> Unique <br/> <b> 1200  </b> </span> 

                                          </li>
                                          <li className="d-flex ms-4">
                                            <span className="crl-div2 me-2 mt-1"></span>
                                            <span> Repeat
                                             <br/> <b> 13000 </b> </span> 

                                          </li>
                                       </ul>
                                    </div>
                                    <figure className="full-graph-new ne-two-gf">
                                       <img src={FullGraph} alt="gf"/>
                                    </figure>
                                  </div> 
                               
                               </div>
                               
                            </div>

                   

                      </div>
                   </div>
                  

                   <div className="col-lg-12 ps-lg-0">
                      <div className="total-content-div  sp-admintable p-3">
                            <div className="d-sm-flex justify-content-between align-items-center">
                                  <div className="d-flex align-items-center">
                                        <h2 className="cm-heading mb-0 mb-md-0"> Total Revenue
                                        </h2>
                                        <div class="dropdown ms-3">
                                           <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                           North Zone
                                           </button>
                                           <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                           <li><a class="dropdown-item" href="#">Action</a></li>
                                           <li><a class="dropdown-item" href="#">Another action</a></li>
                                           <li><a class="dropdown-item" href="#">Something else here</a></li>
                                           </ul>
                                        </div>
                                  </div>
                                  
                                  <ul class="nav nav-pills mb-0 mt-3 mt-sm-0" id="pills-tab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                           <button class="nav-link " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#revenuneweday" type="button" role="tab" aria-controls="pills-home" 
                                           aria-selected="true">Day</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                           <button class="nav-link " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#revenuneweweek" type="button" role="tab" aria-controls="pills-home" 
                                           aria-selected="true">Week</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#revenuenewmonth"
                                              type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Month</button>
                                        </li>
                               
                                  </ul>

                               </div>

                               <div className="new-review-div  mt-4">
                                  <div class="tab-content mt-3" id="pills-tabContent">
                                        <div class="tab-pane fade " id="revenuneweday" role="tabpanel" aria-labelledby="pills-home-tab">
                                                       
                                             <div className="row gx-lg-5">
                                                <div className="col-lg-7">
                                                   <div className="admin-re-chat position-relative">
                                                      <div className="btn d-none head-text-sp">
                                                          Rs. 15000/-
                                                      </div>
                                                      <figure className="ds-graph">
                                                      <img src={Graphcthree} alt="three"/>
                                                    </figure>
                                                   </div> 
                                                </div>
                                                <div className="col-lg-5 dash-admin-reviw position-relative">
                                                   
                                                   <div className="rv-text text-center ">
                                                      <h6> Total Revenue </h6>
                                                      <h2> 25,000 </h2>
                                                   </div>
                                                   <AdminRevinewDesign/>
                                                   
                                                </div>
                                             </div>

                                        </div>
                                        <div class="tab-pane fade " id="revenuneweweek" role="tabpanel" aria-labelledby="pills-home-tab">
                                           
                                             <div className="row gx-lg-5">
                                                <div className="col-lg-7">
                                                   <div className="admin-re-chat position-relative">
                                                   <div className="btn d-none head-text-sp">
                                                         Rs. 15000/-
                                                   </div>
                                                   <figure className="ds-graph">
                                                       <img src={Graphcthree} alt="three"/>
                                                   </figure>
                                                   </div> 
                                                </div>
                                                <div className="col-lg-5 dash-admin-reviw position-relative">
                                                   
                                                <div className="rv-text text-center ">
                                                   <h6> Total Revenue </h6>
                                                   <h2> 25,000 </h2>
                                                </div>
                                                <AdminRevinewDesign/>
                                                   
                                                </div>
                                             </div>
                                            
                                        </div>
                                        <div class="tab-pane fade show active" id="revenuenewmonth" role="tabpanel" aria-labelledby="pills-profile-tab">
                                           
                                            <div className="row gx-lg-5">
                                               <div className="col-lg-7">
                                                 <div className="admin-re-chat position-relative">
                                                    <div className="btn d-none head-text-sp">
                                                        Rs. 15000/-
                                                    </div>
                                                    <figure className="ds-graph">
                                                      <img src={Graphcthree} alt="three"/>
                                                    </figure>
                                                 </div> 
                                               </div>
                                                <div className="col-lg-5 dash-admin-reviw position-relative">
                                                    <div className="rv-text text-center ">
                                                       <h6> Total Revenue </h6>
                                                       <h2> 25,000 </h2>
                                                    </div>
                                                    
                                                        <AdminRevinewDesign/>
                                                    
                                                  
                                                </div>
                                            </div>
                                        
                                        </div>
                                        
                                     </div>
                               </div>
                      </div>
                   </div>


                   <div className="col-lg-12 ps-lg-0">
                      <div className="tab-table pt-3 mb-5  mt-lg-0">
                         <div className="d-sm-flex px-3 justify-content-between align-items-start">
                            <h2 className="cm-heading mb-3 mb-md-0"> New Bookings 
                               <span className="d-block sub-text"> 15 Results Found </span>
                            </h2>
                            <div className="gp-button d-flex justify-content-between align-items-center">
                                  <button className="btn download-btn mb-4 mb-md-0">
                                     <span> <img src={downloadicon} alt="dn"/> </span> Download
                                  </button>

                                  <button className="btn edit-btn mb-4 mb-md-0">
                                     <span> <img src={editicon} alt="dn"/> </span> Edit
                                  </button>

                                  <button  className="btn filter-btn sp-new-filter  mb-4 mb-md-0"
                                       data-bs-toggle="offcanvas" href="#offcanvasFilter"  role="button" aria-controls="offcanvasExample">
                                       <span> <img src={filtericon} alt="dn"/> </span>
                                 </button>

                            </div>
                         </div>

                         <div className="table-sec-div ">
                            <BookingTable/>
                         </div>
                      </div>
                   </div>
                   

                   
                </div>
             
             </div>
          </div>
        </main>
       </div>


       
        <div class="modal fade bk-tabs-div" id="settingsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-lg">
            <div class="modal-content">
               <div class="modal-header pb-0">
                  
               <ul className="nav nav-pills" id="pills-tab" role="tablist">
                     <li className="nav-item" role="presentation">
                     <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Paitent Details</button>
                     </li>
                     <li className="nav-item" role="presentation">
                     <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">History</button>
                     </li>
                     
               </ul>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">

                  <div className="tabs-settings">
                     
                     <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                              
                              <div className="patinent-details">
                                 <div className="inside-history-div col-lg-10 mx-auto mt-3">
                                    <h6 className="mn-head"> 10 Results Found </h6> 
                                    <div className="result-div mt-3">
                                       <div className="cm-history row">
                                          <div className="col-lg-9">
                                             <div className="left-history">
                                                <h5> Veena Rao </h5>
                                                <div className="same-details">
                                                   <span> 30 Yrs, Female </span>
                                                   <span> <FaCircle/> 25-02-2022 </span>
                                                   <span> <FaCircle/>  #ORD6848r4 </span>
                                                </div>
                                                <ul className="list-unstyled d-lg-flex mt-3">
                                                   <li>
                                                      CVC
                                                   </li>
                                                   <li>
                                                      Dengue
                                                   </li>
                                                   <li>
                                                      Typhoied
                                                   </li>
                                                   <li>
                                                      CVC
                                                   </li>
                                                   <li>
                                                      Dengue
                                                   </li>
                                                   <li>
                                                      Typhoied
                                                   </li>
                                                </ul>
                                             </div>

                                             <div className="left-history mt-5">
                                                <h6 className="nw-add"> Beneficiary </h6>
                                                <h5> Jaswant Thakur </h5>
                                                <div className="same-details">
                                                   <span> 45 Yrs, Male </span>
                                                   <span> <FaCircle/> 25-02-2022 </span>
                                                   <span> <FaCircle/>  #ORD6848r4 </span>
                                                </div>
                                                <ul className="list-unstyled d-lg-flex mt-3">
                                                   <li>
                                                      CVC
                                                   </li>
                                                   <li>
                                                      Dengue
                                                   </li>
                                                   <li>
                                                      Typhoied
                                                   </li>
                                                   <li>
                                                      CVC
                                                   </li>
                                                   <li>
                                                      Dengue
                                                   </li>
                                                   <li>
                                                      Typhoied
                                                   </li>
                                                </ul>
                                             </div>

                                          </div>
                                          <div className="col-lg-3">
                                             <div className="right-sec d-grid justify-content-lg-end">
                                                <h5> Rs. 1500/- </h5>
                                                <h6 className="ps-st">
                                                   <span>  <img src={roundck} alt="ck"/> </span>  Paid
                                                </h6>
                                                <figure className="mb-0">
                                                   <img src={startrating} alt="ck"/>
                                                </figure>
                                                <p className="text-center"> Satisfied </p>
                                             </div>
                                             
                                          </div>
                                       </div>



                                    </div>
                           
                                 </div>
                              </div>
                        
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        
                              <div className="inside-history-div col-lg-10 mx-auto mt-3">
                                 <h6 className="mn-head"> 10 Results Found </h6> 
                                 <div className="result-div mt-3">
                                    <div className="cm-history row">
                                       <div className="col-lg-9">
                                          <div className="left-history">
                                             <h5> Veena Rao </h5>
                                             <div className="same-details">
                                                <span> 30 Yrs, Female </span>
                                                <span> <FaCircle/> 25-02-2022 </span>
                                                <span> <FaCircle/>  #ORD6848r4 </span>
                                             </div>
                                             <ul className="list-unstyled d-lg-flex mt-3">
                                                <li>
                                                   CVC
                                                </li>
                                                <li>
                                                   Dengue
                                                </li>
                                                <li>
                                                   Typhoied
                                                </li>
                                                <li>
                                                   CVC
                                                </li>
                                                <li>
                                                   Dengue
                                                </li>
                                                <li>
                                                   Typhoied
                                                </li>
                                             </ul>
                                          </div>

                                          <div className="left-history mt-5">
                                             <h6 className="nw-add"> Beneficiary </h6>
                                             <h5> Jaswant Thakur </h5>
                                             <div className="same-details">
                                                <span> 45 Yrs, Male </span>
                                                <span> <FaCircle/> 25-02-2022 </span>
                                                <span> <FaCircle/>  #ORD6848r4 </span>
                                             </div>
                                             <ul className="list-unstyled d-lg-flex mt-3">
                                                <li>
                                                   CVC
                                                </li>
                                                <li>
                                                   Dengue
                                                </li>
                                                <li>
                                                   Typhoied
                                                </li>
                                                <li>
                                                   CVC
                                                </li>
                                                <li>
                                                   Dengue
                                                </li>
                                                <li>
                                                   Typhoied
                                                </li>
                                             </ul>
                                          </div>

                                       </div>
                                       <div className="col-lg-3">
                                          <div className="right-sec d-grid justify-content-lg-end">
                                             <h5> Rs. 1500/- </h5>
                                             <h6 className="ps-st">
                                                <span>  <img src={roundck} alt="ck"/> </span>  Paid
                                             </h6>
                                          </div>
                                          
                                       </div>
                                    </div>

                                    <div className="cm-history row">
                                       <div className="col-lg-9">
                                          <div className="left-history">
                                             <h5> Veena Rao </h5>
                                             <div className="same-details">
                                                <span> 30 Yrs, Female </span>
                                                <span> <FaCircle/> 25-02-2022 </span>
                                                <span> <FaCircle/>  #ORD6848r4 </span>
                                             </div>
                                             <ul className="list-unstyled d-lg-flex mt-3">
                                                <li>
                                                   CVC
                                                </li>
                                                <li>
                                                   Dengue
                                                </li>
                                                <li>
                                                   Typhoied
                                                </li>
                                                <li>
                                                   CVC
                                                </li>
                                                <li>
                                                   Dengue
                                                </li>
                                                <li>
                                                   Typhoied
                                                </li>
                                             </ul>
                                          </div>

                                          

                                       </div>
                                       <div className="col-lg-3">
                                          <div className="right-sec d-grid justify-content-lg-end">
                                             <h5> Rs. 500/- </h5>
                                             <h6 className="unps-st">
                                                Unpaid
                                             </h6>
                                          </div>
                                          
                                       </div>
                                    </div>

                                    <div className="cm-history row">
                                       <div className="col-lg-9">
                                          <div className="left-history">
                                             <h5> Veena Rao </h5>
                                             <div className="same-details">
                                                <span> 30 Yrs, Female </span>
                                                <span> <FaCircle/> 25-02-2022 </span>
                                                <span> <FaCircle/>  #ORD6848r4 </span>
                                             </div>
                                             <ul className="list-unstyled d-lg-flex mt-3">
                                                <li>
                                                   CVC
                                                </li>
                                                <li>
                                                   Dengue
                                                </li>
                                                <li>
                                                   Typhoied
                                                </li>
                                                <li>
                                                   CVC
                                                </li>
                                                <li>
                                                   Dengue
                                                </li>
                                                <li>
                                                   Typhoied
                                                </li>
                                             </ul>
                                          </div>

                                          

                                       </div>
                                       <div className="col-lg-3">
                                          <div className="right-sec d-grid justify-content-lg-end">
                                             <h5> Rs. 2000/- </h5>
                                             <h6 className="ps-st">
                                                <span>  <img src={roundck} alt="ck"/> </span>  Paid
                                             </h6>
                                          </div>
                                          
                                       </div>
                                    </div>

                                    <div className="cm-history row">
                                       <div className="col-lg-9">
                                          <div className="left-history">
                                             <h5> Veena Rao </h5>
                                             <div className="same-details">
                                                <span> 30 Yrs, Female </span>
                                                <span> <FaCircle/> 25-02-2022 </span>
                                                <span> <FaCircle/>  #ORD6848r4 </span>
                                             </div>
                                             <ul className="list-unstyled d-lg-flex mt-3">
                                                <li>
                                                   CVC
                                                </li>
                                                <li>
                                                   Dengue
                                                </li>
                                                <li>
                                                   Typhoied
                                                </li>
                                                <li>
                                                   CVC
                                                </li>
                                                <li>
                                                   Dengue
                                                </li>
                                                <li>
                                                   Typhoied
                                                </li>
                                             </ul>
                                          </div>

                                          

                                       </div>
                                       <div className="col-lg-3">
                                          <div className="right-sec d-grid justify-content-lg-end">
                                             <h5> Rs. 1200/- </h5>
                                             <h6 className="ps-st">
                                                <span>  <img src={roundck} alt="ck"/> </span>  Paid
                                             </h6>
                                          </div>
                                          
                                       </div>
                                    </div>


                                 </div>
                                 
                              </div>

                        </div>
                        
                     </div>
                  </div>






                  



               </div>
               
            </div>
         </div>
        </div>
       
        <AdminMobileMenu/>


        <div className="modal fade calender-modal" id="caldenderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        </>
     );
   }
 }

export default AdminLashbord;
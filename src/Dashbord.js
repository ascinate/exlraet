import React from "react";
import {NavLink } from "react-router-dom";
import BookingCtWeek from "./components/BookingCtWeek";
import BookingCtMonth from "./components/BookingCtMonth";
import RevieCtWeek from "./components/RevieCtWeek";
import RevieCtMonth from "./components/RevieCtMonth";
import CustomerCtweek from "./components/CustomerCtweek";
import CustomerCtMonth from "./components/CustomerCtMonth";
import dsicn from "../src/images/ds-icon.png";
import clicn from "../src/images/calender-icon.svg";
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
import BookingTable from "./components/BookingTable";
import BookingModal from "./components/BookingModal";
import roundck from "../src/images/round-check.svg";
import NewRevinew from "./components/NewRevinew";
import { BsEye  } from "react-icons/bs";
import { FaRupeeSign, FaBell, FaCircle } from "react-icons/fa";
import MobileMenu from "./components/MobileMenu";
import Sidebar from "./Sildebar";
import TopMenu from"./components/TopMenu";
import FilerDashboard from "./components/FilerDashboard";
import { FaBars } from "react-icons/fa";
import $ from "jquery";


class Dashbord extends React.Component {
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
             <Sidebar/>
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
             
             <div className="dasb-div float-start w-100">
             
                <div className="row g-lg-4">
                   <div className="col-lg-12 ps-lg-0">
                      <div className="show-date-details d-md-flex shadow mb-5 mb-lg-0">
                         
                         <h6 className="my-4 my-md-0"> <span> <img src={clicn} alt="cl"/> </span> February 2022 </h6>
                      
                         <p className="mb-0 mt-md-2 mt-lg-0"> <FaBell/> You have 2 new messages and 15 new tasks</p>
                         
                      
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
                                  <li>Pending: 15 </li>
                                  <li>Completed: 07</li>
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
                                  <li>Pending: 10 </li>
                                  <li>Completed: 05</li>
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
                                  <span className="d-block"> Total Technicians</span>
                                  </h5>
                               </div>
                               <div className="list-count">
                                  <ul className="list-unstyled m-0">
                                  <li>Pending: 15 </li>
                                  <li>Completed: 10</li>
                                  </ul>
                               </div>
                         </div>
                         <div className="line-bar">
                            
                         </div>
                      </div>
                   </div>
                   <div className="col-lg-7 ps-lg-0">
                      <div className="comon-chart-globe p-3 mb-4 mb-lg-0">
                            
                            <div className="d-flex justify-content-between align-items-center">
                               <h2 className="cm-heading mt-3 mt-md-0 mb-md-0"> Customers </h2>
                               <ul class="nav nav-pills mb-0" id="pills-tab" role="tablist">
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
                               <div class="tab-pane fade " id="customerweek" role="tabpanel" aria-labelledby="pills-home-tab">
                                  <CustomerCtweek/>
                               </div>
                               <div class="tab-pane fade show active" id="customermonth" role="tabpanel" aria-labelledby="pills-profile-tab">
                                     
                                  
                                  <CustomerCtMonth/>
                               
                               </div>
                               
                            </div>

                   

                      </div>
                   </div>
                   <div className="col-lg-5">
                      <div className="revenu-div p-3 mb-4 mb-lg-0">
                            <div className="d-flex justify-content-between align-items-center">
                               <h2 className="cm-heading mt-3 mt-md-0 mb-md-0"> Total Revenue </h2>
                               <ul class="nav nav-pills mb-0" id="pills-tab" role="tablist">
                                  <li class="nav-item" role="presentation">
                                  <button class="nav-link " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#revenueweek" type="button" role="tab" aria-controls="pills-home" 
                                  aria-selected="true">Week</button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                  <button class="nav-link active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#revenuemonth"
                                        type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Month</button>
                                  </li>
                               
                               </ul>
                            </div>
                            
                            <div class="tab-content mt-3" id="pills-tabContent">
                               <div class="tab-pane fade " id="revenueweek" role="tabpanel" aria-labelledby="pills-home-tab">
                                  
                                  <div className="number-rev d-grid justify-content-center text-center">
                                        <span className="dl-icon">
                                        <FaRupeeSign/>
                                        </span>
                                        <h3>24,000 </h3>
                                  </div>
                                  <RevieCtMonth/>
                               </div>
                               <div class="tab-pane fade show active" id="revenuemonth" role="tabpanel" aria-labelledby="pills-profile-tab">
                                  
                                  <div className="number-rev d-grid justify-content-center text-center">
                                     <span className="dl-icon">
                                        <FaRupeeSign/>
                                     </span>
                                     <h3>25,000 </h3>
                                  </div>
                                  <RevieCtWeek/>
                               
                               </div>
                               
                            </div>

                      </div>
                   </div>

                   <div className="col-lg-12 ps-lg-0">
                      <div className="total-content-div p-3">
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

                               <div className="new-review-div mt-4">
                                  <div class="tab-content mt-3" id="pills-tabContent">
                                        <div class="tab-pane fade " id="revenuneweday" role="tabpanel" aria-labelledby="pills-home-tab">
                                                       
                                           <NewRevinew/>

                                        </div>
                                        <div class="tab-pane fade " id="revenuneweweek" role="tabpanel" aria-labelledby="pills-home-tab">
                                           
                                           <NewRevinew/>
                                        </div>
                                        <div class="tab-pane fade show active" id="revenuenewmonth" role="tabpanel" aria-labelledby="pills-profile-tab">
                                           
                                           <NewRevinew/>
                                        
                                        </div>
                                        
                                     </div>
                               </div>
                      </div>
                   </div>
                   

                   <div className="col-lg-12 ps-lg-0">
                      <div className="tab-table p-3 mb-5 mt-4 mt-lg-0">
                         <div className="d-sm-flex justify-content-between align-items-start">
                            <h2 className="cm-heading mb-3 mb-md-0"> New Bookings 
                               <span className="d-block sub-text"> 15 Results Found </span>
                            </h2>
                            <div className="gp-button d-sm-flex justify-content-between align-items-center">
                                  <button className="btn download-btn mb-4 mb-md-0">
                                     <span> <img src={downloadicon} alt="dn"/> </span> Download
                                  </button>

                                  <button className="btn edit-btn mb-4 mb-md-0">
                                     <span> <img src={editicon} alt="dn"/> </span> Edit
                                  </button>

                                  <div className="dropdown">
                                     <button className="btn filter-btn dropdown-toggle mb-4 mb-md-0"
                                     id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                        <span> <img src={filtericon} alt="dn"/> </span> Filter By
                                     </button>

                                     <ul className="dropdown-menu anals-div-dp" aria-labelledby="dropdownMenuClickableInside">
                                        <li>
                                          <FilerDashboard/>
                                        </li>
                                       
                                     </ul>
                                  </div>
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
                                 <div className="inside-history-div col-lg-10 mx-auto mt-5">
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
                        
                              <div className="inside-history-div col-lg-10 mx-auto mt-5">
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
       
        <MobileMenu/>
        </>
     );
   }
 }

export default Dashbord;
import React from "react";
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
import editicon from "../src/images/edit-icon.svg";
import filtericon from "../src/images/filter-icon.svg";
import fileicon from "../src/images/file.svg";
import roketicon from "../src/images/rocket-icon.svg";
import flagicon from "../src/images/flag-icon.svg";
import chckicon from "../src/images/check-icon.svg";
import subicon from "../src/images/file-ck.svg";
import BookingTable from "./components/BookingTable";
import BookingModal from "./components/BookingModal";
import { BsEye  } from "react-icons/bs";
import { FaRupeeSign, FaBell } from "react-icons/fa";


function Dashbord(){
    return(
        <>
          <div className="dasb-div float-start w-100">
          
             <div className="row g-lg-4">
                <div className="col-lg-12 ps-lg-0">
                  <div className="show-date-details d-lg-flex shadow mb-5 mb-lg-0">
                     
                     <h6 className="my-4 my-md-0 ms-lg-3"> <span> <img src={clicn} alt="cl"/> </span> February 2022 </h6>
                  
                     <p className="mb-0 mt-md-2 mt-lg-0"> <FaBell/> You have 2 new messages and 15 new tasks</p>
                     
                  
                  </div>
                </div>
                <div className="col-lg-4 ps-lg-0">
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
                <div className="col-lg-4">
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
                <div className="col-lg-4">
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
                  <div className="booking-chart p-3 mb-4 mb-lg-0">
                     <div className="d-sm-flex justify-content-between align-items-center">
                         <h2 className="cm-heading mt-3 mt-md-0 mb-md-0"> Bookings </h2>
                         <ul class="nav nav-pills mb-0" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                            <button class="nav-link " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#bookweek" type="button" role="tab" aria-controls="pills-home" 
                            aria-selected="true">Week</button>
                            </li>
                            <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#bookmonth"
                             type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Month</button>
                            </li>
                            
                        </ul>
                     </div>
                     

                        
                        <div class="tab-content mt-3" id="pills-tabContent">
                            <div class="tab-pane fade " id="bookweek" role="tabpanel" aria-labelledby="pills-home-tab">
                               <BookingCtWeek/>
                            </div>
                            <div class="tab-pane fade show active" id="bookmonth" role="tabpanel" aria-labelledby="pills-profile-tab">
                                
                               
                               <BookingCtMonth/>
                            
                            </div>
                            
                        </div>


                  </div> 
                </div>
                <div className="col-lg-5">
                    <div className="revenu-div p-3 mb-4 mb-lg-0">
                        <div className="d-sm-flex justify-content-between align-items-center">
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

                <div className="col-lg-6 ps-lg-0">
                   <div className="comon-chart-globe p-3 mb-4 mb-lg-0">
                        
                        <div className="d-sm-flex justify-content-between align-items-center">
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
                <div className="col-lg-6">
                   <div className="map-div-main p-3 mb-4 mb-lg-0">
                       <div className="map-sec-div">
                       <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%"  frameborder="0" ></iframe>
                       </div>
                       <div className="btn-sec d-flex justify-content-between align-items-center">
                           <div className="ds-sec d-flex align-items-center">
                             <figure className="mb-0">
                             <img src={dsicn} alt="ds-icon"/>
                             </figure> 
                             <h5 className="ms-2"> Distance 
                              <span className="d-block">5KM</span>
                             </h5>
                           </div>
                           <button className="btn view-map-btn"> <BsEye/> Click to View</button>
                       </div>
                   </div>
                </div>

                <div className="col-lg-12 ps-lg-0">
                   <div className="tab-table p-3 mb-5">
                      <div className="d-lg-flex justify-content-between align-items-start">
                          <h2 className="cm-heading mb-3 mb-md-0"> New Bookings 
                           <span className="d-block sub-text"> 15 Results Found </span>
                          </h2>
                          <div className="gp-button d-lg-flex justify-content-between align-items-center">
                              <button className="btn download-btn mb-4 mb-md-0">
                                 <span> <img src={downloadicon} alt="dn"/> </span> Downlaod
                              </button>

                              <button className="btn edit-btn mb-4 mb-md-0">
                                 <span> <img src={editicon} alt="dn"/> </span> Edit
                              </button>

                              <button className="btn filter-btn dropdown-toggle mb-4 mb-md-0">
                                 <span> <img src={filtericon} alt="dn"/> </span> Filter By
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



         



        </>
    );
}
export default Dashbord;
import React from "react";
import AdminSidebar from "./AdminSidebar";
import TopMenu from"./components/TopMenu";
import MobileMenu from "./components/MobileMenu";
import Iconanal from "../src/images/techni-icon.svg";
import IconanalGray from "../src/images/cl-gray-icon.svg";
import { FaBars } from "react-icons/fa";
import techincianPic from "../src/images/user-img.svg";
import clockimg from "../src/images/clock 1.svg";
import HistoryFilter from "./components/HistoryFilter";
import filtericon from "../src/images/filter-icon.svg";
import roundck from "../src/images/round-check.svg";
import { FaRupeeSign, FaBell, FaCircle } from "react-icons/fa";
import techicianBigimg from "../src/images/user-bigimg.svg";
import $ from "jquery";
import { NavLink } from "react-router-dom";
import DashbordCalender from "./components/DashbordCalender";
import CalenderMultiple from "./components/CalenderMultiple";


class TechnicianAccount extends React.Component {
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
                    <div className="dasb-div technician-account-div bk-div pe-lg-3 float-start w-100">
                        <div className="bk-inside-div">
                            <div className="col-lg-12 ps-lg-0">
                                <div className="show-date-details shadow mb-5 mb-lg-0">
                                    <div className="col-12 d-sm-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <h6 className="my-4 my-md-0 cm-heading-page"> <span className="me-2"> <img src={Iconanal} alt="cl"/> </span> Technicians </h6>
                                                <a className="ms-5 comon-multi-btn"> <img src={IconanalGray} alt="cl"/> 
                                                <CalenderMultiple/> </a>
                                            </div>
                                 
                             
                                            <a data-bs-toggle="modal" data-bs-target="#userdetailsModal" className="techini-user d-flex align-items-center">
                                                <figure className="user-img-sec">
                                                    <img src={techincianPic} alt="picus"/>
                                                </figure>
                                                <span>
                                                <b className="d-block"> Robert William </b>
                                                8556623259 
                                                </span>
                                            </a>
                                    </div>

                                    <div className="row row-cols-1 pb-4 row-cols-lg-3 g-lg-5 user-top-details">
                                       <div className="col ps-lg-0">
                                           <div className="comon-user-ds d-flex align-items-center justify-content-between">
                                               <h4 className="mb-0"> Accepted Bookings 
                                                <span className="d-block"> 25 </span>
                                               </h4>

                                               <figure className="mb-0">
                                                  <img src={clockimg} alt="clock"/>
                                               </figure>
                                           </div>
                                       </div>
                                       <div className="col">
                                            <div className="comon-user-ds d-flex align-items-center justify-content-between">
                                                <h4 className="mb-0"> Completed Bookings 
                                                    <span className="d-block"> 15 </span>
                                                </h4>

                                                <figure className="mb-0">
                                                    <img src={clockimg} alt="clock"/>
                                                </figure>
                                            </div>
                                        </div>

                                        <div className="col pe-lg-0">
                                            <div className="comon-user-ds d-flex align-items-center justify-content-between">
                                                <h4 className="mb-0"> Cancelled Bookings 
                                                <span className="d-block"> 50 </span>
                                                </h4>

                                                <figure className="mb-0">
                                                <img src={clockimg} alt="clock"/>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                
                                </div>

                                <div className="history-techic p-4 mt-4">
                                   <div className="top-heading-histoty d-sm-flex w-100 justify-content-between align-items-center">
                                      <h2 className="cm-heading"> Collection Information </h2>

                                      
                                     
                                   </div>

                                   <div className="history-main-techician technician-page">
                                        
                                   <div className="inside-history-div col-lg-11 mx-auto mt-3">
                                   <h6 className="mn-head"> 10 Results Found </h6> 
                                   <div className="result-div mt-3">
                                      <div className="cm-history row">
                                         <div className="col-lg-10">
                                            <div className="left-history">
                                               <h5> Veena Rao </h5>
                                               <div className="same-details">
                                                  <span> 30 Yrs, Female </span>
                                                  <span> <FaCircle/> 25-02-2022 </span>
                                                  <span> <FaCircle/>  #ORD6848r4 </span>
                                                  <span>  <FaCircle/> +91 00000000000 </span>
                                                  <span>  <FaCircle/> veenarao@gmail.com </span>
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
                                         <div className="col-lg-2">
                                            <div className="right-sec d-grid justify-content-lg-end">
                                               <h5> Rs. 1500/- </h5>
                                               <h6 className="ps-st">
                                                  <span>  <img src={roundck} alt="ck"/> </span>  Paid
                                               </h6>
                                            </div>
                                            
                                         </div>
                                      </div>
  
                                      <div className="cm-history row">
                                         <div className="col-lg-10">
                                            <div className="left-history">
                                               <h5> Veena Rao </h5>
                                               <div className="same-details">
                                                  <span> 30 Yrs, Female </span>
                                                  <span> <FaCircle/> 25-02-2022 </span>
                                                  <span> <FaCircle/>  #ORD6848r4 </span>
                                                  <span>  <FaCircle/> +91 00000000000 </span>
                                                  <span>  <FaCircle/> veenarao@gmail.com </span>
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
                                         <div className="col-lg-2">
                                            <div className="right-sec d-grid justify-content-lg-end">
                                               <h5> Rs. 500/- </h5>
                                               <h6 className="unps-st">
                                                  Unpaid
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
                </main>
         </div> 




            <MobileMenu/>





            <div class="modal fade" id="userdetailsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Technician Profile</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-0">
                        <div className="total-details-uer">
                         <div className="p-3">
                           <div className="top-user-section d-sm-flex align-items-center">
                               <figure className="mb-0">
                                    <img src={techicianBigimg} alt="ts-pic"/>
                               </figure>
                               <div className="text-details ms-lg-5">
                                   <h2> Robert William 
                                     <span className="d-block"> Technician </span>
                                   </h2>
                                   <ul className="list-unstyled">
                                       <li>
                                        <span> Phone: </span> <span>  000000000</span> 
                                       </li>
                                       <li>
                                        <span> Email ID: </span>  <span> Robert@gmail.com </span>
                                       </li>
                                       <li>
                                        <span> Address: </span>  <span> #133, Dream World, Albama, USA </span>
                                       </li>
                                       <li>
                                        <span> Current Address: </span>  <span> #133, Dream World, Albama, USA </span> 
                                       </li>
                                   </ul>
                               </div>
                           </div>
                           
                           <div className="d-flex align-items-end col-lg-11 justify-content-between">
                              <div className="col-lg-9 position-relative">
                              <h5 className="mt-4 sub-modal-text mb-0">Performance</h5>
                                 <h6 className="best-text"> Best </h6>
                                 <div className="line-bar-d1"></div>
                              </div> 
                              <h6 className="line-month mb-1">/Monthly Collection</h6>
                           </div>

                           <div className="collecton-section-div mt-4">
                               <h5 className="sub-modal-text"> Collections </h5>
                               <div className="d-flex align-items-center">
                                   <div className="comon-div-daily">
                                       <h6 className="mb-1"> Daily </h6>
                                       <span className="d-block"> 18 </span>
                                   </div>

                                   <div className="comon-div-daily ms-lg-4">
                                       <h6 className="mb-1"> Weekly </h6>
                                       <span className="d-block"> 25 </span>
                                   </div>

                                   <div className="comon-div-daily ms-lg-4">
                                       <h6 className="mb-1"> Monthly </h6>
                                       <span className="d-block"> 16 </span>
                                   </div>

                               </div>
                           </div>
                        </div>

                           <hr/>
                           <div className="p-3 mb-4 bootom-modal-techinic-1">
                                <div className="row row-cols-1 row-cols-lg-2">
                                    <div className="col">
                                       <h2 className="sub-modal-text"> Documents Information </h2>
                                       <ul className="list-unstyled">
                                           <li>
                                             <span> Aadhar Card: </span>
                                             0000 0000 000
                                           </li>
                                           <li>
                                             <span> Pen Card: </span>
                                             clsc6545s
                                           </li>
                                           <li>
                                             <span> Vehical Number: </span>
                                             DL001252
                                           </li>
                                           <li>
                                             <span> Licence Number: </span>
                                             LAD45526
                                           </li>
                                       </ul>
                                       <a id="" className="btn view-dc"> View Documents </a>
                                    </div>

                                    <div className="col">
                                       <h2 className="sub-modal-text"> Bank Account Details </h2>
                                       <ul className="list-unstyled">
                                           <li>
                                             <span> Bank Name: </span>
                                             Axis Bank
                                           </li>
                                           <li>
                                             <span> Account Holder Name: </span>
                                             Robert William
                                           </li>
                                           <li>
                                             <span> Account Number: </span>
                                             AXISxxxxxxxxxxxxxxx12
                                           </li>
                                           <li>
                                             <span> Licence Number: </span>
                                             AXIS0056
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


            <div className="modal fade calender-modal" id="caldenderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
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


export default TechnicianAccount;
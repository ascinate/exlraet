import React from "react";
import LashboardSidebar from "./LashboardSidebar";
import TopMenu from"./components/TopMenu";
import AdminMobileMenu from "./components/AdminMobileMenu";
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
import downloadicon from "../src/images/download-icon.svg";
import DropdownSearch from "./components/DropdownSearch";
import NotficationtableBooking from "./components/NotficationtableBooking";
import clgrayicon from "../src/images/cl-gray-icon.svg";
import editicon from "../src/images/edit-icon.svg";
import IssueTableNotification from "./components/IssueTableNotification";
import PaymentTableNotification from "./components/PaymentTableNotification";
import $ from "jquery";
import { NavLink } from "react-router-dom";
import ComonFilter from "./components/ComonFilter";
import CalenderMultiple from "./components/CalenderMultiple";
import AdminNofticFilterBooking from "./components/AdminNofticFilterBooking";
import LabNoticFilterIusseAdmin from "./components/LabNoticFilterIusseAdmin";
import PaymentNoficationFilterNAdmin from "./components/PaymentNoficationFilterNAdmin";

class LashboardNotificationPage extends React.Component {
    componentWillMount(){

        $(document).ready(function(){
            $(".togle-icon").click(function(e) {
                e.preventDefault();
                $("#navAccordion").toggleClass("active");
                $("main").toggleClass("full-width");
                $("footer").toggleClass("full-width");
          
          });
          });
          
          $(document).ready(function(){

            $("#bk-btn1").click(function(){
              $("#booking-notification1").show();
              $("#issue-notification1").hide();
              $("#payment-notification1").hide();
            });

            $("#issu-btn").click(function(){
                $("#issue-notification1").show();
                $("#booking-notification1").hide();
                $("#payment-notification1").hide();
              });

            $("#payment-btn").click(function(){
                $("#issue-notification1").hide();
                $("#booking-notification1").hide();
                $("#payment-notification1").show();
            });
            
          });
        
      }
    render() {
      return(
          <>
          <div className='page-wrapper chiller-theme toggled'>

                <div className="main-sec d-md-flex">
                    <div className="sidebar-menu" id="navAccordion">
                    <LashboardSidebar/>
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
                                                <h6 className="my-4 my-md-0 cm-heading-page"> <span className="me-2"> <img src={Iconanal} alt="cl"/> </span> Notifications </h6>
                                                
                                            </div>
                                 
                             
                                         
                                    </div>

                                    <div className="row row-cols-1 pb-4 row-cols-lg-3 g-lg-5 user-top-details">
                                       <div className="col ps-lg-0">
                                           <a id="bk-btn1" className="notic-btn-cm comon-user-ds d-flex align-items-center justify-content-between">
                                               <h4 className="mb-0"> Bookings 
                                                <span className="d-block"> 25 </span>
                                               </h4>

                                               <figure className="mb-0">
                                                  <img src={clockimg} alt="clock"/>
                                               </figure>
                                           </a>
                                       </div>
                                       <div className="col px-lg-0">
                                            <a id="issu-btn" className="notic-btn-cm comon-user-ds d-flex align-items-center justify-content-between">
                                                <h4 className="mb-0"> Issues 
                                                    <span className="d-block"> 12 </span>
                                                </h4>

                                                <figure className="mb-0">
                                                    <img src={clockimg} alt="clock"/>
                                                </figure>
                                            </a>
                                        </div>

                                        <div className="col pe-lg-0">
                                            <a id="payment-btn" className="notic-btn-cm comon-user-ds d-flex align-items-center justify-content-between">
                                                <h4 className="mb-0"> Payments
                                                <span className="d-block"> 50 </span>
                                                </h4>

                                                <figure className="mb-0">
                                                <img src={clockimg} alt="clock"/>
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    
                                    
                                
                                </div>

                               
                                <div id="booking-notification1">
                                    <div className="tab-table pt-3 mt-5 mb-5">
                                        <div className="d-md-flex px-3 justify-content-between align-items-start">
                                                <h2 className="cm-heading  mb-3 mb-md-0"> Bookings 
                                                    <span className="d-block sub-text"> 15 Results Found </span>
                                                    <a className="btn cl-gray-cions pay-3"> <img src={clgrayicon} alt="cl"/>
                                                   <CalenderMultiple/> </a>
                                                </h2>
                                        
                                                <div className="gp-button d-flex justify-content-between align-items-center">
                                                   
                                                    <button className="btn download-btn mb-md-0">
                                                        <span> <img src={downloadicon} alt="dn"/> </span> Download
                                                    </button>

                                                    <button className="btn filter-btn sp-new-filter  mb-4 mb-md-0"
                                                    data-bs-toggle="offcanvas" href="#offcanvasFilterbn"  role="button" aria-controls="offcanvasExample">
                                                    <span> <img src={filtericon} alt="dn"/> </span>
                                                </button>

                                                </div>
                                        </div>

                                        <div className="table-sec-div nw-table-add">
                                            <NotficationtableBooking/>
                                        </div>
                                    </div>
                                </div>
                                <div id="issue-notification1">
                                    <div className="tab-table pt-3 mt-5 mb-5">
                                        <div className="d-md-flex px-3 justify-content-between align-items-start">
                                                <h2 className="cm-heading  mb-3 mb-md-0"> Issues 
                                                    <span className="d-block sub-text"> 15 Results Found </span>
                                                    <a className="btn cl-gray-cions pay-3"> <img src={clgrayicon} alt="cl"/>
                                                    <CalenderMultiple/> </a>
                                                </h2>
                                        
                                                <div className="gp-button d-flex justify-content-between align-items-center">
                                                    
                                            
                                                    <button className="btn download-btn mb-md-0">
                                                        <span> <img src={downloadicon} alt="dn"/> </span> Download
                                                    </button>

                                                    <button className="btn filter-btn sp-new-filter  mb-4 mb-md-0"
                                                        data-bs-toggle="offcanvas" href="#offcanvasFilteris"  role="button" aria-controls="offcanvasExample">
                                                        <span> <img src={filtericon} alt="dn"/> </span>
                                                    </button>

                                                </div>
                                        </div>

                                        <div className="table-sec-div nw-table-add">
                                            <IssueTableNotification/>
                                        </div>
                                    </div>
                                </div>

                                <div id="payment-notification1">
                                    <div className="tab-table pt-3 mt-5 mb-5">
                                        <div className="d-md-flex px-3 justify-content-between align-items-start">
                                                <h2 className="cm-heading  mb-3 mb-md-0"> Payment Due
                                                    <span className="d-block sub-text"> 15 Results Found </span>
                                                    <a className="btn cl-gray-cions pay-3"> <img src={clgrayicon} alt="cl"/>
                                                    <CalenderMultiple/> </a>
                                                </h2>
                                        
                                                <div className="gp-button d-flex justify-content-between align-items-center">
                                                    
                                                    <button className="btn download-btn mb-md-0">
                                                        <span> <img src={downloadicon} alt="dn"/> </span> Download
                                                    </button>

                                                    <button className="btn filter-btn sp-new-filter  mb-4 mb-md-0"
                                                        data-bs-toggle="offcanvas" href="#offcanvasFilterpayn"  role="button" aria-controls="offcanvasExample">
                                                        <span> <img src={filtericon} alt="dn"/> </span>
                                                    </button>

                                                </div>
                                        </div>

                                        <div className="table-sec-div nw-table-add">
                                            <PaymentTableNotification/>
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

         <ComonFilter/>



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

            <AdminNofticFilterBooking/>
            <LabNoticFilterIusseAdmin/>
            <PaymentNoficationFilterNAdmin/>
          </>
      );
    }
  }


export default LashboardNotificationPage;
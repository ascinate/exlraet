import React from "react";
import dsicn from "../src/images/ds-icon.png";
import clicn from "../src/images/calender-icon.svg";
import coloricon from "../src/images/cl-icon-color.svg";
import timeicon from "../src/images/time.svg";
import useicon from "../src/images/user-cion.svg";
import Testanal from "../src/images/icon2.svg";
import downloadicon from "../src/images/download-icon.svg";
import editicon from "../src/images/edit-icon.svg";
import filtericon from "../src/images/filter-icon.svg";
import fileicon from "../src/images/file.svg";
import roketicon from "../src/images/rocket-icon.svg";
import flagicon from "../src/images/flag-icon.svg";
import chckicon from "../src/images/check-icon.svg";
import subicon from "../src/images/file-ck.svg";
import AdminMainBookingTable from "./components/AdminMainBookingTable";
import pmicon from "../src/images/pm-table-icon.svg";
import graphicon from "../src/images/graph-icon.svg";
import { FaRupeeSign, FaBell, FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import TopMenu from"./components/TopMenu";
import $ from "jquery";
import PaymentFilter from "./components/PaymentFilter";
import AdminMobileMenu from "./components/AdminMobileMenu";
import AnalGraphWeek from "./components/AnalGraphWeek";
import AnalGraphMonth from "./components/AnalGraphMonth";
import AdminMainFilter from './components/AdminMainFilter';
import clendericon from "../src/images/cl-gray-icon.svg";
import DashbordCalender from "./components/DashbordCalender";
import clockimg from "../src/images/clock 1.svg";
import Iconanal from "../src/images/techni-icon.svg";
import CancelBookingtable from "./components/CancelBookingtable";
import IssueTableNotification from "./components/IssueTableNotification";
import PaymentTableNotification from "./components/PaymentTableNotification";
import AdminBookingMainFilterA from "./components/AdminBookingMainFilterA";
import AdminBookinMainFilterB from "./components/AdminBookinMainFilterB";
import CalenderMultiple from "./components/CalenderMultiple";
import { NavLink } from "react-router-dom";

class AdminBookingMain extends React.Component {
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
            $("#canel-bookin-btn").click(function(){
              $("#cancel-admin-div").show();
              $("#book-admin-div").hide();
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
                    <div id="book-admin-div" className="dasb-div bk-div float-start w-100 pe-lg-3  payment-div">
                        
                            <div className="col-lg-12 ps-lg-0">
                            <div className="show-date-details d-lg-flex shadow mb-5 mb-lg-0">
                                <div className="d-flex align-items-center">
                                   <h6 className="my-4 my-md-0 cm-heading-page"> <span className="sp-adjects"> <img src={Testanal} alt="cl"/> 
                                   </span> Bookings </h6>
                                   <NavLink to="/supercancelbooking" id="canel-bookin-btn" className="btn booking-btn ms-3"> Cancelled Bookings </NavLink>
                                </div>
                                 
                            
                                <a data-bs-toggle="modal" data-bs-target="#analgraphModal" className="btn graph-btn"> 
                                 <img src={graphicon} alt="cl"/> Graphical View </a>
                            </div>
                            </div>
                            <div className="col-lg-12 ps-lg-0 mt-4">
                                <div className="tab-table  mb-5">
                                    <div className="d-lg-flex p-3 sp-button-adjucts justify-content-between align-items-start">
                                        <div className="d-flex col-lg-8">    
                                            <h2 className="cm-heading col-lg-3 mb-3 mb-md-0"> Bookings
                                            <span className="d-block sub-text mt-2"> 15 Results Found </span>
                                            </h2>
                                            <a className="cld-icon sp-mind-icon ms-3">
                                            <CalenderMultiple/> <img src={clendericon} alt="icm"/>
                                            </a>
                                        </div>
                                        <div className="gp-button d-lg-flex justify-content-end align-items-center">
                                            

                                            <div className="form-group comon-input-test d-none">
                                               <input type="text" className="form-control" placeholder="State"/>
                                            </div>

                                            <button className="btn edit-btn mb-4 mb-md-0">
                                                <span> <img src={editicon} alt="dn"/> </span> Edit
                                            </button>

                                            <button className="btn download-btn mb-4 mb-md-0">
                                                <span> <img src={downloadicon} alt="dn"/> </span> Download
                                            </button>

                                            

                                            <button className="btn filter-btn sp-new-filter  mb-4 mb-md-0"
                                            data-bs-toggle="offcanvas" href="#offcanvasFilter"  role="button" aria-controls="offcanvasExample">
                                            <span> <img src={filtericon} alt="dn"/> </span>
                                           </button>

                                        </div>
                                    </div>

                                    <div className="table-sec-div adbk-table">
                                        <AdminMainBookingTable/>
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

                 



                    <div id="cancel-admin-div" className="dasb-div technician-account-div bk-div pe-lg-3 float-start w-100">
                    <div className="bk-inside-div">
                        <div className="col-lg-12 ps-lg-0">
                            <div className="show-date-details shadow mb-5 mb-lg-0">
                                <div className="col-12 d-sm-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <h6 className="my-4 my-md-0 cm-heading-page"> <span className="me-2"> <img src={Testanal} alt="cl"/> </span> Cancelled Bookings </h6>
                                            
                                        </div>
                             
                         
                                     
                                </div>

                                <div className="row row-cols-1 sp-bookin-top pb-4 row-cols-lg-3 mt-4 gx-lg-5 user-top-details">
                                   <div className="col ps-lg-0">
                                       <a id="bk-btn1" className="notic-btn-cm comon-user-ds d-flex align-items-center justify-content-between">
                                           <h4 className="mb-0"> Cancelled By Customer 
                                            <span className="d-block"> 25 </span>
                                           </h4>

                                           <figure className="mb-0">
                                              <img src={clockimg} alt="clock"/>
                                           </figure>
                                       </a>
                                   </div>
                                   <div className="col pe-lg-0">
                                        <a id="issu-btn" className="notic-btn-cm comon-user-ds d-flex align-items-center justify-content-between">
                                            <h4 className="mb-0"> Cancelled By Technician 
                                                <span className="d-block"> 12 </span>
                                            </h4>

                                            <figure className="mb-0">
                                                <img src={clockimg} alt="clock"/>
                                            </figure>
                                        </a>
                                    </div>

                                    
                                </div>
                                
                                
                            
                            </div>

                           
                            <div >
                                <div className="tab-table p-3 mt-5 mb-5 new-table-cancel">
                                    <div className="d-md-flex justify-content-between align-items-start">
                                            <div className="d-flex col-lg-5">    
                                                <h2 className="cm-heading col-lg-5 mb-3 mb-md-0"> Cancelled Bookings
                                                <span className="d-block sub-text mt-2"> 15 Results Found </span>
                                                </h2>
                                                <a  className="cld-icon ms-0">
                                                <CalenderMultiple/>  <img src={clendericon} alt="icm"/>
                                                </a>
                                            </div>
                                    
                                            <div className="gp-button  d-flex justify-content-between align-items-center">
                                               
                                                <button className="btn download-btn mb-md-0">
                                                    <span> <img src={downloadicon} alt="dn"/> </span> Download
                                                </button>

                                                <button className="btn filter-btn sp-new-filter  mb-4 mb-md-0"
                                                    data-bs-toggle="offcanvas" href="#offcanvasFilterb"  role="button" aria-controls="offcanvasExample">
                                                    <span> <img src={filtericon} alt="dn"/> </span>
                                                </button>
                                                  
                                            </div>
                                    </div>

                                    <div className="table-sec-div nw-table-add">
                                        <CancelBookingtable/>
                                    </div>
                                </div>
                            </div>
                           
                                
                           
                        </div>

                        
                    </div> 

                  
                    
                
                    </div>   


                    </div>
                </main>
          </div>

          <div className="modal fade" id="analgraphModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Bookings Graphical View</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body anal-div-md">
                            
                        <ul className="nav nav-pills mb-3 justify-content-lg-end" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                            <button className="nav-link " id="pills-home-tab" data-bs-toggle="pill" 
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Month</button>
                            </li>
                            <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-profile-tab" data-bs-toggle="pill" 
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Week</button>
                            </li>
                            
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <AnalGraphMonth/>
                            </div>
                            <div className="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <AnalGraphWeek/>
                            </div>
                            
                        </div>
                    


                    </div>
                    
                    </div>
                </div>
            </div>

          <AdminMobileMenu/>

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

          <AdminBookingMainFilterA/>
          <AdminBookinMainFilterB/>
          </>
      );
    }
  }

export default AdminBookingMain;
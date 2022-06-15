import React from "react";
import Sidebar from "./Sildebar";
import TopMenu from"./components/TopMenu";
import Iconanal from "../src/images/icon-anlasis.svg";
import graphicon from "../src/images/graph-icon.svg";
import NewAnualTable from "./components/NewAnualTable";
import downloadicon from "../src/images/download-icon.svg";
import editicon from "../src/images/edit-icon.svg";
import filtericon from "../src/images/filter-icon.svg";
import DropdownSearch from "./components/DropdownSearch";
import AnalGraphWeek from "./components/AnalGraphWeek";
import AnalGraphMonth from "./components/AnalGraphMonth";
import bookingicon from "../src/images/icon2.svg";
import clgrayicon from "../src/images/cl-gray-icon.svg";
import DashbordCalender from "./components/DashbordCalender";
import $ from "jquery";
import { FaBars } from "react-icons/fa";
import Testanal from "../src/images/icon2.svg";
import clockimg from "../src/images/clock 1.svg";
import MobileMenu from "./components/MobileMenu";
import clendericon from "../src/images/cl-gray-icon.svg";
import CancelBookingtable from "./components/CancelBookingtable";
import LabBookingFilterA from "./components/LabBookingFilterA";
import { BsXLg } from "react-icons/bs";
import CalenderMultiple from "./components/CalenderMultiple";
import { NavLink } from "react-router-dom";



class NewUserBooking extends React.Component {
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
                    <div id="book-admin-div" className="dasb-div bk-div float-start w-100 pe-lg-3  payment-div">
                        <div className="bk-inside-div">
                            <div className="col-lg-12 ps-lg-0">
                                <div className="show-date-details px-3 d-sm-flex shadow mb-5 mb-lg-0">
                                    <div className="d-flex align-items-center">
                                       <h6 className="my-4 my-md-0 sp-h1 cm-heading-page"> <span> <img src={bookingicon} alt="cl"/> </span> Bookings </h6>
                                        <a id="canel-bookin-btn" className="d-none booking-btn ms-3"> Cancelled Bookings </a>
                                        <NavLink to="/labcancellooking"  className="btn booking-btn ms-3"> Cancelled Bookings </NavLink>
                                        
                                    </div>
                                    <a className="btn graph-btn" data-bs-toggle="modal" data-bs-target="#analgraphModal">
                                   <img src={graphicon} alt="cl"/> Graphical View </a>
                                    
                                
                                </div>
                            </div>

                            
                        </div> 

                        <div className="anal-table mt-4">
                            <div className="tab-table pt-3  mb-5">
                                <div className="d-md-flex px-3 justify-content-between align-items-start">
                                <h2 className="cm-heading  mb-3 mb-md-0"> Bookings 
                                    <span className="d-block sub-text"> 15 Results Found </span>
                                    <a className="btn cl-gray-cions"> 
                                    <CalenderMultiple/> <img src={clgrayicon} alt="cl"/> </a>
                                </h2>
                                
                                    <div className="gp-button d-flex justify-content-between align-items-center">
                                        
                                        <button className="btn edit-btn mb-md-0">
                                            <span> <img src={editicon} alt="dn"/> </span> Edit
                                        </button>
                                
                                        <button className="btn download-btn mb-md-0">
                                            <span> <img src={downloadicon} alt="dn"/> </span> Download
                                        </button>


                                        <div className="dropdown">
                                            <button className="btn filter-btn sp-new-filter mb-4 mb-md-0"
                                            data-bs-toggle="offcanvas" href="#offcanvasFilter"  role="button" aria-controls="offcanvasExample">
                                                <span> <img src={filtericon} alt="dn"/> </span>
                                            </button>

                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="table-sec-div nw-table-add">
                                   <NewAnualTable/>
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
                                <div className="tab-table p-3 mt-5 mb-5">
                                    <div className="d-md-flex justify-content-between align-items-start">
                                            <div className="d-flex col-lg-10">    
                                                <h2 className="cm-heading col-lg-3 mb-3 mb-md-0"> Cancelled Bookings
                                                <span className="d-block sub-text mt-2"> 15 Results Found </span>
                                                </h2>
                                                <a className="cld-icon ms-0">
                                                <CalenderMultiple/>   <img src={clendericon} alt="icm"/>
                                                </a>
                                            </div>
                                    
                                            <div className="gp-button  d-flex justify-content-between align-items-center">
                                               
                                                <button className="btn download-btn mb-md-0">
                                                    <span> <img src={downloadicon} alt="dn"/> </span> Download
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
                        <h5 className="modal-title" id="exampleModalLabel">Analytics Graphical View</h5>
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

            <MobileMenu/>



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



            <LabBookingFilterA/>


          </>
      );
    }
  }

export default NewUserBooking;
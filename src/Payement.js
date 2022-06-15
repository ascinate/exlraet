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
import subicon from "../src/images/file-ck.svg";
import PaymentTable from "./components/PaymentTable";
import pmicon from "../src/images/pm-table-icon.svg";
import { FaRupeeSign, FaBell, FaBars } from "react-icons/fa";
import Sidebar from "./Sildebar";
import TopMenu from"./components/TopMenu";
import $ from "jquery";
import PaymentFilter from "./components/PaymentFilter";
import AdminMobileMenu from "./components/AdminMobileMenu";
import clgrayicon from "../src/images/cl-gray-icon.svg";
import DashbordCalender from "./components/DashbordCalender";
import LabPaymentFilter from "./components/LabPaymentFilter";
import CalenderMultiple from './components/CalenderMultiple';


class Payement extends React.Component {
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
                    <div className="dasb-div bk-div float-start w-100  payment-div">
                            <div className="col-lg-12 ps-lg-0">
                            <div className="show-date-details d-lg-flex shadow mb-5 mb-lg-0">
                                
                                <h6 className="my-4 my-md-0 cm-heading-page"> <span> <img src={pmicon} alt="cl"/> </span> Payment </h6>
                            
                                
                                <div className="amount-table-payment d-lg-flex align-items-center">
                                     <div className="comon-pay-text">
                                        <h5> <span className="d-block"> Total Amount </span>
                                        Rs. 1,200/- </h5>
                                     </div>
                                     <div className="comon-pay-text ms-lg-5">
                                        <h5> <span className="d-block"> Total Collection Amount </span>
                                        Rs. 10,000/- </h5>
                                     </div>
                                     <div className="comon-pay-text ms-lg-5">
                                        <h5> <span className="d-block"> Total Commission Amount </span>
                                        Rs. 1,000/- </h5>
                                     </div>
                                </div>
                            
                            </div>
                            </div>
                            <div className="col-lg-12 ps-lg-0 mt-4">
                                <div className="tab-table pt-3 mb-5">
                                    <div className="d-lg-flex px-3 justify-content-between align-items-start">
                                        <h2 className="cm-heading mb-3 mb-md-0"> Payout Information
                                        <span className="d-block sub-text"> 15 Results Found </span>
                                        <a className="btn cl-gray-cions pay-3"> <img src={clgrayicon} alt="cl"/>
                                        <CalenderMultiple/> </a>
                                        </h2>
                                        <div className="gp-button d-flex justify-content-between align-items-center">
                                            <button className="btn download-btn  mb-md-0">
                                                <span> <img src={downloadicon} alt="dn"/> </span> Download
                                            </button>

                                            <button className="btn filter-btn sp-new-filter  mb-4 mb-md-0"
                                            data-bs-toggle="offcanvas" href="#offcanvasFilter"  role="button" aria-controls="offcanvasExample">
                                            <span> <img src={filtericon} alt="dn"/> </span>
                                           </button>
                                        </div>
                                    </div>

                                    <div className="table-sec-div ">
                                        <PaymentTable/>
                                    </div>
                                </div>
                            </div>


                            <div className="modal fade payment-st-modal" id="allmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                        <li> <span className="sub-tl"> Collection Amount </span> Rs. 100/- </li>
                                                        <li> <span className="sub-tl"> Commission Amount </span> Rs. 120/- </li>
                                                        <li> <span className="sub-tl"> Email Id </span>  vikrant@gmail.com </li>
                                                        <li> <span className="sub-tl"> Phone Number </span> 000000000000 </li>
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
                                                        <li> <span className="sub-tl"> Collection Amount </span> Rs. 100/- </li>
                                                        <li> <span className="sub-tl"> Commission Amount </span> Rs. 120/- </li>
                                                        <li> <span className="sub-tl"> Email Id </span>  vikrant@gmail.com </li>
                                                        <li> <span className="sub-tl"> Phone Number </span> 000000000000 </li>
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
                                                    <li className="grand-total-list mt-3 bg-white">
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

            <LabPaymentFilter/>
          </>
      );
    }
  }

export default Payement;
import React from "react";
import dsicn from "../src/images/ds-icon.png";
import clicn from "../src/images/calender-icon.svg";
import coloricon from "../src/images/cl-icon-color.svg";
import timeicon from "../src/images/time.svg";
import useicon from "../src/images/user-cion.svg";
import Testanal from "../src/images/test-icon.svg";
import downloadicon from "../src/images/download-icon.svg";
import editicon from "../src/images/edit-icon.svg";
import filtericon from "../src/images/filter-icon.svg";
import fileicon from "../src/images/file.svg";
import roketicon from "../src/images/rocket-icon.svg";
import flagicon from "../src/images/flag-icon.svg";
import chckicon from "../src/images/check-icon.svg";
import subicon from "../src/images/file-ck.svg";
import AdminTestTable from "./components/AdminTestTable";
import pmicon from "../src/images/pm-table-icon.svg";
import { FaRupeeSign, FaBell, FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import TopMenu from"./components/TopMenu";
import $ from "jquery";
import PaymentFilter from "./components/PaymentFilter";
import AdminMobileMenu from "./components/AdminMobileMenu";


class AdminTest extends React.Component {
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
                    <div className="dasb-div float-start w-100 pe-lg-3  payment-div">
                            <div className="col-lg-12 ps-lg-0">
                            <div className="show-date-details d-lg-flex shadow mb-5 mb-lg-0">
                                
                                <h6 className="my-4 my-md-0 cm-heading-page"> <span> <img src={Testanal} alt="cl"/> </span> Test </h6>
                            
                            
                            </div>
                            </div>
                            <div className="col-lg-12 ps-lg-0 mt-4">
                                <div className="tab-table p-3 mb-5">
                                    <div className="d-lg-flex justify-content-between align-items-start">
                                        <h2 className="cm-heading col-lg-3 mb-3 mb-md-0"> Test Information
                                        <span className="d-block sub-text mt-2"> 15 Results Found </span>
                                        </h2>
                                        <div className="gp-button d-lg-flex justify-content-end align-items-center">
                                            
                                            <div className="form-group comon-input-test">
                                               <input type="text" className="form-control" placeholder="Lab ID"/>
                                            </div>

                                            <div className="form-group comon-input-test">
                                               <input type="text" className="form-control" placeholder="Lab Name"/>
                                            </div>

                                            <div className="form-group comon-input-test">
                                               <input type="text" className="form-control" placeholder="City"/>
                                            </div>

                                            <div className="form-group comon-input-test">
                                               <input type="text" className="form-control" placeholder="State"/>
                                            </div>

                                            <div className="dropdown">
                                                <button className="btn filter-btn dropdown-toggle mb-4 mb-md-0"
                                                id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                                    <span> <img src={filtericon} alt="dn"/> </span> Filter By
                                                </button>

                                                <ul class="dropdown-menu anals-div-dp" aria-labelledby="dropdownMenuClickableInside">
                                                    <li>
                                                      <PaymentFilter/>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="table-sec-div ">
                                        <AdminTestTable/>
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
          <AdminMobileMenu/>
          </>
      );
    }
  }

export default AdminTest;
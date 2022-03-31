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
import { FaRupeeSign, FaBell } from "react-icons/fa";


function Payement(){
    return(
        <>
          <div className="dasb-div float-start w-100 pt-4 pe-4 payment-div">
                <div className="col-lg-12 ps-lg-0">
                  <div className="show-date-details d-lg-flex shadow mb-5 mb-lg-0">
                     
                     <h6 className="my-4 my-md-0 cm-heading-page"> <span> <img src={pmicon} alt="cl"/> </span> Payment </h6>
                  
                    
                     
                  
                  </div>
                </div>
                <div className="col-lg-12 ps-lg-0 mt-4">
                    <div className="tab-table p-3 mb-5">
                        <div className="d-lg-flex justify-content-between align-items-start">
                            <h2 className="cm-heading mb-3 mb-md-0"> New Bookings 
                            <span className="d-block sub-text"> 15 Results Found </span>
                            </h2>
                            <div className="gp-button d-lg-flex justify-content-between align-items-center">
                                <button className="btn download-btn mb-4 mb-md-0">
                                    <span> <img src={downloadicon} alt="dn"/> </span> Downlaod
                                </button>

                                <div className="dropdown">
                                    <button className="btn filter-btn dropdown-toggle mb-4 mb-md-0"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span> <img src={filtericon} alt="dn"/> </span> Filter By
                                    </button>

                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
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
                                             <li> <span className="sub-tl"> Charges </span> Rs. 1400/- </li>
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
                                             <li> <span className="sub-tl"> Charges </span> Rs. 1800/- </li>
                                             <li> <span className="sub-tl"> Status </span> <span className="uppadidl"> Unpaid </span>  </li>
                                           </ul>
                                       </div>
                                   </div>
                                </div>
                                <div className="col-lg-5">
                                   <div className="total-payment">
                                      <h5> Total Payment </h5>
                                      <ul className="list-unstyled mt-4">
                                        <li>
                                          <span> Total Benficiary </span>
                                          02
                                        </li>
                                        <li>
                                          <span> Total Test </span>
                                          2
                                        </li>
                                        <li>
                                          <span> Due </span>
                                          Rs. 1400/-
                                        </li>
                                        <li>
                                          <span> Paid </span>
                                          Rs. 2500/-
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
        </>
    );
}
export default Payement;
import React from "react";
import AdminSidebar from "./AdminSidebar";
import TopMenu from"./components/TopMenu";
import AdminMobileMenu from "./components/AdminMobileMenu";
import Iconanal from "../src/images/labdetailsicon.svg";
import IconanalGray from "../src/images/cl-gray-icon.svg";
import { FaBars } from "react-icons/fa";
import techincianPic from "../src/images/user-img.svg";
import clockimg from "../src/images/clock 1.svg";
import HistoryFilter from "./components/HistoryFilter";
import filtericon from "../src/images/filter-icon.svg";
import roundck from "../src/images/round-check.svg";
import { FaRupeeSign, FaBell, FaCircle, FaRegEye, FaAngleLeft } from "react-icons/fa";
import deleteiconnwhite from "../src/images/dl-icon-white.svg";
import techicianBigimg from "../src/images/user-bigimg.svg";
import SwitchTGButton from "./components/SwitchTGButton";
import downloadicon from "../src/images/download-icon.svg";
import editicon from "../src/images/edit-icon.svg";
import clendericon from "../src/images/cl-gray-icon.svg";
import AdminLabTable from "./components/AdminLabTable";
import FilerDashboard from "./components/FilerDashboard";
import Iconanallogin from "../src/images/logindetails.svg";
import AdminLabLoginTable from "./components/AdminLabLoginTable";
import DashbordCalender from "./components/DashbordCalender";
import LabRegisterToggle from "./components/LabRegisterToggle";
import { BsXLg, BsDownload } from "react-icons/bs";
import FileInput from "./components/FileInput";
import PanUpload from "./components/PanUpload";
import MedicalCertificate from "./components/MedicalCertificate";
import CrinicalFile from "./components/CrinicalFile";
import icontechnic from "../src/images/techni-icon.svg";
import fileimgNew from "../src/images/fileimg.svg";
import docimgNew from "../src/images/dockimg.svg";
import pdfimgNew from "../src/images/pdfimg.svg";
import ComonFilter from "./components/ComonFilter";


import $ from "jquery";
import { NavLink } from "react-router-dom";


class AdminLabDocuments extends React.Component {
    componentWillMount(){

        $(document).ready(function(){
            $(".togle-icon").click(function(e) {
                e.preventDefault();
                $("#navAccordion").toggleClass("active");
                $("main").toggleClass("full-width");
                $("footer").toggleClass("full-width");
          
          });
          $("#logindetails-btn").click(function(){
            $("#logindetails").show();
            $("#lab-details").hide();
          });
          });

          $(document).ready(function(){
            $("#backlab-btn").click(function(){
                $("#lab-details-div").show();
                $("#lab-register-div").hide();
                });
          });

          $(document).ready(function(){
            $("#register-btn-lab").click(function(){
                $("#lab-details-div").hide();
                $("#lab-register-div").show();
                });
          });

          $(document).ready(function(){
            $("#veiw-do-btn").click(function(){
                $("#lab-details-div").hide();
                $("#lab-register-div").hide();
                $("#lab-documents-div").show();
                });
          });

          $(document).ready(function(){
            $("#backlab-btn-2").click(function(){
                $("#lab-details-div").show();
                $("#lab-register-div").hide();
                $("#lab-documents-div").hide();
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
                    
                    
                        <div className="dasb-div lab-page-div bk-div pe-lg-3 float-start w-100">
                            <NavLink to="/adminlab" className="bnt-new"> <FaAngleLeft/> Back </NavLink>
                            <div className="bk-inside-div mt-4">
                                <div className="col-lg-12 ps-lg-0">
                                    <div className="show-date-details d-sm-flex shadow mb-5 mb-lg-0">
                                        <div className="col-12 d-sm-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <h6 className="my-4 my-md-0 cm-heading-page"> 
                                                    <span className="me-2"> <img src={icontechnic} alt="cl"/> </span> Lab Documents </h6>
                                                    
                                                </div>
                                        </div>

                                        
                                        
                                    
                                    </div>

                                    <div className="tab-table registerd-2 p-5 mb-5 mt-4 ">
                                        <h2> View Documents </h2>
                                        <div className="col-lg-10 mx-auto">
                                           <div className="row g-lg-5 row-cols-1 row-cols-lg-4">
                                              <div className="col">
                                                  <div className="comon-file">
                                                      <figure>
                                                          <img src={fileimgNew} alt="fileimg"/>
                                                      </figure>
                                                      <span className="d-block"> Profile.png </span>
                                                      <div className="d-flex mt-2 justify-content-center align-items-center">
                                                         <a id="#" className="cm-links">
                                                            <FaRegEye/>
                                                         </a>
                                                         <a id="#" className="cm-links ms-3">
                                                           <BsDownload/>
                                                         </a>
                                                      </div>
                                                  </div>
                                              </div>
                                              
                                              <div className="col">
                                                  <div className="comon-file">
                                                      <figure>
                                                          <img src={docimgNew} alt="fileimg"/>
                                                      </figure>
                                                      <span className="d-block"> Resume.doc </span>
                                                      <div className="d-flex mt-2 justify-content-center align-items-center">
                                                         <a id="#" className="cm-links">
                                                            <FaRegEye/>
                                                         </a>
                                                         <a id="#" className="cm-links ms-3">
                                                           <BsDownload/>
                                                         </a>
                                                      </div>
                                                  </div>
                                              </div>

                                              <div className="col">
                                                  <div className="comon-file">
                                                      <figure>
                                                          <img src={pdfimgNew} alt="fileimg"/>
                                                      </figure>
                                                      <span className="d-block"> Experience.pdf </span>
                                                      <div className="d-flex mt-2 justify-content-center align-items-center">
                                                         <a id="#" className="cm-links">
                                                            <FaRegEye/>
                                                         </a>
                                                         <a id="#" className="cm-links ms-3">
                                                           <BsDownload/>
                                                         </a>
                                                      </div>
                                                  </div>
                                              </div>

                                              <div className="col">
                                                  <div className="comon-file">
                                                      <figure>
                                                          <img src={pdfimgNew} alt="fileimg"/>
                                                      </figure>
                                                      <span className="d-block"> Experience.pdf </span>
                                                      <div className="d-flex mt-2 justify-content-center align-items-center">
                                                         <a id="#" className="cm-links">
                                                            <FaRegEye/>
                                                         </a>
                                                         <a id="#" className="cm-links ms-3">
                                                           <BsDownload/>
                                                         </a>
                                                      </div>
                                                  </div>
                                              </div>

                                              <div className="col">
                                                    <div className="comon-file">
                                                        <figure>
                                                            <img src={fileimgNew} alt="fileimg"/>
                                                        </figure>
                                                        <span className="d-block"> Profile.png </span>
                                                        <div className="d-flex mt-2 justify-content-center align-items-center">
                                                            <a id="#" className="cm-links">
                                                                <FaRegEye/>
                                                            </a>
                                                            <a id="#" className="cm-links ms-3">
                                                            <BsDownload/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                          
                                                <div className="col">
                                                    <div className="comon-file">
                                                        <figure>
                                                            <img src={docimgNew} alt="fileimg"/>
                                                        </figure>
                                                        <span className="d-block"> Resume.doc </span>
                                                        <div className="d-flex mt-2 justify-content-center align-items-center">
                                                            <a id="#" className="cm-links">
                                                                <FaRegEye/>
                                                            </a>
                                                            <a id="#" className="cm-links ms-3">
                                                            <BsDownload/>
                                                            </a>
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




            <AdminMobileMenu/>





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



            <div className="modal fade" id="LabdetailsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"> Lab Profile </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="lab-profile-div col-lg-11 mx-auto">
                            <div className="top-head col-lg-10 mx-auto d-flex justify-content-between">
                               <h4> ABC Lab </h4>
                               <a id="" className="btn add-login-btn"> Login </a>
                            </div>
                            <ul className="list-unstyled mt-4">
                                <li> 
                                  <span className="list-heading"> Lab ID </span>
                                  #lab4526
                                </li>
                                <li> 
                                  <span className="list-heading"> Authorized person name </span>
                                  Ankit Tiwari
                                </li>
                                <li> 
                                  <span className="list-heading"> Phone: </span>
                                  000000000
                                </li>
                                <li> 
                                  <span className="list-heading"> Email ID </span>
                                  Robert@gmail.com
                                </li>
                                <li> 
                                  <span className="list-heading"> Lab Address </span>
                                  #133, Dream World, Albama.
                                </li>
                                <li> 
                                  <span className="list-heading"> Total Users </span>
                                 <span className="view-btn-d1 sp-width-in"> 10   </span>
                                 <small className="btn v-btn"> View </small>
                                </li>
                                <li> 
                                  <span className="list-heading"> Number of Branches </span>
                                 <span className="view-btn-d1 sp-width-in"> 100  </span>
                                 <small className="btn v-btn"> View </small> 
                                </li>
                               
                                <li> 
                                  <span className="list-heading"> Payment status </span>
                                  <span className="view-btn-d1 paidtext"> Paid </span>
                                </li>
                                <li> 
                                  <span className="list-heading"> Lab Login ID </span>
                                  100 <span className="view-btn-d1"> robert34@gmil.com </span>
                                </li>
                                <li className="d-flex align-items-center"> 
                                  <span className="list-heading"> Password </span>
                                  *********************
                                 <span className="eye-icon">  <FaRegEye/> </span> 
                                </li>
                                <li> 
                                  <span className="list-heading"> Registration Date </span>
                                  <span className="view-btn-d1"> 22-04-2022 </span>
                                </li>
                            </ul>

                            <div className="add-content-div">
                               <div className="row">
                                  <div className="col-lg-4">
                                     <div className="form-group">
                                        <label> Add Collection Charges </label>
                                        <input type="text" className="form-control"/>
                                     </div>
                                  </div>
                                  <div className="col-lg-4">
                                     <div className="form-group">
                                        <label> Add Beneficary Charges </label>
                                        <input type="text" className="form-control"/>
                                     </div>
                                  </div>
                               </div>
                               <h5 className="mt-4"> Commission Percentage </h5>
                               <div className="row mt-3">
                                  <div className="col-lg-4">
                                     <div className="form-group">
                                        <label> Blood Tests </label>
                                        <input type="text" className="form-control"/>
                                     </div>
                                  </div>
                                  <div className="col-lg-4">
                                     <div className="form-group">
                                        <label> Packages </label>
                                        <input type="text" className="form-control"/>
                                     </div>
                                  </div>
                                  <div className="col-lg-4">
                                     <div className="form-group">
                                        <label> Special Tests </label>
                                        <input type="text" className="form-control"/>
                                     </div>
                                  </div>
                               </div>
                               <input type="submit" className="btn submit-btn" value="Submit"/>
                            </div>

                            <div className="d-flex mt-4 mb-4 justify-content-center align-items-center">
                                <a id="veiw-do-btn" target="_blank" data-bs-dismiss="modal" className="btn view-dc">  View Documents </a>
                                <a id="logindetails-btn" data-bs-dismiss="modal" className="btn login-dc-btn ms-3">  Login Activity </a>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>


           <ComonFilter/>


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


export default AdminLabDocuments;
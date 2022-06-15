import React from "react";
import AdminSidebar from "./AdminSidebar";
import TopMenu from"./components/TopMenu";
import AdminMobileMenu from "./components/AdminMobileMenu";
import Iconanal from "../src/images/techni-icon.svg";
import downloadicon from "../src/images/download-icon.svg";
import editicon from "../src/images/edit-icon.svg";
import filtericon from "../src/images/filter-icon.svg";
import deleteiconnwhite from "../src/images/dl-icon-white.svg";
import deleteiconn from "../src/images/delete-icon.svg";
import TechnicanDropdown from "./components/TechnicanDropdown";
import TechnicianTable from "./components/TechnicianTable";
import techicianBigimg from "../src/images/user-bigimg.svg";
import { FaBars, FaRupeeSign, FaBell, FaCircle, FaRegEye, FaAngleLeft } from "react-icons/fa";
import $ from "jquery";
import { NavLink } from "react-router-dom";
import MedicalCertificate from "./components/MedicalCertificate";
import CrinicalFile from "./components/CrinicalFile";
import icontechnic from "../src/images/techni-icon.svg";
import fileimgNew from "../src/images/fileimg.svg";
import docimgNew from "../src/images/dockimg.svg";
import pdfimgNew from "../src/images/pdfimg.svg";
import { BsXLg, BsDownload } from "react-icons/bs";
import imgresume from "../src/images/resumeicon.svg";
import TechnicialFilter from "./components/TechnicialFilter";


class Technician extends React.Component {
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
          $("#Ts-documents-btn").click(function(){
            $("#tes-documents").show();
            $("#main-tes").hide();
          });

          $("#backlab-btn-2").click(function(){
            $("#tes-documents").hide();
            $("#main-tes").show();
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
                    <div id="main-tes" className="dasb-div bk-div pe-lg-3 float-start w-100">
                        <div className="bk-inside-div">
                            <div className="col-lg-12 ps-lg-0">
                                <div className="show-date-details px-3 d-sm-flex shadow mb-5 mb-lg-0">
                                    
                                    <h6 className="my-4 my-md-0 cm-heading-page"> <span className="me-2"> <img src={Iconanal} alt="cl"/> </span> Technician </h6>
                                
                                    <NavLink to="/addtechician" className="btn graph-btn"> Register Technicians </NavLink>
                                    
                                
                                </div>
                            </div>

                            
                        </div> 

                        <div className="technician-table mt-4">
                            <div className="tab-table pt-3 mb-5 mt-4 mt-lg-0">
                                <div className="d-sm-flex px-3 justify-content-between align-items-start">
                                <h2 className="cm-heading mb-3 mb-md-0">Technician Information 
                                    <span className="d-block sub-text"> 15 Results Found </span>
                                </h2>
                                <div className="gp-button d-sm-flex justify-content-between align-items-center">
                                        <div className="dropdown ">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            All

                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" >All</a></li>
                                            <li><a className="dropdown-item" >Action</a></li>
                                            <li><a className="dropdown-item" >Inactive</a></li>
                                            
                                            </ul>
                                        </div>

                                        
                                        <button className="btn edit-btn mb-4 mb-md-0">
                                            <span> <img src={editicon} alt="dn"/> </span> Edit
                                        </button>

                                        <button className="btn download-btn mb-4 mb-md-0">
                                            <span> <img src={downloadicon} alt="dn"/> </span> Download
                                        </button>

                                        <button className="btn filter-btn sp-new-filter mb-4 mb-md-0"
                                        data-bs-toggle="offcanvas" href="#offcanvasFilter"  role="button" aria-controls="offcanvasExample">
                                            <span> <img src={filtericon} alt="dn"/> </span>
                                        </button>
                                </div>
                                </div>

                                <div className="table-sec-div ">
                                     <TechnicianTable/>
                                </div>
                            </div>
                        </div>
                        
                    
                    </div>

                    <div id="tes-documents">
       
                         <div className="dasb-div lab-page-div bk-div pe-lg-3 float-start w-100">
                        <a id="backlab-btn-2"> <FaAngleLeft/> Back </a>
                            <div className="bk-inside-div mt-4">
                                <div className="col-lg-12 ps-lg-0">
                                    <div className="show-date-details d-sm-flex shadow mb-5 mb-lg-0">
                                        <div className="col-12 d-sm-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <h6 className="my-4 my-md-0 cm-heading-page"> 
                                                    <span className="me-2"> <img src={icontechnic} alt="cl"/> </span> Technicians Documents </h6>
                                                    
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
                                                        <a data-bs-toggle="modal" data-bs-target="#exampleResume" className="cm-links">
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
                                                        <a id="#" data-bs-toggle="modal" data-bs-target="#exampleResume" className="cm-links">
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
                                                        <a id="#" data-bs-toggle="modal" data-bs-target="#exampleResume" className="cm-links">
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
                                                        <a id="#" data-bs-toggle="modal" data-bs-target="#exampleResume" className="cm-links">
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
                                                            <a id="#" data-bs-toggle="modal" data-bs-target="#exampleResume" className="cm-links">
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
                                                            <a id="#" data-bs-toggle="modal" data-bs-target="#exampleResume" className="cm-links">
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
                                   <a id="Ts-documents-btn" data-bs-dismiss="modal" aria-label="Close" className="btn view-dc"> View Documents </a>
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


            <div class="modal fade" id="exampleResume" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Resume</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className="resume mx-auto col-12">
                          <figure className="d-table mx-auto">
                             <img src={imgresume} alt="resume"/>
                          </figure>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>

           <TechnicialFilter/>
        
          </>
      );
    }
  }

export default Technician;
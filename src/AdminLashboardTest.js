import React from "react";
import LashboardSidebar from "./LashboardSidebar";
import TopMenu from"./components/TopMenu";
import Testanal from "../src/images/test-icon.svg";
import graphicon from "../src/images/graph-icon.svg";
import TestTable from "./components/TestTable";
import downloadicon from "../src/images/download-icon.svg";
import editicon from "../src/images/edit-icon.svg";
import cmaddicon from "../src/images/add-icon.svg";
import filtericon from "../src/images/filter-icon.svg";
import DrodownTestSerach from "./components/DrodownTestSerach";
import AnalGraphWeek from "./components/AnalGraphWeek";
import AnalGraphMonth from "./components/AnalGraphMonth";
import AddTestSection from "./components/AddTestSection";
import FileUploadSection from "./components/FileUploadSection";
import Packgicon from "../src/images/packages-icon.svg";
import reddeleteicon from "../src/images/red-dele.svg"; 
import TestsTable from "./components/TestsTable";
import { FaBars, FaChevronLeft } from "react-icons/fa";
import $ from "jquery";
import MobileMenu from "./components/MobileMenu";
import PackagesTable from "./components/PackagesTable";
import LabTestFilter from "./components/LabTestFilter";
import { NavLink } from "react-router-dom";

class AdminLashboardTest extends React.Component {
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
            $("#package-table-btn").click(function(){
              $("#packgae-menu").show();
              $("#packages-table").show();
              $("#back-btn1").show();
              $("#test-table-div").hide();
              $("#text-menu").hide();
            });

            $("#back-btn1").click(function(){
                $("#packgae-menu").hide();
                $("#packages-table").hide();
                $("#back-btn1").hide();
                $("#test-table-div").show();
                $("#text-menu").show();
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

                    <div className="dasb-div bk-div  float-start w-100 float-start w-100">
                       <a id="back-btn1" className="btn mb-0 ps-0"> <FaChevronLeft/> Back</a>
                        <div className="bk-inside-div ">
                            <div className="col-lg-12 ps-lg-0">
                             <div id="text-menu" className="mt-0">
                                <div className="show-date-details px-3 d-sm-flex shadow mb-5 mb-lg-0">
                                    <div className="d-flex align-items-center">
                                       <h6 className="my-4 my-md-0 cm-heading-page"> <span> <img src={Testanal} alt="cl"/> </span> Tests </h6>
                                       <NavLink to="/labpackagepage"  className="btn pack-btn ms-3">
                                       Packages</NavLink>
                                    </div>
                                    
                                
                                    <div className="d-flex justify-content-md-end">
                                    <a data-bs-toggle="modal" data-bs-target="#addtestModal" className="btn addtest-btn"> <img src={cmaddicon} alt="cl"/> Add Test </a>
                                    <a data-bs-toggle="modal" data-bs-target="#bulkModal" className="btn bulk-btn ms-3"> <img src={cmaddicon} alt="cl"/> Bulk Test </a>
                                    </div>
                                    
                                    
                                
                                </div>
                             </div>
                             <div id="packgae-menu" className="mt-3">
                                    <div className="show-date-details px-3 d-sm-flex shadow mb-5 mb-lg-0">
                                    <div className="d-flex align-items-center">
                                        <h6 className="my-4 my-md-0 cm-heading-page"> <span> <img src={Packgicon} alt="cl"/> </span> Packages </h6>
                                      
                                    </div>
                                    
                                
                                    <div className="d-flex justify-content-md-end">
                                       <a id="#"  className="btn pack-btn ms-3">Packages</a>
                                    </div>
                                    
                                    
                                
                                    </div>
                             </div>
                            </div>

                            
                        </div> 

                        <div className="anal-table mt-4">
                            <div className="tab-table pt-3 mb-5">
                             <div id="test-table-div">
                                <div className="d-sm-flex px-3 justify-content-between align-items-start">
                                <h2 className="cm-heading mb-3 mb-md-0"> Test Information 
                                    <span className="d-block sub-text"> 15 Results Found </span>
                                </h2>
                                    <div className="gp-button d-flex justify-content-between align-items-center">
                                        

                                        <button className="btn download-btn mb-sm-0">
                                            <span className="rd-delet-icon"> <img src={reddeleteicon} alt="dn"/> </span>Delete
                                        </button>

                                        <button className="btn edit-btn mb-sm-0">
                                            <span> <img src={editicon} alt="dn"/> </span> Edit
                                        </button>
                                
                                        <button className="btn download-btn mb-sm-0">
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

                                <div className="table-sec-div ">
                                <TestTable/>
                                </div>
                             </div>
                             <div id="packages-table">
                                <div className="d-sm-flex justify-content-between align-items-start">
                                        <h2 className="cm-heading mb-3 mb-md-0"> Packages
                                            <span className="d-block sub-text"> 15 Results Found </span>
                                        </h2>
                                        <div className="gp-button d-flex justify-content-between align-items-center">
                                            
                                            <button className="btn edit-btn mb-sm-0">
                                                <span> <img src={editicon} alt="dn"/> </span> Edit
                                            </button>
                                    
                                            <button className="btn download-btn mb-sm-0">
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

                                <div className="table-sec-div ">
                                <PackagesTable/>
                                </div>
                             </div>
                            </div>
                        </div>
                        
                    
                    </div>
                    </div>
                </main>
           </div>



            <div class="modal fade" id="addtestModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title cm-titel-modal" id="exampleModalLabel">Add Test</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className="add-test-modal col-lg-11 mx-auto">
                            <h5> Test Details </h5>
                            <hr/>
                            
                            <AddTestSection/>

                            <button type="button" class="btn add-test-m" data-bs-dismiss="modal" aria-label="Close">
                                Add Test
                            </button>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>




  
            <div class="modal fade" id="bulkModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title cm-titel-modal" id="exampleModalLabel">Bulk Upload</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body px-0 blulks-upload-modal">
                        <div className="file-upload-modal px-3 col-lg-12 mx-auto">
                            
                            
                            <FileUploadSection/>

                            
                        </div>
                        <hr/>

                        <div className="test-table-modal">
                            <div className="tab-table p-0 mb-5">
                                <div className="d-sm-flex px-3 justify-content-between align-items-start">
                                <h2 className="cm-heading mb-3 mb-md-0"> Test Information
                                    <span className="d-block sub-text"> 15 Results Found </span>
                                </h2>
                                    <div className="gp-button d-sm-flex justify-content-between align-items-center">
                                        
                                        <button className="btn edit-btn mb-4 mb-md-0">
                                            <span> <img src={editicon} alt="dn"/> </span> Edit
                                        </button>
                                
                                        <button className="btn download-btn mb-4 mb-md-0">
                                            <span> <img src={downloadicon} alt="dn"/> </span> Download
                                        </button>


                                        

                                    </div>
                                </div>

                                <div className="table-sec-div ">
                                    <TestsTable/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
            <MobileMenu/>

            <LabTestFilter/>
          </>
      );
    }
  }

export default AdminLashboardTest;
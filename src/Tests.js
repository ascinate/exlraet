import React from "react";
import Sidebar from "./Sildebar";
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
import TestsTable from "./components/TestsTable";
import { FaBars } from "react-icons/fa";
import $ from "jquery";
import MobileMenu from "./components/MobileMenu";


class Tests extends React.Component {
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

                    <div className="dasb-div bk-div px-3 pe-lg-3  float-start w-100">
                        <div className="bk-inside-div">
                            <div className="col-lg-12 ps-lg-0">
                                <div className="show-date-details d-sm-flex shadow mb-5 mb-lg-0">
                                    
                                    <h6 className="my-4 my-md-0 cm-heading-page"> <span> <img src={Testanal} alt="cl"/> </span> Tests </h6>
                                
                                    <div className="d-flex justify-content-md-end">
                                    <a data-bs-toggle="modal" data-bs-target="#addtestModal" className="btn addtest-btn"> <img src={cmaddicon} alt="cl"/> Add Test </a>
                                    <a data-bs-toggle="modal" data-bs-target="#bulkModal" className="btn bulk-btn ms-3"> <img src={cmaddicon} alt="cl"/> Bulk Test </a>
                                    </div>
                                    
                                    
                                
                                </div>
                            </div>

                            
                        </div> 

                        <div className="anal-table mt-4">
                            <div className="tab-table p-3 mb-5">
                                <div className="d-sm-flex justify-content-between align-items-start">
                                <h2 className="cm-heading mb-3 mb-md-0"> Test Information 
                                    <span className="d-block sub-text"> 15 Results Found </span>
                                </h2>
                                    <div className="gp-button d-sm-flex justify-content-between align-items-center">
                                        
                                        <button className="btn edit-btn mb-4 mb-sm-0">
                                            <span> <img src={editicon} alt="dn"/> </span> Edit
                                        </button>
                                
                                        <button className="btn download-btn mb-4 mb-sm-0">
                                            <span> <img src={downloadicon} alt="dn"/> </span> Download
                                        </button>


                                        <div className="btn-group">
                                            <button className="btn  filter-btn dropdown-toggle" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                            <span> <img src={filtericon} alt="dn"/> </span> Filter By
                                            </button>
                                            <ul className="dropdown-menu anals-div-dp" aria-labelledby="dropdownMenuClickableInside">
                                                <li>
                                                    <DrodownTestSerach/>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="table-sec-div ">
                                <TestTable/>
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
                            <div className="row row-cols-1 row-cols-lg-3">
                                <div className="col">
                                <div className="from-group mb-4 mb-lg-0">
                                    <label> Test Code </label>
                                    <input type="text" className="form-control"/>
                                </div>
                                
                                
                                </div>
                                <div className="col">
                                <div className="from-group mb-4 mb-lg-0">
                                    <label> Test Sample </label>
                                    <input type="text" className="form-control"/>
                                </div>
                                
                                
                                </div>

                                <div className="col">
                                <div className="from-group mb-4 mb-lg-0">
                                    <label> Sample Quantity </label>
                                    <input type="text" className="form-control"/>
                                </div>
                                
                                
                                </div>

                            </div>
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
                    <div class="modal-body blulks-upload-modal">
                        <div className="file-upload-modal col-lg-12 mx-auto">
                            
                            
                            <FileUploadSection/>

                            
                        </div>
                        <hr/>

                        <div className="test-table-modal">
                            <div className="tab-table p-0 mb-5">
                                <div className="d-sm-flex justify-content-between align-items-start">
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
          </>
      );
    }
  }

export default Tests;
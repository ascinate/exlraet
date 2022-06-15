import React from "react";
import Sidebar from "./Sildebar";
import TopMenu from"./components/TopMenu";
import Iconanal from "../src/images/icon-anlasis.svg";
import graphicon from "../src/images/graph-icon.svg";
import AnalTable from "./components/AnalTable";
import downloadicon from "../src/images/download-icon.svg";
import editicon from "../src/images/edit-icon.svg";
import filtericon from "../src/images/filter-icon.svg";
import DropdownSearch from "./components/DropdownSearch";
import AnalGraphWeek from "./components/AnalGraphWeek";
import AnalGraphMonth from "./components/AnalGraphMonth";
import $ from "jquery";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./components/MobileMenu";


class Analytics extends React.Component {
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
                    <div className="dasb-div bk-div  pe-lg-3 float-start w-100">
                        <div className="bk-inside-div">
                            <div className="col-lg-12 ps-lg-0">
                                <div className="show-date-details d-sm-flex shadow mb-5 mb-lg-0">
                                    
                                    <h6 className="my-4 my-md-0 cm-heading-page"> <span> <img src={Iconanal} alt="cl"/> </span> Analytics </h6>
                                
                                    <a data-bs-toggle="modal" data-bs-target="#analgraphModal" className="btn graph-btn"> <img src={graphicon} alt="cl"/> Graphical View </a>
                                    
                                
                                </div>
                            </div>

                            
                        </div> 

                        <div className="anal-table mt-4">
                            <div className="tab-table p-3 mb-5">
                                <div className="d-md-flex justify-content-between align-items-start">
                                <h2 className="cm-heading mb-3 mb-md-0"> Analytics
                                    <span className="d-block sub-text"> 15 Results Found </span>
                                </h2>
                                    <div className="gp-button d-flex justify-content-between align-items-center">
                                        
                                        <button className="btn edit-btn mb-md-0">
                                            <span> <img src={editicon} alt="dn"/> </span> Edit
                                        </button>
                                
                                        <button className="btn download-btn mb-md-0">
                                            <span> <img src={downloadicon} alt="dn"/> </span> Downlaod
                                        </button>


                                        <div className="btn-group">
                                            <button className="btn  filter-btn dropdown-toggle" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                            <span> <img src={filtericon} alt="dn"/> </span> Filter By
                                            </button>
                                            <ul className="dropdown-menu anals-div-dp" aria-labelledby="dropdownMenuClickableInside">
                                                <li>
                                                    <DropdownSearch/>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="table-sec-div ">
                                <AnalTable/>
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
          </>
      );
    }
  }

export default Analytics;
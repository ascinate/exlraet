import React from "react";
import $ from "jquery";
import { FaBars, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import MobileMenu from "./components/MobileMenu";
import Sidebar from "./Sildebar";
import TopMenu from"./components/TopMenu";
import Iconanal from "../src/images/slot-icon.svg";
import ComonCustomCaldender from "./components/ComonCustomCaldender";
import CalenderMultipleNew from "./components/CalenderMultipleNew";

class UserSlotPage extends React.Component {
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
                    <div className="dasb-div bk-div float-start w-100">
                        <div className="bk-inside-div">
                            <div className="col-lg-12 ps-lg-0">
                                <div className="show-date-details d-sm-flex shadow mb-5 mb-lg-0">
                                    
                                    <h6 className="my-4 my-md-0 cm-heading-page"> <span> <img src={Iconanal} alt="cl"/> </span> Available Slots </h6>
                                
                                   
                                    
                                
                                </div>
                            </div>

                            
                        </div> 

                        <div className="anal-table new-page-table bg-white mt-4">
                            <div className="col-sm-10 col-md-9 col-lg-7 d-sm-flex align-items-center mb-5">
                                <div className="col-lg-7">
                                   <div className="form-group">
                                   
                                      <label className="mb-2 d-block"> Select Date </label>

                                      <button class="btn sp-midn-bnt dropdown-toggle" type="button" >
                                      --Select--
                                      <CalenderMultipleNew/>
                                      </button>
                                      
                                   </div>
                                </div>

                                <div className="col-lg-3 ms-sm-3 mt-3 mt-sm-0">
                                   <div className="form-group">
                                      <label className="mb-2"> Pin code </label>
                                      <input type="text" className="form-control" />
                                   </div>
                                </div>

                                <input type="submit" className="btn slote-btn ms-sm-3" value="Check Slots"/>

                            </div>
                            <div className="col-lg-12 d-flex justify-content-between align-items-center mb-5">
                                <a id="#" className="btn arrow-btn"> <span> <FaAngleLeft/> 
                                </span>  Week <span> <FaAngleRight/> </span> </a>

                                <input type="submit" className="btn sumbit-btn1" value="Book"/>
                            </div>
                            <div className="veiw-caln">
                                <ComonCustomCaldender/>
                            </div>
                        </div>
                        
                    
                    </div>
                    </div>
                </main>
          </div> 
          </>
      );
    }
  }
export default UserSlotPage;
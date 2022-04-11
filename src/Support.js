import React from "react";
import Sidebar from "./Sildebar";
import TopMenu from"./components/TopMenu";
import SupportIcon from "../src/images/support-icon.svg";
import { FaBars } from "react-icons/fa";
import $ from "jquery";
import MobileMenu from "./components/MobileMenu";


class Support extends React.Component {
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
                    <div className="dasb-div bk-div px-3 pe-lg-3 float-start w-100">
                            <div className="bk-inside-div">
                                <div className="col-lg-12 ps-lg-0">
                                    <div className="show-date-details d-lg-flex shadow mb-5 mb-lg-0">
                                        
                                        <h6 className="my-4 my-md-0 cm-heading-page"> <span> <img src={SupportIcon} alt="cl"/> </span> Support </h6>
                                    
                                    </div>
                                </div>

                                
                            </div> 

                            <div className="support-sec-div mt-4">
                                <div className="row row-cols-1 row-cols-lg-2">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Lab Name</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Email ID</label>
                                            <input type="email" className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                            <label>Subject</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Message</label>
                                            <textarea className="form-control"></textarea>
                                            
                                        </div>
                                    </div>
                                </div>

                                <input type="submit" className="btn d-table mx-auto mb-4 submit-btn" value="Submit"/>
                                <p className="text-center"> Talk to our support representative at <b> 7607600250. </b>  </p>
                            </div>

                            
                        
                    
                    </div>
                    </div>
                </main>
            </div> 
          </>
      );
    }
  }


export default Support;
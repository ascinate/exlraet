import React from "react";
import MobileMenu from "./components/MobileMenu";
import AdminSidebar from "./AdminSidebar";
import Iconanal from "../src/images/techni-icon.svg";
import TopMenu from "./components/TopMenu";
import AddFormTechician from "./components/AddFormTechician";
import { FaBars } from "react-icons/fa";
import $ from "jquery";

class AddTechician extends React.Component {

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
      return (
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
                    <div className="dasb-div bk-div  pe-lg-3 float-start w-100">
                      <div className="bk-inside-div">
                          <div className="col-lg-12 ps-lg-0">
                              <div className="show-date-details d-sm-flex shadow mb-5 mb-lg-0">
                                  
                                  <h6 className="my-4 my-md-0 cm-heading-page"> <span className="me-2"> <img src={Iconanal} alt="cl"/> </span> Add Technician </h6>
                              
                              </div>
                          </div>

                      </div> 

                          <div className="ad-form-technic p-3 mb-5 mt-4">
                            
                              <AddFormTechician/>
                           
                          </div>
                    
                    </div>
                    </div>
                </main>
            </div>
          </>
      );
    }
  }

export default AddTechician;
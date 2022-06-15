import React from "react";
import MobileMenu from "./components/MobileMenu";
import AdminSidebar from "./AdminSidebar";
import TopMenu from"./components/TopMenu";
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
                    <div className="dasb-div bk-div px-3 pe-lg-3 float-start w-100">
                        
                    
                    </div>
                    </div>
                </main>
            </div>
          </>
      );
    }
  }

export default AddTechician;
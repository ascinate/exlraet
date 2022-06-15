import React from "react";
import BookingCtWeek from "./components/BookingCtWeek";
import BookingCtMonth from "./components/BookingCtMonth";
import RevieCtWeek from "./components/RevieCtWeek";
import RevieCtMonth from "./components/RevieCtMonth";
import CustomerCtweek from "./components/CustomerCtweek";
import CustomerCtMonth from "./components/CustomerCtMonth";
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
import roundck from "../src/images/round-check.svg";
import BookingTable from "./components/BookingTable";
import BookingModal from "./components/BookingModal";
import NewRevinew from "./components/NewRevinew";
import { BsEye  } from "react-icons/bs";
import { FaRupeeSign, FaBell, FaCircle } from "react-icons/fa";
import Sidebar from "./Sildebar";
import TopMenu from"./components/TopMenu";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./components/MobileMenu";
import $ from "jquery";


class Booking extends React.Component {
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
              <div className="dasb-div bk-div  float-start w-100">
                  <div className="bk-inside-div bg-white">
                    <h2 className="mn-heading mb-4"> Add Booking </h2>
                    <BookingModal/>
                  </div> 
                  
            
              </div>
            </div>
          </main>
        </div>
        <MobileMenu/>
      </>
    );
  }
}



export default Booking;
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
import AdminBookingModal from "./components/AdminBookingModal";
import NewRevinew from "./components/NewRevinew";
import { BsEye  } from "react-icons/bs";
import { FaRupeeSign, FaBell, FaCircle } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import TopMenu from"./components/TopMenu";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./components/MobileMenu";
import AdminSelTabFilter from "./components/AdminSelTabFilter";
import $ from "jquery";


class AdminBooking extends React.Component {
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
                  <div className="bk-inside-div bg-white">
                    <h2 className="mn-heading mb-4"> Add Booking </h2>
                    <AdminBookingModal/>
                  </div> 
                  
            
              </div>
            </div>
          </main>
        </div>


        <div class="modal fade" id="labIDeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Select Lab</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className="select-lab-div">
                             <div className="d-flex justify-content-between align-items-center w-100 justify-conent-between">
                                 <p className="mb-0"> 15 Results Found </p>
                                 
                                 <button className="btn filter-btn sp-new-filter  mb-4 mb-md-0"
                                 data-bs-toggle="offcanvas" href="#offcanvasFilter-sel-tab"  role="button" aria-controls="offcanvasExample">
                                 <span> <img src={filtericon} alt="dn"/> </span>
                                </button>
           
                             </div>

                             <div className="test-modal-add mt-3">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Lab ID</th>
                                        <th scope="col">Lab Name</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">City</th>
                                        <th scope="col">State</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>#55662323</td>
                                        <td>Sumit</td>
                                        <td>F 14/12, Model Town Delhi</td>
                                        <td>Chandigargh</td>
                                        <td>Chandigargh</td>
                                        <td>  <p className="mb-0 btn slect-btn"> Select </p>    </td>
                                    </tr>

                                    <tr>
                                        <td>#55662323</td>
                                        <td>Jhon</td>
                                        <td>F 14/12, Model Town Delhi</td>
                                        <td>Chandigargh</td>
                                        <td>Chandigargh</td>
                                        <td>  <p className="mb-0 btn slect-btn"> Select </p>    </td>
                                    </tr>

                                    <tr>
                                        <td>#55662323</td>
                                        <td>Sam</td>
                                        <td>F 14/12, Model Town Delhi</td>
                                        <td>Chandigargh</td>
                                        <td>Chandigargh</td>
                                        <td>  <p className="mb-0 btn slect-btn"> Select </p>    </td>
                                    </tr>

                                    <tr>
                                        <td>#55662323</td>
                                        <td>Robert</td>
                                        <td>F 14/12, Model Town Delhi</td>
                                        <td>Chandigargh</td>
                                        <td>Chandigargh</td>
                                        <td>  <p className="mb-0 btn slect-btn"> Select </p>    </td>
                                    </tr>


                                    <tr>
                                        <td>#55662323</td>
                                        <td>James</td>
                                        <td>F 14/12, Model Town Delhi</td>
                                        <td>Chandigargh</td>
                                        <td>Chandigargh</td>
                                        <td>  <p className="mb-0 btn slect-btn"> Select </p>    </td>
                                    </tr>

                                    <tr>
                                        <td>#55662323</td>
                                        <td>Ankush</td>
                                        <td>F 14/12, Model Town Delhi</td>
                                        <td>Chandigargh</td>
                                        <td>Chandigargh</td>
                                        <td>  <p className="mb-0 btn slect-btn"> Select </p>    </td>
                                    </tr>


                                   
                                    </tbody>
                                </table>
                             </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
         </div>

         <AdminSelTabFilter/>
        <MobileMenu/>
      </>
    );
  }
}



export default AdminBooking;
import React from "react";
import fileicon from "../images/file.svg";
import roketicon from "../images/rocket-icon.svg";
import flagicon from "../images/flag-icon.svg";
import chckicon from "../images/check-icon.svg";
import subicon from "../images/file-ck.svg";
import PayUpload from "./PayUpload";



function LabNotificationPayment(){
    return(
        <>
        <table className="table mt-4 table-hover inside-sp table-responsive">
        <thead>
        <tr className="bg-row">
            <th scope="col">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                
              </div>
            </th>
            <th scope="col">S. No.</th>
            <th scope="col">Lab ID</th>
            <th scope="col">Date</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Amount</th>
            <th scope="col">Action</th>
            
        </tr>
        </thead>
      <tbody>
            <tr>
                <td>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                    
                </div>
                </td>
                <td>
                   1
                </td>
                <td>
                <a className="showSingle" target="1">  #55662323 </a> </td>
                
                <td>
                10-04-2022  To  05-04-2022
                </td>
                <td>
                Chandigarh
                </td>
                <td>
                Punjab
                </td>
                <td>
                1500
                </td>
                
               
                
                <td>
                    <a data-bs-toggle="modal" data-bs-target="#notificationModal" className="btn paynew-btn1">Pay</a>
                </td>
                

                
            </tr>

            <tr>
                <td>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                    
                </div>
                </td>
                <td>
                  2
                </td>
                <td>
                <a className="showSingle" target="1">  #55662323 </a> </td>
                
                <td>
                10-04-2022  To  05-04-2022
                </td>
                <td>
                Chandigarh
                </td>
                <td>
                Punjab
                </td>
                <td>
                1500
                </td>
                
               
                
                <td>
                <a data-bs-toggle="modal" data-bs-target="#notificationModal" className="btn paynew-btn1"> Pay </a>
                </td>
                

                
            </tr>

            <tr>
                <td>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                    
                </div>
                </td>
                <td>
                3
             </td>
             <td>
             <a className="showSingle" target="1">  #55662323 </a> </td>
             
             <td>
             10-04-2022  To  05-04-2022
             </td>
             <td>
             Chandigarh
             </td>
             <td>
             Punjab
             </td>
             <td>
             1500
             </td>
             
            
             
             <td>
               <a data-bs-toggle="modal" data-bs-target="#notificationModal" className="btn paynew-btn1"> Pay </a>
             </td>
                

                
            </tr>


            <tr>
                <td>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                    
                </div>
                </td>
                <td>
                  4
                </td>
                <td>
                <a className="showSingle" target="1">  #55662323 </a> </td>
                
                <td>
                10-04-2022  To  05-04-2022
                </td>
                <td>
                Chandigarh
                </td>
                <td>
                Punjab
                </td>
                <td>
                1500
                </td>
                
               
                
                <td>
                  <a data-bs-toggle="modal" data-bs-target="#notificationModal" className="btn paynew-btn1"> Pay </a>
                </td>
                

                
            </tr>

            <tr>
                <td>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                    
                </div>
                </td>
                <td>
                   5
                </td>
                <td>
                <a className="showSingle" target="1">  #55662323 </a> </td>
                
                <td>
                10-04-2022  To  05-04-2022
                </td>
                <td>
                Chandigarh
                </td>
                <td>
                Punjab
                </td>
                <td>
                1500
                </td>
                
               
                
                <td>
                  <a data-bs-toggle="modal" data-bs-target="#notificationModal"
                   className="btn paynew-btn1">Pay </a>
                </td>

                
            </tr>

            <tr>
                <td>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                    
                </div>
                </td>
                <td>
                   6
                </td>
                <td>
                <a className="showSingle" target="1">  #55662323 </a> </td>
                
                <td>
                10-04-2022  To  05-04-2022
                </td>
                <td>
                Chandigarh
                </td>
                <td>
                Punjab
                </td>
                <td>
                1500
                </td>
                
               
                
                <td>
                 <a data-bs-toggle="modal" data-bs-target="#notificationModal"
                  className="btn paynew-btn1">Pay </a>
                </td>
                

                
            </tr>


      
      </tbody>
        </table>


        <div className="modal fade" id="notificationModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Payment Details</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="payment-div-d1">
                       <div className="row">
                        <div className="col-lg-7">
                           <div className="back-detaisls">
                              <h5> Bank Details </h5>
                              <ul className="list-unstyled">
                                 <li> Payee Name
                                  <span className="d-table">
                                  EXLRAET CORE CONNECT PRIVATE LIMITED
                                  </span>
                                 </li>

                                 <li> BANK NAME
                                  <span className="d-table">
                                  INDUSIND BANK
                                  </span>
                                 </li>

                                 <li>ACCOUNT NUMBER
                                  <span className="d-table">
                                  257860078601
                                  </span>
                                 </li>

                                 <li>IFSC CODE
                                  <span className="d-table">
                                  INDB0000401
                                  </span>
                                 </li>
                              </ul>
                           </div>
                        </div>
                          <div className="col-lg-5">
                              <div className="upload-sec-div">
                                 <h5> Upload Screenshot </h5>

                                 <div className="file-upload-modal col-lg-12 mx-auto">
                                        <PayUpload/>
                                 </div>
                                 <div className="form-group mt-3">
                                    <h5> Refrence Number</h5>
                                    <input type="text" className="form-control"/>
                                 </div>
                                 <div className="form-group mt-3">
                                  <input type="submit" className="btn ms-0 submit-btn" value="Submit"/>
                                 </div>
                              </div>
                          </div>
                       </div>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
        </>
    );
}
export default LabNotificationPayment;
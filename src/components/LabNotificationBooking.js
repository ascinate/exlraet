import React from "react";
import fileicon from "../images/file.svg";
import roketicon from "../images/rocket-icon.svg";
import flagicon from "../images/flag-icon.svg";
import chckicon from "../images/check-icon.svg";
import subicon from "../images/file-ck.svg";



function LabNotificationBooking(){
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
            <th scope="col">Order ID</th>
            <th scope="col">Date</th>
            <th scope="col">Time Slot</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Status</th>
            
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
                #Ord34354
                </td>
                <td>
                04-04-2022
                </td>
                <td>
                08:00 AM - 09:00 AM
                </td>
                <td>
                Chandigarh
                </td>
                <td>
                Punjab
                </td>
                
               
                
                <td>
                    <h6 className="st-text-sb">Submitted</h6>
                    08:00 AM
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
                #Ord34354
                </td>
                <td>
                04-04-2022
                </td>
                <td>
                08:00 AM - 09:00 AM
                </td>
                <td>
                Chandigarh
                </td>
                <td>
                Punjab
                </td>
                <td>
                    <h6 className="st-text-c"> Collected </h6>
                    08:00 AM
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
                #Ord34354
                </td>
                <td>
                04-04-2022
                </td>
                <td>
                08:00 AM - 09:00 AM
                </td>
                <td>
                Chandigarh
                </td>
                <td>
                Punjab
                </td>
                <td>
                    <h6 className="st-text-cn"> Cancel </h6>
                    08:00 AM
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
                #Ord34354
                </td>
                <td>
                04-04-2022
                </td>
                <td>
                08:00 AM - 09:00 AM
                </td>
                <td>
                Chandigarh
                </td>
                <td>
                Punjab
                </td>
                
                <td>
                    <h6 className="st-text-st"> Started </h6>
                    08:00 AM
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
                #Ord34354
                </td>
                <td>
                04-04-2022
                </td>
                <td>
                08:00 AM - 09:00 AM
                </td>
                <td>
                Chandigarh
                </td>
                <td>
                Punjab
                </td>
                
                <td>
                    <h6 className="st-text-cn"> In Progress </h6>
                    08:00 AM
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
                #Ord34354
                </td>
                <td>
                04-04-2022
                </td>
                <td>
                08:00 AM - 09:00 AM
                </td>
                <td>
                Chandigarh
                </td>
                <td>
                Punjab
                </td>
                
                <td>
                    <h6 className="st-text-c"> Pending </h6>
                    08:00 AM
                </td>
                

                
            </tr>


      
      </tbody>
        </table>
        </>
    );
}
export default LabNotificationBooking;
import React from "react";
import fileicon from "../images/file.svg";
import roketicon from "../images/rocket-icon.svg";
import flagicon from "../images/flag-icon.svg";
import chckicon from "../images/check-icon.svg";
import subicon from "../images/file-ck.svg";



function NotficationtableBooking(){
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
            <th scope="col">Lab Name</th>
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
                ABC Lab
                </td>
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
                    <h6 className="st-text-sb "> Submitted </h6>
                    <select class=" d-none form-select unpadi" aria-label="Default select example">
                    <option selected>Submitted</option>
                    <option value="1">Collected</option>
                    <option value="2">Cancel</option>
                    <option value="3">Started</option>
                    
                  </select>
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
                ABC Lab
                </td>
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
                    <select class=" d-none form-select unpadi" aria-label="Default select example">
                   
                    <option selected> Collected</option>
                    <option value="1">Submitted</option>
                    <option value="2">Cancel</option>
                    <option value="3">Started</option>
                  </select>
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
                ABC Lab
                </td>
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
                    <select class=" d-none form-select paid-sl" aria-label="Default select example">
                    <option selected>  Cancel</option>
                    <option value="1">Submitted</option>
                    <option value="2">Collected</option>
                    <option value="3">Started</option>
                  </select>
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
                ABC Lab
                </td>
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
                    <h6 className="st-text-st "> Started </h6>
                    <select class="form-select  d-none paid-sl" aria-label="Default select example">
                    <option selected>  Started</option>
                    <option value="1">Submitted</option>
                    <option value="2">Cancel</option>
                    <option value="3">Collected</option>
                  </select>
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
                ABC Lab
                </td>
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
                    <h6 className="st-text-st1 "> Submitted </h6>
                    <select class="form-select  d-none unpadi" aria-label="Default select example">
                    <option selected>  Started</option>
                    <option value="1">Submitted</option>
                    <option value="2">Cancel</option>
                    <option value="3">Collected</option>
                  </select>
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
                ABC Lab
                </td>
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
                    <h6 className="st-text-c "> Collected </h6>
                    <select class="form-select  d-none paid-sl" aria-label="Default select example">
                    <option selected> Collected</option>
                    <option value="1">Submitted</option>
                    <option value="2">Cancel</option>
                    <option value="3">Started</option>
                  </select>
                    08:00 AM
                </td>
                

                
            </tr>


      
      </tbody>
      </table>
        </>
    );
}
export default NotficationtableBooking;
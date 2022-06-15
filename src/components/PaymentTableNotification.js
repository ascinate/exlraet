import React from "react";
import fileicon from "../images/file.svg";
import roketicon from "../images/rocket-icon.svg";
import flagicon from "../images/flag-icon.svg";
import chckicon from "../images/check-icon.svg";
import subicon from "../images/file-ck.svg";
import ComonSelectOption from "./ComonSelectOption";
import CMselect from "./CMselect";
import PaidOption from "./PaidOption";
import UnPadin from "./UnPadin";

class  PaymentTableNotification extends React.Component {
    render() {
      return (
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
            <th scope="col">Payment Date</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Amount</th>
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
                  
                <select class="form-select unpadi" aria-label="Default select example">
                    <option selected>Paid</option>
                    <option value="1">Unpaid</option>
                </select>
                  
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
                 
                  <select class="form-select paid-sl" aria-label="Default select example">
                    <option selected>Unpaid</option>
                    <option value="1">Paid</option>
                  </select>
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
                <select class="form-select unpadi" aria-label="Default select example">
                    <option selected>Paid</option>
                    <option value="1">Unpaid</option>
                  </select>
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
                <select class="form-select unpadi" aria-label="Default select example">
                    <option selected>Paid</option>
                    <option value="1">Unpaid</option>
                  </select>
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
                <select class="form-select paid-sl" aria-label="Default select example">
                    <option selected>Unpaid</option>
                    <option value="1">Paid</option>
                  </select>
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
                ABC Lab
                </td>
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
                <select class="form-select unpadi" aria-label="Default select example">
                    <option selected>Paid</option>
                    <option value="1">Unpaid</option>
                  </select>
                </td>
                
            
                

            
            </tr>


      
      </tbody>
      </table>
        </>
      );
    }
  }
  

export default PaymentTableNotification;
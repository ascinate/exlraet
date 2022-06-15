import React from "react";
import fileicon from "../images/file.svg";
import roketicon from "../images/rocket-icon.svg";
import flagicon from "../images/flag-icon.svg";
import chckicon from "../images/check-icon.svg";
import subicon from "../images/file-ck.svg";
import $ from "jquery";

class AdminPackagesTable extends React.Component {
    componentWillMount(){

        
      }
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
                    <th scope="col">Lab <br/>
                    Name</th>
                    <th scope="col">Package  <br/>
                    Code</th>
                    <th scope="col">Package <br/>
                    Name</th>
                    <th scope="col">Parameters</th>
                    <th scope="col">Sample <br/>
                    Qty</th>
                    <th scope="col">Report <br/>
                    TAT</th>

                    <th scope="col">Commission
                   <br/>
                    %</th>
                    <th scope="col">Price</th>
                    
                    
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
                        Pac5656
                        </td>
                        <td>
                        Full Checkup
                        </td>
                        <td>
                        40
                        </td>
                        <td>
                        10
                        </td>
                        <td>
                        10
                        </td>
                        <td>
                        12%
                        </td>
                        <td>
                        Rs. 1200/-
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
                        Pac5656
                        </td>
                        <td>
                        Full Checkup
                        </td>
                        <td>
                        30
                        </td>
                        <td>
                        10
                        </td>
                        <td>
                        10
                        </td>
                        <td>
                        12%
                        </td>
                        <td>
                        Rs. 1200/-
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
                        Pac5656
                        </td>
                        <td>
                        Full Checkup
                        </td>
                        <td>
                        25
                        </td>
                        <td>
                        10
                        </td>
                        <td>
                        10
                        </td>
                        <td>
                        12%
                        </td>
                        <td>
                        Rs. 1200/-
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
                        Pac5656
                        </td>
                        <td>
                        Full Checkup
                        </td>
                        <td>
                        30
                        </td>
                        <td>
                        10
                        </td>
                        <td>
                        10
                        </td>
                        <td>
                        12%
                        </td>
                        <td>
                        Rs. 1200/-
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
                        Pac5656
                        </td>
                        <td>
                        Full Checkup
                        </td>
                        <td>
                       15
                        </td>
                        <td>
                        10
                        </td>
                        <td>
                        10
                        </td>
                        <td>
                        12%
                        </td>
                        <td>
                        Rs. 1200/-
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
                        Pac5656
                        </td>
                        <td>
                        Full Checkup
                        </td>
                        <td>
                        85
                        </td>
                        <td>
                        10
                        </td>
                        <td>
                        10
                        </td>
                        <td>
                        12%
                        </td>
                        <td>
                        Rs. 1200/-
                        </td>
                        
                        
        
                        
                    </tr>
        
                    
                
                </tbody>
          </table>
          </>
      );
    }
  }

export default AdminPackagesTable;
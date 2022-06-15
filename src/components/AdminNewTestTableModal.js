import React from "react";
import fileicon from "../images/file.svg";
import roketicon from "../images/rocket-icon.svg";
import flagicon from "../images/flag-icon.svg";
import chckicon from "../images/check-icon.svg";
import subicon from "../images/file-ck.svg";
import $ from "jquery";

class AdminNewTestTableModal extends React.Component {
    componentWillMount(){

       
        
      }
    render() {
      return (
          <>
          <table className="table mt-4 table-hover inside-sp table-responsive">
                <thead>
                <tr className="bg-row">
                    <th scope="col">


                    </th>
                    <th scope="col">S. No.</th>
                    <th scope="col">Test code</th>
                    <th scope="col">Test Name</th>
                    <th scope="col">Sample QTY</th>
                    <th scope="col">Method </th>
                    <th scope="col">Schedule <br/>
                    cut/ off</th>
                    <th scope="col">Reporting </th>
                    <th scope="col">Price</th>
                    
                    
                </tr>
                </thead>
                <tbody>
                <tr>
                        <td>
                        
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                
                            </div>
                        </td>
                    
                        <td>
                   1
                        </td>
                        <td>
                        ABC Lab
                        </td>
                        <td>
                        #55662323
                        </td>
                        <td>
                        01
                        </td>
                        <td>
                        Method 1
                        </td>
                        <td>
                        02 Hours
                        </td>
                        <td>
                        24 TAT
                        </td>
                        <td>
                        Rs. 1800/-
                        </td>
                        
                        
                    

            
                 </tr>
        


                 <tr>
                    <td>
                    
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            
                        </div>
                    </td>
                
                    <td>
                  2
                    </td>
                    <td>
                    ABC Lab
                    </td>
                    <td>
                    #55662323
                    </td>
                    <td>
                    01
                    </td>
                    <td>
                    Method 1
                    </td>
                    <td>
                    02 Hours
                    </td>
                    <td>
                    24 TAT
                    </td>
                    <td>
                    Rs. 1800/-
                    </td>
                    
                    
                
    
                
                </tr>


                <tr>
                    <td>
                    
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            
                        </div>
                    </td>
                
                    <td>
                   3
                    </td>
                    <td>
                    ABC Lab
                    </td>
                    <td>
                    #55662323
                    </td>
                    <td>
                    05
                    </td>
                    <td>
                    Method 1
                    </td>
                    <td>
                    02 Hours
                    </td>
                    <td>
                    12 TAT
                    </td>
                    <td>
                    Rs. 1800/-
                    </td>
                    
                    
                
    
                
                </tr>
        
                   
            
                <tr>
                    <td>
                    
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            
                        </div>
                    </td>
                
                    <td>
                   4
                    </td>
                    <td>
                    ABC Lab
                    </td>
                    <td>
                    #55662323
                    </td>
                    <td>
                    01
                    </td>
                    <td>
                    Method 1
                    </td>
                    <td>
                    02 Hours
                    </td>
                    <td>
                    12 TAT
                    </td>
                    <td>
                    Rs. 1800/-
                    </td>
                    
                    
                
    
                
                </tr>


                    
        
            <tr>
            <td>
               
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    
                </div>
            </td>
           
            <td>
            5
            </td>
            <td>
            ABC Lab
            </td>
            <td>
            #55662323
            </td>
            <td>
            01
            </td>
            <td>
            Method 1
            </td>
            <td>
            02 Hours
            </td>
            <td>
            24 TAT
            </td>
            <td>
            Rs. 1800/-
            </td>
            
            
            

            
            </tr>


                   
        
                   
        

                
        
                    
                
                </tbody>
          </table>
          </>
      );
    }
  }

export default AdminNewTestTableModal;
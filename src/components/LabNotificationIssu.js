import React from "react";
import fileicon from "../images/file.svg";
import roketicon from "../images/rocket-icon.svg";
import flagicon from "../images/flag-icon.svg";
import chckicon from "../images/check-icon.svg";
import subicon from "../images/file-ck.svg";
import { FaRegClock } from "react-icons/fa";




function LabNotificationIssu(){
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
            <th scope="col">Username</th>
            <th scope="col">User Number</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Issue</th>
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
                Ankit567
                </td>
                <td>
                0111
                </td>
                <td>
                Chandigarh
                </td>
                <td>
                Punjab
                </td>
                <td>
                
                <div className="dropdown">
                    <button className="btn comon-sp-btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Technical Issue
                    </button>
                    <ul className="dropdown-menu noshadow-dp dropdown-menu1" aria-labelledby="dropdownMenuButton1">
                        <li>
                           <div className="show-hover-td">
                              <p> Lorem ipsum dolor sit amet. Eos quam alias ea sunt
                               repudiandae eos expedita possimus 33 soluta.</p>
                              <span className="d-block"> <FaRegClock/> 22-04-2022, 08:00 AM</span>
                           </div>
                        </li>
                    </ul>
                </div>
                </td>
               
                
                <td>
                    <h6 className="st-text-sb"> Resolved </h6>
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
                Ankit567
                </td>
                <td>
                0111
                </td>
                <td>
                Chandigarh
                </td>
                <td>
                Punjab
                </td>
                <td>
                <div className="dropdown">
                        <button className="btn comon-sp-btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Technical Issue
                        </button>
                        <ul className="dropdown-menu noshadow-dp dropdown-menu1" aria-labelledby="dropdownMenuButton1">
                            <li>
                            <div className="show-hover-td">
                                <p> Lorem ipsum dolor sit amet. Eos quam alias ea sunt
                                repudiandae eos expedita possimus 33 soluta.</p>
                                <span className="d-block"> <FaRegClock/> 22-04-2022, 08:00 AM</span>
                            </div>
                            </li>
                        </ul>
                    </div>
                </td>
                <td>
                    <h6 className="st-text-c"> Collected </h6>
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
                Ankit567
                </td>
                <td>
                0111
                </td>
                <td>
                Chandigarh
                </td>
                <td>
                Punjab
                </td>
                <td>
                <div className="dropdown">
                    <button className="btn comon-sp-btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Technical Issue
                    </button>
                    <ul className="dropdown-menu noshadow-dp dropdown-menu1" aria-labelledby="dropdownMenuButton1">
                        <li>
                        <div className="show-hover-td">
                            <p> Lorem ipsum dolor sit amet. Eos quam alias ea sunt
                            repudiandae eos expedita possimus 33 soluta.</p>
                            <span className="d-block"> <FaRegClock/> 22-04-2022, 08:00 AM</span>
                        </div>
                        </li>
                    </ul>
                </div>
                </td>
                <td>
                    <h6 className="st-text-cn"> Cancel </h6>
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
                Ankit567
                </td>
                <td>
                0111
                </td>
                <td>
                Chandigarh
                </td>
                <td>
                Punjab
                </td>
                <td>
                <div className="dropdown">
                    <button className="btn comon-sp-btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Technical Issue
                    </button>
                    <ul className="dropdown-menu noshadow-dp dropdown-menu1" aria-labelledby="dropdownMenuButton1">
                        <li>
                        <div className="show-hover-td">
                            <p> Lorem ipsum dolor sit amet. Eos quam alias ea sunt
                            repudiandae eos expedita possimus 33 soluta.</p>
                            <span className="d-block"> <FaRegClock/> 22-04-2022, 08:00 AM</span>
                        </div>
                        </li>
                    </ul>
                </div>
                </td>
                
                <td>
                    <h6 className="st-text-st"> Started </h6>
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
                Ankit567
                </td>
                <td>
                0111
                </td>
                <td>
                Chandigarh
                </td>
                <td>
                Punjab
                </td>
                <td>
                <div className="dropdown">
                        <button className="btn comon-sp-btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Technical Issue
                        </button>
                        <ul className="dropdown-menu noshadow-dp dropdown-menu1" aria-labelledby="dropdownMenuButton1">
                            <li>
                            <div className="show-hover-td">
                                <p> Lorem ipsum dolor sit amet. Eos quam alias ea sunt
                                repudiandae eos expedita possimus 33 soluta.</p>
                                <span className="d-block"> <FaRegClock/> 22-04-2022, 08:00 AM</span>
                            </div>
                            </li>
                        </ul>
                    </div>
                </td>
                
                <td>
                    <h6 className="st-text-cn"> In Progress </h6>
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
                Ankit567
                </td>
                <td>
                0111
                </td>
                <td>
                Chandigarh
                </td>
                <td>
                Punjab
                </td>
                <td>
                <div className="dropdown">
                    <button className="btn comon-sp-btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Technical Issue
                    </button>
                    <ul className="dropdown-menu noshadow-dp dropdown-menu1" aria-labelledby="dropdownMenuButton1">
                        <li>
                        <div className="show-hover-td">
                            <p> Lorem ipsum dolor sit amet. Eos quam alias ea sunt
                            repudiandae eos expedita possimus 33 soluta.</p>
                            <span className="d-block"> <FaRegClock/> 22-04-2022, 08:00 AM</span>
                        </div>
                        </li>
                    </ul>
                </div>
                </td>
                
                <td>
                    <h6 className="st-text-c"> Pending </h6>
                </td>
                

                
            </tr>


      
      </tbody>
        </table>
        </>
    );
}
export default LabNotificationIssu;
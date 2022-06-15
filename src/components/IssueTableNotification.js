import React from "react";
import fileicon from "../images/file.svg";
import roketicon from "../images/rocket-icon.svg";
import flagicon from "../images/flag-icon.svg";
import chckicon from "../images/check-icon.svg";
import subicon from "../images/file-ck.svg";
import { FaRegClock } from "react-icons/fa";


function IssueTableNotification(){
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
                ABC Lab
                </td>
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
                <div className="dropdown position-relative">
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
                    <h6 className="st-text-sb d-none"> Resolved </h6>
                    <select class="form-select  unpadi" aria-label="Default select example">
                    <option selected>Resolved</option>
                    <option value="1">Pending</option>
                    <option value="2">In Progress</option>
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
                <div className="dropdown position-relative">
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
                    <h6 className="st-text-c d-none"> Collected </h6>
                    <select class="form-select paid-sl" aria-label="Default select example">
                    <option selected> Pending</option>
                    <option value="1">Resolved</option>
                    <option value="2">In Progress</option>
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
                <div className="dropdown position-relative">
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
                    <h6 className="st-text-cn d-none"> Cancel </h6>
                    <select class="form-select  unpadi" aria-label="Default select example">
                    <option selected>Resolved</option>
                    <option value="1">Pending</option>
                    <option value="2">In Progress</option>
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
                <div className="dropdown position-relative">
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
                    <h6 className="st-text-st d-none"> Started </h6>
                    <select class="form-select  inpro" aria-label="Default select example">
                    <option selected>In Progress</option>
                    <option value="1">Pending</option>
                    <option value="2">In Progress</option>
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
                <div className="dropdown position-relative">
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
                    <h6 className="st-text-st1 d-none"> Submitted </h6>
                    <select class="form-select  unpadi" aria-label="Default select example">
                    <option selected>Resolved</option>
                    <option value="1">Pending</option>
                    <option value="2">In Progress</option>
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
                <div className="dropdown position-relative">
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
                    <h6 className="st-text-c d-none"> Collected </h6>
                    <select class="form-select  unpadi" aria-label="Default select example">
                    <option selected>Resolved</option>
                    <option value="1">Pending</option>
                    <option value="2">In Progress</option>
                  </select>
                </td>
                

                
            </tr>


      
      </tbody>
      </table>
        </>
    );
}
export default IssueTableNotification;
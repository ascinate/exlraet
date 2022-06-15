import React from "react";
import fileicon from "../images/file.svg";
import roketicon from "../images/rocket-icon.svg";
import flagicon from "../images/flag-icon.svg";
import chckicon from "../images/check-icon.svg";
import subicon from "../images/file-ck.svg";
import $ from "jquery";
import { FaAngleDown } from "react-icons/fa";




class NewAnualTable extends React.Component {
    componentWillMount(){

        $(document).ready(function(){
            $(function(){
                $('.showSingle').click(function(){
                   var target = $(this).attr('target');
                    $('#div'+target).toggle('.hide');
                });
            });
          });
        
    }
    render() {
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
              <th scope="col">Order ID</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Date</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Test Name</th>
              <th scope="col">Beneficiary</th>
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
                  <a className="showSingle" target="1">  #55662323 </a> </td>
                  <td>
                  Veena Rao
                  <span className="d-block"> 30 Yrs, Female </span> 
                  </td>
                  <td>
                      
                      <div class="dropdown position-relative">
                        <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        F 14/12, Model...

                        </button>
                        <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                            <li>
                            <p>F 14/12, Model Town Delhi
                            </p> 
                            </li>
                        </ul>
                      </div>
                  </td>
                  <td>
                  22-05-2022
                  </td>
                  <td>
                  04852121252
                  </td>
                  <td>
                  Admin@gmail.com
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Thyroid...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p> Thyroid
                      </p> 
                      </li>
                  </ul>
                  </div>
                  </td>
                  <td>
                      02
                  </td>
                  <td>
                     <div className="d-flex justify-content-center align-items-center">
                        <div className="bn">
                          <h6 className="st-text-sb mb-0">  Completed </h6>
                          
                        </div>
                        
                     </div>

                     <span className="d-block"> 08:00 AM </span> 
                      
                  </td>
                  
  
                  
              </tr>
  
              <tr>
                  <td>
                  <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                      
                  </div>
                  </td>
                  <td>
                  <a className="showSingle" target="1">  #55662323 </a> </td>
                  <td>
                  Veena Rao
                  <span className="d-block"> 30 Yrs, Female </span> 
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  F 14/12, Model...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p>F 14/12, Model Town Delhi
                      </p> 
                      </li>
                  </ul>
                </div>
                  </td>
                  <td>
                  22-05-2022
                  </td>
                  <td>
                  04852121252
                  </td>
                  <td>
                  Admin@gmail.com
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Thyroid...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p> Thyroid
                      </p> 
                      </li>
                  </ul>
                  </div>
                  </td>
                  <td>
                      01
                  </td>
                  <td>
                      <h6 className="st-text-c"> Pending </h6>
                      <span className="d-block"> 08:00 AM </span> 
                  </td>
                  
  
              
              </tr>
  
              <tr>
                  <td>
                  <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                      
                  </div>
                  </td>
                  <td>
                  <a className="showSingle" target="1">  #55662323 </a> </td>
                  <td>
                  Veena Rao
                  <span className="d-block"> 30 Yrs, Female </span> 
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  F 14/12, Model...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p>F 14/12, Model Town Delhi
                      </p> 
                      </li>
                  </ul>
                </div>
                  </td>
                  <td>
                  22-05-2022
                  </td>
                  <td>
                  04852121252
                  </td>
                  <td>
                  Admin@gmail.com
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Thyroid...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p> Thyroid
                      </p> 
                      </li>
                  </ul>
                  </div>
                  </td>
                  <td>
                      01
                  </td>
                  <td>
                      <h6 className="st-text-c"> Pending </h6>
                      <span className="d-block"> 08:00 AM </span> 
                  </td>
                  
  
              
              </tr>
  
  
              <tr>
                  <td>
                  <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                      
                  </div>
                  </td>
                  <td>
                  <a className="showSingle" target="1">  #55662323 </a> </td>
                  <td>
                  Veena Rao
                  <span className="d-block"> 30 Yrs, Female </span> 
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  F 14/12, Model...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p>F 14/12, Model Town Delhi
                      </p> 
                      </li>
                  </ul>
                </div>
                  </td>
                  <td>
                  22-05-2022
                  </td>
                  <td>
                  04852121252
                  </td>
                  <td>
                  Admin@gmail.com
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Thyroid...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p> Thyroid
                      </p> 
                      </li>
                  </ul>
                  </div>
                  </td>
                  <td>
                      01
                  </td>
                  <td>
                      <h6 className="st-text-c"> Pending </h6>
                      <span className="d-block"> 08:00 AM </span> 
                  </td>
                  
  
              
              </tr>
  
              <tr>
                  <td>
                  <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                      
                  </div>
                  </td>
                  <td>
                  <a className="showSingle" target="1">  #55662323 </a> </td>
                  <td>
                  Veena Rao
                  <span className="d-block"> 30 Yrs, Female </span> 
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  F 14/12, Model...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p>F 14/12, Model Town Delhi
                      </p> 
                      </li>
                  </ul>
                </div>
                  </td>
                  <td>
                  22-05-2022
                  </td>
                  <td>
                  04852121252
                  </td>
                  <td>
                  Admin@gmail.com
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Thyroid...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p> Thyroid
                      </p> 
                      </li>
                  </ul>
                  </div>
                  </td>
                  <td>
                      01
                  </td>
                  <td>
                      <h6 className="st-text-c"> Pending </h6>
                      <span className="d-block"> 08:00 AM </span> 
                  </td>
                  
  
              
              </tr>
  
              <tr>
                  <td>
                  <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                      
                  </div>
                  </td>
                  <td>
                  <a className="showSingle" target="1">  #55662323 </a> </td>
                  <td>
                  Veena Rao
                  <span className="d-block"> 30 Yrs, Female </span> 
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  F 14/12, Model...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p>F 14/12, Model Town Delhi
                      </p> 
                      </li>
                  </ul>
                </div>
                  </td>
                  <td>
                  22-05-2022
                  </td>
                  <td>
                  04852121252
                  </td>
                  <td>
                  Admin@gmail.com
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Thyroid...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p> Thyroid
                      </p> 
                      </li>
                  </ul>
                  </div>
                  </td>
                  <td>
                      01
                  </td>
                  <td>
                      <h6 className="st-text-c"> Pending </h6>
                      <span className="d-block"> 08:00 AM </span> 
                  </td>
                  
  
              
              </tr>
  
  
              <tr>
                  <td>
                  <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                      
                  </div>
                  </td>
                  <td>
                  <a className="showSingle" target="1">  #55662323 </a> </td>
                  <td>
                  Veena Rao
                  <span className="d-block"> 30 Yrs, Female </span> 
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  F 14/12, Model...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p>F 14/12, Model Town Delhi
                      </p> 
                      </li>
                  </ul>
                </div>
                  </td>
                  <td>
                  22-05-2022
                  </td>
                  <td>
                  04852121252
                  </td>
                  <td>
                  Admin@gmail.com
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Thyroid...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p> Thyroid
                      </p> 
                      </li>
                  </ul>
                  </div>
                  </td>
                  <td>
                      01
                  </td>
                  <td>
                      <h6 className="st-text-c"> Pending </h6>
                      <span className="d-block"> 08:00 AM </span> 
                  </td>
                  
  
              
              </tr>
  
  
              <tr>
                  <td>
                  <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                      
                  </div>
                  </td>
                  <td>
                  <a className="showSingle" target="1">  #55662323 </a> </td>
                  <td>
                  Veena Rao
                  <span className="d-block"> 30 Yrs, Female </span> 
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  F 14/12, Model...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p>F 14/12, Model Town Delhi
                      </p> 
                      </li>
                  </ul>
                </div>
                  </td>
                  <td>
                  22-05-2022
                  </td>
                  <td>
                  04852121252
                  </td>
                  <td>
                  Admin@gmail.com
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Thyroid...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p> Thyroid
                      </p> 
                      </li>
                  </ul>
                  </div>
                  </td>
                  <td>
                      01
                  </td>
                  <td>
                      <h6 className="st-text-c"> Pending </h6>
                      <span className="d-block"> 08:00 AM </span> 
                  </td>
                  
  
              
              </tr>
  
              <tr>
                  <td>
                  <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                      
                  </div>
                  </td>
                  <td>
                  <a className="showSingle" target="1">  #55662323 </a> </td>
                  <td>
                  Veena Rao
                  <span className="d-block"> 30 Yrs, Female </span> 
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  F 14/12, Model...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p>F 14/12, Model Town Delhi
                      </p> 
                      </li>
                  </ul>
                </div>
                  </td>
                  <td>
                  22-05-2022
                  </td>
                  <td>
                  04852121252
                  </td>
                  <td>
                  Admin@gmail.com
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Thyroid...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p> Thyroid
                      </p> 
                      </li>
                  </ul>
                  </div>
                  </td>
                  <td>
                      01
                  </td>
                  <td>
                      <h6 className="st-text-c"> Pending </h6>
                      <span className="d-block"> 08:00 AM </span> 
                  </td>
                  
  
              
              </tr>
  
  
              <tr>
                  <td>
                  <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                      
                  </div>
                  </td>
                  <td>
                  <a className="showSingle" target="1">  #55662323 </a> </td>
                  <td>
                  Veena Rao
                  <span className="d-block"> 30 Yrs, Female </span> 
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  F 14/12, Model...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p>F 14/12, Model Town Delhi
                      </p> 
                      </li>
                  </ul>
                </div>
                  </td>
                  <td>
                  22-05-2022
                  </td>
                  <td>
                  04852121252
                  </td>
                  <td>
                  Admin@gmail.com
                  </td>
                  <td>
                  <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Thyroid...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <p> Thyroid
                      </p> 
                      </li>
                  </ul>
                  </div>
                  </td>
                  <td>
                      01
                  </td>
                  <td>
                      <h6 className="st-text-c"> Pending </h6>
                      <span className="d-block"> 08:00 AM </span> 
                  </td>
                  
  
              
              </tr>
        
        </tbody>
          </table>
          </>
      );
    }
  }

export default NewAnualTable;
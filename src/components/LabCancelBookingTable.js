import React from "react";
import fileicon from "../images/file.svg";
import roketicon from "../images/rocket-icon.svg";
import flagicon from "../images/flag-icon.svg";
import chckicon from "../images/check-icon.svg";
import subicon from "../images/file-ck.svg";
import { FaAngleDown } from "react-icons/fa";

import $ from "jquery";


class LabCancelBookingTable extends React.Component {
    componentWillMount(){

        $(document).ready(function(){
            
            $(document).ready(function(){
                $(".n1").click(function(){
                  $("#new1").toggle();
                });
                $(".n2").click(function(){
                    $("#new2").toggle();
                  });
                  $(".n3").click(function(){
                    $("#new3").toggle();
                  });
                  $(".n4").click(function(){
                    $("#new4").toggle();
                  });
                  $(".n5").click(function(){
                    $("#new5").toggle();
                  });
                  $(".n6").click(function(){
                    $("#new6").toggle();
                  });
              });
          
        });
        
      }
    render() {
      return (
          <>
          <table className="table mt-4 inside-sp table-responsive">
           <thead>
                <tr className="bg-row">
                    <th scope="col">
                        <div className="form-check ps-5">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        
                        </div>
                    </th>
                    <th scope="col">Order ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Reason</th>
                    
                </tr>
          </thead>
        <tbody>
              <tr>
                  <td>
                  <div className="form-check ps-5">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                      
                  </div>
                  </td>
                  <td>
                  #55662323
                  </td>
                  <td>
                  Veena Rao
                  <span className="d-block"> 30 Yrs, Female</span> 
                  </td>
                  <td>
                  22-05-2022 </td>
                  <td>
                  04852121252
                  </td>
                  <td>
                  Admin@gmail.com
                  </td>
                  
                  <td className="para-wd align-items-center justify-content-between">
                  <span className="text-left col-4">
                  With the online text generator you can process your personal Lorem Ipsum enriching it with html.
                  </span>
                  <a className="showSingle2 d-none n1">
                     <FaAngleDown/>
                  </a>
                  </td>
                  
  
                  
              </tr>


              <tr>
                <td colspan="8" id="new1" class=" targetnew">
                    <div class="tbl-re">
                        <div class="td">Address</div>
                        <div class="td">Phone</div>
                        <div class="td">Email ID</div>
                        <div class="td">Beneficiary</div>
                        <div class="td">Test Price</div>
                    </div>

                    <div class="tbl-re-dl">
                        <div class="td">
                        F 14/12, Model Town Delhi
                        </div>
                        <div class="td">
                        85656523232
                        </div>
                        <div class="td">
                        Abczxzzz@gmail.com
                        </div>
                        <div class="td">
                        02
                        </div>
                        <div class="td">
                        Rs. 1500/-
                        </div>
                        
                    </div>

                    


                </td>
      
              </tr>
  
              <tr>
                  <td>
                  <div className="form-check ps-5">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                      
                  </div>
                  </td>
                  <td>
                  #55662323
                  </td>
                  <td>
                  Veena Rao
                  <span className="d-block"> 30 Yrs, Female</span> 
                  </td>
                  <td>
                  22-05-2022 </td>
                  <td>
                  04852121252
                  </td>
                  <td>
                  Admin@gmail.com
                  </td>
                  
                  <td className="para-wd align-items-center justify-content-between">
                      <span className="text-left col-4">
                      With the online text generator you can process your personal Lorem Ipsum enriching it with html.
                      </span>
                      <a className="showSingle2 d-none n2">
                         <FaAngleDown/>
                      </a>
                  </td>
                  
  
                  
              </tr>

              <tr>
                <td colspan="8" id="new2" class="targetDiv2 ">
                    <div class="tbl-re">
                        <div class="td">Address</div>
                        <div class="td">Phone</div>
                        <div class="td">Email ID</div>
                        <div class="td">Beneficiary</div>
                        <div class="td">Test Price</div>
                    </div>

                    <div class="tbl-re-dl">
                        <div class="td">
                        F 14/12, Model Town Delhi
                        </div>
                        <div class="td">
                        85656523232
                        </div>
                        <div class="td">
                        Abczxzzz@gmail.com
                        </div>
                        <div class="td">
                        02
                        </div>
                        <div class="td">
                        Rs. 1500/-
                        </div>
                        
                    </div>

                    


                </td>
      
              </tr>


              <tr>
                  <td>
                  <div className="form-check ps-5">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                      
                  </div>
                  </td>
                  <td>
                  #55662323
                  </td>
                  <td>
                  Veena Rao
                  <span className="d-block"> 30 Yrs, Female</span> 
                  </td>
                  <td>
                  22-05-2022 </td>
                  <td>
                  04852121252
                  </td>
                  <td>
                  Admin@gmail.com
                  </td>
                  
                  <td className="para-wd align-items-center justify-content-between">
                      <span className="text-left col-4">
                      With the online text generator you can process your personal Lorem Ipsum enriching it with html.
                      </span>
                      <a className="showSingle2 d-none n3" target="3">
                         <FaAngleDown/>
                      </a>
                  </td>
                  
  
                  
              </tr>

              <tr>
                <td colspan="8" id="new3" class="targetDiv2 ">
                    <div class="tbl-re">
                        <div class="td">Address</div>
                        <div class="td">Phone</div>
                        <div class="td">Email ID</div>
                        <div class="td">Beneficiary</div>
                        <div class="td">Test Price</div>
                    </div>

                    <div class="tbl-re-dl">
                        <div class="td">
                        F 14/12, Model Town Delhi
                        </div>
                        <div class="td">
                        85656523232
                        </div>
                        <div class="td">
                        Abczxzzz@gmail.com
                        </div>
                        <div class="td">
                        02
                        </div>
                        <div class="td">
                        Rs. 1500/-
                        </div>
                        
                    </div>

                    


                </td>
      
              </tr>


              <tr>
                  <td>
                  <div className="form-check ps-5">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                      
                  </div>
                  </td>
                  <td>
                  #55662323
                  </td>
                  <td>
                  Veena Rao
                  <span className="d-block"> 30 Yrs, Female</span> 
                  </td>
                  <td>
                  22-05-2022 </td>
                  <td>
                  04852121252
                  </td>
                  <td>
                  Admin@gmail.com
                  </td>
                  
                  <td className="para-wd align-items-center justify-content-between">
                      <span className="text-left col-4">
                      With the online text generator you can process your personal Lorem Ipsum enriching it with html.
                      </span>
                      <a className="showSingle2 d-none n4" target="4">
                         <FaAngleDown/>
                      </a>
                  </td>
                  
  
                  
              </tr>

              <tr>
                <td colspan="8" id="new4" class="targetDiv2 ">
                    <div class="tbl-re">
                        <div class="td">Address</div>
                        <div class="td">Phone</div>
                        <div class="td">Email ID</div>
                        <div class="td">Beneficiary</div>
                        <div class="td">Test Price</div>
                    </div>

                    <div class="tbl-re-dl">
                        <div class="td">
                        F 14/12, Model Town Delhi
                        </div>
                        <div class="td">
                        85656523232
                        </div>
                        <div class="td">
                        Abczxzzz@gmail.com
                        </div>
                        <div class="td">
                        02
                        </div>
                        <div class="td">
                        Rs. 1500/-
                        </div>
                        
                    </div>

                    


                </td>
      
              </tr>


              <tr>
                  <td>
                  <div className="form-check ps-5">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                      
                  </div>
                  </td>
                  <td>
                  #55662323
                  </td>
                  <td>
                  Veena Rao
                  <span className="d-block"> 30 Yrs, Female</span> 
                  </td>
                  <td>
                  22-05-2022 </td>
                  <td>
                  04852121252
                  </td>
                  <td>
                  Admin@gmail.com
                  </td>
                  
                  <td className="para-wd align-items-center justify-content-between">
                      <span className="text-left col-4">
                      With the online text generator you can process your personal Lorem Ipsum enriching it with html.
                      </span>
                      <a className="showSingle2 d-none n5" target="5">
                         <FaAngleDown/>
                      </a>
                  </td>
                  
  
                  
              </tr>

              <tr>
                <td colspan="8" id="new5" class="targetDiv2 ">
                    <div class="tbl-re">
                        <div class="td">Address</div>
                        <div class="td">Phone</div>
                        <div class="td">Email ID</div>
                        <div class="td">Beneficiary</div>
                        <div class="td">Test Price</div>
                    </div>

                    <div class="tbl-re-dl">
                        <div class="td">
                        F 14/12, Model Town Delhi
                        </div>
                        <div class="td">
                        85656523232
                        </div>
                        <div class="td">
                        Abczxzzz@gmail.com
                        </div>
                        <div class="td">
                        02
                        </div>
                        <div class="td">
                        Rs. 1500/-
                        </div>
                        
                    </div>

                    


                </td>
      
              </tr>

              <tr>
                  <td>
                  <div className="form-check ps-5">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                      
                  </div>
                  </td>
                  <td>
                  #55662323
                  </td>
                  <td>
                  Veena Rao
                  <span className="d-block"> 30 Yrs, Female</span> 
                  </td>
                  <td>
                  22-05-2022 </td>
                  <td>
                  04852121252
                  </td>
                  <td>
                  Admin@gmail.com
                  </td>
                  <td className="para-wd align-items-center justify-content-between">
                      <span className="text-left col-4">
                      With the online text generator you can process your personal Lorem Ipsum enriching it with html.
                      </span>
                      <a className="showSingle2 d-none n6" target="6">
                         <FaAngleDown/>
                      </a>
                  </td>
                  
  
                  
              </tr>

              <tr>
                <td colspan="8" id="new6" class="targetDiv2 ">
                    <div class="tbl-re">
                        <div class="td">Address</div>
                        <div class="td">Phone</div>
                        <div class="td">Email ID</div>
                        <div class="td">Beneficiary</div>
                        <div class="td">Test Price</div>
                    </div>

                    <div class="tbl-re-dl">
                        <div class="td">
                        F 14/12, Model Town Delhi
                        </div>
                        <div class="td">
                        85656523232
                        </div>
                        <div class="td">
                        Abczxzzz@gmail.com
                        </div>
                        <div class="td">
                        02
                        </div>
                        <div class="td">
                        Rs. 1500/-
                        </div>
                        
                    </div>

                    


                </td>
      
              </tr>
  
  
        
             </tbody>
          </table>
          </>
      );
    }
  }

export default LabCancelBookingTable;
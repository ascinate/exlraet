import React from "react";
import fileicon from "../images/file.svg";
import roketicon from "../images/rocket-icon.svg";
import flagicon from "../images/flag-icon.svg";
import chckicon from "../images/check-icon.svg";
import subicon from "../images/file-ck.svg";
import $ from "jquery";
import { NavLink } from "react-router-dom";

class AdminNewTestTable extends React.Component {
    componentWillMount(){

        $(document).ready(function(){
            
       
            $(".xnew1").click(function(){
                $("#xdiv1").toggle();
              });

              $(".xnew2").click(function(){
                $("#xdiv2").toggle();
              });

              $(".xnew3").click(function(){
                $("#xdiv3").toggle();
              });

              $(".xnew4").click(function(){
                $("#xdiv4").toggle();
              });

              $(".xnew5").click(function(){
                $("#xdiv5").toggle();
              });


              $(".xnew6").click(function(){
                $("#xdiv6").toggle();
              });



            // $(function(){
            //     $('.showSingle').click(function(){
            //        var target = $(this).attr('target');
            //         $('#div'+target).toggle('.hide');
            //     });
            // });


         
        });
        
      }
    render() {
      return (
          <>
          <table className="table xnew-table new-bg2 mt-4 table-hover inside-sp table-responsive">
                <thead>
                <tr className="bg-row">
                   
                    <th scope="col">Lab ID</th>
                    <th scope="col">Lab Name</th>
                    <th scope="col">Test code</th>
                    <th scope="col">Test Name</th>
                    <th scope="col">City</th>
                    <th scope="col"> State </th>
                    <th scope="col">Price</th>
                    <th scope="col">Commission <br/>
                    %</th>
                    <th scope="col">View Detail</th>
                    
                    
                </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <td>
                          #55662323  </td>
                        <td>
                        ABC Lab
                        </td>
                        <td>
                        #55662323
                        </td>
                        <td>
                        Dengue
                        </td>
                        <td>
                        Chandigarh
                        </td>
                        <td>
                        Punjab
                        </td>
                        <td>
                        Rs. 1800/-
                        </td>
                        <td>
                        28%
                        </td>
                        <td>
                           <a className="new-viw1 showSingle btn xnew1"> View </a>
                           <NavLink to="/adminbooking" target="_blank" className="new-book1 btn ms-2"> Book </NavLink>
                        </td>
                        
                        
        
                        
                    </tr>
        

                    <tr>
                            <td colspan="9" id="xdiv1" class="targetDiv new-ds">
                                <div class="tbl-re">
                                    <div class="td">Sample QTY</div>
                                    <div class="td">Method</div>
                                    <div class="td">Schedule  cut/ off</div>
                                    <div class="td">Reporting</div>
                                </div>

                                <div class="tbl-re-dl">
                                    <div class="td">
                                       01
                                    </div>
                                    <div class="td">
                                      Method 1
                                    </div>
                                    <div class="td">
                                      02 Hours
                                    </div>
                                    <div class="td">
                                      12 TAT
                                    </div>

                                </div>

                                


                            </td>

                    </tr>


                    <tr>
                       
                        <td>
                          #55662323 </td>
                        <td>
                        ABC Lab
                        </td>
                        <td>
                        #55662323
                        </td>
                        <td>
                        Dengue
                        </td>
                        <td>
                        Chandigarh
                        </td>
                        <td>
                        Punjab
                        </td>
                        <td>
                        Rs. 1800/-
                        </td>
                        <td>
                        28%
                        </td>
                        <td>
                           <a className="new-viw1 showSingle btn  xnew2" > View </a>
                           <NavLink to="/adminbooking" target="_blank" className="new-book1 btn ms-2"> Book </NavLink>
                        </td>
                        
                        
        
                        
                    </tr>


                    <tr>
                        <td colspan="9" id="xdiv2" class="targetDiv new-ds">
                            <div class="tbl-re">
                                <div class="td">Sample QTY</div>
                                <div class="td">Method</div>
                                <div class="td">Schedule  cut/ off</div>
                                <div class="td">Reporting</div>
                            </div>

                            <div class="tbl-re-dl">
                                <div class="td">
                                01
                                </div>
                                <div class="td">
                                Method 1
                                </div>
                                <div class="td">
                                02 Hours
                                </div>
                                <div class="td">
                                12 TAT
                                </div>

                            </div>

                            


                        </td>

                    </tr>
        
                    <tr>
                        
                        <td>
                         #55662323  </td>
                        <td>
                        ABC Lab	
                        </td>
                        <td>
                        #55662323
                        </td>
                        <td>
                        Dengue
                        </td>
                        <td>
                        Chandigarh
                        </td>
                        <td>
                        Punjab
                        </td>
                        
                        <td>
                        Rs. 1800/-
                        </td>
                        <td>
                        28%
                        </td>
                        <td>
                           <a className="new-viw1 showSingle btn  xnew3"> View </a>
                           <NavLink to="/adminbooking" target="_blank" className="new-book1 btn ms-2"> Book </NavLink>
                        </td>
                        
        
                        
                    </tr>


                    <tr>
                        <td colspan="9" id="xdiv3" class="targetDiv new-ds">
                            <div class="tbl-re">
                                <div class="td">Sample QTY</div>
                                <div class="td">Method</div>
                                <div class="td">Schedule  cut/ off</div>
                                <div class="td">Reporting</div>
                            </div>

                            <div class="tbl-re-dl">
                                <div class="td">
                                01
                                </div>
                                <div class="td">
                                Method 1
                                </div>
                                <div class="td">
                                02 Hours
                                </div>
                                <div class="td">
                                12 TAT
                                </div>

                            </div>

                            


                        </td>

                    </tr>
        
                    <tr>
                       
                        <td>
                         #55662323 </td>
                        <td>
                        ABC Lab	
                        </td>
                        <td>
                        #55662323
                        </td>
                        <td>
                        Dengue
                        </td>
                        <td>
                        Chandigarh
                        </td>
                        <td>
                        Punjab
                        </td>
                        
                        <td>
                        Rs. 1800/-
                        </td>
                        <td>
                        28%
                        </td>
                        <td>
                           <a className="new-viw1 btn showSingle  xnew4"> View </a>
                           <NavLink to="/adminbooking" target="_blank" className="new-book1 btn ms-2"> Book </NavLink>
                        </td>
        
                        
                    </tr>


                    <tr>
                            <td colspan="9" id="xdiv4" class="targetDiv new-ds">
                                <div class="tbl-re">
                                    <div class="td">Sample QTY</div>
                                    <div class="td">Method</div>
                                    <div class="td">Schedule  cut/ off</div>
                                    <div class="td">Reporting</div>
                                </div>

                                <div class="tbl-re-dl">
                                    <div class="td">
                                    01
                                    </div>
                                    <div class="td">
                                    Method 1
                                    </div>
                                    <div class="td">
                                    02 Hours
                                    </div>
                                    <div class="td">
                                    12 TAT
                                    </div>

                                </div>

                                


                            </td>

                    </tr>
        
                    <tr>
                       
                        <td>
                         #55662323 </td>
                        <td>
                        ABC Lab	
                        </td>
                        <td>
                        #55662323
                        </td>
                        <td>
                        Dengue
                        </td>
                        <td>
                        Chandigarh
                        </td>
                        <td>
                        Punjab
                        </td>
                        
                        <td>
                        Rs. 1800/-
                        </td>
                        <td>
                        28%
                        </td>
                        
                        <td>
                        <a className="new-viw1 btn showSingle  xnew5" > View </a>
                        <NavLink to="/adminbooking" target="_blank" className="new-book1 btn ms-2"> Book </NavLink>
                       </td>
                        
                    </tr>
        

                    <tr>
                        <td colspan="9" id="xdiv5" class="targetDiv new-ds">
                            <div class="tbl-re">
                                <div class="td">Sample QTY</div>
                                <div class="td">Method</div>
                                <div class="td">Schedule  cut/ off</div>
                                <div class="td">Reporting</div>
                            </div>

                            <div class="tbl-re-dl">
                                <div class="td">
                                01
                                </div>
                                <div class="td">
                                Method 1
                                </div>
                                <div class="td">
                                02 Hours
                                </div>
                                <div class="td">
                                12 TAT
                                </div>

                            </div>

                            


                        </td>

                    </tr>
        
                    <tr>
                        
                        <td>
                         #55662323  </td>
                        <td>
                        ABC Lab	
                        </td>
                        <td>
                        #55662323
                        </td>
                        <td>
                        Dengue
                        </td>
                        <td>
                        Chandigarh
                        </td>
                        <td>
                        Punjab
                        </td>
                        
                        <td>
                        Rs. 1800/-
                        </td>
                        <td>
                        28%
                        </td>
                        <td>
                           <a className="new-viw1 btn showSingle  xnew6" > View </a>
                           <NavLink to="/adminbooking" target="_blank" className="new-book1 btn ms-2"> Book </NavLink>
                        </td>
                        
        
                        
                    </tr>

                    <tr>
                        <td colspan="9" id="xdiv6" class="targetDiv new-ds">
                            <div class="tbl-re">
                                <div class="td">Sample QTY</div>
                                <div class="td">Method</div>
                                <div class="td">Schedule  cut/ off</div>
                                <div class="td">Reporting</div>
                            </div>

                            <div class="tbl-re-dl">
                                <div class="td">
                                01
                                </div>
                                <div class="td">
                                Method 1
                                </div>
                                <div class="td">
                                02 Hours
                                </div>
                                <div class="td">
                                12 TAT
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

export default AdminNewTestTable;
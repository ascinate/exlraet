import React from "react";
import fileicon from "../images/file.svg";
import roketicon from "../images/rocket-icon.svg";
import flagicon from "../images/flag-icon.svg";
import chckicon from "../images/check-icon.svg";
import subicon from "../images/file-ck.svg";
import $ from "jquery";



class AdminTestTable extends React.Component {
  componentWillMount(){

    $(document).ready(function(){
        
      $(function(){
         
        $('.showSingle').click(function(){
              $('.targetDiv').slideUp();
              $('#div'+$(this).attr('target')).slideDown();
        });
      });
    });
    
  }
  render() {
    return (

      <>
      <table className="table mt-4 table-hover inside-sp table-responsive">
        <thead>
        <tr className="bg-row">
            
            <th scope="col">Lab ID</th>
            <th scope="col">Lab Name</th>
            <th scope="col">Test code</th>
            <th scope="col">Test Name</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Price</th>
            <th scope="col">View Detail</th>
        </tr>
        </thead>
      <tbody>
      <tr>
          <td>
          <a className="showSingle" target="1">  #55662323 </a> 
          </td>
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
            <div className="d-flex sp-booking-test justify-content-center">
               <button className="track-btn"> View </button>
               <button className="view1-btn ms-2"> Book </button>
            </div>
          </td>

          
      </tr>

     
      <tr>
      <td colspan="8" id="div1" class="targetDiv">
         <div class="tbl-re">
            <div class="td">Sample QTY</div>
            <div class="td">Method</div>
            <div class="td">Schedule  cut/ off</div>
            <div class="td">Reporting</div>
         </div>

           <div class="tbl-re-dl">
              <div class="td">01</div>
              <div class="td">Method 1</div>
              <div class="td">02 Hours</div>
              <div class="td">12 TAT</div>
           </div>

          


       </td>
      
      </tr>
      
         
      
      <tr>
          <td>
          <a className="showSingle" target="2"> #55662323 </a>
          </td>
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
            <div className="d-flex sp-booking-test justify-content-center">
               <button className="track-btn"> Track </button>
               <button data-bs-toggle="modal" data-bs-target="#settingsModal" className="view1-btn ms-2"> View </button>
            </div>
          </td>
      </tr>

      <tr>
      <td colspan="8" id="div2" class="targetDiv">
         <div class="tbl-re">
            <div class="td">Sample QTY</div>
            <div class="td">Method</div>
            <div class="td">Schedule  cut/ off</div>
            <div class="td">Reporting</div>
         </div>

            <div class="tbl-re-dl">
                <div class="td">01</div>
                <div class="td">Method 1</div>
                <div class="td">02 Hours</div>
                <div class="td">12 TAT</div>
            </div>


       </td>
      
      </tr>
      
      <tr>
          <td>
          <a className="showSingle" target="3"> #55662323 </a>
          </td>
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
            <div className="d-flex sp-booking-test justify-content-center">
               <button className="track-btn"> Track </button>
               <button data-bs-toggle="modal" data-bs-target="#settingsModal" className="view1-btn ms-2"> View </button>
            </div>
          </td>
      </tr>

      <tr>
      <td colspan="8" id="div3" class="targetDiv">
        

            <div class="tbl-re">
                <div class="td">Sample QTY</div>
                <div class="td">Method</div>
                <div class="td">Schedule  cut/ off</div>
                <div class="td">Reporting</div>
            </div>

                <div class="tbl-re-dl">
                    <div class="td">01</div>
                    <div class="td">Method 1</div>
                    <div class="td">02 Hours</div>
                    <div class="td">12 TAT</div>
                </div>


          

       </td>
      
      </tr>
      <tr>
      <td>
      <a className="showSingle" target="4"> #55662323 </a>
      </td>
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
        <div className="d-flex sp-booking-test justify-content-center">
           <button className="track-btn"> Track </button>
           <button data-bs-toggle="modal" data-bs-target="#settingsModal" className="view1-btn ms-2"> View </button>
        </div>
      </td>
      </tr>

      <tr>
      <td colspan="8" id="div4" class="targetDiv">
         
            <div class="tbl-re">
                <div class="td">Sample QTY</div>
                <div class="td">Method</div>
                <div class="td">Schedule  cut/ off</div>
                <div class="td">Reporting</div>
            </div>

            <div class="tbl-re-dl">
                <div class="td">01</div>
                <div class="td">Method 1</div>
                <div class="td">02 Hours</div>
                <div class="td">12 TAT</div>
            </div>
           

       </td>
      
      </tr>

      <tr>
      <td>
      <a className="showSingle" target="5"> #55662323 </a>
      </td>
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
        <div className="d-flex sp-booking-test justify-content-center">
           <button className="track-btn"> Track </button>
           <button data-bs-toggle="modal" data-bs-target="#settingsModal" className="view1-btn ms-2"> View </button>
        </div>
      </td>
      </tr>

      <tr>
      <td colspan="8" id="div5" class="targetDiv">
          <div class="tbl-re">
                <div class="td">Sample QTY</div>
                <div class="td">Method</div>
                <div class="td">Schedule  cut/ off</div>
                <div class="td">Reporting</div>
            </div>

                <div class="tbl-re-dl">
                    <div class="td">01</div>
                    <div class="td">Method 1</div>
                    <div class="td">02 Hours</div>
                    <div class="td">12 TAT</div>
                </div>



       </td>
      
      </tr>
      </tbody>
      </table>
      </>
    );
  }
}
export default AdminTestTable;
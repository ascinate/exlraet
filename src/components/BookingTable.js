import React from "react";
import fileicon from "../images/file.svg";
import roketicon from "../images/rocket-icon.svg";
import flagicon from "../images/flag-icon.svg";
import chckicon from "../images/check-icon.svg";
import subicon from "../images/file-ck.svg";
import $ from "jquery";


class BookingTable extends React.Component {
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
            <th scope="col">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                
              </div>
            </th>
            <th scope="col">Order ID</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Time Slots</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
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
            F 14/12, Model Town Delhi
          </td>
          <td>
            05:00 - 06:00 AM
          </td>
          <td>
            <h6 className="st-text-s"> Started </h6>
          </td>
          <td>
            <div className="d-flex justify-content-center">
               <button className="track-btn"> Track </button>
               <button data-bs-toggle="modal" data-bs-target="#settingsModal" className="view1-btn ms-2"> View </button>
            </div>
          </td>

          
      </tr>

     
      <tr>
      <td colspan="7" id="div1" class="targetDiv">
         <div class="tbl-re">
            <div class="td">Test Name</div>
            <div class="td">Mobile Number</div>
            <div class="td">Distance</div>
            <div class="td">Beneficiary</div>
            <div class="td">Test Amount</div>
         </div>

           <div class="tbl-re-dl">
              <div class="td">Typhoied</div>
              <div class="td">985332521323</div>
              <div class="td">2 KM</div>
              <div class="td">3</div>
              <div class="td">Rs. 1800.00</div>
           </div>

           <div class="tbl-re-dl">
              <div class="td">CVC</div>
              <div class="td">985332521323</div>
              <div class="td">2 KM</div>
              <div class="td">3</div>
              <div class="td">Rs. 1800.00</div>
           </div>


           <div class="tbl-re-dl">
              <div class="td">Dengue</div>
              <div class="td">985332521323</div>
              <div class="td">2 KM</div>
              <div class="td">3</div>
              <div class="td">Rs. 1800.00</div>
           </div>


           <div className="ps-status-div my-4">
           <div className="row row-cols-6 justify-content-center">
             <div className="col">
                 <div className="comon-status">
                   <figure className="iocn-cm">
                       <img src={fileicon} alt="file"/>
                   </figure>
                   <h5>
                       Accepted 
                       <span className="d-block">
                       (09:00 AM)
                       </span>
                       
                   </h5>
                 </div>
             </div>

             <div className="col">
                 <div className="comon-status">
                   <figure className="iocn-cm">
                       <img src={roketicon} alt="file"/>
                   </figure>
                   <h5>
                       Started
                       <span className="d-block">
                       (10:00 AM)
                       </span>
                       
                   </h5>
                 </div>
             </div>



             <div className="col">
                 <div className="comon-status cm-disable">
                   <figure className="iocn-cm ">
                       <img src={flagicon} alt="file"/>
                   </figure>
                   <h5>
                     Reached
                       
                   </h5>
                 </div>
             </div>


             <div className="col">
                 <div className="comon-status cm-disable">
                   <figure className="iocn-cm">
                       <img src={chckicon} alt="file"/>
                   </figure>
                   <h5>
                   Completed
                       
                   </h5>
                 </div>
             </div>


             <div className="col">
                 <div className="comon-status cm-disable">
                   <figure className="iocn-cm">
                       <img src={subicon} alt="file"/>
                   </figure>
                   <h5>
                   Submitted
                       
                   </h5>
                 </div>
             </div>


           </div>
         </div>

       </td>
      
      </tr>
      
         
      
      <tr>
          <td>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
              
          </div>
          </td>
          <td>
          <a className="showSingle" target="2"> #55662323 </a></td>
          <td>
          Veena Rao
          <span className="d-block"> 30 Yrs, Female </span> 
          </td>
          <td>
            F 14/12, Model Town Delhi
          </td>
          <td>
            05:00 - 06:00 AM
          </td>
          <td>
            <h6 className="st-text-c"> Collected </h6>
          </td>
          <td>
            <div className="d-flex justify-content-center">
               <button className="track-btn"> Track </button>
               <button data-bs-toggle="modal" data-bs-target="#settingsModal" className="view1-btn ms-2"> View </button>
            </div>
          </td>
      </tr>

      <tr>
      <td colspan="7" id="div2" class="targetDiv">
         <div class="tbl-re">
            <div class="td">Test Name</div>
            <div class="td">Mobile Number</div>
            <div class="td">Distance</div>
            <div class="td">Beneficiary</div>
            <div class="td">Test Amount</div>
         </div>

           <div class="tbl-re-dl">
              <div class="td">Typhoied</div>
              <div class="td">985332521323</div>
              <div class="td">2 KM</div>
              <div class="td">3</div>
              <div class="td">Rs. 1800.00</div>
           </div>

           <div class="tbl-re-dl">
              <div class="td">CVC</div>
              <div class="td">985332521323</div>
              <div class="td">2 KM</div>
              <div class="td">3</div>
              <div class="td">Rs. 1800.00</div>
           </div>


           <div class="tbl-re-dl">
              <div class="td">Dengue</div>
              <div class="td">985332521323</div>
              <div class="td">2 KM</div>
              <div class="td">3</div>
              <div class="td">Rs. 1800.00</div>
           </div>


           <div className="ps-status-div my-4">
           <div className="row row-cols-6 justify-content-center">
             <div className="col">
                 <div className="comon-status">
                   <figure className="iocn-cm">
                       <img src={fileicon} alt="file"/>
                   </figure>
                   <h5>
                       Accepted 
                       <span className="d-block">
                       (09:00 AM)
                       </span>
                       
                   </h5>
                 </div>
             </div>

             <div className="col">
                 <div className="comon-status">
                   <figure className="iocn-cm">
                       <img src={roketicon} alt="file"/>
                   </figure>
                   <h5>
                       Started
                       <span className="d-block">
                       (10:00 AM)
                       </span>
                       
                   </h5>
                 </div>
             </div>



             <div className="col">
                 <div className="comon-status cm-disable">
                   <figure className="iocn-cm ">
                       <img src={flagicon} alt="file"/>
                   </figure>
                   <h5>
                     Reached
                       
                   </h5>
                 </div>
             </div>


             <div className="col">
                 <div className="comon-status cm-disable">
                   <figure className="iocn-cm">
                       <img src={chckicon} alt="file"/>
                   </figure>
                   <h5>
                   Completed
                       
                   </h5>
                 </div>
             </div>


             <div className="col">
                 <div className="comon-status cm-disable">
                   <figure className="iocn-cm">
                       <img src={subicon} alt="file"/>
                   </figure>
                   <h5>
                   Submitted
                       
                   </h5>
                 </div>
             </div>


           </div>
         </div>

       </td>
      
      </tr>
      
      <tr>
          <td>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
              
          </div>
          </td>
          <td>
            <a className="showSingle" target="3"> #55662323 </a> </td>
          <td>
          Veena Rao
          <span className="d-block"> 30 Yrs, Female </span> 
          </td>
          <td>
            F 14/12, Model Town Delhi
          </td>
          <td>
            05:00 - 06:00 AM
          </td>
          <td>
            <h6 className="st-text-s"> Started </h6>
          </td>
          <td>
            <div className="d-flex justify-content-center">
              <button className="track-btn"> Track </button>
              <button data-bs-toggle="modal" data-bs-target="#settingsModal" className="view1-btn ms-2"> View </button>
            </div>
          </td>
      </tr>

      <tr>
      <td colspan="7" id="div3" class="targetDiv">
         <div class="tbl-re">
            <div class="td">Test Name</div>
            <div class="td">Mobile Number</div>
            <div class="td">Distance</div>
            <div class="td">Beneficiary</div>
            <div class="td">Test Amount</div>
         </div>

           <div class="tbl-re-dl">
              <div class="td">Typhoied</div>
              <div class="td">985332521323</div>
              <div class="td">2 KM</div>
              <div class="td">3</div>
              <div class="td">Rs. 1800.00</div>
           </div>

           <div class="tbl-re-dl">
              <div class="td">CVC</div>
              <div class="td">985332521323</div>
              <div class="td">2 KM</div>
              <div class="td">3</div>
              <div class="td">Rs. 1800.00</div>
           </div>


           <div class="tbl-re-dl">
              <div class="td">Dengue</div>
              <div class="td">985332521323</div>
              <div class="td">2 KM</div>
              <div class="td">3</div>
              <div class="td">Rs. 1800.00</div>
           </div>


           <div className="ps-status-div my-4">
           <div className="row row-cols-6 justify-content-center">
             <div className="col">
                 <div className="comon-status">
                   <figure className="iocn-cm">
                       <img src={fileicon} alt="file"/>
                   </figure>
                   <h5>
                       Accepted 
                       <span className="d-block">
                       (09:00 AM)
                       </span>
                       
                   </h5>
                 </div>
             </div>

             <div className="col">
                 <div className="comon-status">
                   <figure className="iocn-cm">
                       <img src={roketicon} alt="file"/>
                   </figure>
                   <h5>
                       Started
                       <span className="d-block">
                       (10:00 AM)
                       </span>
                       
                   </h5>
                 </div>
             </div>



             <div className="col">
                 <div className="comon-status cm-disable">
                   <figure className="iocn-cm ">
                       <img src={flagicon} alt="file"/>
                   </figure>
                   <h5>
                     Reached
                       
                   </h5>
                 </div>
             </div>


             <div className="col">
                 <div className="comon-status cm-disable">
                   <figure className="iocn-cm">
                       <img src={chckicon} alt="file"/>
                   </figure>
                   <h5>
                   Completed
                       
                   </h5>
                 </div>
             </div>


             <div className="col">
                 <div className="comon-status cm-disable">
                   <figure className="iocn-cm">
                       <img src={subicon} alt="file"/>
                   </figure>
                   <h5>
                   Submitted
                       
                   </h5>
                 </div>
             </div>


           </div>
         </div>

       </td>
      
      </tr>
      <tr>
          <td>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
              
          </div>
          </td>
          <td>
           <a className="showSingle" target="4"> #55662323 </a> </td>
          <td>
          Veena Rao
          <span className="d-block"> 30 Yrs, Female </span> 
          </td>
          <td>
            F 14/12, Model Town Delhi
          </td>
          <td>
            05:00 - 06:00 AM
          </td>
          <td>
            <h6 className="st-text-sb"> Submitted </h6>
          </td>
          <td>
            <div className="d-flex justify-content-center">
               <button className="track-btn"> Track </button>
               <button data-bs-toggle="modal" data-bs-target="#settingsModal" className="view1-btn ms-2"> View </button>
            </div>
          </td>
      </tr>

      <tr>
      <td colspan="7" id="div4" class="targetDiv">
         <div class="tbl-re">
            <div class="td">Test Name</div>
            <div class="td">Mobile Number</div>
            <div class="td">Distance</div>
            <div class="td">Beneficiary</div>
            <div class="td">Test Amount</div>
         </div>

           <div class="tbl-re-dl">
              <div class="td">Typhoied</div>
              <div class="td">985332521323</div>
              <div class="td">2 KM</div>
              <div class="td">3</div>
              <div class="td">Rs. 1800.00</div>
           </div>

           <div class="tbl-re-dl">
              <div class="td">CVC</div>
              <div class="td">985332521323</div>
              <div class="td">2 KM</div>
              <div class="td">3</div>
              <div class="td">Rs. 1800.00</div>
           </div>


           <div class="tbl-re-dl">
              <div class="td">Dengue</div>
              <div class="td">985332521323</div>
              <div class="td">2 KM</div>
              <div class="td">3</div>
              <div class="td">Rs. 1800.00</div>
           </div>


           <div className="ps-status-div my-4">
           <div className="row row-cols-6 justify-content-center">
             <div className="col">
                 <div className="comon-status">
                   <figure className="iocn-cm">
                       <img src={fileicon} alt="file"/>
                   </figure>
                   <h5>
                       Accepted 
                       <span className="d-block">
                       (09:00 AM)
                       </span>
                       
                   </h5>
                 </div>
             </div>

             <div className="col">
                 <div className="comon-status">
                   <figure className="iocn-cm">
                       <img src={roketicon} alt="file"/>
                   </figure>
                   <h5>
                       Started
                       <span className="d-block">
                       (10:00 AM)
                       </span>
                       
                   </h5>
                 </div>
             </div>



             <div className="col">
                 <div className="comon-status cm-disable">
                   <figure className="iocn-cm ">
                       <img src={flagicon} alt="file"/>
                   </figure>
                   <h5>
                     Reached
                       
                   </h5>
                 </div>
             </div>


             <div className="col">
                 <div className="comon-status cm-disable">
                   <figure className="iocn-cm">
                       <img src={chckicon} alt="file"/>
                   </figure>
                   <h5>
                   Completed
                       
                   </h5>
                 </div>
             </div>


             <div className="col">
                 <div className="comon-status cm-disable">
                   <figure className="iocn-cm">
                       <img src={subicon} alt="file"/>
                   </figure>
                   <h5>
                   Submitted
                       
                   </h5>
                 </div>
             </div>


           </div>
         </div>

       </td>
      
      </tr>

      <tr>
          <td>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
              
          </div>
          </td>
          <td>
           <a className="showSingle" target="5"> #55662323 </a> </td>
          <td>
          Veena Rao
          <span className="d-block"> 30 Yrs, Female </span> 
          </td>
          <td>
            F 14/12, Model Town Delhi
          </td>
          <td>
            05:00 - 06:00 AM
          </td>
          <td>
            <h6 className="st-text-cl"> Cancel </h6>
          </td>
          <td>
            <div className="d-flex justify-content-center">
               <button className=" track-btn"> Track </button>
               <button data-bs-toggle="modal" data-bs-target="#settingsModal" className="view1-btn ms-2"> View </button>
            </div>
          </td>
      </tr>

      <tr>
      <td colspan="7" id="div5" class="targetDiv">
         <div class="tbl-re">
            <div class="td">Test Name</div>
            <div class="td">Mobile Number</div>
            <div class="td">Distance</div>
            <div class="td">Beneficiary</div>
            <div class="td">Test Amount</div>
         </div>

           <div class="tbl-re-dl">
              <div class="td">Typhoied</div>
              <div class="td">985332521323</div>
              <div class="td">2 KM</div>
              <div class="td">3</div>
              <div class="td">Rs. 1800.00</div>
           </div>

           <div class="tbl-re-dl">
              <div class="td">CVC</div>
              <div class="td">985332521323</div>
              <div class="td">2 KM</div>
              <div class="td">3</div>
              <div class="td">Rs. 1800.00</div>
           </div>


           <div class="tbl-re-dl">
              <div class="td">Dengue</div>
              <div class="td">985332521323</div>
              <div class="td">2 KM</div>
              <div class="td">3</div>
              <div class="td">Rs. 1800.00</div>
           </div>


           <div className="ps-status-div my-4">
           <div className="row row-cols-6 justify-content-center">
             <div className="col">
                 <div className="comon-status">
                   <figure className="iocn-cm">
                       <img src={fileicon} alt="file"/>
                   </figure>
                   <h5>
                       Accepted 
                       <span className="d-block">
                       (09:00 AM)
                       </span>
                       
                   </h5>
                 </div>
             </div>

             <div className="col">
                 <div className="comon-status">
                   <figure className="iocn-cm">
                       <img src={roketicon} alt="file"/>
                   </figure>
                   <h5>
                       Started
                       <span className="d-block">
                       (10:00 AM)
                       </span>
                       
                   </h5>
                 </div>
             </div>



             <div className="col">
                 <div className="comon-status cm-disable">
                   <figure className="iocn-cm ">
                       <img src={flagicon} alt="file"/>
                   </figure>
                   <h5>
                     Reached
                       
                   </h5>
                 </div>
             </div>


             <div className="col">
                 <div className="comon-status cm-disable">
                   <figure className="iocn-cm">
                       <img src={chckicon} alt="file"/>
                   </figure>
                   <h5>
                   Completed
                       
                   </h5>
                 </div>
             </div>


             <div className="col">
                 <div className="comon-status cm-disable">
                   <figure className="iocn-cm">
                       <img src={subicon} alt="file"/>
                   </figure>
                   <h5>
                   Submitted
                       
                   </h5>
                 </div>
             </div>


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
export default BookingTable;
import React from "react";
import fileicon from "../images/file.svg";
import roketicon from "../images/rocket-icon.svg";
import flagicon from "../images/flag-icon.svg";
import chckicon from "../images/check-icon.svg";
import subicon from "../images/file-ck.svg";
import { FaAngleDown } from "react-icons/fa";


import $ from "jquery";


class AdminMainBookingTable extends React.Component {
  componentWillMount(){

    $(document).ready(function(){
        
   //    $(function(){
   //       $('.showSingle').click(function(){
   //          var target = $(this).attr('target');
   //           $('#div'+target).toggle('.hide');
   //       });
   //   });

         $(".mbn-1").click(function(){
            $("#div1-mb-1").toggle();
         });
         $(".mbn-2").click(function(){
            $("#div2-mb-2").toggle();
         });
         $(".mbn-3").click(function(){
            $("#div3-mb-3").toggle();
         });
         $(".mbn-4").click(function(){
            $("#div4-mb-4").toggle();
         });
         $(".mbn-5").click(function(){
            $("#div5-mb-5").toggle();
         });

         $(".mbn-6").click(function(){
            $("#div6-mb-6").toggle();
         });

         $(".mbn-7").click(function(){
            $("#div7-mb-7").toggle();
         });
    });


    $(document).ready(function(){
      $('.ne-cm1').click(function(){
         $(".ne-cm1").toggleClass("dp-arrow-sp");
     });
     $('.ne-cm2').click(function(){
      $(".ne-cm2").toggleClass("dp-arrow-sp");
     });
     $('.ne-cm3').click(function(){
      $(".ne-cm3").toggleClass("dp-arrow-sp");
     });

     $('.ne-cm4').click(function(){
      $(".ne-cm4").toggleClass("dp-arrow-sp");
    });
      
    $('.ne-cm5').click(function(){
      $(".ne-cm5").toggleClass("dp-arrow-sp");
   });
   $('.ne-cm6').click(function(){
      $(".ne-cm6").toggleClass("dp-arrow-sp");
   });

   $('.ne-cm7').click(function(){
      $(".ne-cm7").toggleClass("dp-arrow-sp");
   });
   $('.ne-cm8').click(function(){
      $(".ne-cm8").toggleClass("dp-arrow-sp");
   });
      
    });
    
  }
  render() {
    return (

      <>
      <table className="table new-bg2 admin-booking-table new-align-table mt-4  inside-sp table-responsive">
        <thead>
        <tr className="bg-row">
           <th scope="col">
           <div className="form-check ps-4">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className=" showSingle form-check-label" for="flexCheckDefault">
            Lab ID
            </label>
          </div>
           </th>
            <th scope="col">Lab Name</th>
            <th scope="col">Order ID</th>
            <th scope="col">Name</th>
            <th scope="col">Test Name</th>
            <th scope="col">City </th>
            <th scope="col">State</th>
            <th scope="col">Status</th>
        </tr>
        </thead>
      <tbody>
      <tr>
          <td>
          <div className="form-check ps-4">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className=" showSingle form-check-label" for="flexCheckDefault">
            #55662323
            </label>
          </div>
          
          </td>
          <td>
          ABC LAb
          </td>
          <td>
          #55662323
          
          </td>
          <td>
          Veena Rao
          <span className="d-block"> 30 Yrs, Female </span> 
          </td>
          <td>

          <div class="dropdown position-relative">
               <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
               Thyroid, Typhied...

               </button>
               <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                     <li>
                     <p>Thyroid, Typhied, <br/> Diagnostic  
                     Diagnostic 
                     </p> 
                     </li>
               </ul>
          </div>
          
          </td>
          <td>
           
          Chandigarh
          </td>
          <td>
          Punjab
          </td>
          <td>
            <div className="d-flex sp-booking-test justify-content-center">
                 <h6 class="st-text-sb"> Completed </h6>
                 
                 <a className="showSingle ne-cm1 mbn-1" >
                    <FaAngleDown/>
                 </a>
            </div>
            <span className="d-block"> 08:00 AM </span> 
          </td>

          
      </tr>

     
      <tr>
      <td colspan="8" id="div1-mb-1" class="targetDiv new-ds">
         <div class="tbl-re">
            <div class="td">Address</div>
            <div class="td">Phone</div>
            <div class="td">Email ID</div>
            <div class="td">Beneficiary</div>
            <div class="td">Test Price</div>
            <div class="td">Action</div>
         </div>

           <div class="tbl-re-dl">
              <div class="td">
                 F 14/12, Model Town Delhi
              </div>
              <div class="td">
               ....85656523232
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
              <div class="td">
                <div className="d-flex crm-btn align-items-center">
                   <button type="button" className="btn track-btn"> Track </button>
                   <button type="button" className="btn ms-2 cancel-td"> Cancel</button>
                </div>
              </div>
           </div>

          


       </td>
      
      </tr>
      
         
      
      <tr>
          <td>
          <div className="form-check ps-4">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
            <label className=" showSingle form-check-label" for="flexCheckDefault2">
            #55662323
            </label>
          </div>
          
          </td>
          <td>
          ABC LAb
          </td>
          <td>
          #55662323
          
          </td>
          <td>
          Veena Rao
          <span className="d-block"> 30 Yrs, Female </span> 
          </td>
          <td>
          <div class="dropdown position-relative">
               <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
               Thyroid, Typhied...

               </button>
               <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                     <li>
                     <p>Thyroid, Typhied, <br/> Diagnostic  
                     Diagnostic 
                     </p> 
                     </li>
               </ul>
         </div>

          </td>
          <td>
           
          Chandigarh
          </td>
          <td>
          Punjab
          </td>
          <td>
            <div className="d-flex sp-booking-test justify-content-center">
                <h6 class="st-text-c"> Pending </h6>
                 <a className="showSingle ne-cm2 mbn-2" >
                    <FaAngleDown/>
                 </a>
            </div>
            <span className="d-block"> 08:00 AM </span> 
          </td>

          
      </tr>

      <tr>
      <td colspan="8" id="div2-mb-2" class="targetDiv new-ds">
         <div class="tbl-re">
            <div class="td">Address</div>
            <div class="td">Phone</div>
            <div class="td">Email ID</div>
            <div class="td">Beneficiary</div>
            <div class="td">Test Price</div>
            <div class="td">Action</div>
         </div>

           <div class="tbl-re-dl">
               <div class="td">
                F 14/12, Model Town Delhi
               </div>
               <div class="td">
                  ....85656523232
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
              <div class="td">
               <div className="d-flex crm-btn align-items-center">
                   <button type="button" className="btn track-btn"> Track </button>
                   <button type="button" className="btn ms-2 book-td"> Book </button>
                </div>
              </div>
           </div>

          


       </td>
      
      </tr>
      
      <tr>
          <td>
          <div className="form-check ps-4">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
            <label  target="3" className=" showSingle form-check-label"  for="flexCheckDefault3">
            #55662323
            </label>
          </div>
          
          </td>
          <td>
          ABC LAb
          </td>
          <td>
          #55662323
          
          </td>
          <td>
          Veena Rao
          <span className="d-block"> 30 Yrs, Female </span> 
          </td>
          <td>
          <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Thyroid, Typhied...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                        <li>
                        <p>Thyroid, Typhied, <br/> Diagnostic  
                        Diagnostic 
                        </p> 
                        </li>
                  </ul>
            </div>
          </td>
          <td>
           
          Chandigarh
          </td>
          <td>
          Punjab
          </td>
          <td>
            <div className="d-flex sp-booking-test justify-content-center">
                 <h6 class="st-text-c"> Pending </h6>
                 <a className="showSingle ne-cm3 mbn-3">
                    <FaAngleDown/>
                 </a>
            </div>
            <span className="d-block"> 08:00 AM </span> 
          </td>

          
      </tr>

      <tr>
      <td colspan="8" id="div3-mb-3" class="targetDiv new-ds">
         <div class="tbl-re">
            <div class="td">Address</div>
            <div class="td">Phone</div>
            <div class="td">Email ID</div>
            <div class="td">Beneficiary</div>
            <div class="td">Test Price</div>
            <div class="td">Action</div>
         </div>

           <div class="tbl-re-dl">
              <div class="td">
                  F 14/12, Model Town Delhi
               </div>
               <div class="td">
                  ....85656523232
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
              <div class="td">
              <div className="d-flex crm-btn align-items-center">
                   <button type="button" className="btn track-btn"> Track </button>
                   <button type="button" className="btn ms-2 cancel-td"> Cancel </button>
                </div>
              </div>
           </div>

          


       </td>
      
      </tr>
      

      <tr>
          <td>
          <div className="form-check ps-4">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4"/>
            <label  target="4" className=" showSingle form-check-label"  for="flexCheckDefault4">
            #55662323
            </label>
          </div>
          
          </td>
          <td>
          ABC LAb
          </td>
          <td>
          #55662323
          
          </td>
          <td>
          Veena Rao
          <span className="d-block"> 30 Yrs, Female </span> 
          </td>
          <td>
          <div class="dropdown position-relative">
                  <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Thyroid, Typhied...

                  </button>
                  <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                        <li>
                        <p>Thyroid, Typhied, <br/> Diagnostic  
                        Diagnostic 
                        </p> 
                        </li>
                  </ul>
            </div>
          </td>
          <td>
           
          Chandigarh
          </td>
          <td>
          Punjab
          </td>
          <td>
            <div className="d-flex sp-booking-test justify-content-center">
                 <h6 class="st-text-c"> Pending </h6>
                 <a className="showSingle ne-cm4 mbn-4">
                    <FaAngleDown/>
                 </a>
            </div>
            <span className="d-block"> 08:00 AM </span> 
          </td>

          
      </tr>

      <tr>
      <td colspan="8" id="div4-mb-4" class="targetDiv new-ds">
         <div class="tbl-re">
            <div class="td">Address</div>
            <div class="td">Phone</div>
            <div class="td">Email ID</div>
            <div class="td">Beneficiary</div>
            <div class="td">Test Price</div>
            <div class="td">Action</div>
         </div>

           <div class="tbl-re-dl">
               <div class="td">
                  F 14/12, Model Town Delhi
               </div>
               <div class="td">
                  ....85656523232
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
              <div class="td">
               <div className="d-flex crm-btn align-items-center">
                  <button type="button" className="btn track-btn"> Track </button>
                  <button type="button" className="btn ms-2 cancel-td"> Cancel </button>
               </div>
              </div>
           </div>

          


       </td>
      
      </tr>

      <tr>
          <td>
          <div className="form-check ps-4">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5"/>
            <label  target="5" className=" showSingle form-check-label"  for="flexCheckDefault5">
            #55662323
            </label>
          </div>
          
          </td>
          <td>
          ABC LAb
          </td>
          <td>
          #55662323
          
          </td>
          <td>
          Veena Rao
          <span className="d-block"> 30 Yrs, Female </span> 
          </td>
          <td>
          <div class="dropdown position-relative">
               <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
               Thyroid, Typhied...

               </button>
               <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                     <li>
                     <p>Thyroid, Typhied, <br/> Diagnostic  
                     Diagnostic 
                     </p> 
                     </li>
               </ul>
         </div>
          </td>
          <td>
           
          Chandigarh
          </td>
          <td>
          Punjab
          </td>
          <td>
            <div className="d-flex sp-booking-test justify-content-center">
                <h6 class="st-text-c "> Pending </h6>
                 <a className="showSingle ne-cm5 mbn-5" >
                    <FaAngleDown/>
                 </a>
            </div>
            <span className="d-block"> 08:00 AM </span> 
          </td>

          
      </tr>

      <tr>
      <td colspan="8" id="div5-mb-5" class="targetDiv new-ds">
         <div class="tbl-re">
            <div class="td">Address</div>
            <div class="td">Phone</div>
            <div class="td">Email ID</div>
            <div class="td">Beneficiary</div>
            <div class="td">Test Price</div>
            <div class="td">Action</div>
         </div>

           <div class="tbl-re-dl">
               <div class="td">
                  F 14/12, Model Town Delhi
               </div>
               <div class="td">
                  ....85656523232
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
              <div class="td">
                  <div className="d-flex crm-btn align-items-center">
                   <button type="button" className="btn track-btn"> Track </button>
                   <button type="button" className="btn ms-2 book-td"> Book </button>
                </div>
              </div>
           </div>

          


       </td>
      
      </tr>


      <tr>
      <td>
      <div className="form-check ps-4">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5"/>
        <label  target="5" className=" showSingle form-check-label"  for="flexCheckDefault5">
        #55662323
        </label>
      </div>
      
      </td>
      <td>
      ABC LAb
      </td>
      <td>
      #55662323
      
      </td>
      <td>
      Veena Rao
      <span className="d-block"> 30 Yrs, Female </span> 
      </td>
      <td>
      <div class="dropdown position-relative">
            <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Thyroid, Typhied...

            </button>
            <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                  <li>
                  <p>Thyroid, Typhied, <br/> Diagnostic  
                  Diagnostic 
                  </p> 
                  </li>
            </ul>
      </div>
      </td>
      <td>
       
      Chandigarh
      </td>
      <td>
      Punjab
      </td>
      <td>
        <div className="d-flex sp-booking-test justify-content-center">
            <h6 class="st-text-c"> Pending </h6>
             <a className="showSingle ne-cm6 mbn-5" >
                <FaAngleDown/>
             </a>
        </div>
        <span className="d-block"> 08:00 AM </span> 
      </td>

      
  </tr>

  <tr>
  <td colspan="8" id="div5-mb-5" class="targetDiv new-ds">
     <div class="tbl-re">
        <div class="td">Address</div>
        <div class="td">Phone</div>
        <div class="td">Email ID</div>
        <div class="td">Beneficiary</div>
        <div class="td">Test Price</div>
        <div class="td">Action</div>
     </div>

       <div class="tbl-re-dl">
           <div class="td">
              F 14/12, Model Town Delhi
           </div>
           <div class="td">
              ....85656523232
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
          <div class="td">
          <div className="d-flex crm-btn align-items-center">
          <button type="button" className="btn track-btn"> Track </button>
          <button type="button" className="btn ms-2 book-td"> Book </button>
       </div>
          </div>
       </div>

      


   </td>
  
  </tr>



   <tr>
          <td>
          <div className="form-check ps-4">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5"/>
            <label  target="5" className=" showSingle form-check-label"  for="flexCheckDefault5">
            #55662323
            </label>
          </div>
          
          </td>
          <td>
          ABC LAb
          </td>
          <td>
          #55662323
          
          </td>
          <td>
          Veena Rao
          <span className="d-block"> 30 Yrs, Female </span> 
          </td>
          <td>
          <div class="dropdown position-relative">
               <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
               Thyroid, Typhied...

               </button>
               <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                     <li>
                     <p>Thyroid, Typhied, <br/> Diagnostic  
                     Diagnostic 
                     </p> 
                     </li>
               </ul>
         </div>
          </td>
          <td>
           
          Chandigarh
          </td>
          <td>
          Punjab
          </td>
          <td>
            <div className="d-flex sp-booking-test justify-content-center">
                <h6 class="st-text-c"> Pending </h6>
                 <a className="showSingle ne-cm7 mbn-6" >
                    <FaAngleDown/>
                 </a>
            </div>
            <span className="d-block"> 08:00 AM </span> 
          </td>

          
      </tr>

      <tr>
      <td colspan="8" id="div6-mb-6" class="targetDiv new-ds">
         <div class="tbl-re">
            <div class="td">Address</div>
            <div class="td">Phone</div>
            <div class="td">Email ID</div>
            <div class="td">Beneficiary</div>
            <div class="td">Test Price</div>
            <div class="td">Action</div>
         </div>

           <div class="tbl-re-dl">
               <div class="td">
                  F 14/12, Model Town Delhi
               </div>
               <div class="td">
                  ....85656523232
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
              <div class="td">
              <div className="d-flex crm-btn align-items-center">
              <button type="button" className="btn track-btn"> Track </button>
              <button type="button" className="btn ms-2 book-td"> Book </button>
           </div>
              </div>
           </div>

          


       </td>
      
      </tr>



      <tr>
      <td>
      <div className="form-check ps-4">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5"/>
        <label  target="5" className=" showSingle form-check-label"  for="flexCheckDefault5">
        #55662323
        </label>
      </div>
      
      </td>
      <td>
      ABC LAb
      </td>
      <td>
      #55662323
      
      </td>
      <td>
      Veena Rao
      <span className="d-block"> 30 Yrs, Female </span> 
      </td>
      <td>
      <div class="dropdown position-relative">
               <button class="btn comon-td-dp" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
               Thyroid, Typhied...

               </button>
               <ul class="dropdown-menu dropdown-menu1 crm-dp-div2" aria-labelledby="dropdownMenuButton1">
                     <li>
                     <p>Thyroid, Typhied, <br/> Diagnostic  
                     Diagnostic 
                     </p> 
                     </li>
               </ul>
         </div>
      </td>
      <td>
       
      Chandigarh
      </td>
      <td>
      Punjab
      </td>
      <td>
        <div className="d-flex sp-booking-test justify-content-center">
            <h6 class="st-text-c"> Pending </h6>
             <a className="showSingle ne-cm8 mbn-7" >
                <FaAngleDown/>
             </a>
        </div>
        <span className="d-block"> 08:00 AM </span> 
      </td>

      
      </tr>

      <tr>
      <td colspan="8" id="div7-mb-7" class="targetDiv new-ds">
         <div class="tbl-re">
            <div class="td">Address</div>
            <div class="td">Phone</div>
            <div class="td">Email ID</div>
            <div class="td">Beneficiary</div>
            <div class="td">Test Price</div>
            <div class="td">Action</div>
         </div>

            <div class="tbl-re-dl">
               <div class="td">
                  F 14/12, Model Town Delhi
               </div>
               <div class="td">
                  ....85656523232
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
               <div class="td">
               <div className="d-flex crm-btn align-items-center">
               <button type="button" className="btn track-btn"> Track </button>
               <button type="button" className="btn ms-2 book-td"> Book </button>
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
export default AdminMainBookingTable;
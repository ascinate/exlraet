import React from "react";
import iconwebplush from "../images/ex-icon.svg";
import delicon from "../images/dl-icon.svg";
import $ from "jquery";
import Counting from "./Counting";
import BookingRadio from "./BookingRadio";
import { BsCheck2, BsCheckLg } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { BsSearch} from "react-icons/bs";
import filtericon from "../images/filter-icon.svg";
import FilterModalBooking from "./FilterModalBooking";
import LabIDCloneA from "./LabIDCloneA";
import LabIDCloneB from "./LabIDCloneB";
import AdminTestLabAClone from "./AdminTestLabAClone";
import AdminTestLabCloneB from "./AdminTestLabCloneB";
import AdminNewCloneFild from "./AdminNewCloneFild";



class AdminTestFild extends React.Component {

    componentWillMount(){
        $(document).ready(function(){
            $('#extra-fields-customer').click(function() {
            $('.customer_records').clone().appendTo('.customer_records_dynamic');
            $('.customer_records_dynamic .customer_records').addClass('single remove');
            $('.single .extra-fields-customer').remove();
            $('.single').append('<a href="#" class="remove-field btn-remove-customer col-1"> <img src="img/dl-icon.svg" al="bt"/>  </a>');
            $('.customer_records_dynamic > .single').attr("class", "row remove mt-4");
      
            $('.customer_records_dynamic input').each(function() {
              var count = 0;
              var fieldname = $(this).attr("name");
              $(this).attr('name', fieldname + count);
              count++;
            });


      
          });
        });
      $(document).on('click', '.remove-field', function(e) {
        $(this).parent('.remove').remove();
        e.preventDefault();
      });

      $(document).ready(function(){

        
        $("#dlet-btn").click(function(){
            $("#show-as-clone").hide();
          });

        $(".adbenf-btn").click(function(){
            $("#show-as-clone").show();
          });

          

      });
    }

    render() {
      return (
          <>
          <div className="test-details-div admin-test mt-4 mb-2">
               <div className="d-sm-flex w-100 justify-content-between align-items-center">
                  <h4 className="mb-0"> Test Details <span className="amount-text"> Total Amount:<big> Rs. 1500</big>  </span> </h4>
                  <div className="gp-radio-div2 d-flex align-items-center">
                     <span className="me-3">  Reference: </span>  
                      <BookingRadio/>
                  </div>
               </div>
                
                <hr/>

                <div className="test-inside-div">
                    
                        <div className="bg-white com-lab-fild">
                          <div className="to-test-1 row">
                            <div className="col-lg-4">
                                <label > Lab ID </label>
                                <div className="form-group sp-lab-form">
                                    
                                    <input type="text" data-bs-toggle="modal" data-bs-target="#labIDeModal" className="form-control" placeholder="Click to view"/>
                                    <BsSearch/>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <label > Name of Test</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Dengue</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-lg-3">
                                <label > Test Amount </label>
                                <div className="form-group sp-lab-form">
                                    
                                    <input type="text"  className="form-control" placeholder="1500"/>
                                  
                                </div>
                            </div>
                          </div>
                        </div>

                        <div className="clone-add-fild mt-4">
                            <AdminTestLabAClone/>
                        </div>
                    
                        <hr className="new-line mt-4"/>

                        <div className="clone-next mt-5">
                           <AdminNewCloneFild/>
                        </div>

                    <div className="cunt-div mt-0">
                        <h4> Type of Vial </h4>
                        <div className="row row-cols-1 row-cols-sm-3">


                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                    Serum
                                    </label>
                                </div> 
                                <div className="count-div2 ms-md-3">
                                    <Counting/>
                                </div>
                                </div>  
                            </div>

                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                    Potassium EDTA 
                                    </label>
                                </div> 
                                <div className="count-div2 ms-md-3">
                                    <Counting/>
                                </div>
                                </div>  
                            </div>


                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        VTM 
                                    </label>
                                </div> 
                                <div className="count-div2 ms-md-3">
                                    <Counting/>
                                </div>
                                </div>  
                            </div>
                            
                            
                        </div>

                        <div className="row row-cols-1 row-cols-sm-3">


                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                    Sodium 
                                    Citrate
                                    </label>
                                </div> 
                                <div className="count-div2 ms-md-3">
                                    <Counting/>
                                </div>
                                </div>  
                            </div>

                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                    Sodium Fluoride 
                                    </label>
                                </div> 
                                <div className="count-div2 ms-md-3">
                                    <Counting/>
                                </div>
                                </div>  
                            </div>


                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                    Sputum 
                                    </label>
                                </div> 
                                <div className="count-div2 ms-md-3">
                                    <Counting/>
                                </div>
                                </div>  
                            </div>
                            
                            
                        </div>


                        <div className="row row-cols-1 row-cols-sm-3">


                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                    Lithium Heparin 
                                    </label>
                                </div> 
                                <div className="count-div2 ms-md-3">
                                    <Counting/>
                                </div>
                                </div>  
                            </div>

                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                    Urine & Stool
                                    </label>
                                </div> 
                                <div className="count-div2 ms-md-3">
                                    <Counting/>
                                </div>
                                </div>  
                            </div>


                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                    Blood Culrure
                                    </label>
                                </div> 
                                <div className="count-div2 ms-md-3">
                                    <Counting/>
                                </div>
                                </div>  
                            </div>

                        </div>



                        


                    </div>
                    
                </div>
          </div>

        



          
          </>
      );
    }
  }
export default AdminTestFild;
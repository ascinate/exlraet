import React from "react";
import iconwebplush from "../images/ex-icon.svg";
import delicon from "../images/dl-icon.svg";
import $ from "jquery";
import Counting from "./Counting";
import { BsCheck2, BsCheckLg } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";


class CloneFild extends React.Component {

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
    }

    render() {
      return (
          <>
          <div className="test-details-div mt-4 mb-2">
                <h4> Test Details </h4>
                <hr/>

                <div className="test-inside-div">
                    <div className="to-test-1 row">
                        <div className="col-lg-8">
                            <label > Name of Test</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>-- Select--</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-lg-4">
                            <label className="mt-4 mt-md-0"> Type of Vial</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>-- Select--</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div className="cunt-div mt-4">
                        <div className="row row-cols-1 row-cols-sm-3">


                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Stool 
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
                                        Urine
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
                                        Serum
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
                                    Sodium Fluoride 
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
                                        Potassium Oxalate
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


                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Blood Culture
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

          <div className="row add-move customer_records align-items-center mt-3">
             <div className="col-lg-3">
                <div className="form-group">
                   <label> Name </label>
                   <input type="text" className="form-control"/>
                </div>
             </div>
             <div className="col-lg-3">
                <div className="form-group">
                   <label> Test Name </label>
                   <input type="text" className="form-control"/>
                </div>
             </div>
             <div className="col-lg-3">
                <div className="form-group">
                   <label> Type of Vial </label>
                   <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>
                </div>
             </div>
             <div className="col-lg-2">
                <div className="form-group">
                   <label> Age </label>
                   <input type="text" className="form-control"/>
                </div>
             </div>
            <div className="col-1 sp-rm-div">
                 <a id="#" className="rvm-btn"> <img src="img/dl-icon.svg" al="bt"/> </a>
            </div>
          </div>
          <div className="customer_records_dynamic mt-4"></div>

          <a id="extra-fields-customer" className="btn adbenf-btn mt-2 mb-4 mb-lg-0"> <img src={iconwebplush} alt="webn"/>  Add Beneficiary </a>
          </>
      );
    }
  }
export default CloneFild;
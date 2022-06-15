import React from "react";
import iconwebplush from "../images/ex-icon.svg";
import $ from "jquery";
import { BsCheck2, BsCheckLg, BsSearch } from "react-icons/bs";

class LabIDCloneB extends React.Component {
    componentWillMount(){
        $(document).ready(function(){
            $('#extra-fields-customer-add2').click(function() {
            $('.customer_records-add2').clone().appendTo('.customer_records_dynamic-add2');
            $('.customer_records_dynamic-add2 .customer_records-add2').addClass('single remove');
            $('.single .extra-fields-customer-add2').remove();
            $('.single').append('<a href="#" class="remove-field btn-remove-customer col-3 col-lg-1"> <img src="img/dl-icon.svg" al="bt"/>  </a>');
            $('.customer_records_dynamic-add2 > .single').attr("class", "row remove mt-4");
      
            $('.customer_records_dynamic-add2 input').each(function() {
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

        
        $("#dlet-btn2").click(function(){
            $("#new-add-fild-lab2").hide();
          });

        $(".adbenf-btn2").click(function(){
            $("#new-add-fild-lab2").show();
          });

          

      });
    }
    render() {
      return (
          <>
            <div id="new-add-fild-lab2" className="com-lab-fild-new customer_records-add2">
                <div className="to-test-1 row">
                    <div className="col-lg-3 ps-lg-0">
                        <label > Lab ID </label>
                        <div className="form-group sp-lab-form">
                            
                            <input type="text" data-bs-toggle="modal" data-bs-target="#labIDeModal" className="form-control" placeholder="Click to view"/>
                            <BsSearch/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <label > Name </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-lg-3">
                        <label > Test Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-lg-2">
                        <label > Age </label>
                        <input type="text" className="form-control" />
                    </div>
                    
                    <div className="col-lg-1 pe-lg-0">
                       <a id="dlet-btn2" className="rvm-btn"> <img src="img/dl-icon.svg" al="bt"/> </a>
                    </div>

                    <div className="col-lg-3 mt-4 ps-lg-0">
                        <label >Age</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="col-lg-3 mt-4">
                        <label > Test Amount </label>
                        <input type="text" className="form-control" placeholder="Rs. 1500" />
                    </div>
                    
                </div>
            </div>

            <div className="customer_records_dynamic-add2 mt-4"></div>

            <a id="extra-fields-customer-add2 " className="btn add-more-bntn adbenf-btn2 mt-2 mb-4 mb-lg-0"> <img src={iconwebplush} alt="webn"/>  Add Beneficiary </a>
          </>
      );
    }
  }
export default LabIDCloneB;
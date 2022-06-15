import React from "react";
import iconwebplush from "../images/ex-icon.svg";
import $ from "jquery";
import { BsCheck2, BsCheckLg, BsSearch } from "react-icons/bs";

class LabIDCloneA extends React.Component {
    componentWillMount(){
        $(document).ready(function(){
            $('#extra-fields-customer-add1').click(function() {
            $('.customer_records-add').clone().appendTo('.customer_records_dynamic-add');
            $('.customer_records_dynamic-add .customer_records-add').addClass('single remove');
            $('.single .extra-fields-customer-add').remove();
            $('.single').append('<a href="#" class="remove-field btn-remove-customer col-3 col-lg-1"> <img src="img/dl-icon.svg" al="bt"/>  </a>');
            $('.customer_records_dynamic-add > .single').attr("class", "row remove mt-4");
      
            $('.customer_records_dynamic-add input').each(function() {
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
            $("#new-add-fild-lab").hide();
          });

        $(".adbenf-btn").click(function(){
            $("#new-add-fild-lab").show();
          });

          

      });
    }
    render() {
      return (
          <>
            <div id="new-add-fild-lab" className="bg-white com-lab-fild customer_records-add">
                <div className="to-test-1 row">
                    <div className="col-lg-4">
                        <label > Lab ID </label>
                        <div className="form-group sp-lab-form">
                            
                            <input type="text" data-bs-toggle="modal" data-bs-target="#labIDeModal" className="form-control" placeholder="Click to view"/>
                            <BsSearch/>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <label > Name of Test</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>-- Select--</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <a id="dlet-btn" className="rvm-btn"> <img src="img/dl-icon.svg" al="bt"/> </a>
                </div>
            </div>

            <div className="customer_records_dynamic-add mt-4"></div>

            <a id="extra-fields-customer-add1" className="btn adbenf-btn mt-2 mb-4 mb-lg-0"> <img src={iconwebplush} alt="webn"/>  Add Beneficiary </a>
          </>
      );
    }
  }
export default LabIDCloneA;
import React from "react";
import iconwebplush from "../images/ex-icon.svg";
import $ from "jquery";
import { BsCheck2, BsCheckLg, BsSearch } from "react-icons/bs";

class AdminNewCloneFild extends React.Component {
    componentWillMount(){
        $(document).ready(function(){
            $('#beneficiary-btn').click(function() {
            $('.customer_records-beneficiary').clone().appendTo('.customer_records_dynamic-beneficiary');
            $('.customer_records_dynamic-beneficiary .customer_records-beneficiary').addClass('single remove');
            $('.single .extra-fields-customer-beneficiary').remove();
            $('.single').append('<a href="#" class="remove-field btn-remove-customer col-3 col-lg-1"> <img src="img/dl-icon.svg" al="bt"/>  </a>');
            $('.customer_records_dynamic-beneficiary > .single').attr("class", "row remove mt-4");
      
            $('.customer_records_dynamic-beneficiary input').each(function() {
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

        
        $("#dlet-btn-beneficiary").click(function(){
            $("#new-add-beneficiary").hide();
            $("#beneficiary-btn").addClass("new-pos-1");
          });

        $(".beneficiary-an").click(function(){
            $("#new-add-beneficiary").show();
            $("#beneficiary-btn").addClass("new-pos-2");
            $("#beneficiary-btn").removeClass("new-pos-1");
          });

          

      });
    }
    render() {
      return (
          <>
          <div className="position-relative">
            <div id="new-add-beneficiary" className=" px-lg-0 admin-clone-new com-lab-fild customer_records-beneficiary">
                <div className="to-test-1 row">
                    <div className="col-lg-3 ps-lg-0">
                        <label > Lab ID </label>
                        <div className="form-group sp-lab-form">
                            
                            <input type="text" data-bs-toggle="modal" data-bs-target="#labIDeModal" className="form-control"/>
                            <BsSearch/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <label > Name</label>
                        <input type="text"  className="form-control"/>
                    </div>
                    <div className="col-lg-5">
                        <label > Test Name</label>
                        <div className="form-group sp-lab-form">
                            
                        <select className="form-select" aria-label="Default select example">
                        <option selected>Dengue</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                            
                        </div>
                    </div>
                    <div className="col-lg-1">
                    <a id="dlet-btn-beneficiary" className="rvm-btn"> <img src="img/dl-icon.svg" al="bt"/> </a>
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

            <div className="customer_records_dynamic-beneficiary total-beneficiary mt-4"></div>

            <a id="beneficiary-btn" className="btn new-postion-btn add-more-bntn beneficiary-an
             mt-2 mb-4 mb-lg-0"> <img src={iconwebplush} alt="webn"/> Add Beneficiary  </a>
           </div>
          </>
      );
    }
  }
export default AdminNewCloneFild;
import React from "react";
import $ from "jquery";
import { BsPlus } from "react-icons/bs";

class SthuDay extends React.Component {
    componentWillMount(){
        $(document).ready(function(){
            $('#extra-fields-customer-sfri').click(function() {
            $('.customer_records-sfri').clone().appendTo('.customer_records_dynamic-sfri');
            $('.customer_records_dynamic-sfri .customer_records-sfri').addClass('single remove');
            $('.single .extra-fields-customer-sfri').remove();
            $('.single').append('<a href="#" class="remove-field btn-remove-customer col-1"> <img src="img/dl-icon.svg" al="bt"/>  </a>');
            $('.customer_records_dynamic-sfri > .single').attr("class", "d-lg-flex mt-3 align-items-center remove");
      
            $('.customer_records_dynamic input-sfri').each(function() {
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
      return(
          <>
            <div className="new-resigster-add mt-5 ">
                 <h2> Friday </h2>
                <div className="d-lg-flex mt-0 align-items-center">
                    <div className="d-lg-flex col-lg-5 mt-3 align-items-center customer_records-sfri">
                        <div className="col-lg-5 d-flex">
                            <input type="text" className="form-control" placeholder="09:00 AM"/>
                        </div>
                        <span className="mx-2"> To </span>
                        <div className="col-lg-5 d-flex">
                            <input type="text" className="form-control" placeholder="12:00 PM"/>
                        </div>
                    </div>
                    
                    <a id="extra-fields-customer-sfri" className="btn add-hrs-btn"> <span> <BsPlus/> </span>  Add a set of hours</a>
                </div>
            </div>

            <div className="customer_records_dynamic-sfri col-lg-5 sp-addre mt-4"></div>
          </>
      );
    }
  }
export default SthuDay;
import React from "react";
import cmaddicon from "../images/add-icon.svg";
import $ from "jquery";

class AddTestSection extends React.Component {
    componentWillMount(){
        $(document).ready(function(){
            $('#add-fild-btn').click(function() {
            $('.customer_records').clone().appendTo('.customer_records_dynamic');
            $('.customer_records_dynamic .customer_records').addClass('single remove');
            $('.single .extra-fields-customer').remove();
            $('.single').append('<a href="#" class="remove-field btn-remove-customer col-1"> <img src="img/dl-icon.svg" al="bt"/>  </a>');
            $('.customer_records_dynamic > .single').attr("class", "row mt-4 remove");
      
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
             <div className="customer_records">
                <div className="row row-cols-1 row-cols-lg-3">
                      <div className="col">
                      <div className="from-group mb-4 mb-lg-0">
                          <label> Test Code </label>
                          <input type="text" className="form-control"/>
                      </div>
                      
                      
                      </div>
                      <div className="col">
                      <div className="from-group mb-4 mb-lg-0">
                          <label> Test Name </label>
                          <input type="text" className="form-control"/>
                      </div>
                      
                      
                      </div>

                      <div className="col">
                      <div className="from-group mb-4 mb-lg-0">
                          <label> Sample Quantity </label>
                          <input type="text" className="form-control"/>
                      </div>
                      
                      
                      </div>

                </div>
                <div className="row row-cols-1 row-cols-lg-4 mt-3">
                    <div className="col">
                        <div className="from-group mb-4 mb-lg-0">
                            <label> Method </label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>

                    <div className="col">
                        <div className="from-group scd-off mb-4 mb-lg-0">
                            <label> Schedule Cut/off </label>
                            <input type="text" className="form-control"/>
                            <span className="hr-text"> Hour </span>
                        </div>
                    </div>

                    <div className="col">
                        <div className="from-group scd-off mb-4 mb-lg-0">
                            <label> Reporting </label>
                            <input type="text" className="form-control"/>
                            <span className="hr-text"> TAT </span>
                        </div>
                    </div>

                    <div className="col">
                        <div className="from-group mb-4 mb-lg-0">
                            <label> Price </label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>


                </div>
              </div>
            <div className="customer_records_dynamic mt-4"></div>

            <a id="add-fild-btn" className="btn addmore-btn"> <span> <img src={cmaddicon} alt="dn"/> </span> 
            Add More </a>
          </>
      );
    }
  }

export default AddTestSection;
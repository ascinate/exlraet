import React from "react";
import cmaddicon from "../images/add-icon.svg";
import $ from "jquery";

class LabPackagesTestSection extends React.Component {
    componentWillMount(){
        $(document).ready(function(){
            $('#add-fild-btn').click(function() {
            $('.customer_records').clone().appendTo('.customer_records_dynamic');
            $('.customer_records_dynamic .customer_records').addClass('single remove');
            $('.single .extra-fields-customer').remove();
            $('.single').append('<a href="#" class="remove-field btn-remove-customer col-1"> <img src="img/dl-icon.svg" al="bt"/>  </a>');
            $('.customer_records_dynamic > .single').attr("class", "row specail-lable-modal mt-4 remove");
      
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
             <div className="customer_records specail-lable-modal">
                
             <div className="row">
                    <div className="col-lg-4">
                    <div className="from-group mb-4 mb-lg-0">
                        <label>  Package Code </label>
                        <input type="text" className="form-control"/>
                    </div>
                    
                    
                    </div>
                    <div className="col-lg-4">
                    <div className="from-group mb-4 mb-lg-0">
                        <label> Package Name </label>
                        <input type="text" className="form-control"/>
                    </div>
                    
                    
                    </div>

                    <div className="col-lg-4">
                        <div className="from-group mb-4 mb-lg-0">
                            <label> Parameters </label>
                            <input type="text" className="form-control"/>
                        </div>
                    
                    
                    </div>
                    <div className="col-lg-3">
                        <div className="from-group mb-4 mb-lg-0">
                            <label> Sample
                            Qty </label>
                            <input type="text" className="form-control"/>
                        </div>
                    
                    
                    </div>

                   

                    <div className="col-lg-3">
                        
                    <div class="from-group scd-off mb-4 mb-lg-0">
                    <label>  Commission %</label>
                    <input type="text" className="form-control"/>
                    </div>
                    
                    
                    </div>

                    <div className="col-lg-3">
                        
                    <div class="from-group scd-off mb-4 mb-lg-0">
                    <label> Reporting </label>
                    <input type="text" class="form-control"/>
                    <span class="hr-text"> TAT </span></div>
                    
                    
                    </div>

                    


                    <div className="col-lg-3">
                        <div className="from-group mb-4 mb-lg-0">
                            <label> Price</label>
                            <input type="text" className="form-control"/>
                        </div>
                    
                    
                    </div>

                </div>
              </div>
            <div className="customer_records_dynamic specail-lable-modal mt-4"></div>

            <a id="add-fild-btn" className="btn addmore-btn"> <span> <img src={cmaddicon} alt="dn"/> </span> 
            Add More </a>
          </>
      );
    }
  }

export default LabPackagesTestSection;
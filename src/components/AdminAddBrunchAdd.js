import React from "react";
import cmaddicon from "../images/add-icon.svg";
import $ from "jquery";

class AdminAddBrunchAdd extends React.Component {
    componentWillMount(){
        $(document).ready(function(){
            $('#add-more-bruch').click(function() {
            $('.customer_records_new').clone().appendTo('.customer_records_dynamic_new');
            $('.customer_records_dynamic_new .customer_records_new').addClass('single remove');
            $('.single .extra-fields-customer').remove();
            $('.single').append('<a href="#" class="remove-field btn-remove-customer col-1"> <img src="img/dl-icon.svg" al="bt"/>  </a>');
            $('.customer_records_dynamic_new > .single').attr("class", "row row-cols-1 row-cols-lg-2 remove");
      
            $('.customer_records_dynamic_new input').each(function() {
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
            <div className="row row-cols-1 row-cols-lg-2 customer_records_new">
                <div className="col">
                   <div className="form-group">
                       <label>Branch Name </label>
                       <input type="text" className="form-control"/>
                   </div>
                </div>
                <div className="col">
                   <div className="form-group">
                       <label>Branch Address </label>
                       <input type="text" className="form-control"/>
                   </div>
                </div>
                <div className="col">
                   <div className="form-group">
                       <label>Admin Name</label>
                       <input type="text" className="form-control"/>
                   </div>
                </div>
                <div className="col">
                   <div className="form-group">
                       <label>Phone </label>
                       <input type="text" className="form-control"/>
                   </div>
                </div>
                <div className="col">
                   <div className="form-group">
                       <label>Email ID </label>
                       <input type="email" className="form-control"/>
                   </div>
                </div>
                <div className="col">
                   <div className="form-group">
                       <label>Username </label>
                       <input type="email" className="form-control"/>
                   </div>
                </div>

                <div className="col">
                   <div className="form-group">
                       <label>Password </label>
                       <input type="password" className="form-control"/>
                   </div>
                </div>

                
            </div>
            <div className="customer_records_dynamic_new mt-4"></div>
            <a id="add-more-bruch" className="btn add-more-btn">
            <span> <img src={cmaddicon} alt="cl"/> </span> Add More </a>
          </>
      );
    }
  }
export default AdminAddBrunchAdd;
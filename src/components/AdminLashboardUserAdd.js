import React from "react";
import cmaddicon from "../images/add-icon.svg";
import $ from "jquery";

class AdminLashboardUserAdd extends React.Component {
    componentWillMount(){
        $(document).ready(function(){
            $('#add-more-user').click(function() {
            $('.customer_records').clone().appendTo('.customer_records_dynamic');
            $('.customer_records_dynamic .customer_records').addClass('single remove');
            $('.single .extra-fields-customer').remove();
            $('.single').append('<a href="#" class="remove-field btn-remove-customer col-1"> <img src="img/dl-icon.svg" al="bt"/>  </a>');
            $('.customer_records_dynamic > .single').attr("class", "row row-cols-1 row-cols-lg-2 remove");
      
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
      return(
          <>
            <div className="row row-cols-1 row-cols-lg-2 customer_records">
                <div className="col">
                   <div className="form-group">
                       <label>Name </label>
                       <input type="text" className="form-control"/>
                   </div>
                </div>
               
               
                <div className="col">
                   <div className="form-group">
                       <label>User ID </label>
                       <input type="text" className="form-control"/>
                   </div>
                </div>
                <div className="col">
                   <div className="form-group">
                       <label>Password </label>
                       <input type="text" className="form-control"/>
                   </div>
                </div>

                <div className="col">
                   <div className="form-group">
                       <label>Role </label>
                       <select className="form-select" aria-label="Default select example">
                        <option selected>--Select--</option>
                        <option value="1">Admin</option>
                        <option value="2">User</option>
                        </select>
                   </div>
                </div>
            </div>
            <div className="customer_records_dynamic mt-4"></div>
            <a id="add-more-user" className="btn add-more-btn">
            <span> <img src={cmaddicon} alt="cl"/> </span> Add More </a>
          </>
      );
    }
  }
export default AdminLashboardUserAdd;
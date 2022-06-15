import React from "react";
import UploadDocuments from "./UploadDocuments";
import iconwebplush from "../images/ex-icon.svg";
import { FaTrashAlt } from "react-icons/fa";
import $ from "jquery";


class MultiUploadInput extends React.Component {
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
      return(
          <>
            <div className="customer_records">
                <UploadDocuments/>
            </div>
            <div className="customer_records_dynamic mt-4"></div>
            <a id="extra-fields-customer" className="btn adbenf-btn p-0 mt-0 mb-4 mb-lg-0">
            <img src={iconwebplush} alt="webn"/>Add More 
            </a>
          </>
      );
    }
  }
export default MultiUploadInput;
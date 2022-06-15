import React from "react";
import TechicianCertifacateUpload from "./TechicianCertifacateUpload";
import iconwebplush from "../images/ex-icon.svg";
import { FaTrashAlt } from "react-icons/fa";
import $ from "jquery";


class MultiCertificate extends React.Component {
    componentWillMount(){
     $(document).ready(function(){
            $('#extra-fields-customer2').click(function() {
            $('.customer_records2').clone().appendTo('.customer_records_dynamic2');
            $('.customer_records_dynamic2 .customer_records2').addClass('single remove');
            $('.single .extra-fields-customer').remove();
            $('.single').append('<a href="#" class="remove-field btn-remove-customer col-1"> <img src="img/dl-icon.svg" al="bt"/>  </a>');
            $('.customer_records_dynamic > .single').attr("class", "row remove mt-4");
      
            $('.customer_records_dynamic2 input').each(function() {
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
            <div className="customer_records2">
                <TechicianCertifacateUpload/>
            </div>
            <div className="customer_records_dynamic2 mt-4"></div>
            <a id="extra-fields-customer2" className="btn adbenf-btn p-0 mt-0 mb-4 mb-lg-0">
            <img src={iconwebplush} alt="webn"/> Add Beneficiary 
            </a>
          </>
      );
    }
  }
export default MultiCertificate;
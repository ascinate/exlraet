import React from "react";
import $ from "jquery";


class AvSlottwo extends React.Component {
    componentWillMount(){

        $(document).ready(function(){
          
            var selector = '.new-slote li a';

            $(selector).on('click', function(){
                $(selector).removeClass('active');
                $(this).addClass('active');
            });
        });


      }
    render() {
      return(
          <>
          <div className="new-slote mt-4">

                <ul className="list-unstyled ">
                    <li>
                    <p className="time-sl avilable-slt disabled" tabindex="-1" aria-disabled="true">
                        06:00 - 07:00 AM
                    </p>
                    </li>
                    <li>
                    <a className="time-sl ">
                        07:00 - 08:00 AM
                    </a>
                    </li>
                    <li>
                    <a className="time-sl">
                        08:00 - 09:00 PM
                    </a>
                    </li>

                    <li>
                    <a className="time-sl">
                        09:00 - 10:00 PM
                    </a>
                    </li>

                    <li>
                    <a className="time-sl">
                        10:00 - 11:00 AM
                    </a>
                    </li>
                    <li>
                    <a className="time-sl">
                        1100 - 12:00 PM
                    </a>
                    </li>
                    <li>
                    <p className="time-sl avilable-slt disabled" aria-disabled="true">
                        12:00 - 01:00 PM
                    </p>
                    </li>
                    <li>
                    <a className="time-sl">
                    01:00 - 02:00 PM
                    </a>
                    </li>

                    <li>
                    <a className="time-sl">
                        02:00 - 03:00 PM
                    </a>
                    </li>

                    <li>
                    <p className="time-sl avilable-slt">
                        03:00 - 04:00 PM
                    </p>
                    </li>


                    <li>
                    <a className="time-sl">
                        04:00 - 05:00 PM
                    </a>
                    </li>

                    <li>
                    <a className="time-sl">
                    05:00 - 06:00 PM 
                    </a>
                    </li>

                    <li>
                    <a className="time-sl">
                        06:00 - 07:00 PM
                    </a>
                    </li>

                    <li>
                    <a className="time-sl">
                        07:00 - 08:00 PM
                    </a>
                    </li>

                    

                    
                </ul>
          
          </div>
          </>
      );
    }
  }

export default AvSlottwo;
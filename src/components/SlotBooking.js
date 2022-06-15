import React from "react";
import { BsCheck2, BsCheckLg } from "react-icons/bs";
import AvilableSlot from "./AvilableSlot";
import AvSlottwo from "./AvSlottwo";
import $ from "jquery";

class SlotBooking extends React.Component {
    componentWillMount(){

        $(document).ready(function(){
          $("#togle-icon").click(function(e) {
              e.preventDefault();
              $("#navAccordion").toggleClass("active");
              $("main").toggleClass("full-width");
              $("footer").toggleClass("full-width");
        
           });

           $("#day1").click(function(){
            $("#sun-sl").show();
            $("#mon-sl").hide();
            $("#tu-sl").hide();
            $("#wn-sl").hide();
            $("#th-sl").hide();
            $("#fri-sl").hide();
            $("#sta-sl").hide();
            });

            $("#day2").click(function(){
                $("#sun-sl").hide();
                $("#mon-sl").show();
                $("#tu-sl").hide();
                $("#wn-sl").hide();
                $("#th-sl").hide();
                $("#fri-sl").hide();
                $("#sta-sl").hide();
                });
            
            $("#day3").click(function(){
                $("#sun-sl").hide();
                $("#mon-sl").hide();
                $("#tu-sl").show();
                $("#wn-sl").hide();
                $("#th-sl").hide();
                $("#fri-sl").hide();
                $("#sta-sl").hide();
                });

            $("#day4").click(function(){
                $("#sun-sl").hide();
                $("#mon-sl").hide();
                $("#tu-sl").hide();
                $("#wn-sl").show();
                $("#th-sl").hide();
                $("#fri-sl").hide();
                $("#sta-sl").hide();
                });
            
            $("#day5").click(function(){
                $("#sun-sl").hide();
                $("#mon-sl").hide();
                $("#tu-sl").hide();
                $("#wn-sl").hide();
                $("#th-sl").show();
                $("#fri-sl").hide();
                $("#sta-sl").hide();
                });
            
            $("#day6").click(function(){
                $("#sun-sl").hide();
                $("#mon-sl").hide();
                $("#tu-sl").hide();
                $("#wn-sl").hide();
                $("#th-sl").hide();
                $("#fri-sl").show();
                $("#sta-sl").hide();
                });


            $("#day7").click(function(){
                $("#sun-sl").hide();
                $("#mon-sl").hide();
                $("#tu-sl").hide();
                $("#wn-sl").hide();
                $("#th-sl").hide();
                $("#fri-sl").hide();
                $("#sta-sl").show();
                });

            $('.plans li a').click(function(){
                $('li a').removeClass("active");
                $(this).addClass("active");
            });
        });



        
      }
    render() {
      return (
          <>
           <div className="row plans">
							       
				<ul className="d-md-flex list-unstyled justify-content-center justify-content-lg-between">
                  <li>
                     <a id="day1" className="cm-slots">
                        <span className="iconradio">
                            <BsCheckLg/>
                        </span>

                        <div className="plan-details">
                            <span className="d-block ts-cm">  Sunday </span>
                        </div>
                     </a>
                  </li>

                  <li>
                     <a id="day2" className="cm-slots active">
                        <span className="iconradio">
                            <BsCheckLg/>
                        </span>

                        <div className="plan-details">
                            <span className="d-block ts-cm">  Monday </span>
                        </div>
                     </a>
                  </li>

                  <li>
                     <a id="day3" className="cm-slots">
                        <span className="iconradio">
                            <BsCheckLg/>
                        </span>

                        <div className="plan-details">
                            <span className="d-block ts-cm">  Tuesday </span>
                        </div>
                     </a>
                  </li>
                  <li>
                     <a id="day4" className="cm-slots">
                        <span className="iconradio">
                            <BsCheckLg/>
                        </span>

                        <div className="plan-details">
                            <span className="d-block ts-cm">  Wednesday </span>
                        </div>
                     </a>
                  </li>
                  <li>
                     <a id="day5" className="cm-slots">
                        <span className="iconradio">
                            <BsCheckLg/>
                        </span>

                        <div className="plan-details">
                            <span className="d-block ts-cm">  Thursday </span>
                        </div>
                     </a>
                  </li>

                  <li>
                     <a id="day6" className="cm-slots">
                        <span className="iconradio">
                            <BsCheckLg/>
                        </span>

                        <div className="plan-details">
                            <span className="d-block ts-cm">  Friday </span>
                        </div>
                     </a>
                  </li>
                  <li>
                     <a id="day7" className="cm-slots">
                        <span className="iconradio">
                            <BsCheckLg/>
                        </span>

                        <div className="plan-details">
                            <span className="d-block ts-cm">  Saturday </span>
                        </div>
                     </a>
                  </li>
                </ul>				   
               
           </div>

           <div className="inside-slte">
              <div id="sun-sl">
                 <AvSlottwo/>
              </div>
              <div id="mon-sl">
                 <AvilableSlot/>
              </div>

              <div id="tu-sl">
                <AvSlottwo/>
              </div>

              <div id="wn-sl">
              <AvilableSlot/>
              </div>

              <div id="th-sl">
                 <AvSlottwo/>
              </div>

              <div id="fri-sl">
                <AvilableSlot/>
              </div>

              <div id="sta-sl">
                <AvSlottwo/>
              </div>
               
           </div>
          </>
      );
    }
  }
export default SlotBooking;
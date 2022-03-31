import React from "react";
import { BsCheck2, BsCheckLg } from "react-icons/bs";
import AvilableSlot from "./AvilableSlot";
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

           $("#on1").click(function(){
            $("#sun-sl").show();
            $("#mon-sl").hide();
            $("#tu-sl").hide();
            $("#wn-sl").hide();
            $("#th-sl").hide();
            $("#fri-sl").hide();
            $("#sta-sl").hide();
            });
        });
        
      }
    render() {
      return (
          <>
           <div className="row plans">
							       
								   
                <div className="col">

                    <label className="plan basic-plan" for="on1">
                        <input  type="radio" name="plan" id="on1" />
                        <div className="plan-content">
                        <span className="iconradio">
                            <BsCheckLg/>
                        </span>
                        <div className="plan-details">
                            <span className="d-block ts-cm">  Sunday </span>
                        </div>
                        </div>
                    </label>
                     
                </div>


                <div className="col">

                    <label className="plan basic-plan" for="on2">
                        <input type="radio" name="plan" id="on2" checked />
                        <div className="plan-content">
                        <span className="iconradio">
                            <BsCheckLg/>
                        </span>
                        <div className="plan-details">
                            <span className="d-block ts-cm">  Monday </span>
                        </div>
                        </div>
                    </label>
                     
                </div>


                <div className="col">

                    <label className="plan basic-plan" for="on3">
                        <input type="radio" name="plan" id="on3" />
                        <div className="plan-content">
                        <span className="iconradio">
                            <BsCheckLg/>
                        </span>
                        <div className="plan-details">
                            <span className="d-block ts-cm">  Tuesday </span>
                        </div>
                        </div>
                    </label>
                     
                </div>


                <div className="col">

                    <label className="plan basic-plan" for="on4">
                        <input type="radio" name="plan" id="on4" />
                        <div className="plan-content">
                        <span className="iconradio">
                            <BsCheckLg/>
                        </span>
                        <div className="plan-details">
                            <span className="d-block ts-cm">  Wednesday </span>
                        </div>
                        </div>
                    </label>
                     
                </div>


                <div className="col">

                    <label className="plan basic-plan" for="on5">
                        <input type="radio" name="plan" id="on5" />
                        <div className="plan-content">
                        <span className="iconradio">
                            <BsCheckLg/>
                        </span>
                        <div className="plan-details">
                            <span className="d-block ts-cm">  Thursday </span>
                        </div>
                        </div>
                    </label>
                     
                </div>


                <div className="col">

                    <label className="plan basic-plan" for="on6">
                        <input type="radio" name="plan" id="on6" />
                        <div className="plan-content">
                        <span className="iconradio">
                            <BsCheckLg/>
                        </span>
                        <div className="plan-details">
                            <span className="d-block ts-cm">  Friday </span>
                        </div>
                        </div>
                    </label>
                     
                </div>


                <div className="col">

                    <label className="plan basic-plan" for="on7">
                        <input type="radio" name="plan" id="on7" />
                        <div className="plan-content">
                        <span className="iconradio">
                            <BsCheckLg/>
                        </span>
                        <div className="plan-details">
                            <span className="d-block ts-cm">  Saturday </span>
                        </div>
                        </div>
                    </label>
                     
                </div>

                

           </div>

           <div className="inside-slte">
              <div id="sun-sl">
                 <AvilableSlot/>
              </div>
              <div id="mon-sl">
                 <AvilableSlot/>
              </div>

              <div id="tu-sl">
                 <AvilableSlot/>
              </div>

              <div id="wn-sl">
                 <AvilableSlot/>
              </div>

              <div id="th-sl">
                 <AvilableSlot/>
              </div>

              <div id="fri-sl">
                 <AvilableSlot/>
              </div>

              <div id="sta-sl">
                 <AvilableSlot/>
              </div>
               
           </div>
          </>
      );
    }
  }
export default SlotBooking;
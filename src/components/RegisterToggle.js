import React from "react";
import { BsPlus } from "react-icons/bs";
import MondayDiv from "./MondayDiv";
import TueDay from "./TueDay";
import WedDay from "./WedDay";
import ThuDay from "./ThuDay";
import FriDay from "./FriDay";
import SatDay from "./SatDay";
import SunDay from "./SunDay";
import $ from "jquery";

class RegisterToggle extends React.Component {
    componentWillMount(){

        $(document).ready(function(){
            $("#tg1").click(function(){
                $(".tg-new-btn").toggleClass("activeintro");
              });

              $("#tg2").click(function(){
                $("#tg2").toggleClass("activeintro");
                $("#tueday").toggle();
              });
              $("#tg3").click(function(){
                $("#tg3").toggleClass("activeintro");
                $("#wedday").toggle();
                
              });
              $("#tg4").click(function(){
                $("#tg4").toggleClass("activeintro");
                $("#thuday").toggle();
              });

              $("#tg5").click(function(){
                $("#tg5").toggleClass("activeintro");
                $("#friday").toggle();
              });

              $("#tg6").click(function(){
                $("#tg6").toggleClass("activeintro");
                $("#satday").toggle();
              });

              $("#tg7").click(function(){
                $("#tg7").toggleClass("activeintro");
                $("#sunday").toggle();
              });
        });


        


        
      }
    render() {
      return (
          <>
            <div className="row mt-4">
                <div className="col">
                    <div className="form-group cm-labelre d-flex align-items-center">
                       <a id="tg1" className="tg-new-btn activeintro"></a>
                       <label className="ms-2"> Monday</label>
                    </div>
                </div>

                <div className="col">
                    <div className="form-group cm-labelre d-flex align-items-center">
                       <a id="tg2" className="tg-new-btn"></a>
                       <label className="ms-2"> Tuesday</label>
                    </div>
                </div>

                <div className="col">
                    <div className="form-group cm-labelre d-flex align-items-center">
                       <a id="tg3" className="tg-new-btn"></a>
                       <label className="ms-2"> Wednesday </label>
                    </div>
                </div>

                <div className="col">
                    <div className="form-group cm-labelre d-flex align-items-center">
                       <a id="tg4" className="tg-new-btn"></a>
                       <label className="ms-2">Thursday </label>
                    </div>
                </div>

                <div className="col">
                    <div className="form-group cm-labelre d-flex align-items-center">
                       <a id="tg5" className="tg-new-btn"></a>
                       <label className="ms-2"> Friday </label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-group cm-labelre d-flex align-items-center">
                       <a id="tg6" className="tg-new-btn"></a>
                       <label className="ms-2"> Saturday </label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-group cm-labelre d-flex align-items-center">
                       <a id="tg7" className="tg-new-btn"></a>
                       <label className="ms-2"> Sunday </label>
                    </div>
                </div>
            </div>
            <div id="monday">
                 <MondayDiv/>
            </div>

            <div id="tueday">
                 <TueDay/>
            </div>
            <div id="wedday">
               <WedDay/>
            </div>
            <div id="thuday">
              <ThuDay/>
            </div>
            <div id="friday">
              <FriDay/>
            </div>
            <div id="satday">
              <SatDay/>
            </div>
            <div id="sunday">
              <SunDay/>
            </div>

            
                    
          </>
      );
    }
}

export default RegisterToggle;
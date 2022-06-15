import React from "react";
import { BsPlus } from "react-icons/bs";
import SmondayDiv from "./SmondayDiv";
import StueDay from "./StueDay";
import SwenDay from "./SwenDay";
import SthuDay from "./SthuDay";
import SfriDay from "./SfriDay";
import SsatDay from "./SsatDay";
import SsunDay from "./SsunDay";
import $ from "jquery";

class SetingAddfild extends React.Component {
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
                 <SmondayDiv/>
            </div>

            <div id="tueday">
                 <StueDay/>
            </div>
            <div id="wedday">
               <SwenDay/>
            </div>
            <div id="thuday">
              <SthuDay/>
            </div>
            <div id="friday">
              <SfriDay/>
            </div>
            <div id="satday">
              <SsatDay/>
            </div>
            <div id="sunday">
              <SsunDay/>
            </div>

            
                    
          </>
      );
    }
}

export default SetingAddfild;
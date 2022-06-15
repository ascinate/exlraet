import React from "react";
import $ from "jquery";

class SwitchTGButton extends React.Component {
    componentWillMount(){
        $(document).ready(function(){
            $("#tg-swich").click(function(){
            $(".swith-btn-cm").toggleClass("active-btn");
            });
        });
    }
    render() {
      return (
          <>
            <a id="tg-swich" className="swith-btn-cm">
              
            </a> 
          </>
      );
    }
  }

export default SwitchTGButton;
import React from "react";
import $ from "jquery";

class SwitchToggleButton extends React.Component {
  componentWillMount(){

    $(document).ready(function(){
        
        

        $("#off-btn").click(function(e){ 
          $(e.currentTarget).toggleClass("act-btn"); 
        }); 

      });
      
      
    
  }
  render() {
    return(
      <>
       
        <a id="off-btn" className="toggle-div-btn btn">
          <span className="on-text"> ON </span>
          <span className="off-text"> OFF </span>
        </a>
           
      </>
    );
  }
}

export default SwitchToggleButton;
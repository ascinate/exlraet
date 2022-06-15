import React from "react";
import $ from "jquery";

class SwitchToggleButtonActive extends React.Component {
  componentWillMount(){

    $(document).ready(function(){
        
        

        $("#on-btn").click(function(e){ 
          $(e.currentTarget).toggleClass("act-btn"); 
        }); 

      });
      
      
    
  }
  render() {
    return(
      <>
       
        
           
      </>
    );
  }
}

export default SwitchToggleButtonActive;
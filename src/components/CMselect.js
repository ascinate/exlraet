import React from "react";
import $ from "jquery";
import PaidOption from "./PaidOption";

class CMselect extends React.Component {
    componentWillMount(){
       
    }
    render() {
      return (
          <>
          <select id="mounth">
           <PaidOption/>
          </select> 
          </>
      );
    }
  }

export default CMselect;
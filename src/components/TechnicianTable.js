import React from "react";
import fileicon from "../images/file.svg";
import roketicon from "../images/rocket-icon.svg";
import flagicon from "../images/flag-icon.svg";
import chckicon from "../images/check-icon.svg";
import subicon from "../images/file-ck.svg";
import $ from "jquery";
import { NavLink } from "react-router-dom";


class TechnicianTable extends React.Component {
  componentWillMount(){

    $(document).ready(function(){
        
      $(function(){
         
        $('.showSingle').click(function(){
              $('.targetDiv').slideUp();
              $('#div'+$(this).attr('target')).slideDown();
        });

        
        $("#off-btn").click(function(e){ 
          $(e.currentTarget).toggleClass("act-btn"); 
        }); 

        $("#on-btn").click(function(e){ 
          $(e.currentTarget).toggleClass("act-btn"); 
        }); 

        $("#on-btn2").click(function(e){ 
          $(e.currentTarget).toggleClass("act-btn"); 
        }); 

        $("#off-btn2").click(function(e){ 
          $(e.currentTarget).toggleClass("act-btn"); 
        });
        
        $("#off-btn3").click(function(e){ 
          $(e.currentTarget).toggleClass("act-btn"); 
        });
        
        $("#off-btn4").click(function(e){ 
          $(e.currentTarget).toggleClass("act-btn"); 
        }); 




      });
    });
    
  }
  render() {
    return (

      <>
      <table className="table mt-4 table-hover inside-sp table-responsive">
        <thead>
        <tr className="bg-row">
            <th scope="col">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                
              </div>
            </th>
            <th scope="col">Tech ID</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">City</th>
            <th scope="col">Pincode</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
            <th scope="col"> <div className="ctl-td"> Collections </div> </th>
            <th scope="col">On/Off</th>
        </tr>
        </thead>
      <tbody>
      <tr>
          <td>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
              
          </div>
          </td>
          <td>
          <a data-bs-toggle="modal" data-bs-target="#userdetailsModal" className="showSingle" >  #55662323 </a> </td>
          <td>
            Sumit
          </td>
          <td>
          0000000000
          </td>
          <td>
          Albama
          </td>
          <td>
          160055
          </td>
         
          <td>
            <h6 className="st-text-s active-bytn"> Active </h6>
          </td>
          <td>
          <button className="track-btn"> Track </button>
          </td>
          <td>
            <NavLink to="/technicianaccount" className="btn colention-btn"> 5/10 </NavLink>
          </td>
          <td>
              
            <a id="off-btn" className="toggle-div-btn btn">
              <span className="on-text"> ON </span>
              <span className="off-text"> OFF </span>
            </a>
            
          </td>

          
      </tr>

     
      <tr>
          <td>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
              
          </div>
          </td>
          <td>
          <a data-bs-toggle="modal" data-bs-target="#userdetailsModal" className="showSingle" >  #55662323 </a> </td>
          <td>
          Jhon
          </td>
          <td>
          0000000000
          </td>
          <td>
          Albama
          </td>
          <td>
          160055
          </td>
         
          <td>
            <h6 className="st-text-s besy-btn-text"> Busy </h6>
          </td>
          <td>
          <button className="track-btn"> Track </button>
          </td>
          <td>
            <NavLink to="/technicianaccount" className="btn colention-btn"> 5/10 </NavLink>
          </td>
          <td>
              
            <a id="on-btn" className="toggle-div-btn btn act-btn">
              <span className="on-text"> ON </span>
              <span className="off-text"> OFF </span>
            </a>
            
          </td>

          
      </tr>
      
         
      
      <tr>
          <td>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
              
          </div>
          </td>
          <td>
          <a data-bs-toggle="modal" data-bs-target="#userdetailsModal" className="showSingle" >  #55662323 </a> </td>
          <td>
            Sam
          </td>
          <td>
          0000000000
          </td>
          <td>
          Albama
          </td>
          <td>
          160055
          </td>
         
          <td>
          <h6 className="st-text-s active-bytn"> Active </h6>
          </td>
          <td>
          <button className="track-btn"> Track </button>
          </td>
          <td>
            <NavLink to="/technicianaccount" className="btn colention-btn"> 5/10 </NavLink>
          </td>
          <td>
              
            <a id="off-btn2" className="toggle-div-btn btn">
              <span className="on-text"> ON </span>
              <span className="off-text"> OFF </span>
            </a>
            
          </td>

          
      </tr>

      <tr>
          <td>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
              
          </div>
          </td>
          <td>
          <a data-bs-toggle="modal" data-bs-target="#userdetailsModal" className="showSingle" >  #55662323 </a> </td>
          <td>
          Robert
          </td>
          <td>
          0000000000
          </td>
          <td>
          Albama
          </td>
          <td>
          160055
          </td>
         
          <td>
          <h6 className="st-text-s inactive-bytn"> Inactive </h6>
          </td>
          <td>
          <button className="track-btn"> Track </button>
          </td>
          <td>
            <NavLink to="/technicianaccount" className="btn colention-btn"> 5/10 </NavLink>
          </td>
          <td>
              
            <a id="off-btn3" className="toggle-div-btn btn">
              <span className="on-text"> ON </span>
              <span className="off-text"> OFF </span>
            </a>
            
          </td>

          
      </tr>
      
      <tr>
          <td>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
              
          </div>
          </td>
          <td>
          <a data-bs-toggle="modal" data-bs-target="#userdetailsModal" className="showSingle" >  #55662323 </a> </td>
          <td>
          James
          </td>
          <td>
          0000000000
          </td>
          <td>
          Albama
          </td>
          <td>
          160055
          </td>
         
          <td>
          <h6 class="st-text-s besy-btn-text"> Busy </h6>
          </td>
          <td>
          <button className="track-btn"> Track </button>
          </td>
          <td>
            <NavLink to="/technicianaccount" className="btn colention-btn"> 5/10 </NavLink>
          </td>
          <td>
            <a id="on-btn2" className="toggle-div-btn btn act-btn">
              <span className="on-text"> ON </span>
              <span className="off-text"> OFF </span>
            </a>
           
            
          </td>

          
      </tr>

      <tr>
          <td>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
              
          </div>
          </td>
          <td>
          <a data-bs-toggle="modal" data-bs-target="#userdetailsModal" className="showSingle" >  #55662323 </a> </td>
          <td>
          Ankush
          </td>
          <td>
          0000000000
          </td>
          <td>
          Albama
          </td>
          <td>
          160055
          </td>
         
          <td>
          <h6 className="st-text-s active-bytn"> Active </h6>
          </td>
          <td>
          <button className="track-btn"> Track </button>
          </td>
          <td>
            <NavLink to="/technicianaccount" className="btn colention-btn"> 5/10 </NavLink>
          </td>
          <td>
              
              <a id="off-btn4" className="toggle-div-btn btn">
                <span className="on-text"> ON </span>
                <span className="off-text"> OFF </span>
              </a>
            
          </td>

          
      </tr>


      </tbody>
      </table>
      </>
    );
  }
}
export default TechnicianTable;
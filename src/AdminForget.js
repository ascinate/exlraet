import React from "react";
import { NavLink } from "react-router-dom";
import logologin from "../src/images/main-logo.svg";
import line from "../src/images/line.svg";
function AdminForget(){
    return(
        <>
        <div className="forget-page">
           <div className="container">
            <div className="fog-get-fomm">
                 <NavLink to="/adminlogin" className="text-center d-table mx-auto"> 
                    <img src={logologin} alt="logoadmin"/>
                </NavLink>
               <h2 className="mt-5 text-center"> Forgot password? </h2>
               <p className="mt-3 text-center"> Please enter your email address to reset your password </p>
               <figure>
                 <img src={line} alt="line"/>
               </figure>
               <div className="form-group col-lg-7 mx-auto">
                   <label> Email Address </label>
                   <input type="text" className="form-control" placeholder="admin@gmail.com"/>
                   <NavLink to="/adminlogin" className="signup-btn"> 
                      <button type="submit"> Request Password Change </button>  
                   </NavLink>
               </div>
            </div>
                

           </div>
        </div>
        </>
    );
}
export default AdminForget;
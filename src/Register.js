import React from "react";
import { NavLink } from "react-router-dom";
import logologin from "../src/images/main-logo.svg";
import backicon from "../src/images/back-icon.svg";
import FileInput from "./components/FileInput";
import PanUpload from "./components/PanUpload";
import MedicalCertificate from "./components/MedicalCertificate";
import CrinicalFile from "./components/CrinicalFile";
function Register(){

    return(
        <>
          <div className="register-page pt-5">
             <div className="container">
               <NavLink to="/" > 
                  <img src={logologin} alt="logoadmin"/>
              </NavLink>

              <div className="register-formm mt-4">
                  <NavLink to="/" className="back-tbn"> <span> <img src={backicon} allt="bs"/> </span> Back </NavLink>
                  <div className="account-div-register mt-4">
                     <h2> Create An Account </h2>
                     <p> Make your home collections easy and fun. </p>
                     <div className="row mt-0 g-lg-4">
                        <div className="col-lg-6">
                           <div className="form-group">
                              <label> Lab Name </label>
                              <input type="text" className="form-control"/>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <label> Lab Address </label>
                              <input type="text" className="form-control"/>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <label> Lab Phone </label>
                              <input type="text" className="form-control"/>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <label> Lab Email </label>
                              <input type="email" className="form-control"/>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <label> Authorised person name </label>
                              <input type="email" className="form-control"/>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <label> Authorised person address </label>
                              <input type="text" className="form-control"/>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <label> Email </label>
                              <input type="email" className="form-control"/>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <label> Phone </label>
                              <input type="text" className="form-control"/>
                           </div>
                        </div>

                        <div className="col-lg-6">
                           <div className="form-group">
                              <label>Login ID </label>
                              <input type="text" className="form-control"/>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group">
                              <label> Password </label>
                              <input type="password" className="form-control"/>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="upload-doctuments-div mt-5">
                    <h2>  Upload Documents </h2>
                    <form className="form mt-4">
                        <div className="row g-lg-4">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter Adhaar"/>
                                </div>
                            </div>
                             <div className="col-lg-6">
                                 <FileInput/>
                             </div>
                             <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter PAN Card"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <PanUpload/>
                            </div>
                            <div className="col-lg-12">
                                <MedicalCertificate/>
                            </div>
                            <div className="col-lg-12">
                                <CrinicalFile/>
                            </div>
                        </div>
                    </form> 
                  </div>
                  <NavLink to="/" className="register-bnt mt-5">
                     <button> Register  </button>
                  </NavLink>
                  <p className="sign-text mt-4"> Already have an account? <NavLink to="/"> Sign in  </NavLink> </p>
              </div>
              
             </div>
          </div>
        </>
    );
}
export default Register;
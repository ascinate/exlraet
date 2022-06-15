import React from "react";
import { NavLink } from "react-router-dom";
import logobodyimg from "../src/images/logo-img.svg";
import logologin from "../src/images/logo-login.png";
import iconeye from "../src/images/fm-eye.svg";
import $ from "jquery";


class AdminLogin extends React.Component {
    componentWillMount(){

        $(document).ready(function(){
           $(".toggle-password").click(function() {
    
              $(this).toggleClass("fa-eye fa-eye-slash");
              var input = $($(this).attr("toggle"));
              if (input.attr("type") == "text") {
                input.attr("type", "password");
              } else {
                input.attr("type", "text");
              }
            });
        });
        
      }
    render() {
      return(
        <div className="login-page float-start w-100">
            <div className="container-fluid">
            <div className="row">
                <div className="col-lg-7">
                    <div className="login-left">
                        <h2> EXLRAET your operations by tracking <br/> our fast
                        & reliable services</h2>

                        <figure className="mb-0">
                            <img src={logobodyimg} alt='bn'/>
                        </figure>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="login-right">
                        <NavLink to="/adminlogin"> 
                            <img src={logologin} alt="logoadmin"/>
                        </NavLink>
                        <div className="form-sec-login">
                            <h5 className="mt-3">Welcome to EXLRAET </h5>
                            <p className="sub-text-login"> Please sign-in to your account  </p>
                            <form action="" method="get">
                            <div className="form-group">
                                <label> Email </label>
                                <div className="lable-input">
                                <input type="email" className="form-control" placeholder="admin@demo.com" required/>
                                </div> 
                            </div>

                            <div className="form-group">
                                <label> Password </label>
                                <div className="lable-input">
                                <input name="password" id="password-field" type="Password" className="form-control" value="secret" required/>
                                <span toggle="#password-field" className="fa fa-fw fa-eye-slash  field-icon toggle-password"> </span>
                                </div> 
                            </div>

                            <div className="from-group">
                                <NavLink to="/adminforget" className="forget-btn"> Forgot Password? </NavLink>
                            </div>
                            <div className="from-group">
                                <NavLink to="/admindashbord" className="sign-btn">
                                <button type="submit"> Sign In </button>  
                                </NavLink>
                            </div>
                            <p className="register-btn text-center mt-3"> New on our
                            platform? <NavLink to="/adminregister"> Create an account </NavLink> 
                            </p>
                            <p className="register-btn text-center mt-3"> User Login? 
                                <NavLink to="/"> Click Here </NavLink> 
                            </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      );
    }
  }
export default AdminLogin;
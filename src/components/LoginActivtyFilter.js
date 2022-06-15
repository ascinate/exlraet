import React from "react";
import $ from "jquery";
import { BsXLg } from "react-icons/bs";


const changeHandal =(e)=>{
    // console.log(e.target.value)
    console.log(e.target.checked)
}
class LoginActivtyFilter extends React.Component {

    componentWillMount(){
     

        $(document).ready(function(){
            $(".tab-b1-login").click(function(){
               $("#tabs1-login").toggleClass("activecheck");
            });

           
            $(".tab-b2-login").click(function(){
                $("#tabs2-login").toggleClass("activecheck");
             });

             $("#tabs-btn3-login").click(function(){
                $("#tabs3-login").toggle();
             });

             $("#tabs-btn4-login").click(function(){
                $("#tabs4-login").toggle();
             });

             $("#tabs-btn5-login").click(function(){
                $("#tabs5-login").toggle();
             });

             $("#tabs-btn6-login").click(function(){
                $("#tabs6-login").toggle();
             });

             $("#tabs-btn7-login").click(function(){
                $("#tabs7-login").toggle();
             });

             $("#tabs-btn8-login").click(function(){
                $("#tabs8-login").toggle();
             });

            
            
           
        });
        $(document).ready(function(){
            $("#clear-all").click(function() {
                if ($("#clear-all").val() == "check all") {
                $(".cb-element").prop("checked", true);
                $("#clear-all").val("uncheck all");
                } else if ($("#clear-all").val() == "uncheck all") {
                $(".cb-element").prop("checked", false);
                $("#clear-all").val("check all");
                }
            });
        });
    }
    render() {
      return(
          <>
          <div className="offcanvas filter-modal offcanvas-end" tabindex="-1" id="activety-filter" aria-labelledby="offcanvasExampleLabel">
               
                <div className="offcanvas-body">
                    
                    <div className="filter-div-body">
                        <div className="d-flex justify-content-center">
                            <div className="col-lg-6 mt-5">
                                <div id="tabs1-login" className="filter-form-div activecheck pe-lg-4">
                                    <div className="comon-fild">
                                        <label> User Name	 </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                </div>

                                <div id="tabs2-login" className="filter-form-div activecheck pt-2 pe-lg-4">
                                  

                                    <div className="comon-fild">
                                        <label> Login ID </label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                  
                                
                                </div>

                                <div id="tabs3-login" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Password </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>


        


                                <div id="tabs5-login" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Phone number </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>

                                <div id="tabs6-login" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Login Date </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>

                                <div id="tabs7-login" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>Login Time </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>

                                <div id="tabs8-login" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Log out time </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                    
                                   
                                </div>

                                <div className="comon-fild mt-4">
                                    <input type="submit" className="btn submit-btn m-0" value="Search"/>
                                </div>
                        


                            </div>
                            <div className="col-lg-6">
                                <div className="filter-checks pt-5 ps-lg-4">
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <BsXLg/>
                                </button>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0"> Filters</h5>
                                        <a id="clear-all" className="claer-all-btn"> Clear All </a>
                                    </div>
                                    <div className="check-box-radio mt-4">
                                        <div className="form-check">
                                           <label className="form-check-label tab-b1-login" for="tabs-btn1">
                                            <input className="form-check-input cb-element" type="checkbox" defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            User Name
                                            </label>
                                        </div>

                                        <div className="form-check"> 
                                          <label className="form-check-label tab-b2-login" for="even">
                                            <input className="form-check-input cb-element" name="even" type="checkbox" value="even" id="tabs-btn2"
                                            defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Login ID
                                          </label>
                                        </div>


                                        <div className="form-check">
                                        <label className="form-check-label tab-b3" for="tabs-btn3">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn3-login"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Password
                                            </label>
                                        </div>

                                        

                                        <div className="form-check">
                                           <label className="form-check-label tab-b5" for="tabs-btn5">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn5-login"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Phone number
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b6" for="tabs-btn6">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn6-login"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Login Date
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b7" for="tabs-btn7">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn7-login"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Login Time
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b8" for="tabs-btn8">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn8-login"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Log out time
                                            </label>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
          </div>
          </>
      );
    }
  }

export default LoginActivtyFilter;

            
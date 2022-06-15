import React from "react";
import $ from "jquery";
import { BsXLg } from "react-icons/bs";


const changeHandal =(e)=>{
    // console.log(e.target.value)
    console.log(e.target.checked)
}
class LabNoticFilterIusse extends React.Component {

    componentWillMount(){
     

        $(document).ready(function(){
            $(".lab-issue-btn1").click(function(){
               $("#lab-issue-div1").toggleClass("activecheck");
            });

           
            $(".lab-issue-btn2").click(function(){
                $("#lab-issue-div2").toggleClass("activecheck");
             });

             $("#lab-issue-btn3").click(function(){
                $("#lab-issue-div3").toggle();
             });

             $("#lab-issue-btn4").click(function(){
                $("#lab-issue-div4").toggle();
             });

             $("#lab-issue-btn5").click(function(){
                $("#lab-issue-div5").toggle();
             });

             $("#lab-issue-btn6").click(function(){
                $("#lab-issue-div6").toggle();
             });

             $("#lab-issue-btn7").click(function(){
                $("#lab-issue-div7").toggle();
             });

             $("#lab-issue-btn8").click(function(){
                $("#lab-issue-div8").toggle();
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
          <div className="offcanvas filter-modal offcanvas-end" tabindex="-1" id="offcanvasFilteris" aria-labelledby="offcanvasExampleLabel">
               
                <div className="offcanvas-body">
                    
                    <div className="filter-div-body">
                        <div className="d-flex justify-content-center">
                            <div className="col-lg-6 mt-5">
                                <div id="lab-issue-div1" className="filter-form-div activecheck pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Lab ID	 </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                </div>

                                <div id="lab-issue-div2" className="filter-form-div activecheck pt-2 pe-lg-4">
                                  

                                    <div className="comon-fild">
                                        <label>Username </label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                  
                                
                                </div>

                                <div id="lab-issue-div3" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>User Number</label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>


                                <div id="lab-issue-div4" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>City </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>


                                <div id="lab-issue-div5" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>  State </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>

                                <div id="lab-issue-div6" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Issue </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>

                                <div id="lab-issue-div7" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>Status </label>
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
                                           <label className="form-check-label lab-issue-btn1" for="tabs-btn1">
                                            <input className="form-check-input cb-element" type="checkbox" defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Lab ID	
                                            </label>
                                        </div>

                                        <div className="form-check"> 
                                          <label className="form-check-label lab-issue-btn2" for="even">
                                            <input className="form-check-input cb-element" name="even" type="checkbox" value="even" id="tabs-btn2"
                                            defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Username
                                          </label>
                                        </div>


                                        <div className="form-check">
                                        <label className="form-check-label tab-b3" for="tabs-btn3">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="lab-issue-btn3"
                                            onChange={e=>changeHandal(e)}/>
                                            User Number
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b4" for="tabs-btn4">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="lab-issue-btn4"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            City
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b5" for="tabs-btn5">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="lab-issue-btn5"
                                            onChange={e=>changeHandal(e)}/>
                                            State
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b6" for="tabs-btn6">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="lab-issue-btn6"
                                            onChange={e=>changeHandal(e)}/>
                                            Issue
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b7" for="tabs-btn7">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="lab-issue-btn7"
                                            onChange={e=>changeHandal(e)}/>
                                            Status
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

export default LabNoticFilterIusse;
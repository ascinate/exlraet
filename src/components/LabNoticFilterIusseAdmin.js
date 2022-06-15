import React from "react";
import $ from "jquery";
import { BsXLg } from "react-icons/bs";


const changeHandal =(e)=>{
    // console.log(e.target.value)
    console.log(e.target.checked)
}
class LabNoticFilterIusseAdmin extends React.Component {

    componentWillMount(){
     

        $(document).ready(function(){
            $(".issue-ft-1").click(function(){
               $("#issue-tab-div1").toggleClass("activecheck");
            });

           
            $(".issue-ft-2").click(function(){
                $("#issue-tab-div2").toggleClass("activecheck");
             });

             $("#issue-ft-3").click(function(){
                $("#issue-tab-div3").toggle();
             });

             $("#issue-ft-4").click(function(){
                $("#issue-tab-div4").toggle();
             });

             $("#issue-ft-5").click(function(){
                $("#issue-tab-div5").toggle();
             });

             $("#issue-ft-6").click(function(){
                $("#issue-tab-div6").toggle();
             });

             $("#issue-ft-7").click(function(){
                $("#issue-tab-div7").toggle();
             });

             $("#issue-ft-8").click(function(){
                $("#issue-tab-div8").toggle();
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
                                <div id="issue-tab-div1" className="filter-form-div activecheck pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Lab ID	 </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                </div>

                                <div id="issue-tab-div2" className="filter-form-div activecheck pt-2 pe-lg-4">
                                  

                                    <div className="comon-fild">
                                        <label> Lab Name </label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                  
                                
                                </div>


                                <div id="issue-tab-div3" className="filter-form-div pt-2 pe-lg-4">
                                  

                                    <div className="comon-fild">
                                        <label> Username </label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                  
                                
                                </div>

                              


                                <div id="issue-tab-div4" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>User Number </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>


                                <div id="issue-tab-div5" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> City </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>

                                <div id="issue-tab-div6" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> State </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>

                                <div id="issue-tab-div7" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>Issue </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>

                                <div id="issue-tab-div8" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Status </label>
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
                                           <label className="form-check-label issue-ft-1" for="tabs-btn1">
                                            <input className="form-check-input cb-element" type="checkbox" defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Lab ID	
                                            </label>
                                        </div>

                                        <div className="form-check"> 
                                          <label className="form-check-label issue-ft-2" for="even">
                                            <input className="form-check-input cb-element" name="even" type="checkbox" value="even" id="tabs-btn2"
                                            defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Lab Name
                                          </label>
                                        </div>

                                        <div className="form-check">
                                        <label className="form-check-label" for="tabs-btn3">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="issue-ft-3"
                                            onChange={e=>changeHandal(e)}/>
                                            Username
                                            </label>
                                        </div>

                                        <div className="form-check">
                                        <label className="form-check-label tab-b3" for="tabs-btn3">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="issue-ft-4"
                                            onChange={e=>changeHandal(e)}/>
                                            User Number
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b4" for="tabs-btn4">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="issue-ft-5"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            City
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b5" for="tabs-btn5">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="issue-ft-6"
                                            onChange={e=>changeHandal(e)}/>
                                            State
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b6" for="tabs-btn6">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="issue-ft-7"
                                            onChange={e=>changeHandal(e)}/>
                                            Issue
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b7" for="tabs-btn7">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="issue-ft-8"
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

export default LabNoticFilterIusseAdmin;
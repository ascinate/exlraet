import React from "react";
import $ from "jquery";
import { BsXLg } from "react-icons/bs";


const changeHandal =(e)=>{
    // console.log(e.target.value)
    console.log(e.target.checked)
}
class AdminTestFilterA extends React.Component {

    componentWillMount(){
     

        $(document).ready(function(){
            $(".tab-b1").click(function(){
               $("#tabs1").toggleClass("activecheck");
            });

           
            $(".tab-b2").click(function(){
                $("#tabs2").toggleClass("activecheck");
             });

             $("#tabs-btn3").click(function(){
                $("#tabs3").toggle();
             });

             $("#tabs-btn4").click(function(){
                $("#tabs4").toggle();
             });

             $("#tabs-btn5").click(function(){
                $("#tabs5").toggle();
             });

             $("#tabs-btn6").click(function(){
                $("#tabs6").toggle();
             });

             $("#tabs-btn7").click(function(){
                $("#tabs7").toggle();
             });

             $("#tabs-btn8").click(function(){
                $("#tabs8").toggle();
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
          <div className="offcanvas filter-modal offcanvas-end" tabindex="-1" id="offcanvasFilter" aria-labelledby="offcanvasExampleLabel">
               
                <div className="offcanvas-body">
                    
                    <div className="filter-div-body">
                        <div className="d-flex justify-content-center">
                            <div className="col-lg-6 mt-5">
                                <div id="tabs1" className="filter-form-div activecheck pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Lab ID </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                </div>

                                <div id="tabs2" className="filter-form-div activecheck pt-2 pe-lg-4">
                                  

                                    <div className="comon-fild">
                                        <label> Lab Name </label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                  
                                
                                </div>

                                <div id="tabs3" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Test code </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>


                                <div id="tabs4" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Test Name </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>


                                <div id="tabs5" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> City </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>

                                <div id="tabs6" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> State</label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>

                                <div id="tabs7" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Price </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>

                                <div id="tabs8" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>Commission </label>
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
                                           <label className="form-check-label tab-b1" for="tabs-btn1">
                                            <input className="form-check-input cb-element" type="checkbox" defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Lab ID
                                            </label>
                                        </div>

                                        <div className="form-check"> 
                                          <label className="form-check-label tab-b2" for="even">
                                            <input className="form-check-input cb-element" name="even" type="checkbox" value="even" id="tabs-btn2"
                                            defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Lab Name
                                          </label>
                                        </div>


                                        <div className="form-check">
                                        <label className="form-check-label tab-b3" for="tabs-btn3">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn3"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Test code
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b4" for="tabs-btn4">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn4"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Test Name	
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b5" for="tabs-btn5">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn5"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            City
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b6" for="tabs-btn6">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn6"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            State
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b7" for="tabs-btn7">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn7"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Price
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b8" for="tabs-btn8">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn8"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Commission
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

export default AdminTestFilterA;

            
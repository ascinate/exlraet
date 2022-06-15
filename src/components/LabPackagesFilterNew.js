import React from "react";
import $ from "jquery";
import { BsXLg } from "react-icons/bs";


const changeHandal =(e)=>{
    // console.log(e.target.value)
    console.log(e.target.checked)
}
class LabPackagesFilterNew extends React.Component {

    componentWillMount(){
     

        $(document).ready(function(){
            $(".tab-b1-f").click(function(){
               $("#tabs1-f").toggleClass("activecheck");
            });

           
            $(".tab-b2-f").click(function(){
                $("#tabs2-f").toggleClass("activecheck");
             });

             $("#tabs-btn3-f").click(function(){
                $("#tabs3-f").toggle();
             });

             $("#tabs-btn4-f").click(function(){
                $("#tabs4-f").toggle();
             });

             $("#tabs-btn5-f").click(function(){
                $("#tabs5-f").toggle();
             });

             $("#tabs-btn6-f").click(function(){
                $("#tabs6-f").toggle();
             });

             $("#tabs-btn7-f").click(function(){
                $("#tabs7-f").toggle();
             });

             $("#tabs-btn8-f").click(function(){
                $("#tabs8-f").toggle();
             });
             
             $("#tabs-btn9-f").click(function(){
                $("#tabs9-f").toggle();
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
          <div className="offcanvas filter-modal offcanvas-end" tabindex="-1" id="offcanvasFilterPac" aria-labelledby="offcanvasExampleLabel">
               
                <div className="offcanvas-body">
                    
                    <div className="filter-div-body">
                        <div className="d-flex justify-content-center">
                            <div className="col-lg-6 mt-5">
                                <div id="tabs1-f" className="filter-form-div activecheck pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Package 
                                        Code </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                </div>

                                <div id="tabs2-f" className="filter-form-div activecheck pt-2 pe-lg-4">
                                  

                                    <div className="comon-fild">
                                        <label> Package 
                                        Name </label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                  
                                
                                </div>

                                <div id="tabs3-f" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Parameters </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>


                                <div id="tabs4-f" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Sample 
                                        Qty </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>


                                <div id="tabs5-f" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Report 
                                        TAT </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>

                                <div id="tabs6-f" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>Commission
                                        % </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>

                                <div id="tabs7-f" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Price </label>
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
                                           <label className="form-check-label tab-b1-f" for="tabs-btn1">
                                            <input className="form-check-input cb-element" type="checkbox" defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Package 
Code
                                            </label>
                                        </div>

                                        <div className="form-check"> 
                                          <label className="form-check-label tab-b2-f" for="even">
                                            <input className="form-check-input cb-element" name="even" type="checkbox" value="even" id="tabs-btn2"
                                            defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Package 
Name
                                          </label>
                                        </div>


                                        <div className="form-check">
                                        <label className="form-check-label tab-b3" for="tabs-btn3">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn3-f"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Parameters
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b4" for="tabs-btn4">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn4-f"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Sample 
                                            Qty
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b5" for="tabs-btn5">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn5-f"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Report 
TAT
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b6" for="tabs-btn6">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn6-f"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Commission
%
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b7" for="tabs-btn7">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn7-f"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Price
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

export default LabPackagesFilterNew;

            
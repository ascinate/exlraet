import React from "react";
import $ from "jquery";
import { BsXLg } from "react-icons/bs";


const changeHandal =(e)=>{
    // console.log(e.target.value)
    console.log(e.target.checked)
}
class AdminTestFilterB extends React.Component {

    componentWillMount(){
     

        $(document).ready(function(){
            $(".tab-b1-test").click(function(){
               $("#tabs1-test").toggleClass("activecheck");
            });

           
            $(".tab-b2-test").click(function(){
                $("#tabs2-test").toggleClass("activecheck");
             });

             $("#tabs-btn3-test").click(function(){
                $("#tabs3-test").toggle();
             });

             $("#tabs-btn4-test").click(function(){
                $("#tabs4-test").toggle();
             });

             $("#tabs-btn5-test").click(function(){
                $("#tabs5-test").toggle();
             });

             $("#tabs-btn6-test").click(function(){
                $("#tabs6-test").toggle();
             });

             $("#tabs-btn7-test").click(function(){
                $("#tabs7-test").toggle();
             });

             $("#tabs-btn8-test").click(function(){
                $("#tabs8-test").toggle();
             });

             $("#tabs-btn9-test").click(function(){
                $("#tabs9-test").toggle();
             });

             $("#tabs-btn10-test").click(function(){
                $("#tabs10-test").toggle();
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
          <div className="offcanvas filter-modal offcanvas-end" tabindex="-1" id="offcanvasFilterb" aria-labelledby="offcanvasExampleLabel">
               
                <div className="offcanvas-body">
                    
                    <div className="filter-div-body">
                        <div className="d-flex justify-content-center">
                            <div className="col-lg-6 mt-5">
                                <div id="tabs1-test" className="filter-form-div activecheck pe-lg-4">
                                    <div className="comon-fild">
                                        <label> S. No. </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                </div>

                                <div id="tabs2-test" className="filter-form-div activecheck pt-2 pe-lg-4">
                                  

                                    <div className="comon-fild">
                                        <label> Lab ID </label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                  
                                
                                </div>

                                <div id="tabs3-test" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Lab
                                        Name </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>


                                <div id="tabs4-test" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Package
                                        Code </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>


                                <div id="tabs5-test" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Package
                                        Name	 </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>

                                <div id="tabs6-test" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Parameters</label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>

                                <div id="tabs7-test" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Sample
                                        Qty </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>

                                <div id="tabs8-test" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>Report
                                        TAT </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                    
                                   
                                </div>

                                <div id="tabs9-test" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>Commission</label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                    
                                   
                                </div>

                                <div id="tabs10-test" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>Price</label>
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
                                           <label className="form-check-label tab-b1-test" for="tabs-btn1">
                                            <input className="form-check-input cb-element" type="checkbox" defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            S. No
                                            </label>
                                        </div>

                                        <div className="form-check"> 
                                          <label className="form-check-label tab-b2-test" for="even">
                                            <input className="form-check-input cb-element" name="even" type="checkbox" value="even" id="tabs-btn2"
                                            defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Lab ID
                                          </label>
                                        </div>


                                        <div className="form-check">
                                        <label className="form-check-label tab-b3" for="tabs-btn3">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn3-test"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Lab Name
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b4" for="tabs-btn4">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn4-test"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Package
                                            Code
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b5" for="tabs-btn5">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn5-test"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Package Name
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b6" for="tabs-btn6">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn6-test"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Parameters
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b7" for="tabs-btn7">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn7-test"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Sample Qty
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b8" for="tabs-btn8">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn8-test"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Report TAT
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b9" for="tabs-btn8">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn9-test"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Commission
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b10" for="tabs-btn8">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn10-test"
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

export default AdminTestFilterB;

            
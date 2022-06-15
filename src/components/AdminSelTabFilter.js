import React from "react";
import $ from "jquery";
import { BsXLg } from "react-icons/bs";


const changeHandal =(e)=>{
    // console.log(e.target.value)
    console.log(e.target.checked)
}
class AdminSelTabFilter extends React.Component {

    componentWillMount(){
     

        $(document).ready(function(){
            $(".tab-b1-sel-modal").click(function(){
               $("#tabs1-sel-modal").toggleClass("activecheck");
            });

           
            $(".tab-b2-sel-modal").click(function(){
                $("#tabs2-sel-modal").toggleClass("activecheck");
             });

             $("#tabs-btn3-sel-modal").click(function(){
                $("#tabs3-sel-modal").toggle();
             });

             $("#tabs-btn4-sel-modal").click(function(){
                $("#tabs4-sel-modal").toggle();
             });

             $("#tabs-btn5-sel-modal").click(function(){
                $("#tabs5-sel-modal").toggle();
             });

             $("#tabs-btn6-sel-modal").click(function(){
                $("#tabs6-sel-modal").toggle();
             });

             $("#tabs-btn7-sel-modal").click(function(){
                $("#tabs7-sel-modal").toggle();
             });

             $("#tabs-btn8-sel-modal").click(function(){
                $("#tabs8-sel-modal").toggle();
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
          <div className="offcanvas filter-modal special-offcanvas offcanvas-end" tabindex="-1" id="offcanvasFilter-sel-tab" aria-labelledby="offcanvasExampleLabel">
               
                <div className="offcanvas-body">
                    
                    <div className="filter-div-body">
                        <div className="d-flex justify-content-center">
                            <div className="col-lg-6 mt-5">
                                <div id="tabs1-sel-modal" className="filter-form-div activecheck pe-lg-4">
                                    <div className="comon-fild">
                                        <label>Lab ID </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                </div>

                                <div id="tabs2-sel-modal" className="filter-form-div activecheck pt-2 pe-lg-4">
                                  

                                    <div className="comon-fild">
                                        <label> Lab Name </label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                  
                                
                                </div>

                                <div id="tabs3-sel-modal" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Address </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>


                                <div id="tabs4-sel-modal" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> City </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>


                                <div id="tabs5-sel-modal" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> State </label>
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
                                           <label className="form-check-label tab-b1-sel-modal" for="tabs-btn1">
                                            <input className="form-check-input cb-element" type="checkbox" defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Lab ID
                                            </label>
                                        </div>

                                        <div className="form-check"> 
                                          <label className="form-check-label tab-b2-sel-modal" for="even">
                                            <input className="form-check-input cb-element" name="even" type="checkbox" value="even" id="tabs-btn2"
                                            defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Lab Name	
                                          </label>
                                        </div>


                                        <div className="form-check">
                                        <label className="form-check-label tab-b3" for="tabs-btn3">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn3-sel-modal"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Date
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b4" for="tabs-btn4">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn4-sel-modal"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Address
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b5" for="tabs-btn5">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn5-sel-modal"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            City
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b6" for="tabs-btn6">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tabs-btn6-sel-modal"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            State
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

export default AdminSelTabFilter;

            
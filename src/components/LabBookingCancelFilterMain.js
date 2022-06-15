import React from "react";
import $ from "jquery";
import { BsXLg } from "react-icons/bs";


const changeHandal =(e)=>{
    // console.log(e.target.value)
    console.log(e.target.checked)
}
class LabBookingCancelFilterMain extends React.Component {

    componentWillMount(){
     

        $(document).ready(function(){
            $(".tab-bcancel1").click(function(){
               $("#tabs-bc-div1").toggleClass("activecheck");
            });

           
            $(".tab-bcancel2").click(function(){
                $("#tabs-bc-div12").toggleClass("activecheck");
             });

             $("#tab-bcancel3").click(function(){
                $("#tabs-bc-div3").toggle();
             });

             $("#tab-bcancel4").click(function(){
                $("#tabs-bc-div4").toggle();
             });

             $("#tab-bcancel5").click(function(){
                $("#tabs-bc-div5").toggle();
             });

             $("#tab-bcancel6").click(function(){
                $("#tabs-bc-div6").toggle();
             });

             $("#tab-bcancel7").click(function(){
                $("#tabs-bc-div7").toggle();
             });

             $("#tab-bcancel8").click(function(){
                $("#tabs-bc-div8").toggle();
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
          <div className="offcanvas filter-modal offcanvas-end" tabindex="-1" id="lab-booking-cancel-filter" aria-labelledby="offcanvasExampleLabel">
               
                <div className="offcanvas-body">
                    
                    <div className="filter-div-body">
                        <div className="d-flex justify-content-center">
                            <div className="col-lg-6 mt-5">
                                


                                <div id="tabs-bc-div1" className="filter-form-div activecheck pt-2 pe-lg-4">
                                  

                                    <div className="comon-fild">
                                        <label> Order ID </label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                  
                                
                                </div>
                                <div id="tabs-bc-div12" className="filter-form-div activecheck pt-2 pe-lg-4">
                                  

                                    <div className="comon-fild">
                                        <label> Name </label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                  
                                
                                </div>

                                <div id="tabs-bc-div3" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>Date  </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>


                                <div id="tabs-bc-div4" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Phone </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>


                                <div id="tabs-bc-div5" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Email </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>

                                <div id="tabs-bc-div6" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>Reason </label>
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
                                           <label className="form-check-label tab-bcancel1" for="tabs-btn1">
                                            <input className="form-check-input cb-element" type="checkbox" defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Order ID
                                            </label>
                                        </div>

                                        <div className="form-check"> 
                                          <label className="form-check-label tab-bcancel2" for="even">
                                            <input className="form-check-input cb-element" name="even" type="checkbox" value="even"
                                            defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Name
                                          </label>
                                        </div>


                                        <div className="form-check">
                                        <label className="form-check-label tab-b3" for="tabs-btn3">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tab-bcancel3"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Date
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b4" for="tabs-btn4">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tab-bcancel4"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Phone
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b5" for="tabs-btn5">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tab-bcancel5"
                                            onChange={e=>changeHandal(e)}/>
                                            Email
                                           
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b6" for="tabs-btn6">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tab-bcancel6"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Reason
                                            </label>
                                        </div>

                                        <div className="form-check d-none">
                                           <label className="form-check-label tab-b7" for="tabs-btn7">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="tab-bcancel7"
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

export default LabBookingCancelFilterMain;

            
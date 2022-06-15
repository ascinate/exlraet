import React from "react";
import $ from "jquery";
import { BsXLg } from "react-icons/bs";


const changeHandal =(e)=>{
    // console.log(e.target.value)
    console.log(e.target.checked)
}
class PaymentNoficationFilterN extends React.Component {

    componentWillMount(){
     

        $(document).ready(function(){
            $(".payment-filter-btn1").click(function(){
               $("#payment-tab-div1").toggleClass("activecheck");
            });

           
            $(".payment-filter-btn2").click(function(){
                $("#payment-tab-div2").toggleClass("activecheck");
             });

             $("#payment-filter-btn3").click(function(){
                $("#payment-tab-div3").toggle();
             });

             $("#payment-filter-btn4").click(function(){
                $("#payment-tab-div4").toggle();
             });

             $("#payment-filter-btn5").click(function(){
                $("#payment-tab-div5").toggle();
             });

             $("#payment-filter-btn6").click(function(){
                $("#payment-tab-div6").toggle();
             });

             $("#payment-filter-btn7").click(function(){
                $("#payment-tab-div7").toggle();
             });

             $("#payment-filter-btn8").click(function(){
                $("#payment-tab-div8").toggle();
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
          <div className="offcanvas filter-modal offcanvas-end" tabindex="-1" id="offcanvasFilterpayn" aria-labelledby="offcanvasExampleLabel">
               
                <div className="offcanvas-body">
                    
                    <div className="filter-div-body">
                        <div className="d-flex justify-content-center">
                            <div className="col-lg-6 mt-5">
                                <div id="payment-tab-div1" className="filter-form-div activecheck pe-lg-4">
                                    <div className="comon-fild">
                                        <label>Lab ID	 </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                </div>

                                <div id="payment-tab-div2" className="filter-form-div activecheck pt-2 pe-lg-4">
                                  

                                    <div className="comon-fild">
                                        <label>Date </label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                  
                                
                                </div>

                                <div id="payment-tab-div3" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>City</label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>


                                <div id="payment-tab-div4" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>State </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>


                                <div id="payment-tab-div5" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Amount </label>
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
                                           <label className="form-check-label payment-filter-btn1" for="tabs-btn1">
                                            <input className="form-check-input cb-element" type="checkbox" defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Lab ID
                                            </label>
                                        </div>

                                        <div className="form-check"> 
                                          <label className="form-check-label payment-filter-btn2" for="even">
                                            <input className="form-check-input cb-element" name="even" type="checkbox" value="even" id="tabs-btn2"
                                            defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Date
                                          </label>
                                        </div>


                                        <div className="form-check">
                                        <label className="form-check-label tab-b3" for="tabs-btn3">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="payment-filter-btn3"
                                            onChange={e=>changeHandal(e)}/>
                                            City
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b4" for="tabs-btn4">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="payment-filter-btn4"
                                            onChange={e=>changeHandal(e)}/>
                                            State
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b5" for="tabs-btn5">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="payment-filter-btn5"
                                            onChange={e=>changeHandal(e)}/>
                                            Amount	
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

export default PaymentNoficationFilterN;
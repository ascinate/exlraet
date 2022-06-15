import React from "react";
import $ from "jquery";
import { BsXLg } from "react-icons/bs";


const changeHandal =(e)=>{
    // console.log(e.target.value)
    console.log(e.target.checked)
}
class PaymentNoficationFilterNAdmin extends React.Component {

    componentWillMount(){
     

        $(document).ready(function(){
            $(".pay-filter-1").click(function(){
               $("#pay-filter-div1").toggleClass("activecheck");
            });

           
            $(".pay-filter-2").click(function(){
                $("#pay-filter-div2").toggleClass("activecheck");
             });

             $("#pay-filter-3").click(function(){
                $("#pay-filter-div3").toggle();
             });

             $("#pay-filter-4").click(function(){
                $("#pay-filter-div4").toggle();
             });

             $("#pay-filter-5").click(function(){
                $("#pay-filter-div5").toggle();
             });

             $("#pay-filter-6").click(function(){
                $("#pay-filter-div6").toggle();
             });

             $("#pay-filter-7").click(function(){
                $("#pay-filter-div7").toggle();
             });

             $("#pay-filter-8").click(function(){
                $("#pay-filter-div8").toggle();
             });

             $("#pay-filter-9").click(function(){
                $("#pay-filter-div9").toggle();
             });

             $("#pay-filter-10").click(function(){
                $("#pay-filter-div10").toggle();
             });

             $("#pay-filter-11").click(function(){
                $("#pay-filter-div11").toggle();
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
                                <div id="pay-filter-div1" className="filter-form-div activecheck pe-lg-4">
                                    <div className="comon-fild">
                                        <label>Lab ID	 </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                </div>

                                <div id="pay-filter-div2" className="filter-form-div activecheck pt-2 pe-lg-4">
                                  

                                    <div className="comon-fild">
                                        <label>Lab Name </label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                  
                                
                                </div>

                                <div id="pay-filter-div3" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>Payment Date</label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>

                                <div id="pay-filter-div4" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>City</label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>


                                <div id="pay-filter-div5" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>State </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>


                                <div id="pay-filter-div6" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Amount </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>

                                <div id="pay-filter-div7" className="filter-form-div pt-2 pe-lg-4">
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
                                           <label className="form-check-label pay-filter-1" for="tabs-btn1">
                                            <input className="form-check-input cb-element" type="checkbox" defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Lab ID
                                            </label>
                                        </div>

                                       


                                        <div className="form-check"> 
                                          <label className="form-check-label pay-filter-2" for="even">
                                            <input className="form-check-input cb-element" name="even" type="checkbox" value="even" id="pay-filter-1"
                                            defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Lab Name	
                                          </label>
                                        </div>

                                        <div className="form-check"> 
                                        <label className="form-check-label tab-b2" for="even">
                                          <input className="form-check-input cb-element" name="even" type="checkbox" value="even" id="pay-filter-3"
                                           onChange={e=>changeHandal(e)}/>
                                          
                                          Payment Date
                                        </label>
                                      </div>


                                        <div className="form-check">
                                        <label className="form-check-label tab-b3" for="tabs-btn3">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="pay-filter-4"
                                            onChange={e=>changeHandal(e)}/>
                                            City
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b4" for="tabs-btn4">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="pay-filter-5"
                                            onChange={e=>changeHandal(e)}/>
                                            State
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b5" for="tabs-btn5">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="pay-filter-6"
                                            onChange={e=>changeHandal(e)}/>
                                            Amount	
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b5" for="tabs-btn5">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="pay-filter-7"
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

export default PaymentNoficationFilterNAdmin;
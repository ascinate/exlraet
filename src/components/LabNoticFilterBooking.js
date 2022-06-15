import React from "react";
import $ from "jquery";
import { BsXLg } from "react-icons/bs";


const changeHandal =(e)=>{
    // console.log(e.target.value)
    console.log(e.target.checked)
}
class LabNoticFilterBooking extends React.Component {

    componentWillMount(){
     

        $(document).ready(function(){
            $(".lab-ft-book1").click(function(){
               $("#lab-book-tab1").toggleClass("activecheck");
            });

           
            $(".lab-ft-book2").click(function(){
                $("#lab-book-tab2").toggleClass("activecheck");
             });

             $("#lab-ft-book3").click(function(){
                $("#lab-book-tab3").toggle();
             });

             $("#lab-ft-book4").click(function(){
                $("#lab-book-tab4").toggle();
             });

             $("#lab-ft-book5").click(function(){
                $("#lab-book-tab5").toggle();
             });

             $("#lab-ft-book6").click(function(){
                $("#lab-book-tab6").toggle();
             });

             $("#lab-ft-book7").click(function(){
                $("#lab-book-tab7").toggle();
             });

             $("#lab-ft-book8").click(function(){
                $("#lab-book-tab8").toggle();
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
          <div className="offcanvas filter-modal offcanvas-end" tabindex="-1" id="offcanvasFilterbn" aria-labelledby="offcanvasExampleLabel">
               
                <div className="offcanvas-body">
                    
                    <div className="filter-div-body">
                        <div className="d-flex justify-content-center">
                            <div className="col-lg-6 mt-5">
                                <div id="lab-book-tab1" className="filter-form-div activecheck pe-lg-4">
                                    <div className="comon-fild">
                                        <label> Lab ID	 </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                </div>

                                <div id="lab-book-tab2" className="filter-form-div activecheck pt-2 pe-lg-4">
                                  

                                    <div className="comon-fild">
                                        <label>Order ID </label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                  
                                
                                </div>

                                <div id="lab-book-tab3" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>Date </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>


                                <div id="lab-book-tab4" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label>Time Slot </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>


                                <div id="lab-book-tab5" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> City </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                   
                                </div>

                                <div id="lab-book-tab6" className="filter-form-div pt-2 pe-lg-4">
                                    <div className="comon-fild">
                                        <label> State </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                
                                </div>

                                <div id="lab-book-tab7" className="filter-form-div pt-2 pe-lg-4">
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
                                           <label className="form-check-label lab-ft-book1" for="tabs-btn1">
                                            <input className="form-check-input cb-element" type="checkbox" defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Lab ID	
                                            </label>
                                        </div>

                                        <div className="form-check"> 
                                          <label className="form-check-label lab-ft-book2" for="even">
                                            <input className="form-check-input cb-element" name="even" type="checkbox" value="even" id="tabs-btn2"
                                            defaultChecked={true} onChange={e=>changeHandal(e)}/>
                                            
                                            Order ID
                                          </label>
                                        </div>


                                        <div className="form-check">
                                        <label className="form-check-label tab-b3" for="tabs-btn3">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="lab-ft-book3"
                                            onChange={e=>changeHandal(e)}/>
                                            Date
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b4" for="tabs-btn4">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="lab-ft-book4"
                                            onChange={e=>changeHandal(e)}/>
                                            
                                            Time Slot
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b5" for="tabs-btn5">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="lab-ft-book5"
                                            onChange={e=>changeHandal(e)}/>
                                            City
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b6" for="tabs-btn6">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="lab-ft-book6"
                                            onChange={e=>changeHandal(e)}/>
                                            State
                                            </label>
                                        </div>

                                        <div className="form-check">
                                           <label className="form-check-label tab-b7" for="tabs-btn7">
                                            <input className="form-check-input cb-element" type="checkbox" value="" id="lab-ft-book7"
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

export default LabNoticFilterBooking;
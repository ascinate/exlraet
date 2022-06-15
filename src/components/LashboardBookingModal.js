import React from "react";
import $ from "jquery";
import { BsCheck2, BsCheckLg } from "react-icons/bs";
import DatePickerSection from "./DatePickerSection";
import DatePickerSec1 from "./DatePickerSec1";
import iconwebplush from "../images/ex-icon.svg";
import Counting from "./Counting";
import LasboardTestFild from "./LasboardTestFild";
import AvailableSlotCalender from "../AvailableSlotCalender";
import ComonCustomCaldender from "./ComonCustomCaldender";
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";


class LashboardBookingModal extends React.Component {

    componentWillMount(){

  $(document).ready(function() {
	$('.form-wizard-next-btn').click(function() {
		var parentFieldset = $(this).parents('.wizard-fieldset');
		var currentActiveStep = $(this).parents('.form-wizard').find('.form-wizard-steps .active');
		var next = $(this);
		var nextWizardStep = true;
		parentFieldset.find('.wizard-required').each(function(){
			var thisValue = $(this).val();

			if( thisValue == "") {
				$(this).siblings(".wizard-form-error").slideDown();
				nextWizardStep = false;
			}
			else {
				$(this).siblings(".wizard-form-error").slideUp();
			}
		});
		if( nextWizardStep) {
			next.parents('.wizard-fieldset').removeClass("show","400");
			currentActiveStep.removeClass('active').addClass('activated').next().addClass('active',"400");
			next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show","400");
			$(document).find('.wizard-fieldset').each(function(){
				if($(this).hasClass('show')){
					var formAtrr = $(this).attr('data-tab-content');
					$(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
						if($(this).attr('data-attr') == formAtrr){
							$(this).addClass('active');
							var innerWidth = $(this).innerWidth();
							var position = $(this).position();
							$(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
						}else{
							$(this).removeClass('active');
						}
					});
				}
			});
		}








        
	});
	$('.form-wizard-previous-btn').click(function() {
		var counter = parseInt($(".wizard-counter").text());;
		var prev =$(this);
		var currentActiveStep = $(this).parents('.form-wizard').find('.form-wizard-steps .active');
		prev.parents('.wizard-fieldset').removeClass("show","400");
		prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("show","400");
		currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active',"400");
		$(document).find('.wizard-fieldset').each(function(){
			if($(this).hasClass('show')){
				var formAtrr = $(this).attr('data-tab-content');
				$(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
					if($(this).attr('data-attr') == formAtrr){
						$(this).addClass('active');
						var innerWidth = $(this).innerWidth();
						var position = $(this).position();
						$(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
					}else{
						$(this).removeClass('active');
					}
				});
			}
		});
	});
	$(document).on("click",".form-wizard .form-wizard-submit" , function(){
		var parentFieldset = $(this).parents('.wizard-fieldset');
		var currentActiveStep = $(this).parents('.form-wizard').find('.form-wizard-steps .active');
		parentFieldset.find('.wizard-required').each(function() {
			var thisValue = $(this).val();
			if( thisValue == "" ) {
				$(this).siblings(".wizard-form-error").slideDown();
			}
			else {
				$(this).siblings(".wizard-form-error").slideUp();
			}
		});
	});
	$(".form-control").on('focus', function(){
		var tmpThis = $(this).val();
		if(tmpThis == '' ) {
			$(this).parent().addClass("focus-input");
		}
		else if(tmpThis !='' ){
			$(this).parent().addClass("focus-input");
		}
	}).on('blur', function(){
		var tmpThis = $(this).val();
		if(tmpThis == '' ) {
			$(this).parent().removeClass("focus-input");
			$(this).siblings('.wizard-form-error').slideDown("3000");
		}
		else if(tmpThis !='' ){
			$(this).parent().addClass("focus-input");
			$(this).siblings('.wizard-form-error').slideUp("3000");
		}
	});
});
        
      }
    render() {
      return (
          <>
            <div className="form-wizard">
			
                <form action="" method="post" role="form">
                   <div className="form-wizard-header">
           
                        <ul className="list-unstyled form-wizard-steps clearfix">
                            <li className="active"><span className="cm-check-icons">
                               <BsCheckLg/>
                            </span>
                             <h6> <span className="nm-text"> Step -1  </span>  
                             <span className="sub-steps d-block"> Paitient Details </span>
                             </h6>
                            
                            </li>
                            <li>
                              <span className="cm-check-icons"><BsCheckLg/></span>
                              <h6> <span className="nm-text"> Step -2 </span>  
                              <span className="sub-steps d-block"> Address </span>
                              </h6>  
                            </li>
                            <li>
                               <span className="cm-check-icons"><BsCheckLg/></span>
                               <h6> <span className="nm-text"> Step -3 </span>  
                                <span className="sub-steps d-block"> Slot Booking </span>
                                </h6>
                            </li>
                            
                        </ul>
            
                    </div>
                    <fieldset className="wizard-fieldset show">

					    <div className="inside-comon-div">
                              <h4>Personal Information</h4>
							  <hr/>
							<div className="ad-fm mt-0">
							    <div className="row row-cols-1 row-cols-lg-3 gx-lg-5 gy-lg-4">
								   <div className="col ps-lg-0">
										<div className="from-group mb-4 mb-lg-0">
											<label> Name</label>
											<input type="text" className="form-control wizard-required" placeholder="Ex. Amit" />
											<div className="wizard-form-error"></div>
										</div>
								   </div>
								   <div className="col">
										<div className="from-group mb-4 mb-lg-0">
											<label> Email Id</label>
											<input type="text" className="form-control wizard-required" placeholder="Ex. admin@gmail.com"/>
											<div className="wizard-form-error"></div>
										</div>
								   </div>
								   <div className="col  pe-lg-0">
										<div className="from-group mb-4 mb-lg-0">
											<label> Phone Number</label>
											<input type="text" className="form-control wizard-required" placeholder="Ex. 111-111-1111"/>
											<div className="wizard-form-error"></div>
										</div>
								   </div>

								   <div className="col ps-lg-0">
										<div className="from-group mb-4 mb-lg-0">
											<label> Date of Birth</label>
										 	<div className="form-control dt-from">
											   <DatePickerSection/>
											</div>
										</div>
								   </div>


								   <div className="col ">
										<div className="from-group mb-4 mb-lg-0">
											<label> Gender</label>
											
											<select class="form-select" aria-label="Default select example">
												<option selected>Male</option>
												<option value="1">Female</option>
												<option value="2">Trans</option>
											</select>
										</div>
								   </div>

								   <div className="col pe-lg-0">
										<div className="from-group mb-4 mb-lg-0">
											<label> Date of Test</label>
											<div className="form-control dt-from">
											    <DatePickerSec1/>
											</div>
										</div>
								   </div>

								   
								</div>
								
							</div>
							
							<LasboardTestFild/>

							
							<div className="form-group  justify-content-center d-lg-flex clearfix">
								<a href="javascript:;" className="form-wizard-next-btn float-right">Next</a>
							</div>
						</div>
                    </fieldset>
                    <fieldset class="wizard-fieldset">

					   <div className="inside-comon-div sp-padding pb-5">
							<h4>Address Information</h4>
							<hr/>  
							<div className="ad-fm">
							   <div className="row row-cols-1 row-cols-lg-2 gx-lg-5 gy-lg-5">
							        <div className="col ps-lg-0 mt-4">
										<div className="from-group mb-4 mb-lg-0">
											<label> Current Address</label>
											<input type="text" className="form-control wizard-required" placeholder="Ex. Amit" />
											<div className="wizard-form-error"></div>
										</div>
									</div>

									<div className="col pe-lg-0 mt-4">
										<div className="from-group mb-4 mb-lg-0">
											<label> State</label>
											  <select class="form-select" aria-label="Default select example">
												<option selected></option>
												<option value="1">One</option>
												<option value="2">Two</option>
												<option value="3">Three</option>
											  </select>
										</div>
									</div>

									<div className="col ps-lg-0">
										<div className="from-group mb-4 mb-lg-0">
											<label> City </label>
											<input type="text" className="form-control wizard-required"/>
											<div className="wizard-form-error"></div>
										</div>
									</div>

									<div className="col pe-lg-0">
										<div className="from-group mb-4 mb-lg-0">
											<label> Zipcode </label>
											<input type="text" className="form-control wizard-required"  />
											<div className="wizard-form-error"></div>
										</div>
									</div>

							   </div>
							</div>
							<div className="form-group mt-5 d-lg-flex align-items-center clearfix">
							<a href="javascript:;" className="form-wizard-previous-btn float-left back-tn"> <FaAngleLeft/> Back</a>
					           <a href="javascript:;" className="form-wizard-next-btn float-right mx-auto">Next</a>
					        </div>
					   </div>
					   
                    </fieldset>

					<fieldset class="wizard-fieldset">

					   <div className="inside-comon-div w-100 px-3 pb-5">
							<h4>Booking Slot</h4>
							<hr/>  
							<div className="ad-fm mt-4">
							    
							<div className="col-lg-12 d-flex justify-content-between align-items-center mb-5">
							<a id="#" className="btn arrow-btn"> <span> <FaAngleLeft/> 
							</span>  Week <span> <FaAngleRight/> </span> </a>

								<input type="submit" className="btn sumbit-btn1" value="Submit"/>
							</div>
							<div className="veiw-caln">
								<ComonCustomCaldender/>
							</div>
							   
							</div>
							<div className="form-group mt-5 d-lg-flex align-items-center clearfix">
							<a href="javascript:;" className="form-wizard-previous-btn float-left back-tn"> <FaAngleLeft/> Back</a>
					           <a data-bs-dismiss="modal" aria-label="Close" className="form-wizard-next-btn float-right mx-auto">Submit</a>
					        </div>
					   </div>
					   
                    </fieldset>
                </form>
            </div>
          </>
      );
    }
  }

export default LashboardBookingModal;
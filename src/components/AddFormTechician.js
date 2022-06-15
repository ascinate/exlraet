import React from "react";
import $ from "jquery";
import { BsCheck2, BsCheckLg } from "react-icons/bs";
import DatePickerSection from "./DatePickerSection";
import DatePickerSec1 from "./DatePickerSec1";
import iconwebplush from "../images/ex-icon.svg";
import TechinicainPhoto from "./TechinicainPhoto";
import Counting from "./Counting";
import CloneFild from "./CloneFild";
import SlotBooking from "./SlotBooking";
import MultiUploadInput from "./MultiUploadInput";
import MultiCertificate from "./MultiCertificate";
import UploadResume from "./UploadResume";
import RadioGroup from "./RadioGroup";
import UploadRcInput from "./UploadRcInput";
import LicenceInput from "./LicenceInput";
import InsurenceFile from "./InsurenceFile";
import PanCardPhoto from "./PanCardPhoto";
import AdharCardPhoto from "./AdharCardPhoto";
import { FaAngleLeft } from "react-icons/fa";
import UploadProfilePhoto from "./UploadProfilePhoto";



class AddFormTechician extends React.Component {

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
           
                        <ul className="list-unstyled form-wizard-steps col-lg-9 mx-auto clearfix">
                            <li className="active"><span className="cm-check-icons">
                               1
                            </span>
                             <h6> 
                             <span className="sub-steps d-block"> Personal Details </span>
                             </h6>
                            
                            </li>
                            <li>
                              <span className="cm-check-icons">2</span>
                              <h6>  
                              <span className="sub-steps d-block"> Education & Work Details </span>
                              </h6>  
                            </li>
                            <li>
                               <span className="cm-check-icons">3</span>
                               <h6> 
                                <span className="sub-steps d-block"> Vehical Details </span>
                                </h6>
                            </li>

                            <li>
                               <span className="cm-check-icons">4</span>
                               <h6> 
                                <span className="sub-steps d-block"> Upload Document </span>
                                </h6>
                            </li>
                            
                        </ul>
            
                    </div>
                    <fieldset className="wizard-fieldset show">

					    <div className="inside-comon-div">
                              <h4>Personal Details</h4>
							<div className="ad-fm mt-0">
							    <div className="row row-cols-1 row-cols-lg-2 gx-lg-5 gy-lg-4">
								   <div className="col ps-lg-0">
										<div className="from-group mb-4 mb-lg-0">
											<label> Name</label>
											<input type="text" className="form-control wizard-required" />
											<div className="wizard-form-error"></div>
										</div>
								   </div>
								   <div className="col">
										<div className="from-group mb-4 mb-lg-0">
											<label> Email Address</label>
											<input type="email" className="form-control wizard-required"/>
											<div className="wizard-form-error"></div>
										</div>
								   </div>
								   <div className="col ps-lg-0">
										<div className="from-group mb-4 mb-lg-0">
											<label> Contact</label>
											<input type="text" className="form-control wizard-required" />
											<div className="wizard-form-error"></div>
										</div>
								   </div>

                                   <div className="col">
										<div className="from-group mb-4 mb-lg-0">
											<label> Password</label>
											<input type="password" className="form-control wizard-required" />
											<div className="wizard-form-error"></div>
										</div>
								   </div>

                                   <div className="col ps-lg-0">
										<div className="from-group mb-4 mb-lg-0">
											<label> Confirm Password</label>
											<input type="password" className="form-control wizard-required" />
											<div className="wizard-form-error"></div>
										</div>
								   </div>

                                  

                                   <div className="col">
                                        <div className="from-group mb-4 mb-lg-0 sp-file-div">
                                          
                                           <TechinicainPhoto/>
                                        </div>
								   </div>

                                   
								   
								</div>
								

                                <div className="choose-sec-div mt-5">
                                    <h5> Choose your working hours </h5>
                                    <div className="d-flex my-4">
                                        <div class="form-check sp-fom-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                            <label class="form-check-label" for="flexRadioDefault2">
                                              Flexible
                                            </label>
                                        </div>
                                        <div class="form-check sp-fom-check ms-3">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label class="form-check-label" for="flexRadioDefault1">
                                            Full Time
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center hours-input-div my-4">
                                       
                                       <div className="from-group">
                                          <input type="text" className="form-control" placeholder="09:00 AM"/>
                                       </div>
                                       <h6 className="mx-3 mb-0"> To </h6>
                                       <div className="from-group">
                                          <input type="text" className="form-control" placeholder="12:00 PM"/>
                                       </div>

                                    </div>

                                    <h5> Choose your working hours </h5>
                                    
                                </div>

                                <div className="row row-cols-1 mb-5 row-cols-2 gx-lg-5 gy-lg-4">
                                       <div className="col ps-lg-0">
                                            <div className="from-group mb-4 mb-lg-0">
                                                <label> Address 1 </label>
                                                <input type="text" className="form-control wizard-required" />
                                                <div className="wizard-form-error"></div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="from-group mb-4 mb-lg-0">
                                                <label> Address 2 </label>
                                                <input type="text" className="form-control wizard-required"/>
                                                <div className="wizard-form-error"></div>
                                            </div>
                                        </div>

                                        <div className="col ps-lg-0">
                                            <div className="from-group mb-4 mb-lg-0">
                                                <label> Pincode </label>
                                                <input type="text" className="form-control wizard-required" />
                                                <div className="wizard-form-error"></div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="from-group mb-4 mb-lg-0">
                                                <label> City </label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>-Select-</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                <div className="wizard-form-error"></div>
                                            </div>
                                        </div>

                                        <div className="col ps-lg-0">
                                            <div className="from-group mb-4 mb-lg-0">
                                                <label> State </label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>-Select-</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                <div className="wizard-form-error"></div>
                                            </div>
                                        </div>

                                        



                                        
                                </div>


							</div>
							
							

							
							<div className="form-group  justify-content-center d-lg-flex clearfix">
                             
								<a href="javascript:;" className="form-wizard-next-btn float-right">Next</a>
							</div>
						</div>
                    </fieldset>
                    <fieldset class="wizard-fieldset">

					   <div className="inside-comon-div pb-5">
							<h4>Education & Work Details</h4>
							<div className="ad-fm mt-4">
							   <div className="row row-cols-1 row-cols-lg-2 gx-lg-5 ">
							        <div className="col ps-lg-0">
										<div className="from-group mb-4 mb-lg-0">
											<label> Education </label>
											<input type="text" className="form-control wizard-required"  />
											<div className="wizard-form-error"></div>
										</div>
									</div>

									<div className="col">
										<div className="from-group mb-4 mb-lg-0 sp-file-div">
											<MultiCertificate/>
										</div>
									</div>

									<div className="col ps-lg-0">
										<div className="from-group mb-4 mb-lg-0">
											<label> Company Name </label>
											<input type="text" className="form-control wizard-required"  />
											<div className="wizard-form-error"></div>
										</div>
									</div>

									<div className="col">
										<div className="from-group mb-4 mb-lg-0 work-ex-sec">
											<label> Work Experience </label>
                                            <div className="file-ex d-flex align-items-center">
                                                <input type="text" className="form-control wizard-required"/>
                                                <span className="year-text col-2"> Year </span>
                                            </div>
											
											<div className="wizard-form-error"></div>
										</div>
									</div>

                                    <div className="col ps-lg-0">
                                            <div className="from-group mb-4 mb-lg-0 mt-5">
                                                 <MultiUploadInput/>
                                            </div>
                                            
                                    </div>


                                    <div className="col pe-lg-0">
                                        <div className="from-group mb-4 mb-lg-0 mt-5">
                                             <UploadResume/>
                                        </div>
                                        
                                    </div>

                                    <div className="col ps-lg-0">
                                        <div className="from-group mb-4 mb-lg-0 mt-5">
                                             <UploadProfilePhoto/>
                                        </div>
                                        
                                    </div>

                                    

                                   

                                    

                                   

							   </div>
							</div>
							<div className="form-group mt-5 d-lg-flex align-items-center position-relative justify-content-center clearfix">
                            <a href="javascript:;" class="form-wizard-previous-btn sp-back-btn float-start"> <FaAngleLeft/> Back</a>
					           <a href="javascript:;" className="form-wizard-next-btn float-right ms-3">Next</a>
					        </div>
					   </div>
					   
                    </fieldset>

					<fieldset class="wizard-fieldset">

					   <div className="inside-comon-div pb-5">
							<h4>Vehicle Type</h4>
							<div className="ad-fm vehicle-div-section mt-4">
							    
                                <RadioGroup/>
							   
                                <div className="row row-cols-1 row-cols-lg-2 gy-lg-5">
                                     <div className="col ps-lg-0">
                                         <UploadRcInput/>
                                     </div>

                                     <div className="col">
                                        <div className="from-group mb-4 mb-lg-0 ">
                                            <LicenceInput/>
                                        </div>
                                     </div>


                                    <div className="col ps-lg-0">
                                        <div className="from-group mb-4 mb-lg-0 ">
                                            <InsurenceFile/>
                                        </div>
                                    </div>
                                </div>


                                
                            

							</div>
							<div className="form-group mt-5 d-lg-flex align-items-center position-relative justify-content-center clearfix">
                            <a href="javascript:;" class="form-wizard-previous-btn sp-back-btn float-start"> <FaAngleLeft/> Back</a>
					           <a href="javascript:;" className="form-wizard-next-btn float-right ms-3">Next</a>
					        </div>
					   </div>
					   
                    </fieldset>

                    <fieldset class="wizard-fieldset">

					   <div className="inside-comon-div pb-5">
							<h4>Upload Document</h4>
							  
							<div className="ad-fm mt-0">
							   
							   <div className="row row-cols-1 row-cols-lg-2 gy-lg-5">
                                   <div className="col ps-lg-0">
                                       <div className="from-group mb-4 mb-lg-0 ">
                                            <label> Adhaar No. </label>
                                            <input type="text" className="form-control wizard-required"  />
                                            <div className="wizard-form-error"></div>
                                       </div>
                                   </div>
                                   <div className="col">
                                        <div className="from-group mb-4 mb-lg-0 sp-file-div">
                                             <AdharCardPhoto/>
                                        </div>
                                   </div>

                                   <div className="col ps-lg-0">
                                        <div className="from-group mb-4 mb-lg-0 ">
                                             <label> PAN Card </label>
                                             <input type="text" className="form-control wizard-required"  />
                                            <div className="wizard-form-error"></div>
                                        </div>
                                   </div>

                                   <div className="col">
                                        <div className="from-group mb-4 mb-lg-0 sp-file-div">
                                             <PanCardPhoto/>
                                        </div>
                                   </div>

                                  
                                   <div className="col ps-lg-0">
                                        <div className="from-group mb-4 mb-lg-0 ">
                                             <label> Any Reference </label>
                                             <input type="text" className="form-control wizard-required"  />
                                            <div className="wizard-form-error"></div>
                                        </div>
                                   </div>
                               </div>


							</div>

                            <h4 className="mt-5">Bank Details</h4>

                            <div className="ad-fm mt-0">
							   
							   <div className="row row-cols-1 row-cols-lg-2 gy-lg-5">
                                   <div className="col ps-lg-0">
                                       <div className="from-group mb-4 mb-lg-0 ">
                                            <label> Bank Name</label>
                                            <input type="text" className="form-control wizard-required"  />
                                            <div className="wizard-form-error"></div>
                                       </div>
                                   </div>
                                   <div className="col">
                                        <div className="from-group mb-4 mb-lg-0 ">
                                            <label> Account Holder Name </label>
                                            <input type="text" className="form-control wizard-required"  />
                                            <div className="wizard-form-error"></div>
                                        </div>
                                   </div>

                                   <div className="col ps-lg-0">
                                        <div className="from-group mb-4 mb-lg-0 ">
                                            <label> Account Number </label>
                                            <input type="text" className="form-control wizard-required"  />
                                            <div className="wizard-form-error"></div>
                                        </div>
                                   </div>

                                   <div className="col">
                                        <div className="from-group mb-4 mb-lg-0 ">
                                            <label> IFSC Code </label>
                                            <input type="text" className="form-control wizard-required"  />
                                            <div className="wizard-form-error"></div>
                                        </div>
                                   </div>

                               </div>


							</div>
							<div className="form-group position-relative align-items-center mt-5 d-lg-flex justify-content-center clearfix">
                            <a href="javascript:;" class="form-wizard-previous-btn sp-back-btn float-start"> <FaAngleLeft/> Back</a>
					           <a data-bs-dismiss="modal" aria-label="Close" className="form-wizard-next-btn float-right ms-3">Submit</a>
					        </div>
					   </div>
					   
                    </fieldset>
                </form>
            </div>
          </>
      );
    }
  }

export default AddFormTechician;
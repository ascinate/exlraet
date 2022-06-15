import React from "react";
import iconwebplush from "../images/ex-icon.svg";
import delicon from "../images/dl-icon.svg";
import $ from "jquery";
import { BsCheck2, BsCheckLg } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";


class CloneFild extends React.Component {

    componentWillMount(){
        $(document).ready(function(){
            $('#extra-fields-customer').click(function() {
            $('.customer_records').clone().appendTo('.customer_records_dynamic');
            $('.customer_records_dynamic .customer_records').addClass('single remove');
            $('.single .extra-fields-customer').remove();
            $('.single').append('<a href="#" class="remove-field btn-remove-customer col-1"> <img src="img/dl-icon.svg" al="bt"/>  </a>');
            $('.customer_records_dynamic > .single').attr("class", "row remove mt-4");
      
            $('.customer_records_dynamic input').each(function() {
              var count = 0;
              var fieldname = $(this).attr("name");
              $(this).attr('name', fieldname + count);
              count++;
            });


      
          });
        });
      $(document).on('click', '.remove-field', function(e) {
        $(this).parent('.remove').remove();
        e.preventDefault();
      });

      $(document).ready(function(){

        
        $("#dlet-btn").click(function(){
            $("#show-as-clone").hide();
          });

        $(".adbenf-btn").click(function(){
            $("#show-as-clone").show();
          });

          

      });




      $(document).ready(function(){
           
        var QtyInput = (function () {
            var $qtyInputs = $(".qty-input");
        
            if (!$qtyInputs.length) {
                return;
            }
        
            var $inputs = $qtyInputs.find(".product-qty");
            var $countBtn = $qtyInputs.find(".qty-count");
            var qtyMin = parseInt($inputs.attr("min"));
            var qtyMax = parseInt($inputs.attr("max"));
        
            $inputs.change(function () {
                var $this = $(this);
                var $minusBtn = $this.siblings(".qty-count--minus");
                var $addBtn = $this.siblings(".qty-count--add");
                var qty = parseInt($this.val());
        
                if (isNaN(qty) || qty <= qtyMin) {
                    $this.val(qtyMin);
                    $minusBtn.attr("disabled", true);
                } else {
                    $minusBtn.attr("disabled", false);
        
                    if (qty >= qtyMax) {
                        $this.val(qtyMax);
                        $addBtn.attr("disabled", true);
                    } else {
                        $this.val(qty);
                        $addBtn.attr("disabled", false);
                    }
                }
            });
        
            $countBtn.click(function () {
                var operator = this.dataset.action;
                var $this = $(this);
                var $input = $this.siblings(".product-qty");
                var qty = parseInt($input.val());
        
                if (operator == "add") {
                    qty += 1;
                    if (qty >= qtyMin + 1) {
                        $this.siblings(".qty-count--minus").attr("disabled", false);
                    }
        
                    if (qty >= qtyMax) {
                        $this.attr("disabled", true);
                    }
                } else {
                    qty = qty <= qtyMin ? qtyMin : (qty -= 1);
        
                    if (qty == qtyMin) {
                        $this.attr("disabled", true);
                    }
        
                    if (qty < qtyMax) {
                        $this.siblings(".qty-count--add").attr("disabled", false);
                    }
                }
        
                $input.val(qty);
            });
        })();
        
      });
    }

    render() {
      return (
          <>
          <div className="test-details-div mt-4 mb-2">
                <h4> Test Details <span class="amount-text"> Total Amount:<big> Rs. 1500</big>  </span> </h4>
                <hr/>

                <div className="test-inside-div">
                    <div className="to-test-1 row">
                        <div className="col-lg-8 ps-lg-0">
                            <label > Name of Test</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>-- Select--</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-lg-4 pe-lg-0">
                           <div className="form-group">
                              <label>Test Amount </label>
                              <input type="text" className="form-control"/>
                           </div>
                        </div>
                        
                    </div>
                    <h4 className="mt-4 new-lable"> Type of Vial </h4>
                    <div className="cunt-div mt-3">
                        
                        <div className="row row-cols-1 row-cols-sm-3">


                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                    Serum
                                    </label>
                                </div> 
                                <div className="count-div2 ms-md-3">
                                    <div className="qty-input">
                                            <button className="qty-count qty-count--minus" data-action="minus" type="button">-</button>
                                            <input className="product-qty" type="number" name="product-qty" min="25" value="25"/>
                                            <button className="qty-count qty-count--add" data-action="add" type="button">+</button>
                                    </div>
                                </div>
                                </div>  
                            </div>

                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                    Potassium EDTA 
                                    </label>
                                </div> 
                                <div className="count-div2 ms-md-3">
                                    <div className="qty-input">
                                            <button className="qty-count qty-count--minus" data-action="minus" type="button">-</button>
                                            <input className="product-qty" type="number" name="product-qty" min="25" value="25"/>
                                            <button className="qty-count qty-count--add" data-action="add" type="button">+</button>
                                    </div>
                                </div>
                                </div>  
                            </div>


                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        VTM 
                                    </label>
                                </div> 
                                <div className="count-div2 ms-md-3">
                                    <div className="qty-input">
                                            <button className="qty-count qty-count--minus" data-action="minus" type="button">-</button>
                                            <input className="product-qty" type="number" name="product-qty" min="25" value="25"/>
                                            <button className="qty-count qty-count--add" data-action="add" type="button">+</button>
                                    </div>
                                </div>
                                </div>  
                            </div>
                            
                            
                        </div>

                        <div className="row row-cols-1 row-cols-sm-3">


                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                    Sodium 
                                    Citrate
                                    </label>
                                </div> 
                                <div className="count-div2 ms-md-3">
                                    <div className="qty-input">
                                            <button className="qty-count qty-count--minus" data-action="minus" type="button">-</button>
                                            <input className="product-qty" type="number" name="product-qty" min="25" value="25"/>
                                            <button className="qty-count qty-count--add" data-action="add" type="button">+</button>
                                    </div>
                                </div>
                                </div>  
                            </div>

                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                    Sodium Fluoride 
                                    </label>
                                </div> 
                                <div className="count-div2 ms-md-3">
                                    <div className="qty-input">
                                            <button className="qty-count qty-count--minus" data-action="minus" type="button">-</button>
                                            <input className="product-qty" type="number" name="product-qty" min="25" value="25"/>
                                            <button className="qty-count qty-count--add" data-action="add" type="button">+</button>
                                    </div>
                                </div>
                                </div>  
                            </div>


                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                    Sputum 
                                    </label>
                                </div> 
                                <div className="count-div2 ms-md-3">
                                    <div className="qty-input">
                                            <button className="qty-count qty-count--minus" data-action="minus" type="button">-</button>
                                            <input className="product-qty" type="number" name="product-qty" min="25" value="25"/>
                                            <button className="qty-count qty-count--add" data-action="add" type="button">+</button>
                                    </div>
                                </div>
                                </div>  
                            </div>
                            
                            
                        </div>


                        <div className="row row-cols-1 row-cols-sm-3">


                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                    Lithium Heparin
                                    </label>
                                </div> 
                                <div className="count-div2 ms-md-3">
                                    <div className="qty-input">
                                            <button className="qty-count qty-count--minus" data-action="minus" type="button">-</button>
                                            <input className="product-qty" type="number" name="product-qty" min="25" value="25"/>
                                            <button className="qty-count qty-count--add" data-action="add" type="button">+</button>
                                    </div>
                                </div>
                                </div>  
                            </div>

                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                    Urine & Stool
                                    </label>
                                </div> 
                                <div className="count-div2 ms-md-3">
                                    <div className="qty-input">
                                            <button className="qty-count qty-count--minus" data-action="minus" type="button">-</button>
                                            <input className="product-qty" type="number" name="product-qty" min="25" value="25"/>
                                            <button className="qty-count qty-count--add" data-action="add" type="button">+</button>
                                    </div>
                                </div>
                                </div>  
                            </div>


                            <div className="col">
                                <div className="comon-count d-md-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                    Blood Culrure
                                    </label>
                                </div> 
                                <div className="count-div2 ms-md-3">
                                    <div className="qty-input">
                                            <button className="qty-count qty-count--minus" data-action="minus" type="button">-</button>
                                            <input className="product-qty" type="number" name="product-qty" min="25" value="25"/>
                                            <button className="qty-count qty-count--add" data-action="add" type="button">+</button>
                                    </div>
                                </div>
                                </div>  
                            </div>

                        </div>



                        


                    </div>
                    
                </div>
          </div>

          <div id="show-as-clone" className="row add-move customer_records align-items-center mt-3">
             <div className="col-lg-3">
                <div className="form-group">
                   <label> Name </label>
                   <input type="text" className="form-control"/>
                </div>
             </div>
             <div className="col-lg-4">
                <div className="form-group">
                   <label> Test Name </label>
                   <select class="form-select" aria-label="Default select example">
                    <option selected>-- Select--</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>
                </div>
             </div>

             <div className="col-lg-2">
                <div className="form-group">
                   <label> Test Amount </label>
                   <input type="text" className="form-control"/>
                </div>
             </div>
             
             <div className="col-lg-2">
                <div className="form-group">
                   <label> Age </label>
                   <input type="text" className="form-control"/>
                </div>
             </div>
            <div className="col-1 sp-rm-div">
                 <a id="dlet-btn" className="rvm-btn"> <img src="img/dl-icon.svg" al="bt"/> </a>
            </div>
          </div>
          <div className="customer_records_dynamic mt-4"></div>

          <a id="extra-fields-customer" className="btn adbenf-btn mt-2 mb-4 mb-lg-0"> <img src={iconwebplush} alt="webn"/>  Add Beneficiary </a>
          </>
      );
    }
  }
export default CloneFild;
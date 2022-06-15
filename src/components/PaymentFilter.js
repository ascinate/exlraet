import React from "react";
import $ from "jquery";

class PaymentFilter extends React.Component {
    componentWillMount(){

        $(document).ready(function(){
           
            (function ($) {
                /*  CASE-INsensitive
                 * http://stackoverflow.com/questions/187537/is-there-a-case-insensitive-jquery-contains-selector
                 * extend old versions of jquery to have a :Contains selector that is case insensitive
                 */
                $.expr[":"].Contains = function (a, i, m) {
                  return (
                    (a.textContent || a.innerText || "")
                      .toUpperCase()
                      .indexOf(m[3].toUpperCase()) >= 0
                  );
                };
              
                /**
                 * @function listFilter
                 * @param header
                 * @param list
                 */
                function listFilter(header, list) {
                  var input = $("<input>").attr({
                    class: "form-control mb-2",
                    type: "search",
                    placeholder: "Search..."
                  });
              
                  $(header).append(input).appendTo(header);
              
                  $(input)
                    .change(function () {
                      var filter = $(this).val();
                      if (filter) {
                        $(list)
                          .find(".filter-item:not(:Contains(" + filter + "))")
                          .slideUp();
                        $(list)
                          .find(".filter-item:Contains(" + filter + ")")
                          .slideDown();
                      } else {
                        $(list).find(".filter-item").slideDown();
                      }
                      return false;
                    })
                    .keyup(function () {
                      $(this).change();
                    });
              
                  /* no form submit by pressing ENTER button */
                  $(input).keypress(function (event) {
                    /* http://www.cambiaresearch.com/articles/15/javascript-key-codes */
              
                    if (event.keyCode == 10 || event.keyCode == 13) {
                      event.preventDefault();
                    }
                  });
                }
              
                $(function () {
                  listFilter($("#filter-header"), $("#filter-list"));
                });
              })($);
              
              $(document).ready(function () {
                $("#filter-list li.active").prependTo("#filter-list");
                $("#filter-list li.active").last().css("");
              });
              
        });
        
      }
    render() {
      return(
          <>
          <div className="filter-wrapper">
                <span id="filter-header"></span>
            
                <ul id="filter-list" className="filter-list list-unstyled">
                    
                    <li className="filter-item">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultanc2"/>
                            <label className="form-check-label" for="flexCheckDefaultanc2">
                              Order ID
                            </label>
                        </div>
                    </li>
                    <li className="filter-item">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultanc3"/>
                            <label className="form-check-label" for="flexCheckDefaultanc3">
                               Date
                            </label>
                        </div>
                    </li>
                    <li className="filter-item">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultanc4"/>
                            <label className="form-check-label" for="flexCheckDefaultanc4">
                            Name
                            </label>
                        </div>
                    </li>
                    <li class="filter-item">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultanc5"/>
                            <label className="form-check-label" for="flexCheckDefaultanc5">
                            Charges
                            </label>
                        </div>
                    </li>
                    <li className="filter-item">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultanc6"/>
                            <label className="form-check-label" for="flexCheckDefaultanc6">
                            Status
                            </label>
                        </div>
                    </li>
                  
                </ul>
            
                </div>
          </>
      );
    }
}
export default PaymentFilter;
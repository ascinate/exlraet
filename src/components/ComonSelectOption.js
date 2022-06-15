import React from "react";
import $ from "jquery";

class ComonSelectOption extends React.Component {
    componentWillMount(){
        $(document).ready(function(){
            $(".new-selc").on("click", ".init", function() {
                $(this).closest(".new-selc").children('li:not(.init)').toggle();
            });
            
            var allOptions = $(".new-selc").children('li:not(.init)');
            $(".new-selc").on("click", "li:not(.init)", function() {
                allOptions.removeClass('selected');
                $(this).addClass('selected');
                $(".new-selc").children('.init').html($(this).html());
                allOptions.toggle();
            });
         });
    }
    render() {
      return (
          <>
          <ul className="new-selc btn .dropdown-toggle list-unstyled">
                <li className="init">[SELECT]</li>
                <li data-value="value 1">Option 1</li>
                <li data-value="value 2">Option 2</li>
                <li data-value="value 3">Option 3</li>
            </ul>
          </>
      );
    }
  }

export default ComonSelectOption;
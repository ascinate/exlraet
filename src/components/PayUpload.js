import React from "react";
import $ from "jquery";
import imcon from "../images/icon-dn.svg";
import downloadicon from "../images/download-icon.svg";

class PayUpload extends React.Component {
    componentWillMount(){

        $(document).ready(function(){
           
            (function() {
                $(function() {
                  return $('.file-upload__input').on('change', function() {
                    return $('.fil-up-st').html(['Bulk Upload Sucessfull'].join(' '));
                  });
                });
              
              }).call(this);
              
        });
        
    }
    render() {
      return (
          <>
            <div className="file-upesc">
                <div class="file-upload">
                    <label class="file-upload__label">
                     <span>
                        <img src={imcon} allt="icn"/>
                     </span>
                     Upload </label>
                    <input class="file-upload__input" multiple="" type="file" />
                </div>
               

            </div>
          </>
      );
    }
  }
export default PayUpload;
import React from "react";
import $ from "jquery";
import imcon from "../images/icon-dn.svg";
import downloadicon from "../images/download-icon.svg";

class FileUploadSection extends React.Component {
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
                    Bulk Upload </label>
                    <input class="file-upload__input" multiple="" type="file" />
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                   <p className="fil-up-st mb-0"> No Bulk Upload </p>
                   <button className="btn downlaod-file-btn">
                   <span> <img src={downloadicon} alt="dn"/> </span> Sample File Download </button>
                </div>

            </div>
          </>
      );
    }
  }
export default FileUploadSection;
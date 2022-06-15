import React from "react";
import $ from "jquery";

class TechicianCertifacateUpload extends React.Component {
    componentWillMount(){

        $(document).ready(function(){
            $("form").on("change", ".file-upload-field", function(){ 
                $(this).parent(".file-upload-wrapper").attr("data-text",         $(this).val().replace(/.*(\/|\\)/, '') );
            });
        });
        
      }
    render() {
      return (
          <>
           <div className="file-upload-wrapper" data-text="Upload Certificate">
             <input name="file-upload-field" type="file" className="file-upload-field" value=""/>
           </div>
          </>
      );
    }
}

export default TechicianCertifacateUpload;
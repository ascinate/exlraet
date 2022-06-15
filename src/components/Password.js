import React from "react";
import React, { useState } from "react";

function Password() {
  const [searchString, setSearchString] = useState();
  return (
    <div className="App">
      <input
       id="password-field" type="Password" className="form-control"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />

     
      <span toggle="#password-field" className="fa fa-fw fa-eye-slash  field-icon toggle-password"> </span>
    </div>
  );
}
export default Password;
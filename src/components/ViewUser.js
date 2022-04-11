import React, {useState} from "react";
import editicon from "../images/edit-icon.svg";
import alluserdetails from "./ViewUserApi";

function ViewUser(){
    const [ workData , setworkData] =useState(alluserdetails);
    console.log(workData);
    return(
        <>
         <div className="row row-cols-1 row-cols-lg-2 mt-4">

         {
            workData.map((curElem) => {
              const { id, name, title, number, adinnumber, Password} =curElem;
              return(
                  <>
                    <div className="col">
                        <div className="comon-use-div">
                            <div className="d-grid justify-content-end">
                                <button className="btn edit-btn mb-4 mb-md-0">
                                    <span> <img src={editicon} alt="dn"/> </span> Edit
                                </button>
                            </div>
                            <div className="inside-table-div">
                                <h5> {title} </h5>
                                <ul className="list-unstyled">
                                    <li> <span> Name: </span> {name} </li>
                                    <li> <span> Phone Number: </span> {number} </li>
                                    <li> <span> User of Admin: </span> {adinnumber} </li>
                                    <li> <span> Password: </span> {Password} </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  </>
                );
              })
            }
           
         </div>
        </>
    );
}
export default ViewUser;
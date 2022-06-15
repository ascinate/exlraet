import React, {useState} from "react";
import editicon from "../images/edit-icon.svg";
import Laballuserdetails from "./LabViewUserApi";

function LabViewUser(){
    const [ workData , setworkData] =useState(Laballuserdetails);
    console.log(workData);
    return(
        <>
         <div className="row row-cols-1 row-cols-lg-2 mt-4">

         {
            workData.map((curElem) => {
              const { id, name, title, number, userid, Password} =curElem;
              return(
                  <>
                    <div className="col">
                        <div className="comon-use-div">
                            <div className="d-flex justify-content-end">
                                <button className="btn login-n-btn d-none mb-4 mb-md-0">
                                     Login
                                </button>
                                <button className="btn edit-btn ms-2 mb-4 mb-md-0">
                                    <span> <img src={editicon} alt="dn"/> </span> Edit
                                </button>
                            </div>
                            <div className="inside-table-div">
                                <h5> {title} </h5>
                                <ul className="list-unstyled">
                                    <li> <span> Name: </span> {name} </li>
                                    <li> <span> Phone Number: </span> {number} </li>
                                    <li> <span> User Id: </span> {userid} </li>
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
export default LabViewUser;
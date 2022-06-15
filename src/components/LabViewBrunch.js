import React, {useState} from "react";
import editicon from "../images/edit-icon.svg";
import AllBrunchApi from "./AllBrunchApi";

function LabViewBrunch(){
    const [ workData , setworkData] =useState(AllBrunchApi);
    console.log(workData);
    return(
        <>
         <div className="row row-cols-1 row-cols-lg-2 mt-0 g-lg-4">

         {
            workData.map((curElem) => {
              const { id, title, labid, address, adminname, phone, email, username, password} =curElem;
              return(
                  <>
                    <div className="col">
                        <div className="comon-use-div">
                            <div className="d-flex justify-content-end">
                                <button className="d-none login-n-btn mb-4 mb-md-0">
                                     Login
                                </button>
                                <button className="btn edit-btn mb-4 ms-2 mb-md-0">
                                    <span> <img src={editicon} alt="dn"/> </span> Edit
                                </button>
                            </div>
                            <div className="inside-table-div mt-3">
                                <h5> {title} </h5>
                                <ul className="list-unstyled">
                                    <li> <span> Lab ID: </span> {labid} </li>
                                    <li> <span> Address: </span> {address} </li>
                                    <li> <span> Admin Name: </span> {adminname} </li>
                                    <li> <span> Phone: </span> {phone} </li>
                                    <li> <span> Email ID: </span> {email} </li>
                                    <li> <span> Username: </span> {username} </li>
                                    <li> <span> Password: </span> {password} </li>
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
export default LabViewBrunch;
import React, {useState} from "react";
import DashbordNotificationPin from "./DashbordNotificationApi";

function DashbordNotification(){
    const [ workData , setworkData] =useState(DashbordNotificationPin);
    console.log(workData);
    return(
        <>
           <div className="notification-div">
                <ul className="list-unstyled">
                {
                    workData.map((curElem) => {
                        const{ id, icon, titel, days } = curElem;
                        return(
                            <>
                            <li>
                                <div className="d-flex">
                                    <div className="icon-nt shadow">
                                        {icon}
                                    </div>
                                    <h5 className="ms-2"> {titel}
                                    <span className="d-block"> {days} </span>
                                    </h5>
                                </div>
                            </li>
                            </>
                        );
                    })
                }
                    
                </ul>
            </div>
        </>
    );
}
export default DashbordNotification;
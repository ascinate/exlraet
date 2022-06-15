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
                        const{ id, icon, titel, days,orderid } = curElem;
                        return(
                            <>
                            <li>
                                <div>
                                    
                                    <h5 className="ms-2"> {titel}
                                    <span className="d-block"> {orderid} </span>
                                    </h5>
                                    <h6 className="d-block">  {days}</h6>
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
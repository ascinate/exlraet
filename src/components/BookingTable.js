import React from "react";


function BookingTable(){
    return(
        <>
            <table className="table mt-4 table-hover table-responsive">
                <thead>
                <tr className="bg-row">
                    <th scope="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        
                      </div>
                    </th>
                    <th scope="col">Order ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Time Slots</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                        
                    </div>
                    </td>
                    <td>#55662323</td>
                    <td>
                    Veena Rao
                    <span className="d-block"> 30 Yrs, Female </span> 
                    </td>
                    <td>
                      F 14/12, Model Town Delhi
                    </td>
                    <td>
                      05:00 - 06:00 AM
                    </td>
                    <td>
                      <h6 className="st-text-s"> Started </h6>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                         <button className="track-btn"> Track </button>
                         <button className="view1-btn ms-2"> View </button>
                      </div>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                        
                    </div>
                    </td>
                    <td>#55662323</td>
                    <td>
                    Veena Rao
                    <span className="d-block"> 30 Yrs, Female </span> 
                    </td>
                    <td>
                      F 14/12, Model Town Delhi
                    </td>
                    <td>
                      05:00 - 06:00 AM
                    </td>
                    <td>
                      <h6 className="st-text-c"> Collected </h6>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                         <button className="track-btn"> Track </button>
                         <button className="view1-btn ms-2"> View </button>
                      </div>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                        
                    </div>
                    </td>
                    <td>#55662323</td>
                    <td>
                    Veena Rao
                    <span className="d-block"> 30 Yrs, Female </span> 
                    </td>
                    <td>
                      F 14/12, Model Town Delhi
                    </td>
                    <td>
                      05:00 - 06:00 AM
                    </td>
                    <td>
                      <h6 className="st-text-s"> Started </h6>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <button className="track-btn"> Track </button>
                        <button className="view1-btn ms-2"> View </button>
                      </div>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                        
                    </div>
                    </td>
                    <td>#55662323</td>
                    <td>
                    Veena Rao
                    <span className="d-block"> 30 Yrs, Female </span> 
                    </td>
                    <td>
                      F 14/12, Model Town Delhi
                    </td>
                    <td>
                      05:00 - 06:00 AM
                    </td>
                    <td>
                      <h6 className="st-text-sb"> Submitted </h6>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                         <button className="track-btn"> Track </button>
                         <button className="view1-btn ms-2"> View </button>
                      </div>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                        
                    </div>
                    </td>
                    <td>#55662323</td>
                    <td>
                    Veena Rao
                    <span className="d-block"> 30 Yrs, Female </span> 
                    </td>
                    <td>
                      F 14/12, Model Town Delhi
                    </td>
                    <td>
                      05:00 - 06:00 AM
                    </td>
                    <td>
                      <h6 className="st-text-cl"> Cancel </h6>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                         <button className=" track-btn"> Track </button>
                         <button className="view1-btn ms-2"> View </button>
                      </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
}
export default BookingTable;
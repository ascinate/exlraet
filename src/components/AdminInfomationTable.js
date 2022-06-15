import React from "react";
import { NavLink } from "react-router-dom";
import fileicon from "../images/fileicon.svg";

function AdminInfomationTable(){
    return(
        <>
        <table className="table mt-4 adpayment-table table-hover table-responsive">
            <thead>
                <tr className="bg-row">
                  <th scope="col"></th>
                    <th scope="col">S. No.</th>
                    <th scope="col">Order ID
                      <div className="form-group top-form d-none">
                         <input type="text" className="form-control" placeholder="Search"/>
                      </div>
                    </th>
                    <th scope="col">Date
                    
                    </th>
                    <th scope="col">Name
                    
                    </th>
                    <th scope="col">Test Amount
                   
                    </th>
                    <th scope="col">Collection 
                     <br/>
                     Amount
                    
                    </th>
                    <th scope="col"> Commission  <br/>
                    Amount
                   
                    </th>
                    <th scope="col"> Status
                   
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    
                    <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                     
                         </label>
                     </div>
                    </td>
                    <td>
                    1
                    </td>
                    <td>
                    <a data-bs-toggle="modal" data-bs-target="#allmodal" className="or-id">  #55662323 </a> 
                    </td>
                    
                    <td>
                    11-02-2022
                      
                    </td>
                    <td>
                    Veena Rai
                    </td>
                    <td>
                    Rs. 1800/-
                    </td>
                    <td>
                     Rs. 100/-
                    </td>
                    <td>
                    Rs. 1200/-
                    </td>
                    
                    
                    <td>
                    <div className="d-flex justify-content-center">
                        
                         <p className="btn padin-bnt1 cm-bntm"> Paid </p>
                        
                    </div>
                    </td>
                </tr>
               
                <tr>
                    
                    <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                     
                         </label>
                     </div>
                    </td>
                    <td>
                    2
                    </td>
                    <td>
                    <a data-bs-toggle="modal" data-bs-target="#allmodal" className="or-id">  #55662323 </a> 
                    </td>
                    
                    <td>
                    11-02-2022
                      
                    </td>
                    <td>
                    Veena Rai
                    </td>
                    <td>
                    Rs. 1800/-
                    </td>
                    <td>
                     Rs. 100/-
                    </td>
                    <td>
                    Rs. 1200/-
                    </td>
                    
                    
                    <td>
                    <div className="d-flex justify-content-center">
                        
                         <p className="btn unpdt1 cm-bntm"> Unpaid </p>
                        
                    </div>
                    </td>
                </tr>



                <tr>
                    
                    <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                     
                         </label>
                     </div>
                    </td>
                    <td>
                    3
                    </td>
                    <td>
                    <a data-bs-toggle="modal" data-bs-target="#allmodal" className="or-id">  #55662323 </a> 
                    </td>
                    
                    <td>
                    11-02-2022
                      
                    </td>
                    <td>
                    Veena Rai
                    </td>
                    <td>
                    Rs. 1800/-
                    </td>
                    <td>
                     Rs. 100/-
                    </td>
                    <td>
                    Rs. 1200/-
                    </td>
                    
                    
                    <td>
                    <div className="d-flex justify-content-center">
                        
                         <p className="btn unpdt1 cm-bntm"> Unpaid </p>
                        
                    </div>
                    </td>
                </tr>

                <tr>
                    
                    <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                     
                         </label>
                     </div>
                    </td>
                    <td>
                    4
                    </td>
                    <td>
                    <a data-bs-toggle="modal" data-bs-target="#allmodal" className="or-id">  #55662323 </a> 
                    </td>
                    
                    <td>
                    11-02-2022
                      
                    </td>
                    <td>
                    Veena Rai
                    </td>
                    <td>
                    Rs. 1800/-
                    </td>
                    <td>
                     Rs. 100/-
                    </td>
                    <td>
                    Rs. 1200/-
                    </td>
                    
                    
                    <td>
                    <div className="d-flex justify-content-center">
                        
                         <p className="btn unpdt1 cm-bntm"> Unpaid </p>
                        
                    </div>
                    </td>
                </tr>



                <tr>
                    
                    <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                     
                         </label>
                     </div>
                    </td>
                    <td>
                    5
                    </td>
                    <td>
                    <a data-bs-toggle="modal" data-bs-target="#allmodal" className="or-id">  #55662323 </a> 
                    </td>
                    
                    <td>
                    11-02-2022
                      
                    </td>
                    <td>
                    Veena Rai
                    </td>
                    <td>
                    Rs. 1800/-
                    </td>
                    <td>
                     Rs. 100/-
                    </td>
                    <td>
                    Rs. 1200/-
                    </td>
                    
                    
                    <td>
                    <div className="d-flex justify-content-center">
                        
                         <p className="btn unpdt1 cm-bntm"> Unpaid </p>
                        
                    </div>
                    </td>
                </tr>



                <tr>
                    
                    <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                     
                         </label>
                     </div>
                    </td>
                    <td>
                    6
                    </td>
                    <td>
                    <a data-bs-toggle="modal" data-bs-target="#allmodal" className="or-id">  #55662323 </a> 
                    </td>
                    
                    <td>
                    11-02-2022
                      
                    </td>
                    <td>
                    Veena Rai
                    </td>
                    <td>
                    Rs. 1800/-
                    </td>
                    <td>
                     Rs. 100/-
                    </td>
                    <td>
                    Rs. 1200/-
                    </td>
                    
                    
                    <td>
                    <div className="d-flex justify-content-center">
                        
                         <p className="btn unpdt1 cm-bntm"> Unpaid </p>
                        
                    </div>
                    </td>
                </tr>


                
               
             </tbody>
         </table>
        </>
    );
}
export default AdminInfomationTable;
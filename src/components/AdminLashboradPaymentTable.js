import React from "react";
import { NavLink } from "react-router-dom";
import fileicon from "../images/fileicon.svg";

function AdminLashboradPaymentTable(){
    return(
        <>
        <table className="table mt-4 adpayment-table table-hover table-responsive">
            <thead>
                <tr className="bg-row">
                    
                    <th scope="col">S. No.</th>
                    <th scope="col">Lab ID
                      <div className="form-group top-form d-none">
                         <input type="text" className="form-control" placeholder="Search"/>
                      </div>
                    </th>
                    <th scope="col">Lab Name
                    
                    </th>
                    <th scope="col"> Test Amount
                    
                    </th>
                    <th scope="col">Collection <br/>
                    Amount
                   
                    </th>
                    <th scope="col">Commission <br/>
                    Amount
                    
                    </th>
                    <th scope="col"> Status 
                   
                    </th>
                    <th scope="col"> Payment <br/> Attachment 
                   
                    </th>
                    <th scope="col"> View Detail </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    
                    <td>1 </td>
                    <td>
                    <a data-bs-toggle="modal" data-bs-target="#allmodal" className="or-id">  #55662323 </a> 
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
                    <select class="form-select p-btn dropdown-toggle" aria-label="Default select example">
                      <option selected>Paid</option>
                      <option value="1">Unpaid</option>
                    </select>
                    </td>
                    <td>
                      <a   className="file-img2" data-bs-toggle="modal" data-bs-target="#examplefileModal">
                         <img src={fileicon} al="file-icon"/>
                      </a>
                    </td>
                    <td>
                    <div className="d-flex justify-content-center">
                    <NavLink to="/adminlashbordpaymentinfomation" className="btn view-new-btn nw-line-hight"> View </NavLink>
                        
                    </div>
                    </td>
                </tr>
                <tr>
                    
                    <td>1 </td>
                    <td>
                    <a data-bs-toggle="modal" data-bs-target="#allmodal" className="or-id"> #55662323 </a> 
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
                    <select class="form-select unp-btn dropdown-toggle" aria-label="Default select example">
                      <option selected>Unpaid</option>
                      <option value="1">Paid</option>
                    </select>
                    </td>
                    <td>
                      <a className="file-img2" data-bs-toggle="modal" data-bs-target="#examplefileModal">
                         <img src={fileicon} al="file-icon"/>
                      </a>
                    </td>
                    <td>
                    <div className="d-flex justify-content-center">
                        <NavLink to="/adminlashbordpaymentinfomation" className="btn view-new-btn nw-line-hight"> View </NavLink>
                        
                    </div>
                    </td>
                </tr>
                <tr>
                    
                    <td>1 </td>
                    <td>
                    <a data-bs-toggle="modal" data-bs-target="#allmodal" className="or-id">  #55662323 </a> 
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
                    <select class="form-select unp-btn dropdown-toggle" aria-label="Default select example">
                      <option selected>Unpaid</option>
                      <option value="1">Paid</option>
                    </select>
                    </td>
                    <td>
                      <a  className="file-img2" data-bs-toggle="modal" data-bs-target="#examplefileModal">
                         <img src={fileicon} al="file-icon"/>
                      </a>
                    </td>
                    <td>
                    <div className="d-flex justify-content-center">
                       <NavLink to="/adminlashbordpaymentinfomation" className="btn view-new-btn nw-line-hight"> View </NavLink>
                        
                    </div>
                    </td>
                </tr>
                <tr>
                    
                    <td>1 </td>
                    <td>
                    <a data-bs-toggle="modal" data-bs-target="#allmodal" className="or-id">  #55662323 </a> 
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

                     
                      <select class="form-select unp-btn dropdown-toggle" aria-label="Default select example">
                        <option selected>Unpaid</option>
                        <option value="1">Paid</option>
                      </select>
                    </td>
                    <td>
                      <a  className="file-img2" data-bs-toggle="modal" data-bs-target="#examplefileModal">
                         <img src={fileicon} al="file-icon"/>
                      </a>
                    </td>
                    <td>
                    <div className="d-flex justify-content-center">
                       <NavLink to="/adminlashbordpaymentinfomation" className="btn view-new-btn nw-line-hight"> View </NavLink>
                        
                    </div>
                    </td>
                </tr>
                <tr>
                    
                    <td>1 </td>
                    <td>
                    <a data-bs-toggle="modal" data-bs-target="#allmodal" className="or-id">  #55662323 </a> 
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

                      <select class="form-select unp-btn dropdown-toggle" aria-label="Default select example">
                        <option selected>Unpaid</option>
                        <option value="1">Paid</option>
                      </select>
                    </td>
                    <td>
                      <a  className="file-img2" data-bs-toggle="modal" data-bs-target="#examplefileModal">
                         <img src={fileicon} al="file-icon"/>
                      </a>
                    </td>
                    <td>
                    <div className="d-flex justify-content-center">
                     <NavLink to="/adminlashbordpaymentinfomation" className="btn view-new-btn nw-line-hight"> View </NavLink>
                        
                    </div>
                    </td>
                </tr>
             </tbody>
         </table>
        </>
    );
}
export default AdminLashboradPaymentTable;
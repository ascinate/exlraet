import React from "react";

function PaymentTable(){
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
                    <th scope="col">S. No.</th>
                    <th scope="col">Order ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Name</th>
                    <th scope="col">Test Amount</th>
                    <th scope="col">Collection <br/>
                    Amount</th>
                    <th scope="col">Commission <br/>
                    Amount</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                        
                    </div>
                    </td>
                    <td>1 </td>
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
                        <button className="paid-btn-new"> Paid </button>
                        
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                        
                    </div>
                    </td>
                    <td>1 </td>
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
                        <button className="unpaid-btn" > Unpaid </button>
                        
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                        
                    </div>
                    </td>
                    <td>1 </td>
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
                        <button className="unpaid-btn"> Unpaid </button>
                        
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                        
                    </div>
                    </td>
                    <td>1 </td>
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
                        <button className="unpaid-btn"> Unpaid </button>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                        
                    </div>
                    </td>
                    <td>1 </td>
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
                        <button className="unpaid-btn"> Unpaid </button>
                        
                    </div>
                    </td>
                </tr>
             </tbody>
         </table>
        </>
    );
}
export default PaymentTable;
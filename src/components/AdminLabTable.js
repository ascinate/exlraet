import React from "react";
import fileicon from "../images/file.svg";
import roketicon from "../images/rocket-icon.svg";
import flagicon from "../images/flag-icon.svg";
import chckicon from "../images/check-icon.svg";
import subicon from "../images/file-ck.svg";
import { GoPrimitiveDot } from "react-icons/go";
function AdminLabTable(){
    return(
        <>
        <table className="table mt-4 table-hover inside-sp table-responsive">
            <thead>
            <tr className="bg-row">
                <th scope="col">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    
                </div>
                </th>
                <th scope="col">Lab ID</th>
                <th scope="col">Lab Name</th>
                <th scope="col">SPOC Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Email</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Test <br/>
                Count</th>
            </tr>
            </thead>
        <tbody>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                
            </div>
            </td>
            <td>
            <a data-bs-toggle="modal" data-bs-target="#LabdetailsModal" className="showSingle" > 
            <span className="dots-text">  <GoPrimitiveDot/> </span> #55662323 </a> </td>
            <td>
            Sumit
            </td>
            <td>
            0000000000
            </td>
            <td>
            0000000000
            </td>
            <td>
            demo@gmail.com
            </td>
            <td>
            Chandigargh
            </td>
            <td>
            Chandigargh
            </td>
            <td>
             <span className="text-number"> 18 </span> 
            </td>

            
        </tr>

        
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                
            </div>
            </td>
            <td>
            <a data-bs-toggle="modal" data-bs-target="#LabdetailsModal" className="showSingle" > <span className="dots-text"> 
             <GoPrimitiveDot/> </span>   #55662323 </a> </td>
            <td>
            Jhon
            </td>
            <td>
            0000000000
            </td>
            <td>
            0000000000
            </td>
            <td>
            demo@gmail.com
            </td>
            <td>
            Chandigargh
            </td>
            <td>
            Chandigargh
            </td>
            <td>
             <span className="text-number"> 12 </span> 
            </td>

            
        </tr>
        
            
        
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                
            </div>
            </td>
            <td>
            <a data-bs-toggle="modal" data-bs-target="#LabdetailsModal" className="showSingle" >
            <span className="dots-text">  <GoPrimitiveDot/> </span>  #55662323 </a> </td>
            <td>
            Sam
            </td>
            <td>
            0000000000
            </td>
            <td>
            0000000000
            </td>
            <td>
            demo@gmail.com
            </td>
            <td>
            Chandigargh
            </td>
            <td>
            Chandigargh
            </td>
            <td>
             <span className="text-number"> 14 </span> 
            </td>

            
        </tr>

        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                
            </div>
            </td>
            <td>
            <a data-bs-toggle="modal" data-bs-target="#LabdetailsModal" className="showSingle"> 
            <span className="dots-text">  <GoPrimitiveDot/> </span> #55662323 </a> </td>
            <td>
            Robert
            </td>
            <td>
            0000000000
            </td>
            <td>
            0000000000
            </td>
            <td>
            demo@gmail.com
            </td>
            <td>
            Chandigargh
            </td>
            <td>
            Chandigargh
            </td>
            <td>
             <span className="text-number"> 08 </span> 
            </td>

            
        </tr>
        
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                
            </div>
            </td>
            <td>
            <a data-bs-toggle="modal" data-bs-target="#LabdetailsModal" className="showSingle" > 
            <span className="dots-text">  <GoPrimitiveDot/> </span> #55662323 </a> </td>
            <td>
            James
            </td>
            <td>
            0000000000
            </td>
            <td>
            0000000000
            </td>
            <td>
            demo@gmail.com
            </td>
            <td>
            Chandigargh
            </td>
            <td>
            Chandigargh
            </td>
            <td>
             <span className="text-number"> 19 </span> 
            </td>

            
        </tr>

        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                
            </div>
            </td>
            <td>
            <a data-bs-toggle="modal" data-bs-target="#LabdetailsModal" className="showSingle"> 
            <span className="dots-text">  <GoPrimitiveDot/> </span> #55662323 </a> </td>
            <td>
            Ankush
            </td>
            <td>
            0000000000
            </td>
            <td>
            0000000000
            </td>
            <td>
            demo@gmail.com
            </td>
            <td>
            Chandigargh
            </td>
            <td>
            Chandigargh
            </td>
            <td>
             <span className="text-number"> 15 </span> 
            </td>

            
        </tr>

        </tbody>
      </table>
        </>
    );
}
export default AdminLabTable;
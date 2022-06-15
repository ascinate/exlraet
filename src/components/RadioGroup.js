import React, {useState} from "react";

function  RadioGroup(){
    const [formData,setfromData] = useState({
        isAgree :false,
        vehicel :"bike",
      })
      const handelChange = event =>{
          const target = event.target
          const name = target.name
          const value = target.value

          setfromData({
            ...formData,
            [name]: value
        })
      }
      
    return(
        <>
        <div className="d-flex align-items-center">
        <div class="form-check">
        <label class="form-check-label" for="bike">
            <input class="form-check-input" type="radio" name="vehicel" value="bike" id="bike"
            onChange={handelChange} checked={formData.vehicel=="bike"} />
            
            Bike
            </label>
        </div>
        <div class="form-check ms-3">
           <label class="form-check-label" for="scooter">
            <input class="form-check-input" type="radio" name="vehicel" value="scooter" id="scooter"
            onChange={handelChange} checked={formData.vehicel=="scooter"} />
            
            Scooter
            </label>
        </div>
        <div class="form-check ms-3">
           <label class="form-check-label" for="scooty">
            <input class="form-check-input" type="radio" name="vehicel" value="scooty"  id="scooty"
            onChange={handelChange} checked={formData.vehicel=="scooty"} />
            
            Scooty
            </label>
        </div>

        <div class="form-check ms-3">
           <label class="form-check-label" for="escooty">
            <input class="form-check-input" type="radio" name="vehicel" value="escooty" id="escooty"
            onChange={handelChange} checked={formData.vehicel=="escooty"} />
            
            escooty
            </label>
        </div>

        <div class="form-check ms-3">
           <label class="form-check-label" for="Other">
            <input class="form-check-input" type="radio" name="vehicel" value="Other" id="Other"
            onChange={handelChange} checked={formData.vehicel=="Other"} />
            
            Other
            </label>
        </div>
        
    </div>
        </>
    );
}

export default RadioGroup;
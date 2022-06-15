import React, {useState} from "react";

function  BookingRadio(){
    const [formData,setfromData] = useState({
        isAgree :false,
        medical :"exlraet",
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
            <input class="form-check-input" type="radio" name="medical" value="exlraet" id="exlraet"
            onChange={handelChange} checked={formData.medical=="exlraet"} />
            
            EXLRAET
            </label>
        </div>
        <div class="form-check ms-3">
           <label class="form-check-label" for="lab">
            <input class="form-check-input" type="radio" name="medical" value="lab" id="lab"
            onChange={handelChange} checked={formData.medical=="lab"} />
            
            Lab
            </label>
        </div>
        

       
        
        </div>
        </>
    );
}

export default BookingRadio;
import React from 'react'
import axios from 'axios'
import { useState } from 'react'



function Validation() {
    const [email,setemail]=useState("")
    async  function checkEmail(){

    
    let response=await axios.get('https://api.apilayer.com/email_verification/'+email,{headers:{apikey:'lMNpFiFt9p5r4xV2iRBMdTqvmH5CagLQ'}})

    if(response.data.can_connect_smtp==true){
      alert("Email is valid")
    }else{
      alert("Email is invalid")
    }
    console.log(response)
  }
  return (
    <div>
        <label>Email: </label>
        <input type="Email" spaceholder="Email" id='email' onChange={(e)=>{setemail(e.target.value);}} /><br /><br />
        <button onClick={checkEmail}>Submit</button><br /><br />
    
    </div>
  )
}

export default Validation
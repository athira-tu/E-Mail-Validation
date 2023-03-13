import React from 'react'
import axios from 'axios'
import { useState } from 'react';
function validation() {
    const [email, setemail] = useState("")
    async function checkEmail() {
        let response = await axios.get("https://api.apilayer.com/email_verification/aathuathira700@gmail.com", { headers: { apikey: 'DaGM7GaCExVsTlVoTpRwqhIdjdcWtlxI' } })
        if (c)
            console.log("true");
    }
    return (
        <>
            <input type="email" placeholder='email' /><br />
            <button onClick={checkEmail}>check</button>
        </>
    )
}

export default validation
import React, { useEffect, useState } from 'react'

const UserInfo = () => {
    const [userInfo , setUserInfo] = useState({
        name:"",
        profession:"",
        term :false
    });

    const [error,setError] = useState({
        userName:false,
        uncheckedTerm :false
    })


// const checkNumber =(username :string):boolean=>{
    
// }

const handleUserName = (e:any)=>{
    setUserInfo({...userInfo ,name:e.target.value})

}

const handleOccupation = (e:any)=>{
    setUserInfo({...userInfo ,profession:e.target.value})

}
const handleTerms = (e:any)=>{
    setUserInfo({...userInfo ,term:!!e.target.value})

}

const handleForm = (e:any)=>{
    e.preventDefault();
    console.log("UserInfo" ,userInfo)
}

  return (
    <div>
        <div>FilL User Details </div>
        <input  type='text' placeholder='Enter your Name' onChange={handleUserName} />
        <br/>
        
        <label htmlFor="profession"> Occupation</label>
        <select name="profession" id="profession" onChange={handleOccupation}>
            <option value="Business">Business</option>
            <option value="Service">Service</option>
        </select>
        <br></br>

        <input type="checkbox" name="term" id=""  onChange={handleTerms}/>
        <label htmlFor="term">Agree on terms and condition </label>
        <br></br>
        <button type='button' onClick={handleForm}>Submit</button>

    </div>
  )
}

export default UserInfo
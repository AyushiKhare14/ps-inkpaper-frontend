import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"


function Loginform() {

    const [showPwd, setShowPwd] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function validateUser() {

        if (username == "" || password== ""){
            alert("Please provide username and password to login.")
            return
        }

        else if(username == "admin" || password== "admin"){
            navigate("/adminhomepage/home");
        }

        else {
            alert("Username or password do not match, Please re-try!")
        }
        
            
        }
        

    const showPassword = () => {
        showPwd ? setShowPwd(false) :setShowPwd(true)
    }

  return (
    <>
      <div className="d-flex justify-content-center row">

<div className="col-8 mt-2">
    <sup>*</sup><label htmlFor="username" className="form-label">
        Admin Username
    </label>
    
    <input type="text" required id="username" className="form-control" value={username} placeholder="Type your username" onChange={(e) => setUsername(e.target.value)} />
</div>

<div className="col-8 mt-2">
    <sup>*</sup><label htmlFor="password" className="form-label">
        Admin Password
    </label>
    
    <input required type={showPwd ? "text" :"password"} id="password" className="form-control" value={password} placeholder="Type your password" onChange={(e) => setPassword(e.target.value)} />
</div>

<div className="d-flex mt-2 justify-content-around text-secondary loginoptions">
    <div><input type="checkbox" onClick={showPassword} /><small>Show Password</small></div>
    <div><small>Forgot Password?</small></div>
</div>

<div className="d-flex justify-content-center mt-4">
    <button className="reglogbtn btn btn-dark loginBtn" onClick={validateUser}>LOGIN</button>
</div>







</div>
    </>
  )
}

export default Loginform

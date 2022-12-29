import React from "react";
import "./Loginform.css"
const Loginform=()=>{
    return(
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <div className="login-btn">login</div>
            <p className="text">or using login</p>
            <div className="alt-login">
            <div className="facebook"></div>
            <div className="google"></div>
            </div>
      </div>
    )
}
export default Loginform;
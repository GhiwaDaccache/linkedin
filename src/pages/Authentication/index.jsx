import "./style.css";

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";


const Authentication = () => {
    let IsLogin = false; 
    return (
    <div className="flex page">
            {/* <div className="bg-img"></div>
            <div className="flex center">
                <div className="flex column center login-form gap primary-bg">
                    <h2>Welcome back</h2>
                    <input
                        className="f-width input-style"
                        type="text"
                        placeholder="Email"
                    />
                    
                    <input
                        className="f-width input-style"
                        type="password"
                        placeholder="Password"
                    />

                    <button
                        className="btn-style f-width">
                        Login
                    </button>

                    <small>
                        Don't have an account? <span><b>Sign Up</b></span>
                    </small>

                    </div>
            </div> */}

        <div className="bg-img"></div>
            <div className="flex center">
                <div className="flex column center login-form gap primary-bg">
                    <h2>Welcome</h2>
                    <input
                        className="f-width input-style"
                        type="text"
                        placeholder="Email"
                    />

                    <input
                        className="f-width input-style"
                        type="text"
                        placeholder="username"
                    />
                    
                    <input
                        className="f-width input-style"
                        type="password"
                        placeholder="Password"
                    />

                    <button
                        className="btn-style f-width">
                        Signup
                    </button>

                    <small>
                        Already have an account? <span><b>Login</b></span>
                    </small>

                    </div>
            </div>

    </div>

  );
};



export default Authentication;

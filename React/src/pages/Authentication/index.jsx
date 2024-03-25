import "./style.css";

import axios from "axios";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";


const Authentication = () => {
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({email: "", password: "", username: ""})


    return (
    <div className="flex page">
             <div className="bg-img"></div>
            <div className="flex center">
                
                {isLogin ? (
                    <div className="flex column center login-form gap primary-bg">
                   <h2>Welcome back</h2>
                    <input
                        className="f-width input-style"
                        type="text"
                        placeholder="Email"
                        onChange={(e) => {
                            setCredentials({
                              ...credentials,
                              email: e.target.value,
                            });
                          }}
                    />
                    
                    <input
                        className="f-width input-style"
                        type="text"
                        placeholder="Password"
                        onChange={(e) => {
                            setCredentials({
                              ...credentials,
                              password: e.target.value,
                            });
                          }}
                    />

                    <button className="btn-style f-width" 
                    onClick={async () => {
                        const formData = new FormData();
                        formData.append('user_input', credentials.email);
                        formData.append('password', credentials.password);

                        try {
                            const { email, password } = credentials;
          
                            const response = await axios.post(
                              "http://localhost/linkedin/Backend/signin.php",
                              formData,
                            );
          
                            if (response.data.status === "logged in") {
                              navigate("/home");
                            }
                          } catch (error) {
                            console.error(error);
                          }
                        }}
                    >
                        Login
                    </button>

                    <small>
                        Don't have an account? <span onClick={() => {
                            setIsLogin(false);
                        }}>
                            <b>Sign Up</b></span>
                    </small>
                    </div> 
                ) : (

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

                    <button className="btn-style f-width" onClick={async () => {
                        const formData = new FormData();
                        formData.append('username', credentials.username);
                        formData.append('email', credentials.email);
                        formData.append('password', credentials.password);

                        try {
                            const { email, password, username } = credentials;
          
                            const response = await axios.post(
                              "http://localhost/linkedin/Backend/signup.php",
                              formData,
                            );
          
                            if (response.data.status === "success") {
                              navigate("/Profile");
                            }
                          } catch (error) {
                            console.error(error);
                          }
                        }}
                    >
                        Signup
                    </button>

                    <small>
                        Already have an account? <span onClick={() => {
                            setIsLogin(true);
                        }}><b>Login</b></span>
                    </small>
                </div>
                    )}
                
        </div>
    </div>

  );
};



export default Authentication;

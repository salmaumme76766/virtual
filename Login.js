import React,{useState} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

import { toast} from "react-toastify";


function Login() {
    const[usertype, setUsertype] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
    
    function handleSubmit(e) {
        e.preventDefault();
        const obj = { email: username, password, userType: usertype };
        axios
            .post("http://localhost:8080/LoginVerify", obj)
            .then((res) => {
                console.log(res);
                if (res.data === "admin" ) {
                    // Set user type and username in sessionStorage
                    sessionStorage.setItem("admin", username);
                        navigate("/AdminDashboard");
                        toast.success("Login successfully");
                    } else {
                        navigate("/userdashboard");
                        toast.success("Login successfully");
                        sessionStorage.setItem("user", username);
                        
                    }
            })
            .catch((err) => {
                console.error("Login error:", err);
                alert(err.response.data ? err.response.data : "Failed to login");
            });
    }
    
        
    return (
        <div>
        <div className="card p-3 w-50 mx-auto">
            <h2 className="text-center">Login Page</h2>
            <form onSubmit={handleSubmit}>
                <label>Select Usertype</label>
                <select
                    className="form-select text-center"
                    value={usertype}
                    onChange={(e) => setUsertype(e.target.value)}
                    required
                >
                    
                    
                    <option value="" hidden>
                        Select Usertype
                    </option>
                    <option value="admin">admin</option>
                    <option value="user">user</option>
                </select>
                <label>Enter email</label>
                <input
                    type="email"
                    className="form-control mb-3"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label>Enter Password</label>
                <input
                    type="password"
                    className="form-control mb-3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="btn btn-primary" to ="Submit">Login</button>
    
                 <Link className="btn btn-Link" to='/register'>Register</Link>
                 
                 

                </form>
            </div>
        </div>
    );

}

export default Login;




import axios from "axios";
import React,{useState} from "react";
import { toast } from "react-toastify";

export default function RegistrationPage(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile]=useState("");
  const [address,setAddress]=useState("");
  const [password,setPassword]=useState("");
  const [city,setCity]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userdata ={
      name:name,
      email:email,
      mobile:mobile,
      address:address,
      password:password,
      city:city,
      status:"Active"
    };

    toast
    .promise(
      axios.post("http://localhost:8080/Registration",userdata),
      {
        pending:"Form submitting.....",
        success:"Registered successfully",
      },
    )

    .then((res)=> {
      console.log(res);
      Clearfields();
    })

    .catch((err)=> {
      toast.error(
        err.response ? err.response.data: " something went wrong!",

      );
    });
    
  };
   function Clearfields(){
    setName("");
    setEmail("");
    setPassword("");
    setAddress("");
    setMobile("");
    setCity("");
  }
  const handleMobileKeyPress = (e) => {
    const pattern =/[0-9]/;
    if (!pattern.test(e.key)) {
      e.preventDefault();
    }
  };
  return (
    <div className="regbg">
      <div className="container">
        <div className="col-8 offset-2">
          <div className="card-header p-2">
            <h1 className="text-center mt-5"> RegistrationForm</h1>
            <form onSubmit={handleSubmit} id="regform">
              <div className="md-1">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input 
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                pattern="[A-Za-z/s]+"
                title="NAme should contain only alphabets"
                required
                />
              </div>
              <div className="="mb-1>
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input 
                type="email"
                id="email"
                className="form-control"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 pattern="^[^\s@+@[^\s@+\.[s@]+$"
                 title="valid email format"
                 required/>
              </div>
              <div className="mb-1">
                <label htmlFor="mobile" className="form-label">
                  Mobile:
                </label>
                <input
                type="mobile"
                id ="mobile"
                className="form-control"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                onKeyPress={handleMobileKeyPress} 
                pattern="[0-10]+" 
                title="Valid mobile number format"
                required
              />
              </div>
              <div className="mb-1">
                <label htmlFor ="address" className="form-label">
                  Address:
                </label>
                <input 
                type="text"
                id="addess"
                className="form-control"
                value={address}       
                onChange={(e)=>setAddress(e.target.value)}
                title="valid address format"
                required/>
                </div>
               <div className="md-1">
                <label htmlFor="name" className="form-label">
                  Password:
                </label>
                <input 
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                miniLength="6"
                title="Password should atleast have 6 characters in it"
                required
                />
              </div>
              <div className="md-1">
                <label htmlFor="city" className="form-label">
                  City:
                </label>
                <input 
                type="text"
                id="city"
                className="form-control"
                value={city}
                onChange={(e)=>setCity(e.target.value)}

                title="city should contain only alphabets"
                required
                />
              </div>   
              <div className="p-2 d-flex justify-content-end">
                            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
                                Submit
                            </button>
                            <button className="btn btn-Link" onClick={Clearfields}>
                                    Reset Fields
                                  </button>
                        </div>
                    
            </form>
          </div>
        </div>
      </div>
    </div>
  )


}
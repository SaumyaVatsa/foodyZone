import React, { useState } from "react";
import { Navbar } from "../components";
import { Link } from "react-router-dom";

function Signup() {
    const [credentials, setcredentials] = useState({name: "", email: "", password: "",geolocation:""})
    const handleSubmit = async(e)=>{
        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/createUser',{
            method: 'POST',
            header: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({name:credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation})
        });

        const json = await response.json();
        console.log(json);
    };

    const onChange = (event)=>{
        setcredentials({...credentials, [event.target.name]: event.target.value})
    }
  return (
    <>
    <Navbar/>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="location"
              name="geolocation"
              value={credentials.geolocation}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Sign Up
          </button>
          <Link to="/login" className=' m-3 btn btn-danger'>Already a User</Link>
        </form>
      </div>
    </>
  );
}

export default Signup;

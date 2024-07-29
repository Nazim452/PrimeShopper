

import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/AuthStyle.css";
import { useAuth } from "../../context/auth";
import '../../styles/RegisterStyle.css';
import GoogleLogin from './GoogleLogin.js'
import loginImage from '../../images/loginpage.png'


import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  
}
  from 'mdb-react-ui-kit';
import { toast } from "react-toastify";







const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (



    <>


      <Layout title={"PrimeShopper - A ecommerce application"}>

        <form action="" onSubmit={handleSubmit} className="reg-back">
          <MDBContainer fluid className="">

            <MDBCard className='text-black m-5 register-form' style={{ borderRadius: '25px' }}>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                    {/* <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p> */}
                    <h2>Login</h2>



                    <div className=" ">



                      <div className="mb-3">
                        <p className="">Enter Your Email:-</p>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Enter Your Email "
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <p className="">Enter Your Password:-</p>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Enter Your Password"
                          required
                        />
                      </div>


                      <button type="submit " className="btn btn-primary mb-3">
                        LOGIN
                      </button>


                     

                      <GoogleLogin className="google-login"/>






                      <div className="mb-3 mt-3">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => {
                            navigate("/forgot-password");
                          }}
                        >
                          Forgot Password
                        </button>
                      </div>

                    </div>


                  </MDBCol>
                  <div className="heading">
             <h1 className="m-4 text-center ">PrimeShopper: Elevating Your Online Shopping Experience</h1>
             </div>
                 
                  <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                    <MDBCardImage src={loginImage} fluid />
                  </MDBCol>

                </MDBRow>
              </MDBCardBody>
            </MDBCard>

          </MDBContainer>

        </form>


      </Layout>




    </>
  );
};

export default Login;
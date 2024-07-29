import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../../styles/AuthStyle.css";
import loginImage from '../../images/loginpage.png'
import '../../styles/RegisterStyle.css';






import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { toast } from "react-toastify";
import GoogleLogin from "./GoogleLogin";













const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (


    <Layout title={"PrimeShopper - A ecommerce application"}>

      <form action="" onSubmit={handleSubmit} className="reg-back">
        <MDBContainer fluid className="">

          <MDBCard className='text-black m-5 register-form' style={{ borderRadius: '25px' }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                  {/* <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p> */}
                  <h2>Register</h2>





     
                   
                  <div className="mb-3">
                  <p className="">Enter Your Name:-</p>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Your Name"
                      required
                      autoFocus
                    />
                  </div>
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
                  <p className="">Enter Password:-</p>

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
                  <div className="mb-3">
                  <p className="">Enter Your Mobile No:-</p>

                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Your Phone"
                      required
                    />
                  </div>
                  <div className="mb-3">
                  <p className="">Enter Your Address:-</p>

                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Your Address"
                      required
                    />
                  </div>
                  <div className="mb-3">
                  <p className="">Enter Your Answer:-</p>

                    <input
                  
                      type="text"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="What is Your Favourite sports"
                      required
                    />
                  </div>




















                  <button type="submit" className="btn btn-primary mb-3">
                    REGISTER
                  </button>


                  <GoogleLogin />

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
  );
};

export default Register;
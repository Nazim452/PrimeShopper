
import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "../../styles/AuthStyle.css";
import loginImage from '../../images/loginpage.png'



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


const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("Error in ForgotPassword/Auth", error);
      toast.error("Something went wrong");
    }
  };
  return (
    // <Layout title={"Forgot Password - Ecommerce APP"}>
    //   <div className="form-container ">
    //     <form onSubmit={handleSubmit}>
    // <h4 className="title">RESET PASSWORD</h4>

    // <div className="mb-3">
    //   <input
    //     type="email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //     className="form-control"
    //     id="exampleInputEmail1"
    //     placeholder="Enter Your Email "
    //     required
    //   />
    // </div>
    // <div className="mb-3">
    //   <input
    //     type="text"
    //     value={answer}
    //     onChange={(e) => setAnswer(e.target.value)}
    //     className="form-control"
    //     id="exampleInputEmail1"
    //     placeholder="Enter Your favorite Sport Name "
    //     required
    //   />
    // </div>
    // <div className="mb-3">
    //   <input
    //     type="password"
    //     value={newPassword}
    //     onChange={(e) => setNewPassword(e.target.value)}
    //     className="form-control"
    //     id="exampleInputPassword1"
    //     placeholder="Enter Your Password"
    //     required
    //   />
    // </div>

    // <button type="submit" className="btn btn-primary">
    //   RESET
    // </button>
    //     </form>
    //   </div>
    // </Layout>

    <Layout>



      <form action="" onSubmit={handleSubmit} className="reg-back">
        <MDBContainer fluid className="">

          <MDBCard className='text-black m-5 register-form' style={{ borderRadius: '25px' }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                  {/* <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p> */}
                  <h4 className="title">RESET PASSWORD</h4>

                  <div className="mb-3">
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
                    <input
                      type="text"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Your favorite Sport Name "
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter Your Password"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    RESET
                  </button>
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

export default ForgotPasssword;
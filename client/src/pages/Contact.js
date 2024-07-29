import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 contact-page">
          <h1 className=" text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about product ,  feel free to call anytime. We 24X7
           available
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@primeShopper.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> :+91-9576631568
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-1200-4000 (toll free)
          </p>

          <p>
            <p>Have  a issue? send mail to us   <br />
          
            <a href="mailto:nazim45200@gmail.com">Mail</a>
            </p>
           
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
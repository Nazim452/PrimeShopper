import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        {/* <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div> */}
        <div 
        style={{marginLeft:'auto',marginRight:'auto'}}
        className="col-md-10 text-center policy ">

          <h2 className="about-paragraph text-center">Privacy Policy</h2>

          <p className="paragraph">
            At PrimeShopper, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your data when you use our eCommerce application. By accessing or using PrimeShopper, you agree to the terms outlined in this Privacy Policy.
          </p>

          <h3 className="about-paragraph">Information We Collect:</h3>
          <p className="paragraph">
            When you use PrimeShopper, we may collect certain information from you, including:

            1. Personal Information: This may include your name, email address, shipping address, phone number, and payment details.
            2. Browsing Information: We may collect data about your interactions with the application, such as the products you view, add to cart, or purchase.
          
            4. Cookies: PrimeShopper uses cookies to enhance your browsing experience and personalize the content and advertisements you see.
          </p>

          <p className="paragraph">How We Use Your Information: <br />
            We use the information we collect for various purposes, including:
            <br />

            1. Processing and fulfilling your orders.
            2. Personalizing your shopping experience and providing recommendations.
            3. Communicating with you about your orders, account updates, and promotional offers.
            4. Analyzing trends and improving the functionality of PrimeShopper.
            5. Preventing fraud and enhancing the security of our platform.</p>

          <h3 className="about-paragraph">Data Security:</h3>
          <p className="paragraph">  PrimeShopper takes the security of your data seriously and employs industry-standard measures to protect it from unauthorized access, alteration, disclosure, or destruction. We use encryption technology, secure servers, and strict access controls to safeguard your personal information.</p>

          <h3 className="about-paragraph">Third-Party Disclosure:</h3>
          <p className="paragraph">
            We may share your information with third-party service providers who assist us in operating PrimeShopper, such as payment processors, shipping companies, and marketing agencies. However, we only disclose the minimum amount of information necessary to fulfill their respective functions, and we require them to adhere to strict confidentiality obligations.
          </p>

          <h3 className="about-paragraph">Your Choices:</h3>
          <p className="paragraph">          You have the right to access, update, or delete your personal information stored on PrimeShopper. You can also opt-out of receiving promotional communications from us by following the instructions provided in the communication or contacting our customer support team.</p>

          <h3 className="about-paragraph">Changes to This Privacy Policy:</h3>
          <p className="paragraph">
            PrimeShopper reserves the right to update or modify this Privacy Policy at any time. We will notify you of any changes by posting the revised policy on our website or sending you a notification through the application. Your continued use of PrimeShopper after any changes indicates your acceptance of the updated Privacy Policy.

          </p>
        
          <h3 className="about-paragraph">Conclusion:</h3>
          <p className="paragraph">
            Your privacy is important to us, and we are committed to protecting the confidentiality and integrity of your personal information. By using PrimeShopper, you acknowledge and agree to the terms of this Privacy Policy. Thank you for trusting us with your data.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
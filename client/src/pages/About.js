import React from "react";
import Layout from "./../components/Layout/Layout";
import about from '../../src/images/about.jpg'
const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
          className="mb-10"
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
          <img
            src={about}
            alt="contactus"
            style={{ width: "100%" ,objectFit:'cover',marginTop:'60px'}}
          />
        </div>
        <div className="col-md-5">
          <p className="text-justify mt-2">
           <h2 className="about-heading">About PrimeShopper: Revolutionizing Your Online Shopping Experience</h2>

            <h3 className="about-paragraph"> Introduction:</h3>
           <p className="paragraph"> PrimeShopper is not just another eCommerce platform; it's a revolution in online shopping. We strive to provide our customers with an unparalleled shopping experience, combining attractive offers, lightning-fast delivery, and ironclad security for every transaction. In a world where convenience is paramount, PrimeShopper stands out as the pinnacle of efficiency and reliability.</p>
             <h3 className="about-paragraph">Our Mission:</h3>
           <div className="paragraph">
           At PrimeShopper, our mission is simple: to redefine the way you shop online. We aim to exceed your expectations at every turn, from the moment you browse our vast selection of products to the swift and secure delivery of your purchases. We're not just here to sell; we're here to elevate your shopping experience to new heights.
           </div>

            <h3 className="about-paragraph">Unmatched Offers:</h3>
            <div className="paragraph">
            One of the cornerstones of PrimeShopper is our commitment to providing irresistible offers to our customers. Whether it's discounts, exclusive deals, or bundled packages, we ensure that you always get the best value for your money. Our team works tirelessly to negotiate with vendors and suppliers to bring you unbeatable prices on a wide range of products.

            </div>

            <h3 className="about-paragraph">Lightning-Fast Delivery:</h3>
            <div className="paragraph">
            In today's fast-paced world, waiting weeks for your online orders to arrive is simply unacceptable. That's why PrimeShopper prioritizes speed and efficiency in our delivery process. With strategically located warehouses and a network of reliable shipping partners, we guarantee swift delivery to your doorstep. Say goodbye to long waiting times and hello to instant gratification with PrimeShopper.
              
            </div> 

            <h3 className="about-paragraph">Security You Can Trust:</h3>
            <div className="paragraph">
            We understand the importance of security when it comes to online transactions. That's why PrimeShopper employs the latest encryption technology and rigorous security protocols to safeguard your personal and financial information. When you shop with us, you can rest assured that your data is protected every step of the way.
              
            </div>

           

           
            <h3 className="about-paragraph">Community Engagement:</h3>
            <div className="paragraph">
            PrimeShopper is more than just a shopping platform; it's a community of like-minded individuals who share a passion for convenience, value, and quality. We actively engage with our customers through various channels, including social media, forums, and events, to foster a sense of belonging and camaraderie. Join the PrimeShopper community today and be a part of something special.

              
              </div>
            <h3 className="about-paragraph">Conclusion:</h3>
            <div className="paragraph">
            PrimeShopper is more than just a shopping platform; it's a community of like-minded individuals who share a passion for convenience, value, and quality. We actively engage with our customers through various channels, including social media, forums, and events, to foster a sense of belonging and camaraderie. Join the PrimeShopper community today and be a part of something special.

              
              </div>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
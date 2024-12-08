import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="md:px-32 py-20 px-10 bg-gradient-to-r from-primary to-secondary text-white w-full rounded-tl-[125px]">
        <div className="flex md:flex-row flex-col gap-12 md:mb-6 mb-10">
          <div className="basis-3/6 mr-10 pr-10">
            <h2 className="md:text-3xl text-2xl font-semibold mb-3">DocAppoint</h2>
            
            <p className="md:text-lg mb-5 font-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              error cupiditate ipsum commodi, eum natus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nam, maxime.
            </p>
            
            <div className="text-2xl mb-6">
              <Link to="https://www.wikipedia.org/" className="mr-4">
                <i className="ri-global-line bg-white text-primary p-2 rounded-[50%]"></i>
              </Link>
              <Link to="https://www.facebook.com/" className="mr-4">
                <i className="ri-facebook-circle-line bg-white text-primary p-2 rounded-[50%]"></i>
              </Link>
              <Link to="https://www.instagram.com/" className="mr-4">
                <i className="ri-instagram-line bg-white text-primary p-2 rounded-[50%]"></i>
              </Link>
              <Link to="https://www.whatsapp.com/" className="mr-4">
                <i className="ri-whatsapp-line bg-white text-primary p-2 rounded-[50%]"></i>
              </Link>
            </div>
          </div>

          <div className="basis-2/6">
            <h2 className="font-semibold text-xl mb-3">Get in touch with us</h2>
            
            <div className="mb-3">
              <p className="font-medium">24/7 Support:</p>
              <p>Mobile: +91 1234567890</p>
              <p>Telephone: 00 123456789</p>
            </div>

            <div>
              <p className="font-medium">E-mail:</p>
              <p>aiueoiefidu@gmail.com</p>
            </div>
          </div>

          <div className="basis-1/6 flex flex-col gap-2 ">
            <h2 className="font-semibold text-xl mb-2">Quick Links</h2>
            <Link to="/">Home</Link>
            <Link to="/doctor">Doctor</Link>
            <Link to="/survey">Survey</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/faq">FAQ's</Link>
          </div>
        </div>

        <hr className="border"/>

        <p className="text-center text-lg mt-8">DocAppoint © - All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Footer;

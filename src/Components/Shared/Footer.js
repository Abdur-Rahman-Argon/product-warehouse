import React from "react";

const Footer = () => {
  return (
    <footer class="footer p-10 bg-slate-700 text-white ">
      <div className=" text-left">
        <div>
          <h1 className=" text-xl font-Extrabold title-style">
            Product Store House
          </h1>
        </div>
        <div>
          <h2 className=" text-[15px] font-semibold">
            Created by <span>Abdur Rahman</span>
          </h2>
          <h3 className=" text-[14px] font-medium">Full Stack WebDeveloper</h3>
        </div>
        <div>
          <h4>
            <span>Phone: </span>
            <span>+88-01763378457</span>
          </h4>
          <h4>
            <span>Email: </span>
            <span>abdurrahman.me7@gmail.com</span>
          </h4>
        </div>
      </div>
      <div>
        <span class="footer-title">Services</span>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </div>
      <div>
        <span class="footer-title">Follow Us</span>
        <a class="link link-hover">Facebook</a>
        <a class="link link-hover">Twitter</a>
        <a class="link link-hover">Instagram</a>
        <a class="link link-hover">Youtube</a>
      </div>
    </footer>
  );
};

export default Footer;

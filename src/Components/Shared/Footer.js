import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-700">
      <div class="footer p-10  text-white ">
        <div className=" text-left">
          <div>
            <h1 className=" text-2xl font-[800] title-style ">P-Store House</h1>
          </div>
          <div>
            <h2 className=" text-[15px] font-semibold">
              Created by <span>Abdur Rahman</span>
            </h2>
            <h3 className=" text-[14px] font-medium">
              Full Stack WebDeveloper
            </h3>
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
          <span class="footer-title ">Follow Us</span>
          <a class="link link-hover flex items-center">
            <span className=" text-xl mr-3">
              <i class="fa-brands fa-facebook"></i>
            </span>
            <span></span> Facebook
          </a>
          <a class="link link-hover flex items-center">
            <span className=" text-xl mr-3">
              <i class="fa-brands fa-instagram"></i>
            </span>
            <span>Instagram</span>
          </a>
          <a class="link link-hover flex items-center">
            <span className=" text-xl mr-3">
              <i class="fa-brands fa-twitter"></i>
            </span>
            <span>Twitter</span>
          </a>
          <a class="link link-hover flex items-center">
            <span className=" text-xl mr-3">
              <i class="fa-brands fa-youtube"></i>
            </span>
            <span>Youtube</span>
          </a>
        </div>
      </div>
      <footer class="footer footer-center font-semibold text-lg text-white pb-5">
        <div>
          <p>
            Copyright © 2022 - All right reserved by{" "}
            <span className=" cursor-pointer font-semibold text-lg text-success">
              P-store House
            </span>
          </p>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;

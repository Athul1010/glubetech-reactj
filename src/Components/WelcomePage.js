import React, { useEffect } from "react";
import "./Style.css";

export default function WelcomePage() {


  const myFunction=(e)=>{

    e.preventDefault()
    console.log("sus");
      var x = document.getElementById("myTopnav");
      if (x.className ==="topnav") {
        x.className +="responsive";
      } else {
        x.className = "topnav";
      }
    };
 


  return (
    <>
      <div className="topnav fixed-top" id="myTopnav">
        <a href="#" id="header-nav">
          <span>Ninestars</span>
        </a>
        <a className="nav-content" href="#banner-img">
          Home
        </a>
        <a className="nav-content" href="#about">
          About us
        </a>
        <a className="nav-content" href="#services">
          Services
        </a>
        <a className="nav-content" href="#testimonial">
          Portfolio
        </a>
        <a className="nav-content" href="#team">
          Team
        </a>
        <div className="dropdown">
          <button className="dropbtn">
            Dropdown
            <i class="fas fa-angle-down" id="dropdown-icon"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <a href="#about" className="nav-content">
          Contact
        </a>
        <a href="#contact">
          <button id="nav-button">Get Started</button>
        </a>
        <a href="javascript:void(0);" className="icon" onclick={myFunction}>
          ☰
        </a>
      </div>




      

      

      <section id="banner-img" className="d-flex align-items-center">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Bettter digital experience with Ninestars</h1>
              <h2>
                Digital Experience Platform and Content Hub that apply the power
                of data science and marketing technology.
              </h2>
              <div>
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 banner-img">
              <img
                src="https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg?w=740&t=st=1671808819~exp=1671809419~hmac=8e0d0b3f2ef16d9fb2f01a4f35a655284f2b18972422ca443836efe4e4208d64"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

import React from 'react'
import './Style.css';

export default function About() {
  return (
    <>
    <section id="about" className="about">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
        <img
          src="https://media.lacentraledefinancement.fr/wp-content/themes/lcf/dist/assets/img/credit_redemption_universe_characters.svg"
          className="img-fluid"
          alt=""
          data-aos="zoom-in"
        />
      </div>
      <div className="col-lg-6 pt-5 pt-lg-0">
        <h3 data-aos="fade-up">Digital Experiences in the Context of Digital Business</h3>
        <p data-aos="fade-up">
        Digital experiences are that portion of technology that allows companies to go beyond digitizing paper processes in order to create services that are possible only because of the internet and other modern technologies.

        </p>
        <div className="row">
          <div className="col-md-6"  >
            <i className="bx bx-receipt" />
            <h4>Is digital experience important?</h4>
            <p>
            Digital experiences are important because they allow you to connect with your customers in a way that is convenient for them. 
            </p>
          </div>
          <div className="col-md-6"  >
            <i className="bx bx-cube-alt" />
            <h4>Digital online service</h4>
            <p>
            The electronic delivery of information across multiple platforms, devices, and delivery mechanisms like web or mobile.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

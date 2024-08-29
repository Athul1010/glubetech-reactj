import React from 'react'
import portfolio1 from '../Assets/portfolio-1.jpg'
import portfolio2 from '../Assets/portfolio-2.jpg'
import portfolio3 from '../Assets/portfolio-3.jpg'
import portfolio4 from '../Assets/portfolio-4.jpg'
import portfolio5 from '../Assets/portfolio-5.jpg'
import portfolio6 from '../Assets/portfolio-6.jpg'
import portfolio7 from '../Assets/portfolio-7.jpg'
import portfolio8 from '../Assets/portfolio-8.jpg'
import portfolio9 from '../Assets/portfolio-9.jpg'
import './Style.css';

export default function Testimonial() {
  return (
    <>
    <>

  <section id="testimonial" className="testimonial">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Portfolio</h2>
        <p>Check out our beautifull testimonial</p>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul id="testimonial-flters">
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li>App</li>
            <li >Card</li>
            <li >Web</li>
          </ul>
        </div>
      </div>
      <div
        className="row testimonial-container"
     
      >
        <div className="col-lg-4 col-md-6 testimonial-item filter-app">
          <div className="testimonial-wrap">
            <img
              src={portfolio1}
              className="img-fluid"
              alt=""
            />
            
           
          </div>
        </div>
        <div className="col-lg-4 col-md-6 testimonial-item filter-web">
          <div className="testimonial-wrap">
            <img
              src={portfolio2}
              className="img-fluid"
              alt=""
            />
          
           
          </div>
        </div>
        <div className="col-lg-4 col-md-6 testimonial-item filter-app">
          <div className="testimonial-wrap">
            <img
              src={portfolio3}
              className="img-fluid"
              alt=""
            />
            
          
          </div>
        </div>
        <div className="col-lg-4 col-md-6 testimonial-item filter-card">
          <div className="testimonial-wrap">
            <img
              src={portfolio4}
              className="img-fluid"
              alt=""
            />
           
          
          </div>
        </div>
        <div className="col-lg-4 col-md-6 testimonial-item filter-web">
          <div className="testimonial-wrap">
            <img
              src={portfolio5}
              className="img-fluid"
              alt=""
            />
            
           
          </div>
        </div>
        <div className="col-lg-4 col-md-6 testimonial-item filter-app">
          <div className="testimonial-wrap">
            <img
              src={portfolio6}
              className="img-fluid"
              alt=""
            />
           
           
          </div>
        </div>
        <div className="col-lg-4 col-md-6 testimonial-item filter-card">
          <div className="testimonial-wrap">
            <img
              src={portfolio7}
              className="img-fluid"
              alt=""
            />

        
          </div>
        </div>
        <div className="col-lg-4 col-md-6 testimonial-item filter-card">
          <div className="testimonial-wrap">
            <img
              src={portfolio8}
              className="img-fluid"
              alt=""
            />
            
          </div>
        </div>
        <div className="col-lg-4 col-md-6 testimonial-item filter-web">
          <div className="testimonial-wrap">
            <img
              src={portfolio9}
              className="img-fluid"
              alt=""
            />
           
          
          </div>
        </div>
      </div>
    </div>
  </section>
 
</>

    </>
  )
}

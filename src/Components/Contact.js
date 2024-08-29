import React from 'react'
import './Style.css';

export default function Contact() {
  return (
    <>



  <section id="contact" className="contact">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Contact Us</h2>
        <p>Contact us the get started</p>
      </div>
      <div className="row">
        <div
          className="col-lg-5 d-flex align-items-stretch"
       
        >
          <div className="info">
            <div className="address">
            <i class='bx bxs-edit-location'  style={{fontSize:"32px" }}></i>
              <h4>Location:</h4>
              <p>Calicut,kerala</p>
            </div>
            <div className="email">
            <i class='bx bx-envelope' style={{fontSize:"32px" }} ></i>
              <h4>Email:</h4>
              <p>pjishnu507@gmail.com</p>
            </div>
            <div className="phone">
            <i class='bx bx-tab'  style={{fontSize:"32px" }}></i>
              <h4>Call:</h4>
              <p>9072192569</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.4289568155!2d75.7407733067305!3d11.255826554589143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1671889794581!5m2!1sen!2sin"
              frameBorder={0}
              style={{ border: 0, width: "100%", height: 300 }}
              allowFullScreen=""
            />
          </div>
        </div>
        <div
          className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div className="form-group col-md-6 mt-3 mt-md-0">
                <label htmlFor="name">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required=""
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="name">Subject</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required=""
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="name">Message</label>
              <textarea
                className="form-control"
                name="message"
                rows={10}
                required=""
                defaultValue={""}
              />
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

    </>
  )
}

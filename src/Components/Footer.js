import React from 'react'
import './Style.css';

export default function Footer() {
  return (
    <>

<>
  <footer id="footer">
    <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h4>Join Our Newsletter</h4>
            <p>
            Try Hootsuite Today for Free!
            </p>
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Ninestars</h3>
            <p>
              Palayam Road <br />
              Calicut,kerala
              <br />
             <br />
              <br />
              <strong>Phone:</strong> 9072172569
              <br />
              <strong>Email:</strong> pjishnu507@gmail.com
              <br />
            </p>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Home</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">About us</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Services</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#">Terms of service</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Web Design</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#">Web Development</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#">Product Management</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Marketing</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>
            Want to find out how Ninestars can solve problems specific to your business? Let's talk.
            </p>
            <div className="social-links mt-3">
              <a href="#" className="twitter">
              <i class='bx bxl-twitter'></i>
              </a>
              <a href="#" className="facebook">
              <i class='bx bxl-facebook-circle' ></i>
              </a>
              <a href="#" className="instagram">
              <i class='bx bxl-instagram-alt' ></i>
              </a>
              <a href="#" className="google-plus">
              <i class='bx bxl-skype' ></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bx bxl-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container py-4" id='end-section'>
      
    </div>
  </footer>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class='bx bxs-up-arrow-square'></i></a>
</>

    </>
  )
}

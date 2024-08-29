import React from 'react'
import team1 from '../Assets/team-1.jpg'
import team2 from '../Assets/team-2.jpg'
import team3 from '../Assets/team-3.jpg'
import team4 from '../Assets/team-4.jpg'
import './Style.css';


export default function Teams() {
  return (
    <>


  <section id="team" className="team">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>Our team is always here to help</p>
      </div>
      <div className="row">
        <div
          className="col-xl-3 col-lg-4 col-md-6"
        
        >
          <div className="member">
            <img
              src={team1}
              className="img-fluid"
              id='team-images'
              alt=""
            />
           
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6"
         
        >
          <div className="member">
            <img
              src={team2}
              className="img-fluid"
              id='team-images'
              alt=""
            />
           
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6"
       
        >
          <div className="member">
            <img
              src={team3}
              className="img-fluid"
              id='team-images'
              alt=""
            />
            
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6"
          
        >
          <div className="member">
            <img
              src={team4}
              className="img-fluid"
              id='team-images'
              alt=""
            />
            
          </div>
        </div>
      </div>
    </div>
  </section>
  

    </>
  )
}

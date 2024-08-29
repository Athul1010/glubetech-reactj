import React from 'react'
import './Style.css';
import client1 from '../Assets/client-1.png'
import client2 from '../Assets/client-2.png'
import client3 from '../Assets/client-3.png'
import client4 from '../Assets/client-4.png'
import client5 from '../Assets/client-5.png'
import client6 from '../Assets/client-6.png'
import client7 from '../Assets/client-7.png'
import client8 from '../Assets/client-8.png'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Clients() {
    const handleDragStart = (e) => e.preventDefault();
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
       1592: { items: 4 },
       2160: { items: 5 }, 
        2728: { items: 6 },
        3296: { items: 7 },
    };
    
    const items = [
      <img  id="client-img" src={client1} onDragStart={handleDragStart} role="presentation" />,
      <img   id="client-img"  src={client2} onDragStart={handleDragStart} role="presentation" />,
      <img  id="client-img"  src={client3} onDragStart={handleDragStart} role="presentation" />,
      <img  id="client-img"  src={client4} onDragStart={handleDragStart} role="presentation" />,
      <img   id="client-img"   src={client5} onDragStart={handleDragStart} role="presentation" />,
      <img  id="client-img"  src={client6} onDragStart={handleDragStart} role="presentation" />,
      <img  id="client-img"  src={client7} onDragStart={handleDragStart} role="presentation" />,
      <img   id="client-img"   src={client8} onDragStart={handleDragStart} role="presentation" />,
      
    ];
     
  return (
   <>
   <>
  <section id="clients" className="clients section-bg">
    <div className="container1" data-aos="fade-up">
      <div className="section-title">
        <h2>Clients</h2>
        <p>They trusted us</p>
      </div>
      <div
        className="clients-slider swiper"
      
      >
        <div className="swiper-wrapper align-items-center">
         

         
          <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
         


        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>
  {/* End Clients Section */}
</>









 
   </>
  )
}

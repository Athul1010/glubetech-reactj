import './App.css';
import About from './Components/About';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import QSection from './Components/QSection';
import Services from './Components/Services';
import Teams from './Components/Teams';
import Testimonial from './Components/Testimonial';
import WelcomePage from './Components/WelcomePage';

function App() {
  return (
  <>
  <WelcomePage/>
  <About/>
  <Services/>
  <Testimonial/>
  <QSection/>
  <Teams/>
  <Clients/>
  <Contact/>
  <Footer/>
  </>
  );
}

export default App;

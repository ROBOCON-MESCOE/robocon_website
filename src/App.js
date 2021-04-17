import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import 'tachyons';
import TeamAnonymous from './Components/TeamAnonymous/TeamAnonymous';
import EventsHome from './Components/EventsHome/EventsHome';
import OurSponsors from './Components/OurSponsors/OurSponsors';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <TeamAnonymous/>
      <EventsHome/>
      <OurSponsors/>
      <Footer/>
    </div>
  );
}

export default App;

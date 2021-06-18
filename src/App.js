import './App.css';
import 'tachyons';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import Events from './Pages/Events/Events';
import Achievements from './Components/Achievements/Achievements';
import OurTeams from './Components/OurTeam/OurTeam';


const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <OurTeams/>
      <Events />
      <Achievements />

      <Footer />
    </div>
  );
}

export default App;

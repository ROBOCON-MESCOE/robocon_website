import './App.css';
import 'tachyons';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Robocon from './Pages/Robocon/Robocon';
import HomePage from './Pages/HomePage/HomePage';
import Events from './Pages/Events/Events';
import Achievements from './Pages/Achievements/Achievements';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={About} />
          <Route path="/events" exact component={Events} />
          <Route path="/achievements" exact component={Achievements} />
          <Route path="/robocon" exactcomponent={Robocon} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

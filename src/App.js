import './App.css';
import 'tachyons';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import Events from './Pages/Events/Events';

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Events />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'tachyons';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;

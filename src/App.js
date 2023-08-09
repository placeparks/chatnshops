  import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
   return (
  <Router>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='about' element={<About/>} />
      <Route exact path='pricing' element={<Pricing/>} />
      <Route exact path='blog' element={<Blog/>} />
      <Route exact path='signup' element={<Signup/>} />
      <Route exact path='login' element={<Login/>} />
    </Routes>
  </Router>
  );
}

export default App;

// import { BrowserRouter as  Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Component/Home';
import About from './Component/About';
import Header from "./Component/Header"
import {Route , Routes} from 'react-router-dom'
import Footer from './Component/Footer'

function App() {

  return (
  <>
    <Header />
    <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <Footer />
  </>
  );

}

export default App

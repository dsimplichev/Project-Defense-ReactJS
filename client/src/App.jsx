import { Routes, Route } from 'react-router-dom';
import classes from './App.module.css'


import Home from './components/home/Home';
import Header from "./components/header/Header"
import Login from './components/login/Login';
import Register from './components/register/Register';
import Explore from './components/explore/Explore';
import Footer from './components/footer/Footer';


function App() {
  
  return (
    <div className={classes.mainbox}>
      
      <Header />
      <Explore />
      <Routes>
      
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
     
      </Routes>

      <Footer />
    
    </div>
  )
}

export default App

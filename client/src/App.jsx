import { Routes, Route } from 'react-router-dom';
import classes from './App.module.css'


import Home from './components/home/Home';
import Header from "./components/header/Header"
import Login from './components/login/Login';
import Register from './components/register/Register';
import Footer from './components/footer/Footer';
import CarSell from './components/carSell/CarSell';
import UsedCars from './components/usedCars/UsedCars';
import Details from './components/details/Details';
import useForm from './hooks/useForm';
import { useState } from 'react';



function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values)
  }

  return (
    <div className={classes.mainbox}>
      
      <Header />
      
      <Routes>
      
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<Login />} loginSubmitHandler={loginSubmitHandler} />
      <Route path="/register" element={<Register />} /> 
      <Route path="/sell-your-car" element={<CarSell />} />
      <Route path="/used-cars" element={<UsedCars />} />
      <Route path="/used-cars/:carId" element={<Details />} />
      

     
      </Routes>

      <Footer />
    
    </div>
  )
}

export default App

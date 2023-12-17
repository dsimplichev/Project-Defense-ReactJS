import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthContext from './contexts/authContext';

import * as authService from './services/authService'
import classes from './App.module.css'
import Path from './paths';

import Home from './components/home/Home';
import Header from "./components/header/Header"
import Login from './components/login/Login';
import Register from './components/register/Register';
import Footer from './components/footer/Footer';
import CarSell from './components/carSell/CarSell';
import UsedCars from './components/usedCars/UsedCars';
import Details from './components/details/Details';






function App() {

  const navigate = useNavigate();
  const [auth, setAuth] = useState({});


  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);
    navigate(Path.Home);
  }

 const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password)
    
    setAuth(result);
    navigate(Path.Home);
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.email,
  }

  return (
    <AuthContext.Provider value={values}>
      <div className={classes.mainbox}>

        <Header />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sell-your-car" element={<CarSell />} />
          <Route path="/used-cars" element={<UsedCars />} />
          <Route path="/used-cars/:carId" element={<Details />} />



        </Routes>

        <Footer />

      </div>
    </AuthContext.Provider>
  )
}

export default App

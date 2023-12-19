import { Routes, Route } from 'react-router-dom';
import Path from './paths';
import  { AuthProvider} from './contexts/authContext';
import classes from './App.module.css'


import Home from './components/home/Home';
import Header from "./components/header/Header"
import Login from './components/login/Login';
import Register from './components/register/Register';
import Footer from './components/footer/Footer';
import CarSell from './components/carSell/CarSell';
import UsedCars from './components/usedCars/UsedCars';
import Details from './components/details/Details';
import Logout from './components/logout/Logout';
import CarEdit from './components/edit/CarEdit';





function App() {

  

  return (
    <AuthProvider >
      <div className={classes.mainbox}>

        <Header />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sell-your-car" element={<CarSell />} />
          <Route path="/used-cars" element={<UsedCars />} />
          <Route path="/used-cars/:carId" element={<Details />} />
          <Route path="/logout" element={<Logout />} />
          <Route path={Path.CarEdit} element={<CarEdit />} />
          


        </Routes>

        <Footer />

      </div>
    </AuthProvider>
  )
}

export default App

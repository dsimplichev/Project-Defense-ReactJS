import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header"
import Login from './components/header/login/Login';
import Register from './components/register/Register';

function App() {
  
  return (
    <div>
      
      <Header />
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
      
      </Routes>
    
    </div>
  )
}

export default App

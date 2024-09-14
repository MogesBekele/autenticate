import Register from "./pages/register/Register.jsx"
import Home from './pages/Home.jsx'
import Login from './pages/login/Login.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="register" element={<Register/>}></Route>
      <Route path="login" element={<Login/>}></Route>
    </Routes>
    
    </BrowserRouter>
    

  
    </>
  )
}

export default App

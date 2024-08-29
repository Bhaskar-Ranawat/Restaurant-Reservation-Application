import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'; 
import Home from './pages/Home'
import Success from './pages/Success'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
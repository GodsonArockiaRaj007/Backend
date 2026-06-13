import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Layout from '../components/Layout'
import Register from '../pages/Register'
const AppRoutes = () => {
  return (
    <>
    <div>
        <Routes>
          <Route  element={<Layout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
            </Route>
            <Route path="/login" element={<Login/>} />
            <Route path='/register' element={<Register/>}></Route>
        </Routes>

        
        
    </div>
    </>
  )
}

export default AppRoutes
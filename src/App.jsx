
import './App.css'
import Footer from './Components/Footer'
import {Routes,Route } from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'

function App() {
  

  return (
    <>
   
     <Routes>
        <Route path={'/'} element={<Home/>}/> 
        <Route path={'login'} element={<Auth/>}/> 
        <Route path={'register'} element={<Auth register/>}/> 
        <Route path={'dashboard'} element={<Dashboard/>}/> 
        <Route path={'projects'} element={<Projects/>}/> 
        <Route path={'*'} element={<Navigate to={'/'}/>}/> 
     </Routes>
     <Footer/> 
    </>
  )
}

export default App

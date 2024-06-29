import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router,Routes,Route } from "react-router-dom" ;
import Header from './components/userinterface/Header';
import BannerSlide from './components/userinterface/BannerSlide';
import BrandSlider from './components/userinterface/BrandSlider';
import Text from './components/userinterface/Text';
import Home from './screen/Home';
import AcceptPayment from './components/userinterface/AcceptPayment';
import PayoutSlider from './components/userinterface/PayoutSlider';
import Dashboard from './components/admin/Dashboard';
import Overview from './components/admin/Overview';
import Axis1 from './components/admin/Graph/Axis1';
import AdminRegistration from './components/admin/AdminRegistration';
import AdminLogin from './components/admin/AdminLogin';
import Powering from './components/userinterface/Powering';
 
function App() {
  return (
    <div  >
 <Router>
  <Routes>
   
    <Route element={<Home/>} path={'/home'}></Route>
    <Route element={<Text/>} path={'/text'}></Route>
    <Route element={<BannerSlide/>} path={'/banner'}></Route>
    <Route element={<PayoutSlider/>} path={'/pay'}></Route>
    <Route element={<AcceptPayment/>} path={'/payment'}></Route>
    <Route element={<Dashboard/>} path={'/dashboard/*'}></Route>
    <Route element={<Axis1/>} path={'/axis'}></Route>
    <Route element={<AdminRegistration/>} path={'/register'}></Route>
    <Route element={<AdminLogin/>} path={'/login'}></Route>
    <Route element={<Powering/>} path={'/power'}></Route>

  
 
 

    
  
  </Routes>
 </Router>
    </div>
  );
}

export default App;

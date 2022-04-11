import React from "react";
import './App.css';
import logo from "../src/images/logo.svg";
import userimg from "../src/images/user-pic.png";
import {NavLink } from "react-router-dom";
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Sidebar from "./Sildebar";
import Dashbord from "./Dashbord";
import Booking from "./Booking";
import Payement from "./Payement";
import Analytics from "./Analytics";
import Tests from "./Tests";
import Settings from "./Settings";
import Support from "./Support";
import TopMenu from"./components/TopMenu";
import icon1 from "../src/images/dashbord-icon.svg";
import icon2 from "../src/images/icon2.svg";
import icon3 from "../src/images/iconn.svg";
import icon4 from "../src/images/icon3.svg";
import icon5 from "../src/images/icon4.svg";
import icon6 from "../src/images/icon5.svg";
import icon7 from "../src/images/icon6.svg";
import Login from "./Login";
import Forget from "./Forget";
import Register from "./Register";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { BsFilterLeft, BsSearch, BsBell } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import AdminLogin from "./AdminLogin";
import AdminDashbord from "./AdminDashbord";

import $ from "jquery";

class App extends React.Component {
  
  render() {
    return (
      <Router>
         

              <Routes>
                  <Route exact="true" path="/" element={<Login/>}/>
                  <Route exact="true" path="/forget" element={<Forget/>}/>
                  <Route exact="true" path="/register" element={<Register/>}/>
                  <Route exact="true" path="/dashbord" element={<Dashbord/>}/>
                  <Route exact="true" path="/booking" element={<Booking/>}/>
                  <Route exact="true" path="/payement" element={<Payement/>}/>
                  <Route exact="true" path="/analytics" element={<Analytics/>}/>
                  <Route exact="true" path="/tests" element={<Tests/>}/>
                  <Route exact="true" path="/settings" element={<Settings/>}/>
                  <Route exact="true" path="/support" element={<Support/>}/>
                  <Route exact="true" path="/adminlogin" element={<AdminLogin/>}/>
                  <Route exact="true" path="/admindashbord" element={<AdminDashbord/>}/>
                  
                
              </Routes>
                      
                 
      </Router>
    );
  }
}

export default App;

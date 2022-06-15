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
import AvailableSlot from "./AvailableSlot";
import AdminRegister from "./AdminRegister";
import AdminForget from "./AdminForget";
import Technician from "./Technician";
import AddTechician from "./AddTechician";
import TechnicianAccount from "./TechnicianAccount";
import AdminLab from "./AdminLab";
import AdminPayment from "./AdminPayment";
import AdminSettings from "./AdminSettings";
import AdminBooking from "./AdminBooking";
import Inventory from "./Inventory";
import AdminTest from "./AdminTest";
import AdminBookingMain from "./AdminBookingMain";
import AdminSupport from "./AdminSupport";
import UserSlotPage from "./UserSlotPage";
import NewUserBooking from "./NewUserBooking";
import NotifcationsPage from "./NotifcationsPage";
import AdminTestNew from "./AdminTestNew";
import AdminNotificationPage from "./AdminNotificationPage";
import LoginActivity from"./LoginActivity";
import AdminLabDocuments from "./AdminLabDocuments";
import AdminPaymentInfomationPage from "./AdminPaymentInfomationPage";
import AdminPackages from "./AdminPackages";
import LabPackagePage from "./LabPackagePage";
import LabCancelBooking from "./LabCancelBooking";
import SuperCancelBooking from "./SuperCancelBooking";
import AdminLashbord from "./AdminLashbord";
import LashboardBooking from "./LashboardBooking";
import LashboardAvailbleSlot from "./LashboardAvailbleSlot";
import AdminLasboardBookingMain from "./AdminLasboardBookingMain";
import LashboardCancelBooking from "./LashboardCancelBooking";
import AdminLashboardTest from "./AdminLashboardTest";
import AdminLashboardLab from "./AdminLashboardLab";
import AdminLashbordPayments from "./AdminLashbordPayments";
import AdminLashbordPaymentinfomation from "./AdminLashbordPaymentinfomation";
import LashboardNotificationPage from "./LashboardNotificationPage";
import AdminLashbordSettings from "./AdminLashbordSettings";
import AdminLashboardSupport from "./AdminLashboardSupport";


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
                  <Route exact="true" path="/availableslot" element={<AvailableSlot/>}/>
                  <Route exact="true" path="/adminregister" element={<AdminRegister/>}/>
                  <Route exact="true" path="/adminregister" element={<AdminForget/>}/>
                  <Route exact="true" path="/adminforget" element={<AdminForget/>}/>
                  <Route exact="true" path="/technician" element={<Technician/>}/>
                  <Route exact="true" path="/addtechician" element={<AddTechician/>}/>
                  <Route exact="true" path="/technicianaccount" element={<TechnicianAccount/>}/>
                  <Route exact="true" path="/adminlab" element={<AdminLab/>}/>
                  <Route exact="true" path="/adminpayment" element={<AdminPayment/>}/>
                  <Route exact="true" path="/adminsettings" element={<AdminSettings/>}/>
                  <Route exact="true" path="/adminbooking" element={<AdminBooking/>}/>
                  <Route exact="true" path="/inventory" element={<Inventory/>}/>
                  <Route exact="true" path="/admintest" element={<AdminTest/>}/>
                  <Route exact="true" path="/adminbookingmain" element={<AdminBookingMain/>}/>
                  <Route exact="true" path="/adminsupport" element={<AdminSupport/>}/>
                  <Route exact="true" path="/userslotpage" element={<UserSlotPage/>}/>
                  <Route exact="true" path="/newuserbooking" element={<NewUserBooking/>}/>
                  <Route exact="true" path="/notifcationspage" element={<NotifcationsPage/>}/>
                  <Route exact="true" path="/admintestnew" element={<AdminTestNew/>}/>
                  <Route exact="true" path="/adminnotificationpage" element={<AdminNotificationPage/>}/>
                  <Route exact="true" path="/loginactivity" element={<LoginActivity/>}/>
                  <Route exact="true" path="/adminlabdocuments" element={<AdminLabDocuments/>}/>
                  <Route exact="true" path="/adminpaymentinfomationpage" element={<AdminPaymentInfomationPage/>}/>
                  <Route exact="true" path="/labpackagepage" element={<LabPackagePage/>}/>
                  <Route exact="true" path="/adminpackages" element={<AdminPackages/>}/>
                  <Route exact="true" path="/labcancellooking" element={<LabCancelBooking/>}/>
                  <Route exact="true" path="/supercancelbooking" element={<SuperCancelBooking/>}/>
                  <Route exact="true" path="/adminlashbord" element={<AdminLashbord/>}/>
                  <Route exact="true" path="/lashboardbooking" element={<LashboardBooking/>}/>
                  <Route exact="true" path="/lashboardavailbleSlot" element={<LashboardAvailbleSlot/>}/>
                  <Route exact="true" path="/adminlasboardbookingmain" element={<AdminLasboardBookingMain/>}/>
                  <Route exact="true" path="/lashboardcancelbooking" element={<LashboardCancelBooking/>}/>
                  <Route exact="true" path="/adminlashboardtest" element={<AdminLashboardTest/>}/>
                  <Route exact="true" path="/adminLashbordpayments" element={<AdminLashbordPayments/>}/>
                  <Route exact="true" path="/adminlashbordpaymentinfomation" element={<AdminLashbordPaymentinfomation/>}/>
                  <Route exact="true" path="/lashboardNotificationpage" element={<LashboardNotificationPage/>}/>
                  <Route exact="true" path="/adminlashbordsettings" element={<AdminLashbordSettings/>}/>
                  <Route exact="true" path="/adminlashboardsupport" element={<AdminLashboardSupport/>}/>
                  
                  
              </Routes>
                      
                 
      </Router>
    );
  }
}

export default App;

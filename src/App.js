import React from 'react';
import appStyle from "./App.module.scss"
import { Routes, Route } from "react-router-dom";
import './global.scss'
import Navigator from './components/navigate/navigator';
import Dashbord from './components/mainContent/dashbord';
import Admin from "./components/mainContent/admin";
import Customers from "./components/mainContent/customers/customers";
import Shipments from "./components/mainContent/shipments";
import Tracking from "./components/mainContent/tracking";
import Documents from "./components/mainContent/documents";
import Rates from "./components/mainContent/rates";
import Quotes from "./components/mainContent/quotes";
import Invoices from "./components/mainContent/invoices";
import Rectangle from "./image/Rectangle 184.png"
import { HiOutlineBell } from 'react-icons/hi';
import { RiArrowDropDownLine } from "react-icons/ri"
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div className={appStyle.holdAll}>
      <div className={appStyle.smallBox}>
        <Navigator />
      </div>
      <div className={appStyle.bigBox}>
        <div className={appStyle.bigBox2}>
          <h2 className={appStyle.curr}>{location.pathname === "/" ? "Dashbord" : location.pathname.substring(1)}</h2>
          <div className={appStyle.second}>
            <div className={appStyle.holdThree}>
              <span className={appStyle.three}>3</span>
              <HiOutlineBell className={appStyle.icon} />
            </div>
            <div className={appStyle.holdImage}>
              <img src={Rectangle} alt="Profile" height={40} />
              <span className={appStyle.temoc}>Temoc</span>
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
        <div className={appStyle.routesAll}>
          <Routes>
            <Route path="/" element={<Dashbord />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/shipments" element={<Shipments />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/invoices" element={<Invoices />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
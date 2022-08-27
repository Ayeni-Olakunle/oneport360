import appStyle from "./App.module.scss"
import { Routes, Route } from "react-router-dom";
import './global.scss'
import Navigator from './components/navigate/navigator';
import Dashbord from './components/mainContent/dashbord';
import Admin from "./components/mainContent/admin";
import Customers from "./components/mainContent/customers";
import Shipments from "./components/mainContent/shipments";
import Tracking from "./components/mainContent/tracking";
import Documents from "./components/mainContent/documents";
import Rates from "./components/mainContent/rates";
import Quotes from "./components/mainContent/quotes";
import Invoices from "./components/mainContent/invoices";

function App() {
  return (
    <div className={appStyle.holdAll}>
      <div className={appStyle.smallBox}>
        <Navigator />
      </div>
      <div className={appStyle.bigBox}>
        <div>
          <span>Dashboard</span>
          <div>
            <span>Bel</span>
            <span>Image</span>
          </div>
        </div>
        <Routes>
          <Route path="/dashboard" element={<Dashbord />} />
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
  );
}

export default App;
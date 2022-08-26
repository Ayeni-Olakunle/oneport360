import appStyle from "./App.module.scss"
import { Routes, Route } from "react-router-dom";
import Navigator from './components/navigate/navigator';
import Dashbord from './components/mainContent/dashbord';

function App() {
  return (
    <div className={appStyle.holdAll}>
      <div className={appStyle.smallBox}>
        <Navigator />
      </div>
      <div className={appStyle.bigBox}>
        <Routes>
          <Route path="/workings" element={<Dashbord />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navigator from './components/navigate/navigator';

function App() {
  return (
    <div className="App">
      <Navigator />
      <Routes>
        {/* <Route path="/" element={Index} /> */}
      </Routes>
    </div>
  );
}

export default App;
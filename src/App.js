
import logo from './logo.svg';
import './App.css';
import {ThemeContext} from "./components/ThemeContext.jsx"
import { useContext } from "react";

 function App() {
   const {status,handleStatus} = useContext(ThemeContext);
  return (
    // App-Light  App-header
    <div className="App">
      <header className={status ? "App-Light" : "App-header"}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={{padding:" 8px 40px 10px 40px",fontSize:"20px", borderRadius:"25px"}} onClick={handleStatus}>{status ? "Dark Mode" : "Blue Mode"}</button>
        <h1>{status ? "Switch To Dark Mode" : "Switch To Blue Mode"}</h1>
      </header>
    </div>
  );
}


export default App;

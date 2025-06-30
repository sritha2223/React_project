import './App.css';
import Counter from './counter';
import React,{ useState } from 'react'

function App() {
  const[darkMode,setDarkMode]=useState(false);
  return (
   <div className={darkMode ? "container dark":"container"}>
    <h1>Click Counter App</h1>
    <Counter/>
    <button className="btn" onClick={()=>setDarkMode(!darkMode)}>
      {darkMode ? "Switch to LightMode" :"Switch to darkmode"}
    </button>
   </div>
  );
}

export default App;
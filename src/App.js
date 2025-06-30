import './App.css';
import Counter from './counter';
import React,{ useState } from 'react'

function App() {
  const[darkMode,setDarkMode]=useState(false);
  const [inputText, setInputText] = useState("");
  const[visible, setVisible] = useState(false);
  const[name,setName] =useState("");
  return (
   <div className={darkMode ? "container dark":"container"}>
    <h1>Click Counter App</h1>
    <Counter/>
    <input className="input"type="text" placeholder="enter your name" value={name}
      onChange={(e)=>setName(e.target.value)}
      ></input>
      <p>Hello,{name?name:"User"}</p>


    <button className="btn show-btn" onClick={() => setVisible(true)}>Show Message</button>
    <button className="btn hide-btn" onClick={() => setVisible(false)}>Hide Message</button>
    {visible && <p className="hidden-text">🌟 This is a special secret message just for you! 🌟</p>}

    <button className="theme-toggle-btn" onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
</button>

   </div>
  );
}

export default App;
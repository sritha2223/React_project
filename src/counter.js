import { useState } from "react"
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2> Count:{count}</h2>
        <button className="btn" onClick ={() => setCount(count+1)}>Increment</button>   
        <button className="btn" onClick ={() => setCount(count-1)}>Decrement</button>   
        <button className="reset" onClick ={() => setCount(0)}>Reset</button>
          
  
        </div>
    );
}
function lightTheme() {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
}

function darkTheme() {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
}

export default Counter;
// useState - hook
// add state - data that changes over time
// two components
// class- stateful , functional - stateless
//hooks- special fucntions that let us hook into react features

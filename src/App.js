// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0)
  const [para,setPara]= useState(false)
  const handelIncrement= () =>{
    setCount(count+1)
    setPara(!para)
  }
  return (
    <div className="App">
    <button onClick={handelIncrement} className={ para && "color"}>{para? "Red step":"Black step"}</button>
    <p className={ para &&"red"}>  
    <div>{count} </div>
    {para ? "This is red":"This is black" }  
    </p>
    
    </div>
  );
}

export default App;

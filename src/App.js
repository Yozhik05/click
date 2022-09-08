import "./styles.css";
import {useState} from "react";

export default function App() {
  const[count,setCount]=useState("Text")
const[MytodoList,setMytodoList]=useState([{}]);

function todoList()
{
  let list={
    id:Date.now(),
    text:count
  }
  setMytodoList([...MytodoList,list]),
  setCount("text")
}
  
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <input value={count}
         onChange={(e)=>{setCount(e.target.value)}}/>
      </div>
      <div>
      {MytodoList.map((list)=>{
return(
  <div onClick={todoList}>
    <h1>{count}</h1>
  </div>
)

      })}
      </div>
    </div>
  );
}

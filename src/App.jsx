import React ,{ useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const inputElement = useRef(null);

  return (
    <>
    <h1 style = {{ marginLeft :"50px", marginTop :"20px"}}>Example of  useRef hook in React</h1>
      
    <input style = {{ marginLeft :"50px", marginTop :"20px" , width :"200px" }} type="text" ref = {inputElement} 
      placeholder =" Arithmatic Expression Here" /><br></br>
      
     <button style ={{ marginLeft :"50px" , marginTop :"20px" }}
        onClick ={ () => setInputValue(inputElement.current.value) }>Calculate</button>

      {  inputValue!== "" ?
      <h1 style ={{ marginLeft :"50px" , marginTop :"20px" }} >{ inputValue}  =  {eval(inputValue)}</h1> : " " }
     
    </>
  );
}
export default App
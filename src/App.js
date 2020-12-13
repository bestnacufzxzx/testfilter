import React, { useState } from 'react';
import './App.css';

function App() {
   
  const [count, setCount] = useState(0);
  const [inputList, setInputList] = useState([{ number: "" }]);


  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
   
  // handle click event of the Remove button
  const handleAddClick = () => {
    setInputList([...inputList, { number: "" }]);
  };

  const setaddimput = inputList.length;
  for(var i=0;i<setaddimput;i++){

    // setTimeout(() => console.log("Hello, World!" + setaddimput), 3000);
    if(setaddimput > 1){
        const index = setaddimput;
        setTimeout(() => console.log("Hello, World!" + index), 3000);
        // const list = [...inputList];
        // list.splice(index, 1);
        // setInputList(list);
    }
    // return () => clearTimeout(timer);
    // const index = inputList.length;
    // console.log(index+"test");
    // const list = [...inputList];
    // list.splice(index, 1);
    // setInputList(list);
  }

  const handleRemoveClick = index=> {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // if(inputList.length >= 6){

  //   // const handleRemoveClick = index => {
  //   //  const index = inputList.length ;
  //   //   const list = [...inputList];
  //   //   list.splice(index, 1);
  //   //   setInputList(list);
  //   // };
  //   return getCountTimeout();
  // }

  // getCountTimeout = (index) => {
  //   console.log(index+"test");
  // };
  

  return (
    <div className="App">
      <h4>{count}</h4>
       <button onClick={() => setCount(count + 1)}>
        ADD field
      </button>
      <div className="btn-box">
        {inputList.length !== 1 && <button
          className="mr10"
          onClick={() => handleRemoveClick()}>Remove</button>}
        {inputList.length  && <button onClick={handleAddClick}>Add</button>}
      </div>
    

      {inputList.map((x, i) => {
        return (
          <div className="box">
            <input
              name="number"
              placeholder="number"
              value={x.number}
              onChange={e => handleInputChange(e, i)}
            />
          </div>
        );
      })}
      
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
}

export default App;
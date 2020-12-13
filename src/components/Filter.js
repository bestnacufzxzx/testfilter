import React, { useState } from 'react';

// import { BrowserRouter, Route} from "react-router-dom";
// import { useForm } from "react-hook-form";
import './App.css';

function App() {
   
  const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
  const [ages, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
  //   // alert(`Submitting Name ${name}`)
  //   console.log(name.toUpperCase());
  //   const tt

}

  return (
    <div className="filter">
        <form onSubmit={handleSubmit}>
          <label>
            Frirst Name:
            <input
              type="text"
              value={ages.toUpperCase()}
              onChange={e => setName(e.target.value)}
            />
          </label>
          {/* <input type="submit" value="Submit" /> */}
          </form>

          {names.filter(name => name.includes(ages) ).map(filteredPerson => (
              <li>
                {filteredPerson}
              </li>
            ))}

    </div>
  );
}

export default App;
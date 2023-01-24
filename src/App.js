import "./App.css";
import { useState } from "react";

function App() {
  //  making state of our application
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // logic

  let calcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("enter valid weight n height");
    } 
    else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed());
    }

    // message

    if (bmi < 25) {
      setMessage("You are underweight");
    } 
    else if (bmi >= 25 && bmi < 30) {
      setMessage("You are normal");
    } 
    else {
      setMessage("You are overweight");
    }
  };

  // reload

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <form onSubmit={calcBmi}>
        <label>Weight(lbs)</label> <br />
        <input
          type="text"
          placeholder="Enter weight here"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br />
        <label>Height(in)</label> <br />
        <input
          type="text"
          placeholder="Enter height value"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <br />
        <div className="butt">
          <button type="submit">Submit</button> <br />
          <button onClick={reload} type="submit">
            Reload
          </button>
        </div>
      </form>
      <h3>Your BMI is: {bmi}</h3>
      <p>{message}</p>
    </div>
  );
}

export default App;

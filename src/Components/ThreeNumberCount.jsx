import { useState } from "react";

let initialCounters = [0, 0, 0];
function ThreeNumberCount() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(index) {
    const nextCounter = counters.map((c, i) => {
        if(i===index){
            return c+1;
        } else{
            return c;
        }
    });
    setCounters(nextCounter)
  }

  return (
    <>
      <ul>
        {counters.map((counter, i) => (
          <li key={i}>
            {counter}
            <button onClick={() => handleIncrementClick(i)}>+1</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ThreeNumberCount;

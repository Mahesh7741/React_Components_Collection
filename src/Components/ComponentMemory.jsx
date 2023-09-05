import { useState } from "react";
import sculptureList from "../Data/sculptureList";

function ComponentMemory({children}) {
    
    const[index,setIndex]=useState(0);
    const[show,setShow]=useState(false)
  function handleClick(e) {
    e.stopPropagation();
    setIndex(index+1);
  }
  function handleShow(e){
    e.stopPropagation();
    setShow(!show);
  }

  let sculptures = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>{children}</button>
      <h1>
        <i>{sculptures.name}</i>by{sculptures.artist}
      </h1>
      <h3>
        ({(index+1)} of {sculptureList.length})
      </h3>
      <img src={sculptures.url} alt={sculptures.alt} />
      <button onClick={handleShow}>{show?"Hide":"Show"} detail</button>
      { show && <p>{sculptures.description}</p>}
      
    </>
  );
}

export default ComponentMemory;

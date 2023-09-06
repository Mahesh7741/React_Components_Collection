import { useState } from "react";
import initialArtists from "../Data/initialArtists";

let nextId=3; 
function InsertItems({ children }) {
    const [name,setName]=useState('')
  const [Artists, setArtists] = useState(initialArtists);
function handleClick(){
    const insertAt=1;
    const nextArtists=[
    ...Artists.slice(0,insertAt),
    {id:nextId++,name:name},
    ...Artists.slice(insertAt)
    ];
    setArtists(nextArtists)
    setName('')
}
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button style={{ marginLeft: "5px" }} onClick={handleClick}> {children}</button>

      <ul>
        {Artists.map((Artist) => (
          <li key={Artist.id}>{Artist.name}</li>
        ))}
      </ul>
    </>
  );
}
export default InsertItems;

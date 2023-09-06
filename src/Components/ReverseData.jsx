import { useState } from 'react';
import initialArtists from '../Data/initialArtists'




function ReverseData({children}) {

    const [artists,setArtists]=useState(initialArtists)
  function handleClick() {
    const nextList=[...artists]
    nextList.reverse();
    setArtists(nextList)
  }
  return (
    <>
      <button onClick={handleClick}> {children} </button>
      <ul>
        {artists.map((artist)=>(
            <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

export default ReverseData;

import { useState } from "react";

let nextId = 0;

function AddData({ childern }) {
  // function handleAdd(e) {
  //   e.stopPropagation();
  //   setName(e.target.value);
  // }
  // function handleClick(e) {
  //   e.stopPropagation();
  //   artists.push({ id: nextId++, name: name });
  // }
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => setArtists([...artists, { id: nextId++, name: name }])}
      >
        Add
      </button>
      <ol>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ol>
    </>
  );
}

export default AddData;

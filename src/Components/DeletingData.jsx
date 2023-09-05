import { useState } from "react";
import initialArtists from "../Data/initialArtists";

function DeletingData() {
  const [Artists, setArtists] = useState(initialArtists);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {Artists.map((Artist) => (
          <li key={Artist.id}>
            {Artist.name}
            {""}
            <button
              onClick={() => {
                setArtists(Artists.filter(a => a.id !== Artist.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DeletingData;

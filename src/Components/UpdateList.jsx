import { useState } from "react";
import initialList from "../Data/initialList";

function UpdateList() {
  const [mylists, setMylists] = useState(initialList);
  return (
    <>
      <h1>Art Bucket List</h1>

      <h2>My list of art to see:</h2>
      <ul>
        {mylists.map((list) => (
          <li>
            <input type="checkbox" key={list.id} checked={list.seen} />
            {""}
            {list.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UpdateList;

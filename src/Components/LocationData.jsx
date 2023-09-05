// import { useState } from "react";
import { useImmer } from "use-immer";
function LocationData() {
  // const [person, setPerson] = useState({
  //   name: "Niki de Saint Phalle",
  //   artwork: {
  //     title: "Blue Nana",
  //     city: "Hamburg",
  //     image: "https://i.imgur.com/Sd1AgUOm.jpg",
  //   },
  // });

  const [person, updatePerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });
  function handleClick(e) {
    e.stopPropagation();

    updatePerson((draft) => {(draft.name = e.target.value)});
  }

  function handleClicktitle(e) {
    e.stopPropagation();

    // setPerson({
    //   ...person,
    //   artwork: {
    //     ...person.artwork,
    //     title: e.target.value,
    //   },
    // });

    updatePerson((draft) => {
      draft.artwork.title = e.target.value;
    });
  }
  function handleClickcity(e) {
    e.stopPropagation();

    // setPerson({
    //   ...person,
    //   artwork: {
    //     ...person.artwork,
    //     city: e.target.value,
    //   },
    // });
    updatePerson((draft) => {
      draft.artwork.city = e.target.value;
    });
  }
  function handleClickimage(e) {
    e.stopPropagation();

    // setPerson({
    //   ...person,
    //   artwork: {
    //     ...person.artwork,
    //     image: e.target.value,
    //   },
    // });
    updatePerson((draft) => {
      draft.artwork.image = e.target.value;
    });
  }
  return (
    <>
      <label>
        Name: <input type="text" value={person.name} name="name" onChange={handleClick} />
      </label>
      <br />
      <label>
        Title: <input type="text" value={person.artwork.title} name="title" onChange={handleClicktitle} />
      </label>
      <br />
      <label>
        City: <input type="text" value={person.artwork.city} name="city" onChange={handleClickcity} />
      </label>
      <br />
      <label>
        Image: <input type="text" value={person.artwork.image} name="image" onChange={handleClickimage} />
      </label>
      <br />
      {person.artwork.title} {""}
      {"by"} {person.name}
      {`(Located in ${person.artwork.city})`}
      <br />
      <img src={person.artwork.image} alt="#" />
    </>
  );
}

export default LocationData;

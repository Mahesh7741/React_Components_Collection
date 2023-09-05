import { useState } from "react";

function BasicSignUp() {
//   const [person, setPerson] = useState({
//     firstname: "Mahesh",
//     lastname: "Savant",
//     email: "MaheshSavant@123",
//   });

//   function handleClickfirstname(e) {

//     setPerson({...person,firstname : e.target.value})
    
//   }
//   function handleClicklastname(e) {

//     setPerson({...person,lastname : e.target.value})
    
//   }
//   function handleClickemail(e) {

//     setPerson({...person, email : e.target.value})
   
//   }

//   return (
//     <>
//       <form>
//         <label>
//           First name :{" "}
//           <input
//             type="text"
//             value={person.firstname}
//             onChange={handleClickfirstname}
//           />
//         </label>
//         <label>
//           Last name :{" "}
//           <input
//             type="text"
//             value={person.lastname}
//             onChange={handleClicklastname}
//           />
//         </label>
//         <label>
//           Email:{" "}
//           <input
//             type="email"
//             value={person.email}
//             onChange={handleClickemail}
//           />
//         </label>
//       </form>

//       <h5>{person.firstname} {person.lastname} {person.email}</h5>
//     </>
//   );
const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}

export default BasicSignUp;

import { useState } from "react";

function TicketBooking() {
    const [firstname,setFirstname]=useState('');
    const [lastname,setlastname]=useState('');
    const fullname=firstname+ ' '+ lastname;

    function handleFirstNameChange(e)
    {
        setFirstname(e.target.value);
    }
    function handleLastNameChange(e)
    {
        setlastname(e.target.value);
    }
  return (
    <>
      <h1>Let’s check you in</h1>
      <label>
        First name:{''}
        <input value={firstname} onChange={handleFirstNameChange}/>
      </label>
      <br />
      <br />
      <label>
        Last name:{''}
        <input value={lastname} onChange={handleLastNameChange} />
      </label>
      <p>Your ticket will be issued to: <b>{fullname}</b> </p>
    </>
  );
}

export default TicketBooking;

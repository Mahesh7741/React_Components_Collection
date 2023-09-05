import { useState } from "react";

function SendMessage({ children }) {
  const [isSent, setIsSent] = useState(false);
  const [to, setTo] = useState("Alice");
  const sel="Alice";
  const [message, setMessage] = useState(sel);
    

  if (isSent) {
    return <h1>Your message is on its way!</h1>;
  }

  function handleClick(e) {
    e.preventDefault();
    sendMessage(message);
    setIsSent(true);
  }

  function MessageAdd(e) {
    e.stopPropagation();
    setMessage(e.target.value);
  }

  function sendMessage() {}
  return (
    <>
      <form onSubmit={handleClick}>
        <label>
          To:{""}
          <select value="" onChange={(e) => setTo(e.target.value)}>
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
          </select>
        </label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={MessageAdd}
          cols="20"
          rows="3"
        ></textarea>

        <button type="submit">{children}</button>
      </form>
    </>
  );
}

export default SendMessage;

import { useState } from "react";
function Chat({ Contacts }) {
  const [text, setText] = useState("");
  return (
    <>
      <section>
        <textarea
          value={text}
          cols="30"
          rows="10"
          placeholder={'Chat to ' + Contacts.name}
          onChange={(e)=>setText(e.target.value)}
        ></textarea>
        <br />
        <button>Send to {Contacts.email}</button>
      </section>
    </>
  );
}

export default Chat;

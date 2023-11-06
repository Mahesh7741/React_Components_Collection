// import contacts from "../Data/contacts";

function ChatWithPerson({ contacts, onSelect }) {
  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.email}>
            {" "}
            <button
              onClick={() => {
                onSelect(contact);
              }}
            >
              {contact.name}
            </button>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ChatWithPerson;

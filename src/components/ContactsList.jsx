import React from "react";
import ContactItem from "./ContactItem";

function ContactsList({ contacts }) {
  console.log(contacts);
  return (
    <div>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => {
            return <ContactItem key={contact.id} data={contact} />;
          })}
        </ul>
      ) : (
        <p>No contacts yet</p>
      )}
    </div>
  );
}

export default ContactsList;

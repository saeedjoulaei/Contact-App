import React from "react";
import ContactItem from "./ContactItem";

function ContactsList({ contacts, deleteHandler }) {
  console.log(contacts);
  return (
    <div>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => {
            return (
              <ContactItem
                key={contact.id}
                data={contact}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </ul>
      ) : (
        <p>No contacts yet</p>
      )}
    </div>
  );
}

export default ContactsList;

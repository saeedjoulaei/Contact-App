import React from "react";

function ContactsList({ contacts }) {
  //   console.log(contacts.name);
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          console.log(contact.id);
        })}
      </ul>
    </div>
  );
}

export default ContactsList;

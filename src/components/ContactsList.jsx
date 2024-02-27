import React from "react";
import ContactItem from "./ContactItem";
import styles from "../components/ContactsList.module.css";

function ContactsList({ contacts, deleteHandler }) {
  console.log(contacts);
  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No contacts yet</p>
      )}
    </div>
  );
}

export default ContactsList;

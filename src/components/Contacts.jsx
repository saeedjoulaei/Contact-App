import { useState } from "react";

import ContactsList from "./ContactsList";

function Contacts() {
  const [contact, setContact] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };
  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastname ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("please enter valid data");
      return;
    }
    setAlert("");
    setContacts((contacts) => [...contacts, contact]);
    setContact({
      name: "",
      lastname: "",
      email: "",
      phone: "",
    });
    console.log(contacts);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Last name"
          name="lastname"
          value={contact.lastname}
          onChange={changeHandler}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
        <input
          type="number"
          placeholder="Phone"
          name="phone"
          value={contact.phone}
          onChange={changeHandler}
        />
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default Contacts;

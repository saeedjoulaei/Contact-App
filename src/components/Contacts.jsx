import { useState } from "react";

import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";

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
    // console.log(contacts);
  };
  return (
    <div>
      <div>
        {inputs.map((input) => (
          <input
            key={input.id}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}

        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default Contacts;

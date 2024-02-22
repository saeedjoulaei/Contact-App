import { useState } from "react";

function Contacts() {
  const [contact, setContact] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
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
        <button onClick={() => console.log(contact)}>Add Contact</button>
      </div>
    </div>
  );
}

export default Contacts;

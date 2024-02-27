import styles from "../components/ContactItem.module.css";
function ContactItem({
  data: { id, name, lastname, email, phone },
  deleteHandler,
}) {
  return (
    <>
      <li className={styles.item}>
        <p>
          {name} {lastname}
        </p>
        <p>
          <span>✉️</span>
          {email}
        </p>
        <p>
          <span>📞</span>
          {phone}
        </p>
        <button onClick={() => deleteHandler(id)}>🗑️</button>
      </li>
    </>
  );
}

export default ContactItem;

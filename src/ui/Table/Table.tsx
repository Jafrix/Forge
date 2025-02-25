import styles from "./table.module.css";

const data = [
  {
    ID: 1,
    name: "John",
    surname: "Doe",
    email: "john@example.com",
    birthday: "1990-05-20",
    sex: "Male",
    phone: "+123456789",
    channel: "Email",
  },
  {
    ID: 2,
    name: "Jane",
    surname: "Smith",
    email: "jane@example.com",
    birthday: "1992-10-15",
    sex: "Female",
    phone: "+987654321",
    channel: "Phone",
  },
];

function Table() {
  return (
    <section className={styles.tableBlock}>
      <h2>Таблица</h2>
      <p>
        с вертикальным и горизонтальным скролом, закрепленной верхней строкой и
        первой колонкой
      </p>
      <table className={styles.table}>
        <thead>
          <th>ID</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Пол</th>
          <th>День рождения</th>
          <th>Email</th>
          <th>Телефон</th>
          <th>Канал регистрации</th>
        </thead>
        <tbody>
          <td>2222222</td>
          <td>2222222</td>
          <td>2222222</td>
          <td>2222222</td>
          <td>2222222</td>
          <td>2222222</td>
          <td>2222222</td>
          <td>2222222</td>
        </tbody>
      </table>
    </section>
  );
}

export default Table;

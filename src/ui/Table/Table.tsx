import styles from "./table.module.css";
import { mockdata } from "../../mocks/mockUsers";
import { useEffect, useState } from "react";

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(mockdata);
    }, 2000);
  }, []);

  return (
    <section className={styles.tableBlock}>
      <hr></hr>
      <h2>Таблица</h2>
      <p>
        с вертикальным и горизонтальным скролом, закрепленной верхней строкой и
        первой колонкой
      </p>
      {data.length === 0 ? (
        <p>Loading data ...</p>
      ) : (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Пол</th>
                <th>День рождения</th>
                <th>Email</th>
                <th>Телефон</th>
                <th>Канал регистрации</th>
              </tr>
            </thead>
            <tbody>
              {mockdata.map((user) => (
                <tr key={user.ID}>
                  <td>{user.ID}</td>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.email}</td>
                  <td>{user.birthday}</td>
                  <td>{user.sex}</td>
                  <td>{user.phone}</td>
                  <td>{user.channel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default Table;

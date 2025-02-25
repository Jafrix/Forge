import styles from "./input.module.css";

function Input() {

  
  return (
    <>
    <h1>Регистрация</h1>
    <form>
      <input
        className={styles.input}
        type="text"
        placeholder="Имя"
      ></input>
    </form>
    </>
  );
}

export default Input;

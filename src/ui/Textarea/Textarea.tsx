import styles from "./textarea.module.css";

function Textarea() {
  return (
    <textarea
      className={styles.textarea}
      placeholder="Коротко о себе"
        
    ></textarea>
  );
}

export default Textarea;

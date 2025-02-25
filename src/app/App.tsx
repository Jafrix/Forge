import styles from "./App.module.css";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import Select from "../ui/Select/Select";
import Table from "../ui/Table/Table";
import Textarea from "../ui/Textarea/Textarea";

function App() {
  return (
    <div className={styles.blockWrapper}>
      <section className={styles.inptsSection}>
        <div className={styles.wrapperInputs}>
          <Input />

          <Select />

          <Textarea />

          <Button />
        </div>
      </section>
      <hr></hr>
      <Table />
    </div>
  );
}

export default App;

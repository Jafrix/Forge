import styles from "./select.module.css";
import { useState } from "react";
import arrowDown from "../../assets/arrow_down.png";
import arrowUp from "../../assets/arrow_up.png";
import checkIcon from "../../assets/CheckIcon.png";

function Select() {
  const options = [
    { value: "russia", label: "Россия" },
    { value: "usa", label: "США" },
    { value: "uk", label: "Великобритания" },
    { value: "kaz", label: "Казахстан" },
    { value: "nid", label: "Нидерланды" },
    { value: "fin", label: "Финляндия" },
  ];

  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.customSelect}>
      <div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
        <div>{selected.label}</div>
        <div className={styles.arrows}>
          <img src={isOpen ? arrowUp : arrowDown} alt="Стрелка" />
        </div>
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.option} ${
                selected.value === option.value ? styles.selectedOption : ""
              }`}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            > 
              <div className={styles.wrapper}>{option.label}{option.label === selected.label ? <img src={checkIcon} /> : ""}</div>
              
            </div>
            
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;

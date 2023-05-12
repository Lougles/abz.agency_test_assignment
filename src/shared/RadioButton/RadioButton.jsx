import React from 'react';
import styles from './RadioButton.module.css'
const RadioButton = ({ options, selectedOption, onOptionSelect }) => {
  return (
    <div className={styles.radioBtnWrapper}>
      {options.map((option, index) => {
        return (
          <label key={index} className={styles.radioBtnLabel}>
            <input
              type="radio"
              className={styles.radioInput}
              value={option}
              checked={selectedOption === option}
              onChange={() => onOptionSelect(option)}
            />
            {option}
          </label>
        );
      })}
    </div>
  );
};

export default RadioButton;

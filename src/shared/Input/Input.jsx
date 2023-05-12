import React from 'react';
import styles from './Input.module.css'
import PropTypes from "prop-types";
const Input = ({className, type, value, onChange, placeholder}) => {
  return (
    <input
      className={styles[className]}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
Input.prototype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
}
export default Input;

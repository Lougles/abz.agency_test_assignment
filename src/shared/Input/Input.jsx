import React from 'react';
import styles from './Input.module.css'
import PropTypes from "prop-types";
const Input = ({className, validation, type, value, onChange, placeholder, accept}) => {
  return (
    <input
      className={`${styles[className]} ${styles[validation]}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      accept={accept}
    />
  );
};
Input.prototype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
}
export default Input;

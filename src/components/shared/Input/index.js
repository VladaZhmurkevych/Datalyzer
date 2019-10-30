import React from 'react';
import PropTypes from 'prop-types';
import styles from './textField.module.scss';

const Input = ({
  text, children, type, onChange, value
}) => {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={value}
        type={type}
        placeholder={text}
        onChange={handleChange}
      />
      {children}
    </div>
  );
};

Input.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
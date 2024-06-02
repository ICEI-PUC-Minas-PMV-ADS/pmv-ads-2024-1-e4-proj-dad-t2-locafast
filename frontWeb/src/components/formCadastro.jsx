import React from 'react';

const InputContainer = (props) => {
  const { id, placeholders = [], values, handleChange = () => { } } = props;

  function formatDate(dateString) {

    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() retorna de 0 a 11
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <div id={id ? id : ""} className="input-container">
      {placeholders.length > 0 ? (
        placeholders.map((placeholder, index) => (
          <input
            key={index}
            id={placeholder}
            placeholder={placeholder}
            value={values[placeholder] || ''}
            onChange={(e) => handleChange(e)}
          />
        ))
      ) : (
        <input
          placeholder={placeholders}
          value={values[placeholders] || ''}
          onChange={(e) => handleChange(e)}
        />
      )}
      {React.Children.count(props.children) > 0 &&
        React.Children.map(props.children, child => child)
      }
    </div>
  );
};

export default InputContainer;

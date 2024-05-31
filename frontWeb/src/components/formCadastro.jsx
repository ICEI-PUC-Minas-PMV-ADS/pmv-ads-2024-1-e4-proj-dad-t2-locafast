import React from "react";
import './style/formCadastro.css';

const InputContainer = (props) => {
  const { id, placeholders = [], values = {}, handleChange = {}, children } = props;

  return (
    <div id={id ? id : ""} className="input-container">
      {placeholders.length > 0 ? (
        placeholders.map((placeholder, index) => (
          <input 
            key={index}
            id={placeholder}
            placeholder={placeholder}
            value={values[placeholder] || ''}
            onChange={handleChange[placeholder]}
          />
        ))
      ) : (
        <input 
          placeholder={placeholders} 
          value={values[placeholders] || ''} 
          onChange={handleChange[placeholders]} 
        />
      )}
      {React.Children.count(children) > 0 &&
        React.Children.map(children, child => child)
      }
    </div>
  );
};

export default InputContainer;

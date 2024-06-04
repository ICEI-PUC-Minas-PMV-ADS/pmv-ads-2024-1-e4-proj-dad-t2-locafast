import React from "react";

const InputContainer = (props) => {
    const { id, placeholders = [], values, handleChange = () => { } } = props;
  
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
  
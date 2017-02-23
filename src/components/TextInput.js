import React, {
  PropTypes,
} from 'react';

export const TextInput = props => {
  return (
    <input
      type="text"
      className="textInput"
      value={props.value}
      onChange={props.onChange}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
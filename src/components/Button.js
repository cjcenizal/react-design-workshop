import React, {
  PropTypes,
} from 'react';

export const Button = props => {
  return (
    <button
      className="button"
      disabled={props.isDisabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};
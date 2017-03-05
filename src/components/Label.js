import React, {
  PropTypes,
} from 'react';

export const Label = props => {
  return (
    <label className="label">
      {props.children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
};
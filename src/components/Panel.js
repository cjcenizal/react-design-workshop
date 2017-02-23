import React, {
  PropTypes,
} from 'react';

export const Panel = props => {
  return (
    <div className="panel">
      {props.children}
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.node,
};
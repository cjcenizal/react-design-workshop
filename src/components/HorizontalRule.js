import React, {
  PropTypes,
} from 'react';

export const HorizontalRule = props => {
  return (
    <hr className="horizontalRule" />
  );
};

HorizontalRule.propTypes = {
  children: PropTypes.node,
};
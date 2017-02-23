import React, {
  PropTypes,
} from 'react';

export const PanelHeader = props => {
  return (
    <h1 className="panelHeader">
      {props.children}
    </h1>
  );
};

PanelHeader.propTypes = {
  children: PropTypes.node,
};
import React, {
  PropTypes,
} from 'react';

export const ToDoListItemButton = props => {
  return (
    <button
      className="toDoListItem__button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

ToDoListItemButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
import React, {
  PropTypes,
} from 'react';

export const ToDoListItem = props => {
  return (
    <li className="toDoListItem">
      {props.children}
    </li>
  );
};

ToDoListItem.propTypes = {
  children: PropTypes.node,
};
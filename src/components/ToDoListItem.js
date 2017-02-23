import React, {
  PropTypes,
} from 'react';

export const ToDoListItem = props => {
  return (
    <li className="toDoListItem">
      <div className="toDoListItem__body">
        {props.children}
      </div>
    </li>
  );
};

ToDoListItem.propTypes = {
  children: PropTypes.node,
};
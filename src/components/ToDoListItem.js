import React, {
  PropTypes,
} from 'react';

export const ToDoListItem = props => {
  return (
    <li className="toDoListItem">
      <div className="toDoListItem__body">
        {props.children}
      </div>

      <div className="toDoListItem__actions">
        {props.actions}
      </div>
    </li>
  );
};

ToDoListItem.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.node,
};
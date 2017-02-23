import React, {
  PropTypes,
} from 'react';

export const ToDoList = props => {
  return (
    <ol className="toDoList">
      {props.children}
    </ol>
  );
};

ToDoList.propTypes = {
  children: PropTypes.node,
};
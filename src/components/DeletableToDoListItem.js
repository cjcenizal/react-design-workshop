import React, {
  PropTypes,
} from 'react';

import { ToDoListItem } from './ToDoListItem';
import { ToDoListItemButton } from './ToDoListItemButton';

export const DeletableToDoListItem = props => {
  function onDeleteClick() {
    props.onDeleteClick(props.id);
  }

  return (
    <ToDoListItem>
      {props.children}

      <ToDoListItemButton
        key={0}
        onClick={onDeleteClick}
      >
        Delete
      </ToDoListItemButton>
    </ToDoListItem>
  );
};

DeletableToDoListItem.propTypes = {
  children: PropTypes.node,
  id: PropTypes.number,
  onDeleteClick: PropTypes.func,
};
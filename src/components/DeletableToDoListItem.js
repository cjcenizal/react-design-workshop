import React, {
  PropTypes,
} from 'react';

import { ToDoListItem } from './ToDoListItem';
import { ToDoListItemButton } from './ToDoListItemButton';

export const DeletableToDoListItem = props => {
  function onDeleteClick() {
    props.onDeleteClick(props.itemId);
  }

  const actions = [
    <ToDoListItemButton
      key={0}
      onClick={onDeleteClick}
    >
      Delete
    </ToDoListItemButton>
  ];

  return (
    <ToDoListItem actions={actions}>
      {props.children}
    </ToDoListItem>
  );
};

DeletableToDoListItem.propTypes = {
  children: PropTypes.node,
  itemId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onDeleteClick: PropTypes.func,
};
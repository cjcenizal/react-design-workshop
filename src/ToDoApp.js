import React, { Component } from 'react';

import {
  Panel,
  PanelHeader,
  ToDoList,
  ToDoListItem,
} from './components';

export class ToDoApp extends Component {
  render() {
    return (
      <Panel>
        <PanelHeader>
          To-dos
        </PanelHeader>

        <ToDoList>
          <ToDoListItem>
            Build React app
          </ToDoListItem>

          <ToDoListItem>
            ???
          </ToDoListItem>

          <ToDoListItem>
            Profit!
          </ToDoListItem>
        </ToDoList>
      </Panel>
    );
  }
}

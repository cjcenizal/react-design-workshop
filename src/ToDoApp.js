import React, { Component } from 'react';
import {
  Panel,
  PanelHeader,
  ToDoList,
  ToDoListItem,
} from './components';

import {
  ToDo,
} from './models';

export class ToDoApp extends Component {
  constructor() {
    super();

    this.state = {
      toDos: [
        new ToDo('Build React app'),
        new ToDo('???'),
        new ToDo('Profit!'),
      ],
    };
  }

  renderToDos() {
    return this.state.toDos.map((toDo, index) => {
      return (
        <ToDoListItem key={index}>
          {toDo.body}
        </ToDoListItem>
      );
    });
  }

  render() {
    return (
      <Panel>
        <PanelHeader>
          To-dos
        </PanelHeader>

        <ToDoList>
          {this.renderToDos()}
        </ToDoList>
      </Panel>
    );
  }
}

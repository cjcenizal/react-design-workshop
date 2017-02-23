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
      items: [
        new ToDo('Build React app'),
        new ToDo('???'),
        new ToDo('Profit!'),
      ],
    };
  }

  renderItems() {
    return this.state.items.map(item => (
      <ToDoListItem key={item.id}>
        {item.body}
      </ToDoListItem>
    ));
  }

  render() {
    return (
      <Panel>
        <PanelHeader>
          To-dos
        </PanelHeader>

        <ToDoList>
          {this.renderItems()}
        </ToDoList>

        <hr className="horizontalRule" />

        <label className="label">
          Create new To-do
        </label>

        <input type="text" className="textInput" />

        <button className="button">
          Create To-Do
        </button>
      </Panel>
    );
  }
}

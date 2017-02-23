import React, { Component } from 'react';

import {
  HorizontalRule,
  Label,
  Panel,
  PanelHeader,
  TextInput,
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
      newToDoBody: '',
    };

    this.handleNewToDoInputChange = this.handleNewToDoInputChange.bind(this);
  }

  handleNewToDoInputChange(event) {
    this.setState({
      newToDoBody: event.target.value,
    });
  }

  renderItems() {
    return this.state.toDos.map(item => (
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

        <HorizontalRule />

        <Label>
          Create new To-do
        </Label>

        <TextInput
          value={this.state.newToDoBody}
          onChange={this.handleNewToDoInputChange}
        />

        <button className="button">
          Create To-Do
        </button>
      </Panel>
    );
  }
}

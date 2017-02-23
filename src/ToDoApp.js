import React, { Component } from 'react';

import {
  Button,
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
    this.handleCreateNewFormSubmit = this.handleCreateNewFormSubmit.bind(this);
    this.handleCreateNewToDoClick = this.handleCreateNewToDoClick.bind(this);
  }

  handleNewToDoInputChange(event) {
    this.setState({
      newToDoBody: event.target.value,
    });
  }

  handleCreateNewFormSubmit(event) {
    event.preventDefault();
  }

  handleCreateNewToDoClick() {
    this.createToDo();
  }

  canCreateNewToDo() {
    return this.state.newToDoBody.trim().length > 0;
  }

  createToDo() {
    this.setState({
      toDos: this.state.toDos.concat(new ToDo(this.state.newToDoBody)),
      newToDoBody: '',
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

        <form onSubmit={this.handleCreateNewFormSubmit}>
          <TextInput
            value={this.state.newToDoBody}
            onChange={this.handleNewToDoInputChange}
          />

          <Button
            onClick={this.handleCreateNewToDoClick}
            isDisabled={!this.canCreateNewToDo()}
          >
            Create To-do
          </Button>
        </form>
      </Panel>
    );
  }
}

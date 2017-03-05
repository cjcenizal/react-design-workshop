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
      newToDoBody: '',
      toDos: [
        new ToDo('Build React app'),
        new ToDo('???'),
        new ToDo('Profit!'),
      ],
    };

    this.handleCreateTodDoFormSubmit = this.handleCreateTodDoFormSubmit.bind(this);
    this.handleNewToDoInputChange = this.handleNewToDoInputChange.bind(this);
    this.handleCreateToDoClick = this.handleCreateToDoClick.bind(this);
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

  handleCreateTodDoFormSubmit(event) {
    event.preventDefault();
  }

  handleNewToDoInputChange(event) {
    this.setState({
      newToDoBody: event.target.value,
    });
  }

  handleCreateToDoClick() {
    this.createToDo();
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

        <HorizontalRule />

        <Label>
          Create new To-do
        </Label>

        <form onSubmit={this.handleCreateTodDoFormSubmit}>
          <TextInput
            value={this.state.newToDoBody}
            onChange={this.handleNewToDoInputChange}
          />

          <Button
            onClick={this.handleCreateToDoClick}
            isDisabled={!this.canCreateNewToDo()}
          >
            Create To-do
          </Button>
        </form>
      </Panel>
    );
  }
}

import React, { Component } from 'react';

import {
  Button,
  DeletableToDoListItem,
  HorizontalRule,
  Label,
  Panel,
  PanelHeader,
  TextInput,
  ToDoList,
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
    this.handleDeleteToDoClick = this.handleDeleteToDoClick.bind(this);
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

  handleDeleteToDoClick(toDoId) {
    this.setState({
      toDos: this.state.toDos.filter(toDo => toDo.id !== toDoId),
    });
  }

  renderToDos() {
    return this.state.toDos.map((toDo, index) => {
      return (
        <DeletableToDoListItem
          key={toDo.id}
          id={toDo.id}
          onDeleteClick={this.handleDeleteToDoClick}
        >
          {toDo.body}
        </DeletableToDoListItem>
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

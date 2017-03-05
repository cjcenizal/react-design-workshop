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
      searchTerm: '',
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
    this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
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

  searchToDos(searchTerm) {
    this.setState({
      searchTerm,
    });
  }

  getRenderableToDos() {
    function getFilteredToDos(searchTerm, toDos) {
      return toDos.filter(toDo =>
        toDo.body.trim().toLowerCase().indexOf(searchTerm.trim().toLowerCase()) !== -1
      );
    }

    const searchTerm = this.state.searchTerm;

    const renderableToDos =
      searchTerm.trim().length
      ? getFilteredToDos(searchTerm, this.state.toDos)
      : this.state.toDos.slice(0);

    return renderableToDos;
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

  handleSearchFormSubmit(event) {
    event.preventDefault();
    this.searchToDos(this.state.searchTerm);
  }

  handleSearchInputChange(event) {
    this.searchToDos(event.target.value);
  }

  renderToDos() {
    return this.getRenderableToDos().map((toDo, index) => {
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

        <Label>
          Search
        </Label>

        <form onSubmit={this.handleSearchFormSubmit}>
          <TextInput
            value={this.state.searchTerm}
            onChange={this.handleSearchInputChange}
          />
        </form>

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

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

import {
  Pager,
} from './services';

export class ToDoApp extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      toDos: [
        new ToDo('Build React app'),
        new ToDo('???'),
        new ToDo('Profit!'),
        new ToDo('1'),
        new ToDo('2'),
        new ToDo('3'),
        new ToDo('4'),
        new ToDo('5'),
        new ToDo('6'),
        new ToDo('7'),
        new ToDo('8'),
        new ToDo('9'),
      ],
      newToDoBody: '',
      currentPage: 0,
    };

    this.pager = new Pager(3);

    this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleNewToDoInputChange = this.handleNewToDoInputChange.bind(this);
    this.handleCreateTodDoFormSubmit = this.handleCreateTodDoFormSubmit.bind(this);
    this.handleCreateToDoClick = this.handleCreateToDoClick.bind(this);
    this.handleDeleteToDoClick = this.handleDeleteToDoClick.bind(this);
    this.handlePagePreviousClick = this.handlePagePreviousClick.bind(this);
    this.handlePageNextClick = this.handlePageNextClick.bind(this);
  }

  handleSearchFormSubmit(event) {
    event.preventDefault();
    this.searchToDos(this.state.searchTerm);
  }

  handleSearchInputChange(event) {
    this.searchToDos(event.target.value);
  }

  handleNewToDoInputChange(event) {
    this.setState({
      newToDoBody: event.target.value,
    });
  }

  handleCreateTodDoFormSubmit(event) {
    event.preventDefault();
  }

  handleCreateToDoClick() {
    this.createToDo();
  }

  handleDeleteToDoClick(toDoId) {
    this.setState({
      toDos: this.state.toDos.filter(toDo => toDo.id !== toDoId),
    });
  }

  handlePagePreviousClick() {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  }

  handlePageNextClick() {
    this.setState({
      currentPage: this.state.currentPage + 1,
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

    const filteredTodos =
      searchTerm.trim().length
      ? getFilteredToDos(searchTerm, this.state.toDos)
      : this.state.toDos.slice(0);

    const renderableToDos = this.pager.getItemsOnPage(filteredTodos, this.state.currentPage);

    return renderableToDos;
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

  renderToDos() {
    const renderableToDos = this.getRenderableToDos();

    return renderableToDos.map(item => (
      <DeletableToDoListItem
        key={item.id}
        itemId={item.id}
        onDeleteClick={this.handleDeleteToDoClick}
      >
        {item.body}
      </DeletableToDoListItem>
    ));
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

        <Button
            onClick={this.handlePagePreviousClick}
            isDisabled={!this.pager.canPagePrevious(this.state.currentPage)}
          >
          Previous
        </Button>

        <Button
          onClick={this.handlePageNextClick}
          isDisabled={!this.pager.canPageNext(this.state.toDos.length, this.state.currentPage)}
        >
          Next
        </Button>

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

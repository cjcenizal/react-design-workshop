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
  Searcher,
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
        new ToDo('1a'),
        new ToDo('2a'),
        new ToDo('3a'),
        new ToDo('4a'),
        new ToDo('5b'),
        new ToDo('6b'),
        new ToDo('7b'),
        new ToDo('8a'),
        new ToDo('9a'),
      ],
      newToDoBody: '',
      currentPage: 0,
    };

    this.pager = new Pager(3);
    this.searcher = new Searcher(item => item.body);

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
    const searchedToDos = this.searcher.searchItems(this.state.toDos, searchTerm);
    const pagesCount = this.pager.getPagesCount(searchedToDos.length);

    this.setState({
      searchTerm,
      currentPage: Math.min(this.state.currentPage, pagesCount - 1),
    });
  }

  getRenderableToDos() {
    const searchedToDos = this.searcher.searchItems(this.state.toDos, this.state.searchTerm);
    const toDosOnPage = this.pager.getItemsOnPage(searchedToDos, this.state.currentPage);
    return toDosOnPage;
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
    const searchedToDos = this.searcher.searchItems(this.state.toDos, this.state.searchTerm);

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
          isDisabled={!this.pager.canPageNext(searchedToDos.length, this.state.currentPage)}
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

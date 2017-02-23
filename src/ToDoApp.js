import React, { Component } from 'react';

import {
  Panel,
  PanelHeader,
  ToDoList,
  ToDoListItem,
} from './components';

export class ToDoApp extends Component {
  constructor() {
    super();

    this.state = {
      items: [{
        id: 0,
        body: 'Build React app',
      }, {
        id: 1,
        body: '???',
      }, {
        id: 2,
        body: 'Profit!',
      }],
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
      </Panel>
    );
  }
}

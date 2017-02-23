import React, { Component } from 'react';

import {
  Panel,
  PanelHeader,
} from './components';

export class ToDoApp extends Component {
  render() {
    return (
      <Panel>
        <PanelHeader>
          To-dos
        </PanelHeader>

        <ol className="toDoList">
          <li className="toDoListItem">
            <div className="toDoListItem__body">
              Build React app
            </div>
          </li>

          <li className="toDoListItem">
            <div className="toDoListItem__body">
              ???
            </div>
          </li>

          <li className="toDoListItem">
            <div className="toDoListItem__body">
              Profit!
            </div>
          </li>
        </ol>
      </Panel>
    );
  }
}

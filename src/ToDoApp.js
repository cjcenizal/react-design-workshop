import React, { Component } from 'react';

export class ToDoApp extends Component {
  render() {
    return (
      <div className="panel">
        <h1 className="panelHeader">
          To-dos
        </h1>

        <ol className="toDoList">
          <li className="toDoListItem">
            <div className="toDoListItem__body">
              Build React app
            </div>

            <button className="toDoListItem__delete">
              Delete
            </button>
          </li>

          <li className="toDoListItem">
            <div className="toDoListItem__body">
              ???
            </div>

            <button className="toDoListItem__delete">
              Delete
            </button>
          </li>

          <li className="toDoListItem">
            <div className="toDoListItem__body">
              Profit!
            </div>

            <button className="toDoListItem__delete">
              Delete
            </button>
          </li>
        </ol>

        <hr className="horizontalRule" />

        <label className="label">
          Create new To-do
        </label>

        <input type="text" className="textInput" />

        <button className="button">
          Create To-Do
        </button>
      </div>
    );
  }
}

import React, { Component } from 'react';

export class ToDoApp extends Component {
  render() {
    return (
      <div className="panel">
        <h1 className="panelHeader">
          To-dos
        </h1>

        <label className="label">
          Search
        </label>

        <input type="text" className="textInput" />

        <button className="sortButton">
          Sort ascending
        </button>

        <ol className="toDoList">
          <li className="toDoListItem">
            <div className="toDoListItem__body">
              Build React app
            </div>

            <div className="toDoListItem__actions">
              <button className="toDoListItem__button">
                Delete
              </button>

              <button className="toDoListItem__button">
                Edit
              </button>
            </div>
          </li>

          <li className="toDoListItem">
            <div className="toDoListItem__body">
              <input
                type="text"
                className="textInput textInput--inline"
                value="???"
              />
            </div>

            <div className="toDoListItem__actions">
              <button className="toDoListItem__button">
                Save
              </button>
            </div>
          </li>

          <li className="toDoListItem toDoListItem--critical">
            <div className="toDoListItem__body">
              Profit!
            </div>

            <div className="toDoListItem__actions">
              <button className="toDoListItem__button">
                Delete
              </button>

              <button className="toDoListItem__button">
                Edit
              </button>
            </div>
          </li>
        </ol>

        <hr className="horizontalRule" />

        <label className="label">
          Create new To-do
        </label>

        <input type="text" className="textInput" />

        <label className="checkBoxLabel">
          <input type="checkbox" className="checkBox" />
          <span className="checkBoxLabel__text">
            This is critical
          </span>
        </label>

        <button className="button">
          Create To-Do
        </button>
      </div>
    );
  }
}

import React, { Component } from 'react';
import {
  Panel,
  PanelHeader,
} from './components';

export class ToDoApp extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Panel>
        <PanelHeader>
          To-dos
        </PanelHeader>
      </Panel>
    );
  }
}

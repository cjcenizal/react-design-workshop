# React Design Workshop

> A workshop on the process of designing React components and applications.

In this workshop, we'll learn about the process for implementing a design and functional requirements
in a React app. We'll learn by doing! Our challenge is to build a to-do list application and
implement requirements which gradually increase in complexity. By the end of the workshop, you should
be comfortable writing React and contributing React code to Kibana. At the end of the workshop,
consider trying out some of the bonus challenges.

This workshop is based on the [Thinking in React tutorial.](https://facebook.github.io/react/docs/thinking-in-react.html)

## Getting started

```
npm install
```

```
npm start
```

## Challenges

Each of the challenges below has a screenshot of what you'll be building, a
description of the main concepts you should be learning, and instructions on how to tackle the
challenge. All the CSS has already been written for you, so you don't have to worry about it. If only real life
worked like that! For those who think grit and hard work is over-rated, there are also links to the
finished code.

### 1. Build a To-do list

<img src="https://github.com/cjcenizal/react-design-workshop/blob/develop/design/assets/list_todos.png" alt="list_todos" width="400px">

Your first challenge is to render a list of To-dos inside of a panel.

#### Build the Panel

Let's start by defining for ourselves what we want to render to the screen. We want to render
a Panel. This is out we do that:

```javascript
render() {
  return (
    <Panel>
    </Panel>
  );
}
```

But Panel doesn't exist yet. So let's import it. It makes sense to put all of our components in
one place (since they're reusable), so let's put them all in a `/components` directory.

```javascript
import {
  Panel,
} from './components';
```

Now that we've imported it, we need to create it and export it. Let's create it first. Create a file
called `/components/Panel.js`. Inside of it, export the Panel component:

```javascript
import React, {
  PropTypes,
} from 'react';

export const Panel = props => {
  return (
    <div className="panel">
      {props.children}
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.node,
};
```

We're doing a few important things here:

1. We're importing **React**. This is important anywhere you write [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html).
2. We're exporting a **[stateless functional component](https://toddmotto.com/stateless-react-components/)**.
   This is the simplest kind of component you can create in React.
3. We're rendering the children property into our component. This is the simplest way to [compose our React components](https://facebook.github.io/react/docs/components-and-props.html#composing-components).
4. We're also explicitly stating that `children` can only be of type `node`, which is defined by React. If an engineer tries to pass a non-node as a child (e.g. a function), you'll see an error in the console.

We need to do one more thing! Let's create an index file for exporting all of the beautiful components
we're going to build. Create `/components.index.js`:

```javascript
export { Panel } from './Panel';
```

Now, in the browser, you should see your Panel rendered to the screen.

#### Break stuff

We mentioned how React will verify the props you pass to a component based on the PropTypes you've defined.
Let's verify this by passing a function to Panel as its children:

```javascript
render() {
  return (
    <Panel>
      {() => {}}
    </Panel>
  );
}
```

In the browser you should see an error like this:

```
Warning: Failed prop type: Invalid prop `children` supplied to `Panel`, expected a ReactNode.
```

Success! Well, failure. But good failure! You know what went wrong and you know how to fix it.
So let's do that.

#### Add children to the Panel

We talked about children in the previous steps. Let's make this Panel a daddy! (Or mommy, depending on how your Panel gender-identifies.) In the render method, let's swap out that unacceptable function with some
acceptable nodes:

```javascript
render() {
  return (
    <Panel>
      <h1 className="panelHeader">
        To-dos
      </h1>
    </Panel>
  );
}
```

Looks like HTML doesn't it? The only difference is we use the word "className" instead of "class"
to style our elements.

#### Extract the markup out into a PanelHeader component

This works, but we want to keep creating reusable components. Let's [extract this "markup" into a new component](https://facebook.github.io/react/docs/components-and-props.html#extracting-components). Follow the same process
we established for Panel, but create a PanelHeader component:

```javascript
import React, {
  PropTypes,
} from 'react';

export const PanelHeader = props => {
  return (
    <h1 className="panelHeader">
      {props.children}
    </h1>
  );
};

PanelHeader.propTypes = {
  children: PropTypes.node,
};
```

And then swap it in for our markup inside our original render method:

```javascript
render() {
  return (
    <Panel>
      <PanelHeader>
        To-dos
      </PanelHeader>
    </Panel>
  );
}
```

Notice how we're still passing in the string "To-dos" and that's what gets rendered in the browser?
It's because _that_ is being provided as the `children` prop to the PanelHeader component. Try changing
it to a different value and see it change in the browser.


- Create ToDoList
- Create ToDoListItem
- Create 3 of them

Next step
- Create state object with data, dynamically render it
- Create ToDo model



#### Concepts

* **Composition.** This is how you can imperatively put components inside of other components.
* **Props vs state.**
* Domain vs UI
* Render methods

#### Build components

1. Build ToDoPanel
2. Build ToDoPanelHeader
3. Build ToDoList
4. Build ToDoListItem

#### Create abstractrions

1. Create a state object with an "toDos" property
2. Dynamically build the To-do items
3. Create a ToDo model in the `/models` directory
   ```javascript
    // ToDo.js
    let count = 0;

    export class ToDo {
      constructor(body) {
        this.id = count++;
        this.body = body;
      }
    }
  ```
  Export this from the index file.
4. Import it into `ToDoApp.js`, and use it to populate your todos array.

> [See the solution]()

---------------------------------------------------------------------

### 2. Add "Create To-do" functionality

<img src="https://github.com/cjcenizal/react-design-workshop/blob/develop/design/assets/create_todos.png" alt="create_todos" width="400px">

#### Concepts

* Event handlers
* Business logic
* Wiring UI with business logic
* Controlling appearance with props

#### Tasks

1. Add markup
   ```html
  <hr className="horizontalRule" />

  <label className="label">
    Create new To-do
  </label>

  <input type="text" className="textInput" />

  <button className="button">
    Create To-Do
  </button>
  ```
2. Build HorizontalRule
3. Build Label
4. Build TextInput
5. Build Button
6. Bonus: Wrap TextInput and Button in a form element so you can submit it by hitting the enter key.
7. Bonus: Disable Button when there's no input.

#### Add business logic

1. Add `createItem` method to `ToDoApp.js`
2. Add an `onClick` handler

> [See the solution]()

---------------------------------------------------------------------

### 3. Add "Delete To-do" functionality

<img src="https://github.com/cjcenizal/react-design-workshop/blob/develop/design/assets/delete_todos.png" alt="delete_todos" width="400px">

#### Concepts

* Component substitutability
* Avoiding overloading

#### Build components

1. Update ToDoListItem with additional markup
2. Build DeletableToDoListItem

#### Business logic

1. Add `handleDeleteToDoClick` handler

> [See the solution]()

---------------------------------------------------------------------

### 4. Add "Search" functionality

<img src="https://github.com/cjcenizal/react-design-workshop/blob/develop/design/assets/search_todos.png" alt="search_todos" width="400px">

#### Concepts

* State as single source of truth
* Render as a projection of state
* Derive subsets of state from single source of truth


#### Build components

1. Duplicate Label, form, and TextInput.


#### Business logic

1. Add `searchTerm` state
2. Add event handlers
3. Add `searchToDos` and `getRenderableToDos` methods

> [See the solution]()

---------------------------------------------------------------------

## Bonus challenges

### 5. Allow users to mark some To-dos as "critical"

<img src="https://github.com/cjcenizal/react-design-workshop/blob/master/design/assets/critical_todos.jpg" alt="critical_todos" width="400px">

### 6. Add "Edit" functionality

<img src="https://github.com/cjcenizal/react-design-workshop/blob/master/design/assets/edit_todos.jpg" alt="edit_todos" width="400px">

### 7. Add "Sorting" functionality

<img src="https://github.com/cjcenizal/react-design-workshop/blob/master/design/assets/sort_todos.jpg" alt="sort_todos" width="400px">

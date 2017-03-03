# React Design Workshop

> A workshop on the process of designing React components and applications.

In this workshop, we'll implement a design and functional requirements
in a React app. Our challenge is to build a to-do list application and
implement requirements which gradually increase in complexity. By the end of the workshop, you should
be comfortable building user interfaces with React.

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

When you're done with these main challenges, consider trying out some of the bonus challenges
that follow.

### 1. Build the To-dos Panel

<img src="https://github.com/cjcenizal/react-design-workshop/blob/develop/design/assets/todos_panel.png" alt="todos_panel" width="400px">

Your first challenge is to render a list of To-dos inside of a panel.

#### Build the Panel component

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

But Panel isn't available in our current scope yet. So let's import it. It makes sense to put all of our reusable components in
one place, so let's plan on putting them all in a `/components` directory.

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
3. We're composing the **children** property into our component. This is the simplest way to [compose React components](https://facebook.github.io/react/docs/components-and-props.html#composing-components).
4. We're also explicitly stating that `children` can only be of type `node`, which is defined by React. If an engineer tries to pass a non-node as a child (e.g. a function), you'll see an error in the console.

We need to do one more thing! Let's create an index file for exporting all of the beautiful components
we're going to build. Create `/components/index.js` and export the Panel from it:

```javascript
export { Panel } from './Panel';
```

Now, in the browser, you should see your Panel rendered to the screen!

#### Create a PropType error

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

Looks like HTML doesn't it? The only difference is we have to use the word ["className"](https://www.quora.com/Why-do-I-have-to-use-className-instead-of-class-in-ReactJs-components-done-in-JSX)
instead of "class" to style our elements.

#### Extract the markup into a PanelHeader component

This renders what we want it to, but we also want to keep creating reusable components. Let's [extract](https://facebook.github.io/react/docs/components-and-props.html#extracting-components)
this "markup" into a new component. Follow the same process we established for Panel, but create a PanelHeader component:

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

See how the string "To-dos" gets rendered in the browser?
It's because we're providing that string as the `children` prop to the PanelHeader component. Try changing
it to a different value and see it change in the browser.

> **Take-aways**
> * Components should generally be designed to be _reusable_.
> * Components lend themselves to _composition_.
> * A good process for creating components is to write "markup" first, and then _extract_ components, second.
> * Use stateless functional components to create simple components.
> * Use PropTypes to do basic type-checking on dependencies.
> * Use an index.js file to export cohesive modules from one place (and import them from that one place).

---------------------------------------------------------------------

### 2. Add To-dos to the Panel

<img src="https://github.com/cjcenizal/react-design-workshop/blob/develop/design/assets/list_todos.png" alt="list_todos" width="400px">

Next up, we're going to add some To-dos to our Panel.

#### Create ToDoList and ToDoListItem components

Let's begin by creating `/components/ToDoList.js` and adding it to our render method. Let's see if you can take the original markup and use it to create the new component, based on what you've learned so far:

```html
<ol class="toDoList">
  <!-- The To-dos will go in here. -->
</ol>
```

Add it to your render method, thusly:

```javascript
render() {
  return (
    <Panel>
      <PanelHeader>
        To-dos
      </PanelHeader>

      <ToDoList>
      </ToDoList>
    </Panel>
  );
}
```

This doesn't really do much in the browser so let's add some items to it. Create `/components/ToDoListemItem.js`:

```html
<li class="toDoListItem">
  <div class="toDoListItem__body">
    <!-- Render the `children` prop in here. -->
  </div>
</li>
```

Add three ToDoListItems to the ToDoList. Voila! You've got a real bonafide list of things to get done.

```javascript
<ToDoList>
  <ToDoListItem>
    Build React app
  </ToDoListItem>

  <ToDoListItem>
    ???
  </ToDoListItem>

  <ToDoListItem>
    Profit!
  </ToDoListItem>
</ToDoList>
```

#### Dynamically define To-dos with `state`

Now we're going to render these items dynamically by introducing the concept of [`state`](https://facebook.github.io/react/docs/state-and-lifecycle.html). The `state` object is a special object that allows you to change how
a component is rendered over time. This is because every time this object is changed, React will
execute the `render` method of that component, which will in turn execute the `render` method of
its children, and so on. The result is a complete re-draw of that part of the DOM tree (there are
actually some [optimizations](https://facebook.github.io/react/docs/reconciliation.html)
that occur under the hood, but that's another tangent).

It doesn't make a lot of sense to hard-code our ToDoListItems in the render method like this. We
want to dynamically define the To-dos that get rendered. To do that (ha! "to do" that) we need to
define an array on our state object which will contain these To-dos. We'll refer to this array
in the render method.

In the constructor, define a state object after the `super` invocation:

```javascript
constructor() {
  super();

  this.state = {
    toDos: [
      'Build React app',
      '???',
      'Profit!',
    ],
  };
}
```

Now let's wire up our render method to use this array. First, we'll extract and abstract the
responsibility for rendering each To-do into its own method. As your React views grow, delegating
responsibility for rendering different parts of the UI into their own render methods can help you
scale the code:

```javascript
renderToDos() {
  return this.state.toDos.map(toDo => {
    return (
      <ToDoListItem>
        {toDo}
      </ToDoListItem>
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
    </Panel>
  );
}
```

#### Arrays and the `key` property

At this point you should see the To-dos rendered correctly in the browser, but in the console you
should see this error:

```
Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `ToDoApp`.
```

This is React complaining that it won't be able to optimize the way it renders your array of To-dos
because it won't be able to tell which is which in the event that you reorder, remove, update, or add any.

We can fix this by adding a [`key` prop](https://facebook.github.io/react/docs/lists-and-keys.html#keys)
to each ToDoListItem. Unfortunately, this is a hack and an anti-pattern. It will make the warning
go away but it's not the right long-term solution. We'll go into that in the next step.

```javascript
return this.state.toDos.map((toDo, index) => {
  return (
    <ToDoListItem key={index}>
      {toDo}
    </ToDoListItem>
  );
});
```

#### Codifying the definition of a To-do

Keys should be used to reliably identify each individual element in an array. We can do this by
assigning IDs to our To-dos. We could update our array to be an array of objects instead of strings, and
assign an `id` property to each object. But this would still mean we'd have to manually assign an
ID to each one. This also won't scale well as we need to associate more
data with each To-do, e.g. creation date, author, and severity. Let's solve these problems
by creating a `./models/ToDo.js` file.

```javascript
let count = 0;

export class ToDo {
  constructor(body) {
    this.id = count++;
    this.body = body;
  }
}
```

Don't forget to create a `/models/index.js` file to export this class, and then import it into your React
app:

```javascript
import {
  ToDo,
} from './models';
```

Now we can update our state object to contain instances of this class:

```
toDos: [
  new ToDo('Build React app'),
  new ToDo('???'),
  new ToDo('Profit!'),
],
```

Can you figure out how to update your `renderToDos` method to refer to the `body` property on these instances?

> **Take-aways**
> * In React, user interfaces are composed of React components which are composed of other React components, all the way down.
> * Data that changes should be assigned to the **state** object.
> * Typically, this data is then passed to various children via their **props** by the render method.
> * The render method can be split up into multiple methods for scalability.
> * Assign a `key` prop to elements within an array, to help React identify them.

---------------------------------------------------------------------

### 3. Add "Create To-do" functionality

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

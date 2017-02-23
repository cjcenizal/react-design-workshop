# React Design Workshop

> A workshop on the process of designing React components and applications.

End-goal is to be comfortable writing React and contributing to Kibana. Work on it within your own domain.
Get ahead to a part where people can try writing some code on their own.

In this workshop, we'll learn about the process for implementing a design and functional requirements
in a React app. We'll learn by doing! Our challenge is to build a to-do list application and
implement requirements which gradually increase in complexity.

## Getting started

```
npm install
```

```
npm start
```

## Challenges

All CSS has already been written.

### Build a To-do list

![list_todos](https://github.com/cjcenizal/react-design-workshop/blob/master/design/assets/list_todos.jpg)

#### Concepts

* Composition
* Props vs state
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

### Add "Create To-do" functionality

![create_todos](https://github.com/cjcenizal/react-design-workshop/blob/master/design/assets/create_todos.jpg)

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

### Add "Delete To-do" functionality

![delete_todos](https://github.com/cjcenizal/react-design-workshop/blob/master/design/assets/delete_todos.jpg)

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

### Add "Search" functionality

![search_todos](https://github.com/cjcenizal/react-design-workshop/blob/master/design/assets/search_todos.jpg)

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

### Allow users to mark some To-dos as "critical"

![critical_todos](https://github.com/cjcenizal/react-design-workshop/blob/master/design/assets/critical_todos.jpg)

#### Add "Edit" functionality

![edit_todos](https://github.com/cjcenizal/react-design-workshop/blob/master/design/assets/edit_todos.jpg)

#### Add "Sorting" functionality

![sort_todos](https://github.com/cjcenizal/react-design-workshop/blob/master/design/assets/sort_todos.jpg)

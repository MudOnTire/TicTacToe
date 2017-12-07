import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

class Todo {
    constructor(id, title, finished) {
        this.id = id;
        this.title = title;
        this.finished = finished;
    }
}

// @observer
class TodoView extends Component {
    render() {
        const todo = this.props.todo;
        return (
            <li>
                <input
                    type="checkbox"
                    checked={todo.finished}
                    onClick={() => todo.finished = !todo.finished}
                />
                {todo.title}
            </li>
        )
    }
}

// @observer
class TodoList extends Component {

    testFunction = () => {
        const testProp = "testProp";
        console.log("i'm a test function");
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map(
                        (todo) => <TodoView todo={todo} key={todo.id} />
                    )}
                </ul>
            </div>
        )
    }
}

export { Todo, TodoList };
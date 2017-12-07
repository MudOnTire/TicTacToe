import React from 'react';
import ReactDOM from 'react-dom';
import { Todo, TodoList } from './components/MobxTodoStore';

const todos = [
	new Todo(0, 'Wake Up', true),
	new Todo(1, 'Dress Up', true),
	new Todo(2, 'Eat breakfirst', false),
	new Todo(3, 'Go to work', true),
	new Todo(4, 'Finish morning work', false)
];

ReactDOM.render(
	<TodoList todos={todos} />, document.getElementById("root")
);

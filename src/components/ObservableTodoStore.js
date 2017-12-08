import { observable, autorun } from 'mobx';

var todoStore = observable({
    todos: [],
    get completedCount() {
        return this.todos.filter(todo => todo.completed).length;
    }
});

autorun(function () {
    console.log("Completed %d of %d items", todoStore.completedCount, todoStore.todos.length);
});

todoStore.todos[0] = {
    title: "Take a walk",
    completed: false
};

todoStore.todos[0].completed = true;
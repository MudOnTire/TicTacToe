class ToDoStore {
    todos = [];

    get completedTodos() {
        return this.todos.filter(
            (todo) => {
                return todo.completed === true;
            }
        );
    }

    get uncompletedTodos(){
        return this.todos.filter(
            (todo)=>{
                return todo.completed === false;
            }
        );
    }

    report() {
        if (this.uncompletedTodos.length === 0) {
            return "<none>";
        } else {
            return `Next todo: "${this.uncompletedTodos[0].task}".` +
                ` Progress: ${this.completedTodos.length}/${this.todos.length}`;
        }
    }

    addTodo(task) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        });
    }
}

export default ToDoStore;

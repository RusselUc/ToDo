import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
    { id: 1, title: "Complete online javascript", completed: true },
    { id: 2, title: "Read book", completed: false },
    { id: 3, title: "10 minutes", completed: false },
    { id: 4, title: "Go to jump", completed: false },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: todos.length + 1,
            title,
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");
    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
        }
    };

    return (
        <div
            className="min-h-screen bg-gray-300 bg-[url(./assets/images/bg-mobile-light.jpg)]
            bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url(./assets/images/bg-mobile-dark.jpg)]"
        >
            <Header />
            <main className="container mx-auto mt-8 px-4">
                <TodoCreate createTodo={createTodo} />
                <TodoList
                    todos={filteredTodos()}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />
                <TodoFilter setFilter={setFilter} filter={filter} />
            </main>

            <footer className="text-center dark:text-gray-400">
                Drag and drop
            </footer>
        </div>
    );
};

export default App;

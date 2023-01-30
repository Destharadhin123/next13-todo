import Link from "next/link";
import React from "react";
import { Todo } from "../../../typings";


const fetchTodos = async () => {
    const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
    await new Promise((resolve) => setTimeout(resolve, timeout));

    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos: Todo[] = await res.json();
    // console.log("this is todos",todos);
    return todos;
};

async function TodosList() {
    const todos = await fetchTodos();

    return <>
        {todos.map((todo) => (
            <div key={todo.id}>
              <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
              {/* <p>{todo.title}</p> */}
            </div>
        ))}
        </>;
    
}

export default TodosList;


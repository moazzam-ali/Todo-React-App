import React from "react";
import TodoItem from "../todoItem/TodoItem.component";

export default function TodoList(){
    return(
        <div className="todo-list">
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
    )
}
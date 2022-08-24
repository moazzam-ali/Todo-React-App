import React from "react";
import "./App.css";

import Header from "./components/header/header.component"
import Input from "./components/input/input.component";
import TaskBar from "./components/taskBar/taskBar.component";
import TodoList from "./components/todoList/todoList.component";

function App() {
    return(
        <div className="App">
            <div className="app__container">
                <Header/>
                <Input/>
                <TodoList/>
                <TaskBar/>
            </div>
        </div>
    )
}

export default App;

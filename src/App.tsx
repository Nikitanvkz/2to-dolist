import React from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";


function App() {
    const tasks_1 : Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/TS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]
    const tasks_2: Array<TaskType> = [
        {id: 4, title: "Meat", isDone: true},
        {id: 5, title: "Fish", isDone: true},
        {id: 6, title: "Milk", isDone: false},
    ]
    return (
        <div className="App">
            <TodoList
                title={"What to do"}
                tasks={tasks_1}
            />
            <TodoList
                title={"What to buy"}
                tasks={tasks_2}
            />
            {/*<div>*/}
            {/*    <h3>What to learn</h3>*/}
            {/*    <div>*/}
            {/*        <input/>*/}
            {/*        <button>+</button>*/}
            {/*    </div>*/}
            {/*    <ul>*/}
            {/*        <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>*/}
            {/*        <li><input type="checkbox" checked={true}/> <span>JS</span></li>*/}
            {/*        <li><input type="checkbox" checked={true}/> <span>React</span></li>*/}
            {/*        <li><input type="checkbox" checked={false}/> <span>Redux</span></li>*/}
            {/*    </ul>*/}
            {/*    <div>*/}
            {/*        <button>All</button>*/}
            {/*        <button>Active</button>*/}
            {/*        <button>Completed</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <h3>What to buy</h3>*/}
            {/*    <div>*/}
            {/*        <input/>*/}
            {/*        <button>+</button>*/}
            {/*    </div>*/}
            {/*    <ul>*/}
            {/*        <li><input type="checkbox" checked={true}/> <span>Meat</span></li>*/}
            {/*        <li><input type="checkbox" checked={true}/> <span>Fish</span></li>*/}
            {/*        <li><input type="checkbox" checked={false}/> <span>Milk</span></li>*/}
            {/*    </ul>*/}
            {/*    <div>*/}
            {/*        <button>All</button>*/}
            {/*        <button>Active</button>*/}
            {/*        <button>Completed</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <h3>What to read</h3>*/}
            {/*    <div>*/}
            {/*        <input/>*/}
            {/*        <button>+</button>*/}
            {/*    </div>*/}
            {/*    <ul>*/}
            {/*        <li><input type="checkbox" checked={true}/> <span>JS for children</span></li>*/}
            {/*        <li><input type="checkbox" checked={true}/> <span>Head first: JS</span></li>*/}
            {/*        <li><input type="checkbox" checked={false}/> <span>You dont now JS</span></li>*/}
            {/*    </ul>*/}
            {/*    <div>*/}
            {/*        <button>All</button>*/}
            {/*        <button>Active</button>*/}
            {/*        <button>Completed</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;

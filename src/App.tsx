import React, {useState} from 'react';
import {Navbar} from './components/navbar/navbar'
import {ToDoForm} from './components/toDoForm/toDoForm'
import {ToDoList} from "./components/toDoList/toDoList";
import {ITodo} from './interfaces'

const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [newTodo, ...prev])
    }
    return (
        <div>
            <Navbar/>
            <div className="container pt-4">
                <ToDoForm onAdd={addHandler}/>
                <ToDoList todos={todos}/>
            </div>
        </div>
    );
}

export default App;

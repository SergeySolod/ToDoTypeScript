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

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    const removeHandler = (id: number) => {
        const shoudRemove = window.confirm('Вы уверены, что хотите удалить элемент?')
        if (shoudRemove) {
            setTodos(prev => prev.filter(todo => todo.id === id))
        }
    }

    return (
        <div>
            <Navbar/>
            <div className="container pt-4">
                <ToDoForm onAdd={addHandler}/>
                <ToDoList onToggle={toggleHandler} onRemove={removeHandler} todos={todos}/>
            </div>
        </div>
    );
}

export default App;

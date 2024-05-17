import {useState} from 'react'
import {v4 as uuid} from 'uuid';
import './App.css'
import TodoList from "./TodoList.jsx";
import CompletedTodos from "./CompletedTodos.jsx";
import AddTodo from "./AddTodo.jsx";

function App() {

    let list = [
        {id: uuid(), title: 'Pay cable bill', due: '3/15/2024', completed: false},
        {id: uuid(), title: 'Pay electricity bill', due: '3/17/2024', completed: false},
        {id: uuid(), title: 'Pay gas bill', due: '3/20/2024', completed: false},
        {id: uuid(), title: 'Pay mobile bill', due: '1/22/2022', completed: false},
        {id: uuid(), title: 'Pass AWS certificate test', due: '3/23/2024', completed: false},
        {id: uuid(), title: 'Read the research paper', due: '3/11/2024', completed: false},
        {id: uuid(), title: 'Finalize the project proposal', due: '3/19/2024', completed: false},
        {id: uuid(), title: 'Ace the quiz', due: '3/06/2024', completed: false},
        {id: uuid(), title: 'Complete the tasks', due: '3/29/2024', completed: false}
    ]
    const [todos, setTodos] = useState(list);

    const deleteTodo = (id) => {
        setTodos(todos.filter(item => item.id !== id));
    };

    const toggleCompleted = (todo) => {
        setTodos(todos.map(item => item.id === todo.id ? {...item, completed: !item.completed} : item));
    };

    const addTodo = ({title, description, due}) => {
        const newTodo = {
            id: uuid(),
            title: title,
            description: description,
            due: due,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <>
            <div>
                <h1>Add New Todo List: </h1>
                <AddTodo addTodo={addTodo}/>
            </div>
            <br/>
            <div>
                <h1>List:</h1>
                <TodoList todos={todos.filter(item => !item.completed)} toggleCompleted={toggleCompleted}
                          deleteTodo={deleteTodo}/>
            </div>
            <CompletedTodos todos={todos.filter(item => item.completed)} toggleCompleted={toggleCompleted}/>
        </>
    );
}

export default App

function TodoList ({todos, toggleCompleted, deleteTodo}) {
    return (
        <div>
            {todos.map(item => {
                const isPastDue = new Date(item.due)< new Date();
                return (
                    <div key={item.id}>
                        <h1 className={isPastDue ? 'pastDue' : ''}>{item.title}</h1>
                        <p>{item.description}</p>
                        <p className={isPastDue ? 'pastDue' : ''}>Due Date: {item.due}</p>
                        <p>Completed: No</p>
                        <button onClick={() => deleteTodo(item.id)}>Delete</button>
                        <button onClick={() => toggleCompleted(item)}>Complete</button>
                    </div>
                );
            })}
        </div>
    );
}


export default TodoList;

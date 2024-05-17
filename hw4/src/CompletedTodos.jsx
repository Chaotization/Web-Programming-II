function CompletedTodos({todos, toggleCompleted}) {
    return (
        <div>
            {todos.map(item => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>Due Date: {item.due}</p>
                    <p>Completed: Yes</p>
                    <button onClick={() => toggleCompleted(item)}>Mark Incomplete</button>
                </div>
            ))}
        </div>
    );
}

export default CompletedTodos;
import { useState } from 'react';

function AddTodo({ addTodo }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [due, setDue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || title.trim().length === 0) {
            alert("Title cannot a non-empty string");
            return;
        }
        if (!description || description.trim().length === 0) {
            alert("Description cannot be a non-empty string");
            return;
        }
        if (!due || new Date(due) < new Date()) {
            alert("Due Date cannot in past");
            return;
        }
        addTodo({
            title,
            description,
            due
        });

        setTitle('');
        setDescription('');
        setDue('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
                <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description"></textarea>
                <input type="date" value={due} onChange={e => setDue(e.target.value)} min={new Date().toISOString()}/>
                <button type="submit">Add Todo</button>
            </form>
        </>
    );
}

export default AddTodo;

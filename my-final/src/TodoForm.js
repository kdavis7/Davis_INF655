import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
const [title, newTitle] = useState('');
const [description, newDescription]=useState('');
return (
    <><h1> My To-Do List</h1><>
        <label> <b>Items List:</b> </label>
        <input
            placeholder="Add To-do Item"
            value={title}
            onChange={e => newTitle(e.target.value)} />
        <label> <b>Description:</b> </label>
        <input
            placeholder="Add Description"
            value={description}
            onChange={e => newDescription(e.target.value)} />
        <button onClick={(e) => {
            newTitle('');
            newDescription('');
            onAddTodo(title, description);

        } }>Add</button>
    </></>
)
}
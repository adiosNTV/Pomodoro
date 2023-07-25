import { useState } from 'react';
import './ListDisplay_module.scss'

import MemberDisplay from '../MemberDisplay/MemberDisplay';


interface Task {
    id: number;
    text: string;
    completed: boolean;
}

const ListDisplay: React.FC = () => {

    const [open, setOpen] = useState(false)

    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, text: 'Buy groceries', completed: false },
        { id: 2, text: 'Read a book', completed: true },
        { id: 3, text: 'Finish the project', completed: false },
    ]);

    const [newTaskText, setNewTaskText] = useState<string>('');

    const addTask = () => {
        if (newTaskText.trim() === '') return;
        setTasks([...tasks, { id: Date.now(), text: newTaskText, completed: false }]);
        setNewTaskText('');
      };
    
      const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
      };
    
      const editTask = (id: number, text: string) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, text } : task)));
      };
    
      const toggleComplete = (id: number) => {
        setTasks(
          tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          )
        );
      };
    
      const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          addTask();
        }
      };

    return (
        <>
            <div style={{display:"flex",flexDirection:"column"}}>
                <button onClick={() => { setOpen(!open); console.log(open) }} className='ShowUpBtn'>To do List</button>
                <div className={`toDoList ${open ? 'visible' : 'hidden'}`}>
                    <h1>To-Do List</h1>
                    <div className='visible__content'>
                        <input
                            type="text"
                            value={newTaskText}
                            onChange={(e) => setNewTaskText(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button onClick={addTask}>Add</button>
                    </div>
                    <div className='TaskList'>
                    {tasks.map((task) => (
                        <MemberDisplay
                            key={task.id}
                            task={task}
                            deleteTask={() => deleteTask(task.id)}
                            editTask={(text) => editTask(task.id, text)}
                            toggleComplete={() => toggleComplete(task.id)}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListDisplay;
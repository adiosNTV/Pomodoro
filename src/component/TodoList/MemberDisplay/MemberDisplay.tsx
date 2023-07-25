import { useState } from "react";
import './MemberDisplay_module.scss'

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface MemberDisplayProps {
  task: Task;
  deleteTask: () => void;
  editTask: (text: string) => void;
  toggleComplete: () => void;
}

const MemberDisplay: React.FC<MemberDisplayProps> = ({ task, deleteTask, editTask, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      editTask(text);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="Member">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleComplete}
      />
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </span>
      )}
      <div className="Member__comboButton">
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={deleteTask}>Delete</button>
      </div>
    </div>
  );
};

export default MemberDisplay;
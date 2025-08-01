
import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {task.text}
        <span
          onClick={() => onDelete(task.id)}
          style={{
            color: '#f44336',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '18px',
            marginLeft: '10px',
          }}
        >
          ✖
        </span>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;

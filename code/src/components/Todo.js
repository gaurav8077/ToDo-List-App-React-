import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="Todo">
      <div className="title-container">
        <FontAwesomeIcon
          icon={isExpanded ? faChevronUp : faChevronDown}
          onClick={() => setIsExpanded(!isExpanded)}
          className="toggle-description-icon"
          />
        <span
          className={`${task.completed ? 'completed' : 'incompleted'}`}
          onClick={() => toggleComplete(task.id)}
          >
            { task.title} 
          </span> 
      </div>
      <div className='' style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'left',
        width: '100%',
        padding: '10px',
        borderRadius: '10px',
        transition: 'all 0.3s ease',
        height: isExpanded ? 'auto' : '0px',
        opacity: isExpanded ? '1' : '0',
      }}>

      {isExpanded && (
        <div style={{
          width:"100%",
          textAlign: 'left',
        }}>
          <div className="description">{task.description}</div>
          <div className="timestamp">{task.timestamp}</div>
        </div>
      )}
      </div>

      <div className="icons-container">
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

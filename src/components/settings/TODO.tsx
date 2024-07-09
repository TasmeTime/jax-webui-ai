import React, { useState } from 'react';

interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

const initialTodos: Todo[] = [
  // Initial todo list items can be added here.
];

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [inputText, setInputText] = useState<string>('');

  const addTodo = (text: string): void => {
    if (!text.trim()) return;
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setInputText('');
  };

  const completeTodo = (id: string): void => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: true } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: string): void => {
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    setTodos(remainingTodos);
  };

  return (
    <div>
      <h1>My Todo List</h1>

      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={() => addTodo(inputText)}>Add Todo</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <span
            style={{
              textDecoration: todo.isCompleted ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => completeTodo(todo.id)}>Complete</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
import React, { useState } from 'react';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Todo from '../interfaces/Todo';
import colors from '../constants/colors';
import styled, { createGlobalStyle } from 'styled-components';
import { v4 as v4uuid } from 'uuid';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Poppins, sans-serif;
  }
  
  body {
    height: 100vh;
    color: ${colors.DARK_GRAY};
    background-color: ${colors.LIGHT_GRAY};
  }
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAdd(text: string): void {
    const todo: Todo = {
      id: v4uuid(),
      text,
      completed: false,
    };
    setTodos([...todos, todo]);
  }

  function handleRemove(id: string): void {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function handleToggle(id: string): void {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  }

  return (
    <StyledApp>
      <GlobalStyle />
      <Header />
      <TodoForm onAdd={handleAdd} />
      <TodoList items={todos} onRemove={handleRemove} onToggle={handleToggle} />
    </StyledApp>
  );
};

export default App;

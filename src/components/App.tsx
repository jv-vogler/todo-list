import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <Header />
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;

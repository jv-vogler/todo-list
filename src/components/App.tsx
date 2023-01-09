import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import colors from '../constants/colors';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  
  body {
    height: 100vh;
    color: ${colors.SECONDARY};
    background-color: ${colors.BACKGROUND};
    font-family: Poppins, sans-serif;
  }
`;

const StyledApp = styled.div`
    display: flex;  
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    gap: 30px;
`

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Header />
      <TodoForm />
      <TodoList />
    </StyledApp>
  );
}

export default App;

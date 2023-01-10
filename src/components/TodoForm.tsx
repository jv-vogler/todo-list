import { useState, useRef } from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const Form = styled.form`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 3px solid ${colors.LIGHT_BLUE};
  border-radius: 8px;
  outline: none;
  transition: 0.3s;

  &:focus {
    border: 3px solid ${colors.MEDIUM_BLUE};
  }

  &::selection {
    color: ${colors.WHITE};
    background-color: ${colors.LIGHT_BLUE};
  }
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 8px;
  color: ${colors.WHITE};
  background-color: ${colors.LIGHT_BLUE};
  cursor: pointer;
  user-select: none;
  font-weight: 700;
  transition: 0.3s;

  &:hover {
    background-color: ${colors.MEDIUM_BLUE};
  }
`;

const TodoForm = (props: { onAdd: (text: string) => void }) => {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (text) {
      props.onAdd(text);
      setText('');
      inputRef.current?.focus();
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        spellCheck={false}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Task name"
      />
      <Button>Add</Button>
    </Form>
  );
};
export default TodoForm;

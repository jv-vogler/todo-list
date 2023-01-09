import { useState } from 'react';

const TodoForm = (props: { onAdd: (text: string) => void }) => {
  const [text, setText] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (text) {
      props.onAdd(text);
      setText('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button>Add</button>
    </form>
  );
};
export default TodoForm;

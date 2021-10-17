import { memo, useState } from 'react';

import './Form.css';
import Button from '../../../components/Button';

function Form({ onAddItemTodoList }) {
  const [text, setText] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddItemTodoList(text);
      }}
    >
      <label htmlFor="new-todo-text">Add a new task</label>
      <div className="form__input-wrapper">
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          aria-describedby="example"
          required
        />
        <Button type="submit">Add</Button>
      </div>
      <div id="example">Example: Feed the bird</div>
    </form>
  );
}

export default memo(Form);

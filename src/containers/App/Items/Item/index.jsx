import { memo } from 'react'

import './Item.css';
import Button from '../../../../components/Button';

import { STATUS } from '../../../../contants';

function Item({ id, status, text, onTodoClick }) {
  return (
    <li>
      {status === STATUS.ACTIVE && (
        <Button onClick={() => onTodoClick(id, STATUS.COMPLETED)}>
          Complete
        </Button>
      )}
      {status === STATUS.COMPLETED && (
        <Button onClick={() => onTodoClick(id, STATUS.ACTIVE)}>Undo</Button>
      )}
      {`${id} - ${text} -${status}`}
    </li>
  );
}

export default memo(Item);

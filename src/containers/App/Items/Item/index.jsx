import { memo } from 'react'

import './Item.css';
import Button from '../../../../components/Button';

import { STATUS } from '../../../../contants';

function Item({ item, onTodoClick }) {
  return (
    <li>
      {item.status === STATUS.ACTIVE && (
        <Button onClick={() => onTodoClick(item)}>
          Complete
        </Button>
      )}
      {item.status === STATUS.COMPLETED && (
        <Button onClick={() => onTodoClick(item)}>Undo</Button>
      )}
      {`${item.id} - ${item.text} -${item.status}`}
    </li>
  );
}

export default memo(Item);

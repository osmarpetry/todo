import { memo } from 'react'

import './Items.css'

import Item from './Item'

function List({ items, onTodoClick }) {
  return (
    <ul className='list'>
      {items.map(({id, text, status}) => {
        return (
          <Item
            key={id}
            id={id}
            text={text}
            status={status}
            onTodoClick={onTodoClick}
          />
        );
      })}
    </ul>
  );
}

export default memo(List);

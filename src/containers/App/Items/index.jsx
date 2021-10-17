import { memo } from 'react'

import './Items.css'

import Item from './Item'

function List({ items, onTodoClick }) {
  return (
    <ul className='list'>
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onTodoClick={onTodoClick}
          />
        );
      })}
    </ul>
  );
}

export default memo(List);

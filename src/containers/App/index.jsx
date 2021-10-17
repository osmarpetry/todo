import './App.css';

import { useState, useCallback, useRef } from 'react'

import Form from './Form'
import Items from './Items'
import Pagination from './Pagination';
import Status from './Status'

import { STATUS, TABS } from '../../contants'


function* generateId() {
  let id = 0;

  while (true) {
    yield id++;
  }
}

const getId = generateId();

function App() {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const [currentTab, setCurrentTab] = useState(TABS.ACTIVE);

  const items = useRef([])
  const itemsToShow =
    currentTab === TABS.ALL
      ? items.current
      : items.current?.filter((item) => item.status === currentTab)


  const handleTabClick = useCallback((newTab) => {
    if (newTab !== currentTab) setCurrentTab(newTab);
  },
    [currentTab]
  );

  const handleAddItemToList = useCallback((text) => {
    items.current.push({
      id: getId.next().value,
      text,
      status: STATUS.ACTIVE
    })

    forceUpdate()
  },
    [forceUpdate]
  )


  const handleTodoClick = useCallback(
    (id, status) => {
      items.current = items.current.map((item) =>
        item.id === id ? { ...item, status } : item
      );
      forceUpdate();
    },
    [forceUpdate]
  );

  return (
    <div className='app'>
      <h1>Todo Coninbase</h1>
      <Form onAddItemTodoList={handleAddItemToList} />
      <Pagination currentTab={currentTab} onTabClick={handleTabClick} />
      <Items items={itemsToShow || []} onTodoClick={handleTodoClick} />
      <Status newItem={itemsToShow[itemsToShow.length - 1]?.text} />
    </div>
  );
}

export default App;

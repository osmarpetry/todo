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

  const activeItems = useRef([])
  const completedItems = useRef([])
  const itemsToShow =
    currentTab === TABS.ALL
      ? [...activeItems.current, ...completedItems.current]
      : currentTab === TABS.ACTIVE
        ? [...activeItems.current]
        : [...completedItems.current]


  const handleTabClick = useCallback((newTab) => {
    if (newTab !== currentTab) setCurrentTab(newTab);
  },
    [currentTab]
  );

  const handleAddItemToList = useCallback((text) => {
    activeItems.current.push({
      id: getId.next().value,
      text,
      status: STATUS.ACTIVE
    })

    forceUpdate()
  },
    [forceUpdate]
  )


  const handleTodoClick = useCallback(
    (item) => {
      if (item.status === TABS.ACTIVE) {
        activeItems.current = activeItems.current.filter((activeItem) => activeItem.id !== item.id)
        completedItems.current = [...completedItems.current, { ...item, status: TABS.COMPLETED}]
      } else if (item.status === TABS.COMPLETED) {
        completedItems.current = completedItems.current.filter((completedItem) => completedItem.id !== item.id)
        activeItems.current = [...activeItems.current, { ...item, status: TABS.ACTIVE}]
      }

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

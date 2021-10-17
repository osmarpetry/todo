import { memo } from 'react'

import './Pagination.css';
import Button from '../../../components/Button';

import { TABS } from '../../../contants';

function Pagination({ currentTab, onTabClick }) {
  return (
    <div className="pagination">
      <p>Current tab: {currentTab}</p>
      <div className="pagination__actions-buttons">
        {[TABS.ACTIVE, TABS.COMPLETED, TABS.ALL].map((tab) => (
          <Button
            disabled={currentTab === tab}
            isActive={currentTab !== tab}
            onClick={() => onTabClick(tab)}
          >
            {tab}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default memo(Pagination);

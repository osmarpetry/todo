import { memo } from 'react'

const Status = ({ newItem }) => {
  return (
    <div role="status" aria-live="polite">
      {newItem === '' || !newItem
        ? 'No items added to this list yeat!'
        : `Last item added to this list: ${newItem}`}
    </div>
  );
};

export default memo(Status);

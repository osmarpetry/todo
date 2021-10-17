import { memo } from 'react'

import './Button.css'

function Button({ children, isActive, onClick, ...props }) {
  return (
    <button data-active={isActive} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default memo(Button)

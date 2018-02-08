import React from 'react';

export default ({title, index, active, setActiveIndex}) => {
  const styleClass = active ? 'tab active' : 'tab';
  return (
    <li className={styleClass} onClick={setActiveIndex}>
      {title}
    </li>
  );
};

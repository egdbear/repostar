import React from 'react';
import Tab from './Tab';

export default ({ tabs, activeIndex, setActiveIndex }) => {
  const items = tabs.map(({ name }, index) => {
    return (
      <Tab key={name}
        title={name}
        active={index === activeIndex}
        setActiveIndex={() => setActiveIndex(index)}
      />
    );
  });

  return (
    <nav className="tabnav">
      <ul className="tablist">
        {items}
      </ul>
    </nav>
  );
};

import React from 'react';
import TabContent from './TabContent';

export default ({ components, activeIndex }) => {
  const items = components.map((c, index) => {
    return (
      <TabContent key={c.id} isActive={activeIndex === index} component={c.component} />
    );
  });

  return <div className="content">{items}</div>
};

import React from 'react';

export default (props) => {
  const { isActive } = props;
  return isActive ? <Content {...props} /> : <div className="content" />;
};

const Content = (props) => {
  return (
    <div>
      <props.component />
    </div>
  );
};

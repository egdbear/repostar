import React from 'react';
import StarButton from './StarButton';

export default (props) => {
  const { id, full_name, description, stargazers_count, onSave, starred } = props;
  const favoriteProps = { id, full_name, description, stargazers_count };
  const buttonProps = { onSave: () => onSave(favoriteProps), starred };
  const showButton = typeof onSave === 'function';

  return (
    <li className="item">
      <div className="top">
        <div className="full_name">
          {full_name}
        </div>
         { showButton && <StarButton {...buttonProps} /> }
      </div>
      <div>
        <div className="description">
          {description}
        </div>
        <div className="stargazers_count">
          <span className="star star-xs"></span>
          {stargazers_count}
        </div>
      </div>
    </li>
  );
};

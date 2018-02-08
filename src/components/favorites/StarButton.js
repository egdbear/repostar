import React from 'react';

export default ({ starred, onSave }) => {
  return (
    <div className="button">
      {starred && <button className="btn">
        <span className="star star-sm icon" />
        Unstar
      </button>}
      {!starred && <button className="btn" onClick={onSave}>
        <span className="star star-sm icon" />
        Star
      </button>}
    </div>
  );
};

import React from 'react';

const Remaining = ({ rest, remainingClass }) => {
  return (
    <div className={`${remainingClass} color-transition`}>
      Remaining: $ {rest}
    </div>
  );
};

export default Remaining;

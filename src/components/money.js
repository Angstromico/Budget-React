import React from 'react';
import Budget from './Budget';
import Remaining from './Remaining';
const Money = ({ coins, rest, remainingClass }) => {
  return (
    <>
      <Budget coins={coins} />
      <Remaining rest={rest} remainingClass={remainingClass} />
    </>
  );
};

export default Money;

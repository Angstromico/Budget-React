import React from 'react';
import Data from './Data';
import Money from './money';
const List = ({ data, setData, coins, rest, remainingClass, setRest }) => {
  return (
    <section className="gastos-realizados">
      <h2>List</h2>
      <Data data={data} setData={setData} rest={rest} setRest={setRest} />
      <Money
        coins={coins}
        rest={rest}
        remainingClass={remainingClass}
        data={data}
      />
    </section>
  );
};

export default List;

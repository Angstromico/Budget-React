import React from 'react';

const Data = ({ data, setData, rest, setRest }) => {
  const eraseElement = (e) => {
    const id = Number(e.target.id);
    data.forEach((element) => {
      if (element.id === id) {
        const dataFiltering = data.filter((out) => out.id !== id);
        setData(dataFiltering);
        const sumMoney = Number(element.quantity) + Number(rest);
        setRest(sumMoney);
      }
    });
  };
  return (
    <div>
      {data.length >= 0 &&
        data.map((info) => {
          const { name, quantity, id } = info;
          return (
            <li className="gastos" key={id}>
              <p className="d-flex justify-content-between">
                {name}
                <span className="gasto">$ {quantity}</span>
                <span
                  className="alert alert-danger x"
                  id={id}
                  onClick={eraseElement}
                >
                  X
                </span>
              </p>
            </li>
          );
        })}
    </div>
  );
};

export default Data;

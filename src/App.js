import React, { useState, useEffect, useCallback } from 'react';
import './css/App.css';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import { calculateBudged, reviewBudget } from './components/Functions';
function App() {
  const [props, setProps] = useState({
    title: 'Budget App',
    name: '',
    quantity: '',
    id: new Date().getTime(),
  });
  const [data, setData] = useState([]);
  const [money, setMoney] = useState(0);
  const [rest, setRest] = useState(money);
  const [warning, setWarning] = useState({ foul: false, message: '' });
  const [remainingClass, setRemainingClass] = useState('alert alert-success');
  const initial = useCallback(() => {
    getBudget();
  }, []);
  useEffect(() => {
    initial();
  }, [initial]);

  function getBudget() {
    let budget = prompt('Tell me your Budget');
    setMoney(calculateBudged(budget));
    setRest(calculateBudged(budget));
  }
  // const calcRemaining = () => {
  //   if (data.length > 0) {
  //     let counter = 0;
  //     data.forEach((product) => {
  //       counter += Number(product.quantity);
  //     });
  //     const remaining = Number(money) - counter;
  //     setRest(remaining);
  //     const newClass = reviewBudget(money, remaining);
  //     setRemainingClass(newClass);
  //   }
  // };
  useEffect(() => {
    if (data.length > 0) {
      let counter = 0;
      data.forEach((product) => {
        counter += Number(product.quantity);
      });
      const remaining = Number(money) - counter;
      setRest(remaining);
      const newClass = reviewBudget(money, remaining);
      setRemainingClass(newClass);
    }
  }, [data, money]);
  useEffect(() => {
    const eliminateWarning = setTimeout(() => {
      setWarning({ foul: false, message: '' });
    }, 5000);
    return () => clearTimeout(eliminateWarning);
  }, [warning]);
  return (
    <section className="App container">
      <Header props={{ ...props }} />
      <div className="contenido-principal contenido">
        <div className="row">
          <div className="one-half column">
            <Form
              values={{ ...props }}
              setValues={setProps}
              setData={setData}
              data={data}
              warning={warning}
              setWarning={setWarning}
              rest={rest}
            />
          </div>
          <div className="one-half column">
            <List
              data={data}
              setData={setData}
              coins={money}
              rest={rest}
              setRest={setRest}
              remainingClass={remainingClass}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

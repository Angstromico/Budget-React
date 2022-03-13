import React from 'react';

const Form = ({
  values,
  setValues,
  setData,
  data,
  warning,
  setWarning,
  rest,
}) => {
  const { name, quantity } = values;
  const { foul, message } = warning;
  const createExpense = (e) => {
    e.preventDefault();
    if (!name && quantity === 0) {
      setWarning({
        foul: true,
        message: 'Please fill all the field on the form',
      });
      return;
    } else if (!name) {
      setWarning({
        foul: true,
        message: 'Please let us know the name of the expend',
      });
      return;
    } else if (quantity <= 0) {
      setWarning({
        foul: true,
        message: 'Please specify the amount you will pay.',
      });
      return;
    } else if (rest - quantity < 0) {
      setWarning({
        foul: true,
        message: 'You cannot spend more money than you have',
      });
      return;
    }
    const id = new Date().getTime();
    setData([...data, values]);
    //Reset form
    setValues({ ...values, name: '', quantity: '', id });
  };

  return (
    <form onSubmit={createExpense}>
      <h2>Add your expenses here</h2>
      <div className="campo">
        <label htmlFor="expense">Expense Name</label>
        <input
          className="u-full-width"
          type="text"
          placeholder="Ej. Music"
          id="expense"
          value={name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
      </div>
      <div className="campo">
        <label htmlFor="quantity">Quantity</label>
        <input
          className="u-full-width"
          id="quantity"
          type="number"
          min="0"
          placeholder="Ej. 300"
          value={quantity}
          onChange={(e) =>
            setValues({ ...values, quantity: Number(e.target.value) })
          }
        />
        {foul && <div className="alert alert-danger">{message}</div>}
      </div>
      <input
        className="button-primary u-full-width"
        type="submit"
        value="Agregar"
      />
    </form>
  );
};

export default Form;

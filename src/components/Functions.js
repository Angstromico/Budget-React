export const calculateBudged = (budget) => {
  let totalBudget = parseInt(budget, 10) || 0;
  if (totalBudget > 0) {
    return totalBudget;
  } else {
    alarming();
    getBudget();
  }
};
export const reviewBudget = (budget, rest) => {
  let type;
  //25%
  if (budget / 4 > rest) {
    type = 'alert alert-danger';
  } else if (budget / 2 > rest) {
    type = 'alert alert-warning';
  } else {
    type = 'alert alert-success';
  }
  return type;
};
function getBudget() {
  let budget = prompt('Tell me your Budget');
  const coins = calculateBudged(budget);
  return coins;
}
function alarming() {
  const alarm = alert('Please Put a Valit value Here');
  return alarm;
}

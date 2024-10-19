import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseData = new DataTransfer(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  return (
    // className instead of class but it's a reserved word in Javescript, It looks like HTML But it isn't
    <div className="expense-item">
      <div>{expenseData}</div>
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        {<h2>{Math.random()}</h2>}
        {<h2>Car Insurance</h2>}
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

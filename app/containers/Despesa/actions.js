const headers = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
  authorization: `Bearer ${localStorage.getItem('token')}`,
};
/**
 * register new expense
 */
export function saveOrUpdateExpense(expense) {
  const id = expense.id;
  delete expense.id;

  let body = JSON.stringify(expense);
  const method = `/v1/despesas${id ? `/${id}` : ''}`;

  const request = fetch(`${process.env.REACT_APP_REQUEST_URI || ''}${method}`, {
    method: id ? 'PUT' : 'POST',
    body,
    headers,
  });
  return request.then(res => res.json());
}

export function getExpense(expense) {
  const method = `/v1/despesas/${expense}`;

  const request = fetch(`${process.env.REACT_APP_REQUEST_URI || ''}${method}`, {
    method: 'GET',
    headers,
  });
  return request.then(res => res.json());
}

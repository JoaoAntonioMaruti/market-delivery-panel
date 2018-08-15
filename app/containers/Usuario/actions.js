const headers = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
};
/**
 * register new user
 */
export function createAccount(user) {
  let body = JSON.stringify(user);
  const method = '/v1/usuarios';

  const request = fetch(`${process.env.REACT_APP_REQUEST_URI || ''}${method}`, {
    method: 'POST',
    body,
    headers,
  });
  return request.then(res => res.json());
}

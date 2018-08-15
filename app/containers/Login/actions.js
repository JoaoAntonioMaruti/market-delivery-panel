const headers = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
};
/**
 * Auth
 */
export function auth(user) {
  let body = JSON.stringify(user);
  const method = '/v1/usuarios/login';

  const request = fetch(`${process.env.REACT_APP_REQUEST_URI || ''}${method}`, {
    method: 'POST',
    body,
    headers,
  });
  return request.then(res => res.json());
}

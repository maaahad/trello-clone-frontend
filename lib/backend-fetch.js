// --------------------------------------------------
// this module defines method to communicate with backend

const jsonFetch = (url, method, body) => {
  body = typeof body === "string" ? body : JSON.stringify(body);
  const headers = { "Content-Type": "application/json" };
  return fetch(url, { method, body, headers })
    .then((res) => {
      if (res.status === 200 || res.status === 400) {
        return res.json();
      }
      throw new Error(`Server response with the status ${res.status}`);
    })
    .catch(console.error);
};

export { jsonFetch };

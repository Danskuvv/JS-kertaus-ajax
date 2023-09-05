'use strict';

async function fetchData(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Network error');
  }
  const data = await response.json();
  return data;
}

try {
  const user = {
    name: 'John Doe',
    job: 'Developer',
  };
  const url = 'https://reqres.in/apia/users';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  const userData = fetchData(url, options);
  console.log(userData);
} catch (error) {
  console.error('An error occurred:', error);
}

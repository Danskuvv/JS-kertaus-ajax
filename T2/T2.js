'use strict';

const jsoni = {
  name: 'pasi',
  job: 'koodari',
};

async function postData() {
  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(jsoni),
  });
  console.log('status:', response.status);
}

postData();

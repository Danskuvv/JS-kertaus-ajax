'use strict';
async function fetchData() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23');

    if (!response.ok) {
      throw new Error('Network error');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();

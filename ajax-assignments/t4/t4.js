async function fetchData(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`Error: ${response.status}`);
  return await response.json();
}

async function runTest() {
  try {
    const userData = await fetchData('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify({name: 'John Doe', job: 'Developer'}),
    });
    console.log('Task 4:', userData);
  } catch (error) {
    console.error('Error:', error);
  }
}
runTest();

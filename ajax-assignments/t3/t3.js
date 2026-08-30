async function fetchUnknown() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      headers: {'x-api-key': 'reqres-free-v1'},
    });
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    console.log(await response.json());
  } catch (error) {
    console.error('Task 3 Error Caught:', error.message);
  }
}
fetchUnknown();

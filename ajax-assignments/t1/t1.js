async function fetchUser() {
  const response = await fetch('https://reqres.in/api/users/1', {
    headers: {'x-api-key': 'reqres-free-v1'},
  });
  console.log('Task 1:', await response.json());
}
fetchUser();

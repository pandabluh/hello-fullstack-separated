async function getMessage() {
  const res = await fetch('http://localhost:3001/api/hello');
  const data = await res.json();
  document.getElementById('response').textContent = data.message;
}
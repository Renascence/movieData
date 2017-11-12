
export default async function request(url, params = { method: 'get' }) {
  const data = await fetch(url, params);
  return data.json();
}


export default async function request(url, action) {
  const data = await fetch(url, {
    method: action,
  });
  return data.json();
}

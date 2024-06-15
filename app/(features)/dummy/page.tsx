async function getData() {
  const res = await fetch('https://dummy.restapiexample.com/api/v1/employees/');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    console.error(res.statusText);
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data);
  return <p>This is dummy page</p>;
}

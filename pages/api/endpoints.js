// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log('hi server');
  return data;
}

export async function getMemes() {
  const res = await fetch('https://api.imgflip.com/get_memes');
  const data = await res.json();

  return data.data.memes;
}

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();

  const products = [
    { id: 1, name: 'Product A', description: 'Details of Product A', price: 50 },
    { id: 2, name: 'Product B', description: 'Details of Product B', price: 75 },
    { id: 3, name: 'Product C', description: 'Details of Product C', price: 100 },
  ];

  const product = products.find((p) => p.id.toString() === id);

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
}

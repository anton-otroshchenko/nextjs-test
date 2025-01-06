import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    { id: 1, name: 'Product A', description: 'Details of Product A', price: 50 },
    { id: 2, name: 'Product B', description: 'Details of Product B', price: 75 },
    { id: 3, name: 'Product C', description: 'Details of Product C', price: 100 },
    { id: 4, name: 'Product D', description: 'Details of Product D', price: 125 },
    { id: 5, name: 'Product E', description: 'Details of Product E', price: 256 },
    { id: 6, name: 'Product F', description: 'Details of Product F', price: 133 },
    { id: 7, name: 'Product G', description: 'Details of Product G', price: 544 },
    { id: 8, name: 'Product H', description: 'Details of Product H', price: 752 },
    { id: 9, name: 'Product I', description: 'Details of Product I', price: 102 },
  ];

  return NextResponse.json(products);
}

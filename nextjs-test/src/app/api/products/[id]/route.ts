import { NextResponse } from 'next/server';
import {products} from "@/data/products/products";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();

  const product = products.find((p) => p.id.toString() === id);

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
}

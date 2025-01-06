import { NextResponse } from 'next/server';
import {products} from "@/data/products/products";

export async function GET() {

  return NextResponse.json(products);
}

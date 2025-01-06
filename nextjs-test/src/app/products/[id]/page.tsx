"use client";

import { useEffect, useState } from 'react';
import { use } from 'react';
import Head from "next/head";
import {Product} from "@/types/product/product.type";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = use(params);

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
          .then((res) => res.json())
          .then(setProduct)
          .catch(() => setError('Failed to fetch product details'))
          .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const pageTitle = product?.name || 'Product Detail';
  const pageDescription = product?.description || 'View the details of this product.';

  return (
      <>
        <Head>
          <meta name="description" content={pageDescription} />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:type" content="product" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <title>{pageTitle}</title>
        </Head>

        <div className="p-4">
          <div className="flex justify-between align-middle items-center border-b pb-4 mb-4">
            <h1 className="text-2xl font-bold">{product?.name}</h1>
            <p className="ml-4 text-lg font-semibold">${product?.price}</p>
          </div>
          <p className="mt-2 text-white">{product?.description}</p>
        </div>
      </>
  );
}

"use client";

import { useEffect, useState } from 'react';
import { use } from 'react';

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const [product, setProduct] = useState<any>(null);
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

  return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">{product?.name}</h1>
        <p className="mt-2 text-gray-700">{product?.description}</p>
        <p className="mt-4 text-lg font-semibold">Price: ${product?.price}</p>
      </div>
  );
}

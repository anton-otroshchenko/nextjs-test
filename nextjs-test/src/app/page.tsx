"use client";

import { useState, useEffect } from 'react';

export default function ProductListing() {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    fetch('/api/products')
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setFilteredProducts(data);
        })
        .catch(() => setError('Failed to fetch products'))
        .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredProducts(
          products.filter((product) =>
              product.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
      <div className="p-4">
        <div className='flex justify-between'>
          <h1 className="text-2xl font-bold mb-6">Product Listing</h1>

          <div className="mb-6">
            <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-black text-white placeholder-white w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product: any) => (
              <div
                  key={product.id}
                  className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <a
                    href={`/products/${product.id}`}
                    className="text-lg font-semibold text-white hover:text-blue-500"
                >
                  {product.name}
                </a>
                <p className="mt-2 text-white">{product.description}</p>
                <p className="mt-4 text-sm font-semibold text-white">Price: ${product.price}</p>
              </div>
          ))}
        </div>
      </div>
  );
}

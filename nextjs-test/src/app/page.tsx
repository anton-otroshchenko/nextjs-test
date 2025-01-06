"use client";

import { useState, useEffect } from 'react';
import ProductItem from "@/components/ProductItem/ProductItem";
import {Product} from "@/types/product/product.type";

export default function ProductListing() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
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
          {filteredProducts.map((product: Product) => (
              <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </div>
  );
}

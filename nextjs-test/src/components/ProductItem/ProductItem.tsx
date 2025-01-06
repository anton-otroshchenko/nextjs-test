import React from 'react';
import {Product} from "@/types/product/product.type";

type Properties = {
  product: Product
}

const ProductItem:React.FC<Properties> = ({ product }) => {
  return (
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
  );
};

export default ProductItem;
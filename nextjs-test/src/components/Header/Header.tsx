"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {

  const pathname = usePathname();

  const [productId, setProductId] = useState<string | null>(null);

  useEffect(() => {
    const productMatch = pathname.match(/\/products\/(\d+)/);
    if (productMatch) {
      setProductId(productMatch[1]);
    } else {
      setProductId(null);
    }
  }, [pathname]);

  let breadcrumbItems = [
    { label: 'Products', href: '/' },
  ];

  if (pathname.includes('/products/') && productId) {
    breadcrumbItems = [
      { label: 'Products', href: '/' },
      { label: `Product ${productId}`, href: `/products/${productId}` },
    ];
  }

  return (
      <header className="text-white p-4">
        <div className="mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link href="/">Test task</Link>
          </div>

          <nav className="flex space-x-6 justify-between align-middle">
            <div className="flex space-x-2">
              {breadcrumbItems.map((item, index) => (
                  <span key={index} className="flex items-center">
                {index > 0 && <span className="mx-2">/</span>}
                    <Link href={item.href} className="hover:text-blue-400">{item.label}</Link>
              </span>
              ))}
            </div>
          </nav>
        </div>
      </header>
  );
}

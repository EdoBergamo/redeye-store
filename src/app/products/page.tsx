"use client";

import { useEffect, useState } from "react";

interface ProductsProps {
  id: string
  title: string
  cfImageId: string
  products: [
    {
      id: string
      title: string
      description: string
      isInStock: boolean
      uniquePath: string
    }
  ]
}

const Products = () => {
  const [data, setData] = useState<ProductsProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dev.sellpass.io/self/75819/groups', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${process.env.SELLPASS}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok)
          throw new Error('Network Error')

        const responseData = await response.json();
        setData(responseData.data);
      } catch (error) {
        console.error(error)
      }
    }

    fetchData();
  }, [])

  return (
    <section className="flex items-center lg:h-screen">

      <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
          {data.map(group => (
            group.products.map(product => (
              <div key={product.id} className="rounded-lg shadow-md bg-gray-800">
                <img src={`https://imagedelivery.net/${group.cfImageId}/productCard`} alt="" className="object-cover w-full h-64 rounded-t-lg" />
                <div className="p-5">
                  {product.title}
                  <p className="mt-3 mb-4 font-normal text-gray-700 dark:text-gray-400">
                    {product.description}
                  </p>
                  <button data-sellpass-domain="redeyes.sellpass.io" data-sellpass-product-path={product.uniquePath} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-200 bg-blue-700 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-800">
                    Read more
                  </button>
                </div>
              </div>
            ))
          ))}

        </div>
      </div>
    </section>

  )
}

export default Products;
"use client";

import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProductsProps {
  id: string
  uniqid: string
  shop_id: string
  image_attachment: string
  title: string
  cloudflare_image_id: string
  products_bound: [
    {
      uniqid: string
      price: number
      price_display: number
      price_discount: number
      currency: string
      stock: number
    }
  ]
}

const Products = () => {
  const [data, setData] = useState<ProductsProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dev.sellix.io/v1/groups', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ShcYRDhnV2TEBI5OoNEUtdGJsMcUe39PV9VENi1fj0cyGUDYn3EWLHvuZ7s4lD7V`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok)
          throw new Error('Network Error')

        const responseData = await response.json();
        setData(responseData.data.groups); // Assuming 'groups' is the array you want to map over
      } catch (error) {
        console.error(error)
      }
    }

    fetchData();
  }, [])

  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.length > 0 && data.map(group => (
            <div key={group.id} className="game-card bg-[#0f1013] border border-red-600 border-solid h-72 m-4 w-72 overflow-hidden rounded-2xl">
              <div className="card-img rounded-2xl overflow-hidden items-center flex bg-[#14161a] justify-center max-h-40 min-w-[calc(101%-1px]">
                <Image
                  src={`https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/${group.cloudflare_image_id}/shopitem`}
                  alt={`${group.title} Image`}
                  width={500}
                  height={300}
                />
              </div>
              <div className="items-center shadow-sm backdrop-blur-[3px] bg-[#0f1013b3] border border-red-700 border-opacity-100 border-solid border-0.5 rounded-2xl flex-row h-[9.9rem] p-4 flex justify-between" style={{ transform: 'translate(-1px, -1.3rem)' }}>
                <div className="card-text flex justify-between flex-col h-full w-full m-0">
                  <div className="items-center flex h-8 justify-center w-full">
                    <span className="text-base items-center text-white font-bold">{group.title}</span>
                  </div>
                  <div className="items-center flex flex-nowrap justify-between w-full mb-5">
                    <div className="flex flex-col">
                      <span className="text-white font-light flex-nowrap text-sm">Starting at</span>
                      <span className="text-white font-bold text-2xl mt-1">€{group.products_bound[0].price}</span>
                    </div>
                    <div data-sellix-group={group.uniqid} className="cursor-pointer bg-white text-black/90 border border-transparent font-semibold px-8 py-1 rounded-full hover:bg-zinc-300 transition-all duration-300">
                      <button>Buy</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Products;

"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Each } from "@/lib/Eac";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface ProductsProps {
  id: number
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
  const [isLoading, setIsLoading] = useState<Boolean>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://dev.sellix.io/v1/groups', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok)
          throw new Error('Network Error')

        const responseData = await response.json();
        setData(responseData.data.groups);
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [])

  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="hidden lg:flex absolute top-2/4 right-0 w-36 h-36 blur-[140px] bg-gradient-to-r from-red-400 to-red-500 rounded-3xl z-[-1]" />
        <div className="hidden lg:flex absolute top-3/4 left-0 w-48 h-48 blur-[180px] bg-gradient-to-r from-red-400 to-red-500 rounded-3xl z-[-1]" />

        {isLoading ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <Loader2 className="inline-block w-12 h-12 mb-2 animate-spin" />
            <p className="ml-2.5">Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Each of={data} render={(group: any) =>
              <div className="game-card bg-[#0f1013] border border-red-600 border-solid h-72 m-4 w-72 overflow-hidden rounded-2xl">
                <div className="card-img rounded-2xl overflow-hidden items-center flex bg-[#14161a] justify-center max-h-40 min-w-[calc(101%-1px]">
                  <Image
                    src={`https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/${group.cloudflare_image_id}/shopitem`}
                    alt={`${group.title} Image`}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="items-center shadow-sm backdrop-blur-[3px] bg-[#0f1013b3] rounded-2xl flex-row h-[9.9rem] p-4 flex justify-between" style={{ transform: 'translate(-1px, -1.3rem)' }}>
                  <div className="card-text flex justify-between flex-col h-full w-full m-0">
                    <div className="items-center flex h-8 justify-center w-full">
                      <span className="text-base items-center text-white font-bold">{group.title}</span>
                    </div>
                    <div className="items-center flex flex-nowrap justify-between w-full mb-5">
                      <div className="flex flex-col">
                        <span className="text-white font-light flex-nowrap text-sm">Starting at</span>
                        <span className="text-white font-bold text-2xl mt-1">€{group.products_bound[0].price_display}</span>
                      </div>
                      <div data-sellix-group={group.uniqid} className="cursor-pointer bg-white text-black/90 border border-transparent font-semibold px-8 py-1 rounded-xl hover:bg-zinc-300 transition-all duration-300">
                        <button>Buy</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            } />
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}

export default Products;

"use client";

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { UserNav } from './user-nav';

export const Navbar = () => {
  const currentRoute = usePathname();
  const { data: session }: any = useSession()

  const menu = [
    { id: 1, href: '/', text: 'Home' },
    { id: 2, href: '/products', text: 'Products' },
    { id: 3, href: '/status', text: 'Status' },
    { id: 4, href: '/reviews', text: 'Reviews' },
    { id: 5, href: 'https://discord.gg/7KmtuNKm49', target: '_blank', text: 'Contact' },
  ];

  return (
    <div className="sticky z-[2] top-0 bg-black/10 p-5 border-b backdrop-blur-md border-gray-400/20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" width='50' height='50' alt="RedEye Logo" />
        </div>

        <div className="hidden md:flex space-x-10">
          {menu.map((item) => (
            <a key={item.id} href={item.href} target={item.target} className={`font-medium text-gray-300 hover:text-red-500 transition-all duration-200 ${currentRoute === item.href ? 'text-red-500' : ""}`}>{item.text}</a>
          ))}
        </div>

        <div>
          {!session ? (
            <a href="/login" className="bg-white text-black/90 border border-transparent font-semibold px-8 py-1 rounded-xl hover:bg-zinc-300 transition-all duration-300">
              Login
            </a>
          ) : (
            // <button onClick={() => {signOut()}} className="bg-white text-black/90 border border-transparent font-semibold px-8 py-1 rounded-xl hover:bg-zinc-300 transition-all duration-300">
            //   Logout
            // </button>
            <UserNav logout={signOut} />
          )}
        </div>
      </div>
    </div>
  )
}
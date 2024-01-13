"use client";

import { useSession } from "next-auth/react";
import Sidebar from "./_components/Sidebar";
import { useRouter } from "next/navigation";

export default function Example() {
  const session = useSession();
  const router = useRouter();

  if (session?.status === 'unauthenticated') {
    router.push('/')
    return null
  }

  return (
    <div>
      <Sidebar />

      <main className="py-10 mt-14 ml-2.5 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-2xl">Account Information</h3>
        </div>
      </main>
    </div>
  );
}
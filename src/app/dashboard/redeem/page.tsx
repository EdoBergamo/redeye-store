"use client";

import { RedeemForm } from "@/components/redeem-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Sidebar from "../_components/Sidebar";

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
        <RedeemForm />
      </main>
    </div>
  );
}
"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaDiscord } from "react-icons/fa6";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session?.status === 'authenticated') {
    router.push('/');
    return null;
  }

  return (
    <div className="relative flex flex-col items-center h-screen justify-center">
      <div className="hidden lg:flex absolute top-0 left-0 w-36 h-36 blur-[140px] bg-gradient-to-r from-gray-600 to-gray-500 rounded-3xl z-[-1]" />
      <div className="hidden lg:flex absolute bottom-96 right-0 w-36 h-36 blur-[140px] bg-gradient-to-r from-gray-400 to-gray-500 rounded-3xl z-[-1]" />

      <div className="absolute  top-10 left-10">
        <a href="/">
          <Image src="/logo.png" width='50' height='50' alt="RedEye Logo" />
        </a>
      </div>

      <div className="rounded-xl relative overflow-hidden bg-[#0D0D0D] p-10">
        <h1 className="text-gray-200 font-semibold text-2xl">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-red-600 to-red-300 text-transparent bg-clip-text">RedEye</span>
        </h1>

        <h3 className="text-gray-400">Login to your account</h3>
        <div className="hidden lg:flex absolute -bottom-12 left-1/2 w-36 h-36 blur-[140px] bg-gradient-to-r from-gray-600 to-gray-700 rounded-3xl " />

        <h4 className="text-gray-400 mt-12">
          Please log-in to your account and start win!
        </h4>

        <button onClick={() => signIn('discord')} className="mt-4 relative z-[2] hover:transitions-all duration-200 hover:bg-gray-400 flex items-center px-10  cursor-pointer  w-full py-1.5 text-[#0D0D0D] bg-gray-200 font-normal rounded-xl">
          <FaDiscord className="text-xl" />
          <span className="flex w-full justify-center">
            Login With
            <span className="ml-1 font-semibold">Discord</span>
          </span>
        </button>
      </div>

      <h3 className="text-gray-600 font-normal text-sm mt-12">
        powered by{' '}
        <span className="text-gray-400 font-semibold">RedEye</span>
      </h3>
    </div>
  )
}

export default Login
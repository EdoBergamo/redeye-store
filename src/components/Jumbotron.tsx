
export const Jumbotron = () => {
  return (
    <div className="relative mt-20 xl:mt-40 px-10 flex flex-col items-center justify-center">
      <div className="hidden lg:flex absolute top-0 left-0 w-36 h-36 blur-[140px] bg-gradient-to-r from-red-400 to-red-500 rounded-3xl z-[-1]" />
      <div className="hidden lg:flex absolute top-96 right-0 w-48 h-48 blur-[180px] bg-gradient-to-r from-red-400 to-red-500 rounded-3xl z-[-1]" />

      <a href="https://discord.gg/7KmtuNKm49" target="_blank" className="hidden mb-4 lg:flex bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 roudned-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(255,0,0,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>

        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
          <span>Join now our Discord Community</span>
          <svg fill="none" height='16' viewBox="0 0 24 24" width='16' xmlns="http://www.w3.org/2000/svg">
            <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>

        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-red-500/0 via-red-500/90 to-red-500/0 transition-opacity duration-500 group-hover:opacity-40" />
      </a>

      <h1 className="text-6xl mt-5 lg:text-7xl xl:text-8xl text-white font-semibold text-center">
        <span className="z-[-6]">Advanced and secure</span>
        <br />
        <span className="z-[3]">gaming software.</span>
      </h1>

      <p className="text-center mt-3 text-gray-400 font-medium max-w-xl">
        Start winning today with our secure and advanced gaming software.
      </p>

      <a href="/products" className="rounded-full bg-gray-200 text-black/90 px-12 py-3 font-semibold mt-8 hover:bg-red-100 duration-200 transition-all">
        Buy Now
      </a>
    </div>
  )
}
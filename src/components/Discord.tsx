import Image from "next/image"

export const Discord = () => {
  return (
    <div className="my-20 flex items-center justify-center">
      <div className="relative mx-12 shadow-black/5 shadow-none rounded-3xl w-auto xl:w-[1200px] h-80 border border-white/10">
        <div className="absolute inset-0 flex flex-col p-10 md:p-20 text-white z-[1]">
          <p className="text-2xl md:text-4xl font-semibold max-w-lg">
            Explore and join now our Discord Community
          </p>
          <a href="https://discord.gg/7KmtuNKm49" target="_blank" className="mt-6 md:mt-16 w-48 text-sm backdrop-blur-xl bg-white/20 border border-white/30 rounded-full flex items-center justify-center py-1.5 text-gray-200 font-semibold hover:bg-white/40 duration-200 transitions-all">
            Join Now
          </a>
        </div>

        <Image
          width='1200'
          height='320'
          src="https://img.freepik.com/free-vector/royal-watercolor-valentine-red-background_1340-4006.jpg"
          className="relative  duration-200 transitions-all z-[0] opacity-0 shadow-black/5 w-[1200px] h-80 data-[loaded=true]:opacity-100 shadow-none  rounded-2xl"
          data-loaded="true"
          alt="Img"
        />
        <Image
          width='1200'
          height='320'
          src="https://img.freepik.com/free-vector/royal-watercolor-valentine-red-background_1340-4006.jpg"
          className="absolute z-[-1] inset-0 w-full h-full object-cover filter blur-2xl scale-105 saturate-150 opacity-30 translate-y-1 rounded-2xl"
          aria-hidden="true"
          data-loaded="true"
          alt="Img"
        />
      </div>
    </div>
  )
}
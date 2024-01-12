import Image from "next/image"

export const Partners = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-50">Trusted by the world’s most innovative cheats</h2>
        <div className=" mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://klar.gg/images/Original-on-Transparent-p-2600.png"
            alt="Transistor"
            width="158"
            height="48"
          />

          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/ring-1.png"
            alt="Reform"
            width="158"
            height="48"
          />

          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="data:image/webp;base64,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"
            alt="Tuple"
            width="158"
            height="48"
          />

          <Image
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://lethalcheats.net/pvpers.webp"
            alt="SavvyCal"
            width="158"
            height="48"
          />
            
          <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://klar.gg/images/Original-on-Transparent-p-2600.png"
            alt="Statamic"
            width="158"
            height="48"
          />
            
        </div>
      </div>
    </div>
  )
}
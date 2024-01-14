import { RxUpdate } from "react-icons/rx";
import { BiSupport } from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { IoHardwareChip, IoGameController } from "react-icons/io5";
import { Each } from "@/lib/Eac";

export const Features = () => {
  const data = [
    { id: 1, icon: IoHardwareChip, title: 'Elite HWID Spoofer', description: 'Utilizing cutting-edge ring0 kernel spoofing, our Military Grade HWID Spoofer guarantees that you\'ll remain in the game, untouched by bans' },
    { id: 2, icon: RxUpdate, title: 'Security Updates', description: 'Stay ahead of the game with instant updates. Our cheats adapt swiftly to game patches, ensuring you experience uninterrupted gameplay' },
    { id: 3, icon: GrStatusGood, title: 'Cheat Status', description: 'Get a live overview of the cheat\'s status. Know when it\'s active, ensuring you\'re always in control of your gaming experience' },
    { id: 4, icon: MdOutlineSecurity, title: 'Subscription Insurance', description: 'Worried about losing out due to updates? Fear not. With FULL COMPENSATION, you\'re covered. Your subscription time remains untouched, even during cheat updates or game patches' },
    { id: 5, icon: IoGameController, title: 'Multi-Game Compatibility', description: 'Extend your advantage across multiple games with cheats that are compatible with various titles, providing versatility and value for your subscription.' },
    { id: 6, icon: BiSupport, title: 'Customer Support', description: 'Gain access to a dedicated support channel, ensuring your queries and concerns are addressed promptly, offering a premium support experience' },
  ]
  return (
    <section className="mt-28 flex flex-col justify-center">
      <h2 className="text-center text-white font-medium text-5xl">
        Features
      </h2>

      <div className="w-full flex justify-center items-center text-center">
        <p className="text-base text-center max-w-full mx-4 xl:mx-0 xl:max-w-lg mt-5 font-medium text-zinc-500">
          Every RedEye product is packed with awesome features.
        </p>
      </div>

      <div className="mt-16 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <Each of={data} render={(item: any) =>
            <div className="w-[390px] bg-[#0D0D0D] rounded-xl p-4 sm:p-6">
              <div className="bg-[#1B1B1B]  w-6 h-6 sm:h-10 sm:w-10 rounded-full flex items-center justify-center text-white text-xs">
                {<item.icon className="h-6 w-6 text-red-500" />}
              </div>

              <div className="mt-8">
                <h3 className="text-gray-100 font-medium text-base">{item.title}</h3>
                <p className="mt-2 text-zinc-500 font-medium">{item.description}</p>
              </div>
            </div>
          } />
        </div>
      </div>
    </section>
  )
}
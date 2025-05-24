import { RippleButton } from "../magicui/ripple-button";

export default function Bio() {
  return (
    <div className="h-full w-full rounded-lg bg-neutral-800/60 p-4 px-0 pb-0 pt-10">
      <div className="flex flex-col h-full">
        <div className="flex-grow  px-4">
          <h2 className="text-5xl font-semibold text-white mb-4 ">
            {`Hi, I'm Stefan`}
          </h2>
          <p className="text-white/80 text-3xl font-semibold">
            A full stack web developer
          </p>
        </div>
        <div className="flex justify-start border-t-[1px] border-white/50 ">
          <div className="w-1/3 bg-neutral-500/60 h-12 rounded-bl-lg flex justify-center items-center border-r-[1px] border-white/30  hover:bg-white text-white hover:text-black transition-all duration-300 ease-in-out">
            <p className="font-bold text-xl">CV</p>
          </div>
          <div className="w-1/3 bg-neutral-500/60 h-12  flex justify-center items-center border-r-[1px] border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
            <p className=" font-bold text-xl">GitHub</p>
          </div>
          <div className="w-1/3 bg-neutral-500/60 h-12 rounded-br-lg flex justify-center items-center border-r-[1px] border-white/30 hover:bg-white text-white hover:text-black transition-all duration-300 ease-in-out">
            <p className=" font-bold text-xl">LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
}

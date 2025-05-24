import { RippleButton } from "../magicui/ripple-button";

export default function Bio() {
  return (
    <div className="h-full w-full rounded-lg bg-neutral-800/60 p-4 pt-10">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <h2 className="text-5xl font-semibold text-white mb-4">
            {`Hi, I'm Stefan`}
          </h2>
          <p className="text-white/80 text-3xl font-semibold">
            A full stack web developer <br></br>
          </p>
        </div>
        <div className="flex gap-4 justify-start">
          <RippleButton
            className="py-1 hover:bg-cyan-200 transition-all duration-300 ease-in-out"
            rippleColor="#ADD8E6"
          >
            Email me
          </RippleButton>
          <RippleButton
            className="py-1 hover:bg-cyan-200 transition-all duration-300 ease-in-out"
            rippleColor="#ADD8E6"
          >
            Download my CV
          </RippleButton>
        </div>
      </div>
    </div>
  );
}

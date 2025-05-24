export default function MainMenu() {
  return (
    <div className="flex flex-col h-full w-full justify-start gap-5 items-right py-5 px-4 cursor-pointer ">
      <div className="text-white  font-semibold text-xl capitalize p-1 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out ">
        home
      </div>
      <div className="text-white  font-semibold text-xl capitalize p-1 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
        Projects
      </div>
      <div className="text-white  font-semibold text-xl capitalize p-1 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
        work experience
      </div>
      <div className="text-white  font-semibold text-xl capitalize p-1 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
        Freelance Portfolio
      </div>
      <div className="text-white  font-semibold text-xl capitalize p-1 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
        Portfolio
      </div>
      <div className="text-white  font-semibold text-xl capitalize p-1 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
        Contact
      </div>
    </div>
  );
}

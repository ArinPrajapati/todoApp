import { FcOk } from "react-icons/fc";

const Navbar = () => {
  return (
    <div className="w-screen h-16 bg-slate-200 flex flex-row justify-center items-center text-[3rem] font-bold py-6">
      TO<span className="text-slate-400">D--</span>
      <FcOk />
    </div>
  );
};

export default Navbar;

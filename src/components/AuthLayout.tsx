import { Outlet } from "react-router";
import logo from "../assets/logo.svg";

export function AuthLayout() {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col justify-center items-center text-gray-100">
      <main className="bg-gray-500 rounded-md flex items-center flex-col p-8 md:min-w-[462px]">
        <img src={logo} alt="Logo" className="my-8" />
        <Outlet />
      </main>
    </div>
  );
}

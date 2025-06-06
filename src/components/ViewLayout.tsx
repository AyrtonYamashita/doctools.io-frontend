import { Header } from "./Header";
import { Outlet } from "react-router";

export function ViewLayout() {
  return (
    <div className="w-screen h-screen bg-blue-100 flex flex-col items-center p-8">
      <Header />
      <Outlet />
    </div>
  );
}

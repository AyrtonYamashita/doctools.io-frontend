import { Header } from "./Header";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="w-screen h-screen bg-blue-100 flex flex-col items-center p-8">
      <main className="p-3 w-full md:w-auto">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

import { Outlet } from "react-router";
import { Navbar } from "../organisms/Navbar";

export const MainLayout = () => {
 return (
    <>
      <Navbar/>
      <Outlet />
    </>
  );
}
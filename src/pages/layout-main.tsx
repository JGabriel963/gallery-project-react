import { Outlet } from "react-router";
import MainHeader from "../components/main-hearder";

export default function LayoutMain() {
  return (
    <>
      <MainHeader className="mt-9" />
      <Outlet />
    </>
  );
}

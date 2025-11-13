import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";

export const AdminLayout = () => {
  return (
    <>
      <Nav />
      <main className="admin-layout">
        <Outlet />
      </main>
    </>
  );
};

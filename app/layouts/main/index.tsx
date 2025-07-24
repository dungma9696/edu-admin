import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

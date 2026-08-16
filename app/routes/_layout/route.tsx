import { Outlet } from "react-router";
import Footer from "~/components/navigation/footer";
import Nav from "~/components/navigation/nav";

export default function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

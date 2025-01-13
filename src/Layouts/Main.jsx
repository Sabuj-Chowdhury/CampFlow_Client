import { Outlet } from "react-router-dom";
import Navbar from "../Components/shared/Navbar/Navbar";
import Footer from "../Components/shared/Footer/Footer";

const Main = () => {
  return (
    <main>
      {/* navbar */}
      <Navbar />
      {/* outlet */}
      <div>
        <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </main>
  );
};

export default Main;

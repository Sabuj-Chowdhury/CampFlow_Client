import { Outlet } from "react-router-dom";

import Footer from "../Components/shared/Footer/Footer";
import Navbar from "../Components/shared/Navbar/Navbar";

const Main = () => {
  return (
    <main>
      {/* navbar */}
      <Navbar></Navbar>
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

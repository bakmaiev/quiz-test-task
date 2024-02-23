import { Outlet, useParams } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";
import { Suspense } from "react";

const Layout = () => {
  const { id } = useParams();
  return (
    <>
      {id && <ProgressBar />}
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;

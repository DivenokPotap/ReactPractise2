import { Suspense } from "react";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import { PropTypes } from "prop-types";

import { AuthProvider } from "@/context/AuthContext";
import { Header } from ".";

export const Layout = () => {
  return (
    <div className="container">
      <AuthProvider>
        <Header />

        <main>
          <div className="tab-pane fade show active">
            <Suspense fallback={<p>Loading...</p>}>
              <Outlet />
            </Suspense>
          </div>
        </main>
      </AuthProvider>
      <ToastContainer />
    </div>
  );
};

Layout.propType = {
  children: PropTypes.node.isRequired,
};

import React, { useContext } from "react";
import AppConfig from "./components/AppConfig";
import { Outlet } from "react-router";
import { LayoutContext } from "./context/layoutcontext";

function FullScreenLayout() {
  const { appConfigRef } = useContext(LayoutContext)
  return (
    <React.Fragment>
      <Outlet />
      <AppConfig ref={appConfigRef} simple  />
    </React.Fragment>
  );
}

export default FullScreenLayout;

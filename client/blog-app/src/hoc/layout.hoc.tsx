import React from "react";
import { Outlet } from "react-router-dom";
import NavBarComponent from "../components/navbar";

function LayoutHOC(props: any) {
  return (
    <>
      <NavBarComponent />
      <Outlet />
    </>
  );
}

export default LayoutHOC;

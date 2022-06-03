import React from "react";
import FooterDetail from "../../components/FooterDetail/FooterDetail";
import HeaderDetail from "../../components/HeaderDetail/HeadeDetail";
import NavbarDetail from "../../components/NavbarDetail/NavbarDetail";
import Chart from "../../components/Chart/Chart";

function Rental() {
  return (
    <>
      <NavbarDetail />
      <HeaderDetail />
      <Chart />
      <FooterDetail />
    </>
  );
}

export default Rental;
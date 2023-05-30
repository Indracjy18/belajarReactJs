import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import NamaKaryawan from "./components/Karyawan";
import Office from "./components/Office";
function Motor(props) {
  return (
    <>
      <h1 className="header">INDRA LOOPING</h1>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<NamaKaryawan />);

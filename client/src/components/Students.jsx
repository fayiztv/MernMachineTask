import React from "react";
import NavBar from "./NavBar";
import Table from "./Table";

function Students() {
  return (
    <>
        <div>
          <NavBar />
        </div>
        <div style={{ padding: "50px" }} className="table">
          <Table />
        </div>
    </>
  );
}

export default Students;

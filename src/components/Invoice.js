import React from "react";
import { Outlet, NavLink } from "react-router-dom";

// data
import { invoices } from "../data";

function Invoice() {
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        {invoices.map((invoice) => (
          <NavLink
            key={invoice.number}
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/invoice/${invoice.number}`}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>

      <div style={{ padding: "1rem" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Invoice;

import React from "react";
import { useParams } from "react-router-dom";

// data
import { invoices } from "../data";

function InvoiceDetail() {
  const { invoiceId } = useParams();

  const invoice = invoices.find(
    (invoice) => invoice.number === Number(invoiceId)
  );

  return (
    <div>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </div>
  );
}

export default InvoiceDetail;

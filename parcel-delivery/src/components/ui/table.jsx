// src/components/ui/table.jsx

import React from "react";

// Table wrapper
export const Table = ({ children }) => (
  <table className="w-full border border-gray-300">
    <tbody>{children}</tbody> {/* Wrap children in <tbody> */}
  </table>
);

// THead with headers array
export const THead = ({ headers = [] }) => (
  <thead>
    <tr className="bg-gray-200 text-left">
      {headers.map((header, index) => (
        <th key={index} className="p-2 border">
          {header}
        </th>
      ))}
    </tr>
  </thead>
);

// Row
export const TRow = ({ children }) => (
  <tr className="border">{children}</tr>
);

// Cell
export const TCell = ({ children }) => (
  <td className="p-2 border">{children}</td>
);

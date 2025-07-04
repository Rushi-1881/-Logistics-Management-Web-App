import React from "react";

const UploadHistory = () => {
  const uploads = [
    { id: 1, fileName: "parcels_01.csv", uploadedAt: "2025-07-01", status: "Completed" },
    { id: 2, fileName: "parcels_02.csv", uploadedAt: "2025-07-02", status: "Pending" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Upload History</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">File Name</th>
            <th className="border px-2 py-1">Uploaded At</th>
            <th className="border px-2 py-1">Status</th>
          </tr>
        </thead>
        <tbody>
          {uploads.map((item) => (
            <tr key={item.id}>
              <td className="border px-2 py-1">{item.fileName}</td>
              <td className="border px-2 py-1">{item.uploadedAt}</td>
              <td className="border px-2 py-1">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UploadHistory;

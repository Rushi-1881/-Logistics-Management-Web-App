import React, { useState } from "react";

const ParcelUpload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    // 🧠 TODO: Replace URL with your backend API
    const res = await fetch("http://localhost:8080/api/parcel/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    alert("Upload Success");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Upload Parcel List</h2>
      <input
        type="file"
        accept=".csv,.json"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2">
        Upload
      </button>
    </div>
  );
};

export default ParcelUpload;

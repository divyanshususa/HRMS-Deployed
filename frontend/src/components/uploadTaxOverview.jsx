import React, { useState } from "react";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import axios from "axios";

const UploadTaxOverview = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!file) return;

    const fileExtension = file.name.split(".").pop().toLowerCase();

    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target.result;

      if (fileExtension === "csv") {
        // Parse CSV data
        Papa.parse(fileContent, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const jsonData = result.data;
            sendDataToBackend(jsonData);
          },
        });
      } else if (fileExtension === "xls" || fileExtension === "xlsx") {
        // Parse Excel data
        const workbook = XLSX.read(fileContent, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        sendDataToBackend(jsonData);
      } else {
        alert("Unsupported file format. Please upload a CSV or Excel file.");
      }
    };

    if (fileExtension === "csv") {
      reader.readAsText(file);
    } else {
      reader.readAsBinaryString(file);
    }
  };

  const sendDataToBackend = async (data) => {
    try {
      for (const record of data) {
        await axios.post(
          "http://localhost:5000/api/taxoverview/upload",
          record
        );
      }
      alert("Data uploaded successfully!");
    } catch (error) {
      console.error("Error uploading data:", error);
      alert("Failed to upload data. Please try again.");
    }
  };

  return (
    <div>
      <h2>Upload Tax Overview Data</h2>
      <input
        type="file"
        accept=".csv, .xls, .xlsx"
        onChange={handleFileChange}
      />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default UploadTaxOverview;

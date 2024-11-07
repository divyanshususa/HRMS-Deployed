import React, { useState, useRef } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { Button } from "reactstrap"; // Optional: You can also use Tailwind buttons
import ReactToPdf from "react-to-pdf";

const pdfOptions = {
  orientation: "portrait",
  unit: "mm",
  format: "a4",
};

const Form16Component = () => {
  const [formDetails, setFormDetails] = useState({
    employee: "",
    name: "",
    fatherName: "",
    designation: "",
    fromDate: "",
    toDate: "",
    challanDate: "",
    copyType: "Original",
    place: "",
    dateOfPrinting: "",
    quarterAcknowledgement: "",
    citDetails: "",
    address: "",
    city: "",
    pinCode: "",
    includePreviousEmployerIncome: false,
    includePartA: false,
  });

  const pdfRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Generate Form 16</h1>

      <ReactToPdf targetRef={pdfRef} filename="Form16.pdf" options={pdfOptions}>
        {({ toPdf }) => (
          <Button
            color="primary"
            onClick={toPdf}
            className="mb-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Download Form 16 as PDF
          </Button>
        )}
      </ReactToPdf>

      <div
        id="form16-pdf"
        className="bg-white border border-black rounded-lg shadow-lg p-6 w-full max-w-xl"
        ref={pdfRef}
      >
        <h2 className="text-xl font-semibold text-center mb-4">
          Form 16 - Income Tax
        </h2>

        {[
          { label: "Employee Name", type: "text", name: "employee" },
          {
            label: "Name (Responsible for Income Tax Deduction)",
            type: "text",
            name: "name",
          },
          { label: "Father's Name", type: "text", name: "fatherName" },
          { label: "Designation", type: "text", name: "designation" },
          { label: "From", type: "date", name: "fromDate" },
          { label: "To", type: "date", name: "toDate" },
          { label: "Challan Date Till", type: "date", name: "challanDate" },
          { label: "Place", type: "text", name: "place" },
          { label: "Date of Printing", type: "date", name: "dateOfPrinting" },
          { label: "CIT (TDS) Details", type: "textarea", name: "citDetails" },
          { label: "Address", type: "text", name: "address" },
          { label: "City", type: "text", name: "city" },
          { label: "PIN Code", type: "text", name: "pinCode" },
        ].map(({ label, type, name }, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              {label}
            </label>
            {type === "textarea" ? (
              <textarea
                name={name}
                value={formDetails[name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                rows="3"
              />
            ) : (
              <input
                type={type}
                name={name}
                value={formDetails[name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            )}
          </div>
        ))}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Type of Copy
          </label>
          <select
            name="copyType"
            value={formDetails.copyType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="Original">Original</option>
            <option value="Duplicate">Duplicate</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Include Previous Employer Income
          </label>
          <input
            type="checkbox"
            name="includePreviousEmployerIncome"
            checked={formDetails.includePreviousEmployerIncome}
            onChange={handleChange}
            className="mr-2"
          />
          <span className="text-gray-700">Yes</span>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Include 'Part A' while printing
          </label>
          <input
            type="checkbox"
            name="includePartA"
            checked={formDetails.includePartA}
            onChange={handleChange}
            className="mr-2"
          />
          <span className="text-gray-700">Yes</span>
        </div>
      </div>
    </div>
  );
};

export default Form16Component;

import React from "react";

const AgeConfirmationModal = ({ onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-4">Age Verification</h2>
        <p className="mb-6">You must be 21 or older to enter this site.</p>
        <button
          onClick={onConfirm}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          I am 21 or older
        </button>
      </div>
    </div>
  );
};

export default AgeConfirmationModal;

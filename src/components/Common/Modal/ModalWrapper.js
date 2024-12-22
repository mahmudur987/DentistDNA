import React from "react";

const ModalWrapper = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="relative p-6  h-[80vh] overflow-y-auto">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={onClose}
          >
            ✖️
          </button>
          {/* Modal Content */}
          <div className="flex justify-center items-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;

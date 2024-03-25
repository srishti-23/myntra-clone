import React from 'react';

const Spinner = ({ key }) => {
  return (
    <div key={key} className="flex justify-center items-center mt-4">
      <div className="w-6 h-6 border-4 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;

import React, { useState } from 'react';

const HoverElement = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative inline-block ${isHovered ? 'underline' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     

      {isHovered && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 p-4 rounded shadow">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      )}
    </div>
  );
};

export default HoverElement;

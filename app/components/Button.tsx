import React, { ReactNode } from 'react';

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="relative inline-block px-6 py-2 text-white font-semibold border-2 border-yellow-500 rounded-lg overflow-hidden group">

      <span className="absolute inset-0 bg-yellow-500 transition-transform duration-300 ease-in-out transform -translate-y-full group-hover:translate-y-0"></span>
   
      <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:text-white group-hover:scale-110">{children}</span>
    </button>
  );
};

export default Button;
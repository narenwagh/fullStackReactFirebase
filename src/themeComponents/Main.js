import React from "react";

const Main = ({ children }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all min-h-screen">
      {children}
    </div>
  );
};

export default Main;

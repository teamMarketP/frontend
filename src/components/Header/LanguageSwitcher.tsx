import React from "react";

const LanguageSwitcher: React.FC = () => {
  return (
    <div className="text-sm space-x-1">
      <button className="text-gray-600 hover:text-orange-600">EN</button>
      <span>|</span>
      <button className="text-orange-600 font-bold">UA</button>
    </div>
  );
};

export default LanguageSwitcher;

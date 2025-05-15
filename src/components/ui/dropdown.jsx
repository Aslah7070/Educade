// components/BootstrapDropdown.js
import React from "react";

const BootstrapDropdown = ({ labels, items }) => {
    console.log("ite",items);
    console.log("labels",labels);
    
  return (
    <div className="dropdown z-index:10">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown" 
        aria-expanded="false"
      >
        {labels}
      </button>
      <ul className="dropdown-menu  z-index:10" aria-labelledby="dropdownMenuButton">
        {items.map((item, index) => (
          <li key={index}>
            <a className="dropdown-item "  onClick={item.onClick}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BootstrapDropdown;

import React from "react";
import "../styles/IconList.css";

const IconList = () => {
  const items = [
    { text: "Trusted" },
    { text: "Experienced" },
    { text: "Professional" },
  ];

  return (
    <div className="icon-list-container">
      <ul className="icon-list">
        {items.map((item, index) => (
          <li key={index} className="icon-list-item">
            <span className="icon">
              <svg
                aria-hidden="true"
                className="e-font-icon-svg e-fas-check-circle"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
              </svg>
            </span>
            <span className="icon-text">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IconList;

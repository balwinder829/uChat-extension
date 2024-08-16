import React, { useState } from 'react';

const Accordion = ({ value }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      id="custom-iframe-container"
      style={{
        position: 'fixed',
        bottom: '3px',
        left: '5px',
        width: expanded ? '40%' : '60px',
        height: expanded ? '80%' : '60px',
        backgroundColor: 'transparent',
        zIndex: '9999',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'height 0.3s, width 0.3s',
        borderRadius: '50%'
      }}
    >
      <button
        style={{
          position: 'absolute',
          bottom: '5px',
          left: '5px',
          width: '60px',
          height: '60px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={toggleExpand}
      >
        {/* SVG Icon */}
        <svg
          enable-background="new 0 0 64 64"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" fill="rgb(42, 56, 71)" r="32" />
          <path
            d="m52 32c0-9.9-9-18-20-18s-20 8.1-20 18c0 9.6 8.3 17.4 18.8 17.9.7 3.7 1.2 6.1 1.2 6.1s5-3 9.6-8.2c6.2-3.1 10.4-9 10.4-15.8z"
            fill="#231f20"
            opacity=".2"
          />
          <path
            d="m49 28.8c0 15-17 25.2-17 25.2s-9.4-42 0-42 17 7.5 17 16.8z"
            fill="#fff"
          />
          <ellipse cx="32" cy="30" fill="#fff" rx="20" ry="18" />
          <g fill="#4f5d73">
            <circle cx="32" cy="30" r="2" />
            <circle cx="40" cy="30" r="2" />
            <circle cx="24" cy="30" r="2" />
          </g>
        </svg>
      </button>
      <iframe
        src={value ? `https://app.cig.chat/inbox/${value}` : 'https://app.cig.chat/'}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: expanded ? 'block' : 'none',
        }}
      />
    </div>
  );
};

export default Accordion;

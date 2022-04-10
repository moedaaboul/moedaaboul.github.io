import React from 'react';

const Button = ({ icon, text, classDetails, download = false }) => {
  const downloadAttribute = download ? { download: 'muhammad-daaboul-CV' } : {};
  return (
    <a
      className={classDetails}
      href="./assets/resume.pdf"
      {...downloadAttribute}
    >
      <span className="icon">
        <i>{icon}</i>
      </span>
      <span>{text}</span>
    </a>
  );
};

export default Button;

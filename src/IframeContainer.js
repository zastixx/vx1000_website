import React from 'react';
import './IframeContainer.css'; // Assuming you move your CSS to a separate file

const IframeContainer = () => {
  return (
    <div className="iframe-container">
      <iframe src="https://zastixx-vx1000.hf.space/" frameborder="0" title='llm-model-frame'></iframe>
    </div>
  );
};

export default IframeContainer;

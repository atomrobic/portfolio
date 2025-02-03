// src/components/ResumeViewer.jsx

import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
import "../Projects.css";

const ResumeViewer = () => {
  const pdfFile = '/Akhil.pdf';  // Path to your PDF file

  return (
    <div className="resume-viewer-container">
      <h1>View Resume</h1>
      <div style={{ height: '600px' }}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
          <Viewer fileUrl={pdfFile} />
        </Worker>
      </div>
    </div>
  );
};

export default ResumeViewer;

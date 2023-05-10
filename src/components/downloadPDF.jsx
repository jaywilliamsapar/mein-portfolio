import React from 'react'

function downloadPDF() {
    const url = 'https://drive.google.com/file/d/1XfAVGRFmHir0e8dgVFw6oYPwUUjp-dup/view?usp=share_link'; // Replace with your PDF file URL
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sample.pdf'; // Set the download file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

export default downloadPDF


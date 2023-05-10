import React from 'react'

const PDF_FILE_URL = 'http://localhost:3003/jwsfile.pdf'


function Pdf() {
    const downloadFileAtURL =(url) => {
        const fileName = url.split("/").pop()
        const aTag = document.createElement("a")
        aTag.href = url
        aTag.setAttribute("download", fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }
  return (
    <div>
        <button onClick={() => {downloadFileAtURL(PDF_FILE_URL)}}>Download CV</button>
    </div>
  )
}

export default Pdf

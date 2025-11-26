import React, { useState } from "react";
import axios from "axios";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.js?url"; 

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function PdfSummarizer() {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  // Extract Text
  const extractText = async (file) => {
    const buffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;

    let text = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map((i) => i.str).join(" ") + "\n";
    }
    return text;
  };

  // Upload Handler
  const handlePdfUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || file.type !== "application/pdf") {
      alert("Upload a valid PDF!");
      return;
    }

    setLoading(true);
    try {
      const text = await extractText(file);
      const res = await axios.post("https://imarticus-1.onrender.com/summarize", {
        pdfText: text,
      });
      setSummary(res.data.summary);
    } catch (err) {
      console.error(err);
      alert("Error parsing PDF!");
    }
    setLoading(false);
  };

  return (
    <div className="container mt-5 p-4 shadow rounded" style={{ maxWidth: 900 }}>
      <h2 className="text-center fw-bold mb-4" style={{ color: "#0C5C4C" }}>
        📄 AI PDF Summarizer
      </h2>

      <input type="file" className="form-control mb-3" onChange={handlePdfUpload} />

      {loading && <div className="alert alert-info text-center">Processing… ⏳</div>}

      {summary && (
        <div className="mt-4">
          <h4 className="fw-bold">📝 Summary</h4>
          <p className="border p-3 rounded bg-light">{summary}</p>
        </div>
      )}
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";

const HTMLViewer = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    // Fetch the HTML file from the public directory
    fetch("/blog1.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTML file not found!");
        }
        return response.text();
      })
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error("Error loading HTML file:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">HTML Viewer</h1>
      {htmlContent ? (
        <div
          className="prose max-w-full"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      ) : (
        <p>Loading HTML content...</p>
      )}
    </div>
  );
};

export default HTMLViewer;

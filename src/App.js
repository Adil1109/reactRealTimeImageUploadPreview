import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

export default App = () => {
  const fileRef = useRef();

  const [file, setFile] = useState();
  const [fileUrl, setFileUrl] = useState();

  const pickImageHandler = (event) => {
    if (event.target.files && event.target.files.length === 1) {
      setFile(event.target.files[0]);
    }
  };

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setFileUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "200px",
          height: "200px",
          backgroundColor: "gray",
          margin: "auto"
        }}
      >
        {fileUrl && (
          <img
            style={{ width: "200px", objectFit: "cover" }}
            src={fileUrl}
            alt="Preview"
          />
        )}
      </div>
      <input
        onChange={pickImageHandler}
        style={{ display: "none" }}
        ref={fileRef}
        type="file"
        accept=".jpg,.jpeg,.png"
      />
      <button
        style={{ marginTop: "5px" }}
        onClick={() => {
          fileRef.current.click();
        }}
      >
        Pick Image
      </button>
    </div>
  );
};

import { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import "../App.css";


const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setError("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const result = await axios.post("http://localhost:8080/api/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setResponse(result.data);
      setError(null);
    } catch (err) {
      setResponse(null);
      setError("Failed to upload file and extract information.");
    }
  };

  return (
    <div>
      <Header/>
      <div className="upload-container">
  <h1>Upload CV</h1>
  <form onSubmit={handleSubmit}>
    <label className="custom-file-upload">
      <input type="file" onChange={handleFileChange} />
      Choose file
    </label>
    <button type="submit">Upload</button>
  </form>
  {error && <p className="error-message">{error}</p>}
  {response && (
    <div className="response-container">
      <h2>Extracted Information</h2>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  )}
</div>


    </div>
  );
};

export default FileUpload;
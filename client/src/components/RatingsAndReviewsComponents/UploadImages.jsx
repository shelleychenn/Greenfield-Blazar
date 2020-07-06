import React from 'react';
import ReactDOM from 'react-dom';

const UploadImages = () => {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="upload-images">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
      />
      <div
        className="upload-images-container"
        onClick={() => imageUploader.current.click()}
      >
        <img className="upload-images-img" ref={uploadedImage} />
      </div>
    </div>
  );
};

export default UploadImages;

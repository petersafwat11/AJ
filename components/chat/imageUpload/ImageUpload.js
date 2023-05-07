import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const ImageUpload = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({
    aspect: 1,
    unit: "px",
    width: 200,
    height: 200,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageFile(file);
        setImageSrc(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleCropChange = (newCrop) => {
    setCrop(newCrop);
  };

  const handleCropComplete = (crop, pixelCrop) => {
    // Create a canvas element to draw the cropped image
    const canvas = document.createElement("canvas");
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    // Draw the cropped image onto the canvas
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        crop.width,
        crop.height
      );

      // Convert the canvas to a data URL and set it as the source of the preview image
      const croppedImage = canvas.toDataURL("image/png");
      setImageSrc(croppedImage);
    };
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imageSrc && (
        <ReactCrop
          src={imageSrc}
          crop={crop}
          onChange={handleCropChange}
          onComplete={handleCropComplete}
          circularCrop={true}
        />
      )}
      {imageSrc && <img src={imageSrc} alt="Preview" />}
    </div>
  );
};

export default ImageUpload;

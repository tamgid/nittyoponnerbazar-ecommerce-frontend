import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ZoomedImage = ({ src, alt, zoomWidth = 400, zoomHeight = 400 }) => {
  const [zoomStyle, setZoomStyle] = useState({});
  const [isZoomed, setIsZoomed] = useState(false);

  // Mouse enter event to activate zoom
  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  // Mouse leave event to deactivate zoom
  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  // Mouse move event to calculate and update zoom position
  const handleMouseMove = (e) => {
    const imageElement = e.target;
    const { left, top, width, height } = imageElement.getBoundingClientRect();

    // Calculate the mouse position relative to the image
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;

    // Calculate the background position percentage based on mouse position
    const backgroundPositionX = ((offsetX / width) * 100).toFixed(2);
    const backgroundPositionY = ((offsetY / height) * 100).toFixed(2);

    // Update the zoomed image position and background size
    setZoomStyle({
      backgroundImage: `url(${src})`,
      backgroundSize: `${zoomWidth}px ${zoomHeight}px`,
      backgroundPosition: `${backgroundPositionX}% ${backgroundPositionY}%`,
      position: 'absolute',
      top: `${top + window.scrollY}px`,  // Adjust for scrolling
      left: `${left + window.scrollX + width + 10}px`,  // Place the zoom container beside the main image
      width: `${zoomWidth}px`,
      height: `${zoomHeight}px`,
      border: '1px solid #ccc',
      zIndex: 10,
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ position: 'relative' }}
    >
      {/* Main Image */}
      <img src={src} alt={alt} className="w-full h-auto border rounded-md" />

      {/* Zoomed Image */}
      {isZoomed && <div className="zoomed-image" style={zoomStyle} />}
    </div>
  );
};

ZoomedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  zoomWidth: PropTypes.number,
  zoomHeight: PropTypes.number,
};

export default ZoomedImage;

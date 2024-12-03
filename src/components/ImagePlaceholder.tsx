import React from 'react';

interface ImagePlaceholderProps {
  width: number;
  height: number;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ width, height, className = '' }) => {
  return (
    <div
      className={`border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        aspectRatio: `${width} / ${height}`,
      }}
    />
  );
};
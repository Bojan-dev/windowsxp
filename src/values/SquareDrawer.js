import React, { useState, useEffect } from 'react';

function SquareDrawer(){
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [endPosition, setEndPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseDown = (e) => {
      setIsDrawing(true);
      setStartPosition({ x: e.clientX, y: e.clientY });
      setEndPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e) => {
      if (isDrawing) {
        setEndPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseUp = () => {
      setIsDrawing(false);
    };
    
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDrawing]);

  const squareStyle = {
    position: 'absolute',
    border: '1px dotted grey',
    width: `${Math.abs(endPosition.x - startPosition.x)}px`,
    height: `${Math.abs(endPosition.y - startPosition.y)}px`,
    left: `${Math.min(startPosition.x, endPosition.x)}px`,
    top: `${Math.min(startPosition.y, endPosition.y)}px`,
  };

  return <div style={squareStyle}></div>;
};

export default SquareDrawer;
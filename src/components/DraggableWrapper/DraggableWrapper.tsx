import React, { useState, useRef } from 'react';
import './DraggableWrapper.css';

interface DraggableWrapperProps {
  children: React.ReactNode;
  componentId: string;
  initialPosition?: { x: number; y: number };
  onPositionChange?: (id: string, position: { x: number; y: number }) => void;
  className?: string;
}

const DraggableWrapper: React.FC<DraggableWrapperProps> = ({
  children,
  componentId,
  initialPosition = { x: 0, y: 0 },
  onPositionChange,
  className = ''
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!elementRef.current) return;
    
    const rect = elementRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    
    setDragOffset({ x: offsetX, y: offsetY });
    setIsDragging(true);
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const newPosition = {
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y
    };
    
    setPosition(newPosition);
    onPositionChange?.(componentId, newPosition);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      ref={elementRef}
      className={`draggable-wrapper ${className} ${isDragging ? 'dragging' : ''}`}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="drag-handle">
        <div className="drag-dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="component-content">
        {children}
      </div>
    </div>
  );
};

export default DraggableWrapper;
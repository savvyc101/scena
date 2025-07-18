import React, { useState, useRef } from 'react';
import './ModernHomePage.css';

interface DraggableProps {
  children: React.ReactNode;
  id: string;
  initialPosition: { x: number; y: number };
  onPositionChange?: (id: string, position: { x: number; y: number }) => void;
}

const DraggableElement: React.FC<DraggableProps> = ({ 
  children, 
  id, 
  initialPosition, 
  onPositionChange 
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!elementRef.current) return;
    
    const rect = elementRef.current.getBoundingClientRect();
    setDragStart({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const newPosition = {
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    };
    
    setPosition(newPosition);
    onPositionChange?.(id, newPosition);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  return (
    <div
      ref={elementRef}
      className={`draggable-element ${isDragging ? 'dragging' : ''}`}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="drag-handle">⋮⋮</div>
      {children}
    </div>
  );
};

const ModernHomePage: React.FC = () => {
  const [elementPositions, setElementPositions] = useState<Record<string, { x: number; y: number }>>({});

  const handlePositionChange = (id: string, position: { x: number; y: number }) => {
    setElementPositions(prev => ({ ...prev, [id]: position }));
  };

  return (
    <div className="modern-homepage">
      {/* Header Navigation */}
      <DraggableElement 
        id="header" 
        initialPosition={{ x: 0, y: 0 }}
        onPositionChange={handlePositionChange}
      >
        <header className="header">
          <div className="nav-container">
            <div className="logo">FerCo</div>
            <nav className="nav-menu">
              <a href="#home">Home</a>
              <a href="#pages">Pages</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </nav>
            <button className="quote-btn">Get Quote</button>
          </div>
        </header>
      </DraggableElement>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <DraggableElement 
            id="hero-title" 
            initialPosition={{ x: 50, y: 120 }}
            onPositionChange={handlePositionChange}
          >
            <h1 className="hero-title">
              Unlock<br />
              The Full Potential Of<br />
              Your Business.
            </h1>
          </DraggableElement>

          <DraggableElement 
            id="hero-subtitle" 
            initialPosition={{ x: 50, y: 280 }}
            onPositionChange={handlePositionChange}
          >
            <p className="hero-subtitle">
              Creating compelling and innovative business solutions.
            </p>
          </DraggableElement>

          <DraggableElement 
            id="hero-button" 
            initialPosition={{ x: 50, y: 340 }}
            onPositionChange={handlePositionChange}
          >
            <button className="hero-cta">Get Started</button>
          </DraggableElement>
        </div>

        <DraggableElement 
          id="hero-image" 
          initialPosition={{ x: 500, y: 80 }}
          onPositionChange={handlePositionChange}
        >
          <div className="hero-image">
            <div className="businessman-placeholder">
              <span>👨‍💼</span>
              <div className="image-text">Professional Business Person</div>
            </div>
          </div>
        </DraggableElement>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <DraggableElement 
          id="feature-1" 
          initialPosition={{ x: 50, y: 450 }}
          onPositionChange={handlePositionChange}
        >
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Research and Discovery</h3>
            <p>Deep market analysis and insights</p>
          </div>
        </DraggableElement>

        <DraggableElement 
          id="feature-2" 
          initialPosition={{ x: 300, y: 450 }}
          onPositionChange={handlePositionChange}
        >
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Planning For The Future</h3>
            <p>Strategic planning and roadmap</p>
          </div>
        </DraggableElement>

        <DraggableElement 
          id="feature-3" 
          initialPosition={{ x: 550, y: 450 }}
          onPositionChange={handlePositionChange}
        >
          <div className="feature-card">
            <div className="feature-icon">🏢</div>
            <h3>Building Your Brand</h3>
            <p>Brand development and identity</p>
          </div>
        </DraggableElement>
      </div>

      {/* Background Elements */}
      <DraggableElement 
        id="bg-plant" 
        initialPosition={{ x: 0, y: 200 }}
        onPositionChange={handlePositionChange}
      >
        <div className="bg-plant">🌿</div>
      </DraggableElement>

      <DraggableElement 
        id="bg-grid" 
        initialPosition={{ x: 700, y: 50 }}
        onPositionChange={handlePositionChange}
      >
        <div className="bg-grid">
          <div className="grid-pattern"></div>
        </div>
      </DraggableElement>

      {/* Position Debug Panel */}
      <div className="debug-panel">
        <h4>Element Positions:</h4>
        <div className="position-list">
          {Object.entries(elementPositions).map(([id, pos]) => (
            <div key={id} className="position-item">
              <strong>{id}:</strong> x: {Math.round(pos.x)}, y: {Math.round(pos.y)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernHomePage;
import React, { useState } from 'react';
import Hero from '../Hero/Hero';
import './TestDragDrop.css';

const TestDragDrop: React.FC = () => {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <div className="test-drag-drop">
      <div className="toolbar">
        <h2>Hero Section - Drag Individual Elements</h2>
        <div className="controls">
          <label>
            <input 
              type="checkbox" 
              checked={showGrid}
              onChange={(e) => setShowGrid(e.target.checked)}
            />
            Show Grid
          </label>
        </div>
        <p>Hover over elements to see drag handles, then drag them around!</p>
      </div>

      <div className="canvas">
        {showGrid && <div className="grid-overlay active" />}
        <Hero />
      </div>
    </div>
  );
};

export default TestDragDrop;
import React from 'react';
import Hero from './Hero';
import DraggableWrapper from '../DraggableWrapper/DraggableWrapper';

interface DraggableHeroProps {
  componentId?: string;
  initialPosition?: { x: number; y: number };
  onPositionChange?: (id: string, position: { x: number; y: number }) => void;
  className?: string;
}

const DraggableHero: React.FC<DraggableHeroProps> = ({
  componentId = 'hero-component',
  initialPosition = { x: 100, y: 100 },
  onPositionChange,
  className = ''
}) => {
  return (
    <DraggableWrapper
      componentId={componentId}
      initialPosition={initialPosition}
      onPositionChange={onPositionChange}
      className={className}
    >
      <Hero />
    </DraggableWrapper>
  );
};

export default DraggableHero;
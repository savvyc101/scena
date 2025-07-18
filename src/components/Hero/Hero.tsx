import React from 'react';
import DraggableWrapper from '../DraggableWrapper/DraggableWrapper';
import './Hero.css';

interface HeroProps {
  className?: string;
}

const ClickHandler = (): void => {
    window.scrollTo(10, 0);
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
    const handlePositionChange = (id: string, position: { x: number; y: number }) => {
        console.log(`Element ${id} moved to:`, position);
    };

    return (
        <section className={`hero_section ${className}`}>
            <div className="bg_shape">
                <svg viewBox="0 0 1920 1075" fill="none">
                    <path d="M0 0H1920V1000C1920 1000 1632 619 962 917C292 1215 0 1000 0 1000V0Z" fill="#EBF7FF" />
                </svg>
            </div>
            
            <DraggableWrapper 
                componentId="hero-content"
                initialPosition={{ x: 50, y: 50 }}
                onPositionChange={handlePositionChange}
            >
                <div className="content">
                    <DraggableWrapper 
                        componentId="hero-subtitle"
                        initialPosition={{ x: 0, y: 0 }}
                        onPositionChange={handlePositionChange}
                    >
                        <h2>We are Here for You</h2>
                    </DraggableWrapper>
                    
                    <DraggableWrapper 
                        componentId="hero-title"
                        initialPosition={{ x: 0, y: 50 }}
                        onPositionChange={handlePositionChange}
                    >
                        <h3>Helping People Lead
                            Healthy & Happy Lives</h3>
                    </DraggableWrapper>
                    
                    <DraggableWrapper 
                        componentId="hero-description"
                        initialPosition={{ x: 0, y: 150 }}
                        onPositionChange={handlePositionChange}
                    >
                        <p>Nisi molestie fusce quis eget vitae. Aliquam senectus id
                            placerat egestas sed sed venenatis nisl.
                            Tincidunt faucibus facilisi vestibulum et ut congue in eget. Augue purus hendrerit tempus
                            consequat ut sit.</p>
                    </DraggableWrapper>
                    
                    <DraggableWrapper 
                        componentId="hero-button"
                        initialPosition={{ x: 0, y: 250 }}
                        onPositionChange={handlePositionChange}
                    >
                        <button onClick={ClickHandler} className="theme-btn">Make
                            Appointment</button>
                    </DraggableWrapper>
                </div>
            </DraggableWrapper>

            <DraggableWrapper 
                componentId="hero-media"
                initialPosition={{ x: 600, y: 50 }}
                onPositionChange={handlePositionChange}
            >
                <div className="image_content">
                    <DraggableWrapper 
                        componentId="hero-video"
                        initialPosition={{ x: 0, y: 0 }}
                        onPositionChange={handlePositionChange}
                    >
                        <div className="video">
                            <div className="video-placeholder">
                                <span>🎥 Video Content</span>
                            </div>
                        </div>
                    </DraggableWrapper>
                    
                    <DraggableWrapper 
                        componentId="hero-image"
                        initialPosition={{ x: 0, y: 100 }}
                        onPositionChange={handlePositionChange}
                    >
                        <div className="image">
                            <div className="image-placeholder">
                                <span>📸 Hero Image</span>
                            </div>
                        </div>
                    </DraggableWrapper>
                    
                    <DraggableWrapper 
                        componentId="hero-shape"
                        initialPosition={{ x: 200, y: 80 }}
                        onPositionChange={handlePositionChange}
                    >
                        <div className="bg_shape_2">
                            <div className="shape-placeholder">
                                <span>🎨 Background Shape</span>
                            </div>
                        </div>
                    </DraggableWrapper>
                </div>
            </DraggableWrapper>
        </section>
    );
}

export default Hero;
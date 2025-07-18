import React from 'react';

const SimpleHero: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
        gap: '60px'
      }}>
        {/* Content Section */}
        <div style={{ flex: 1 }}>
          <h2 style={{
            fontSize: '1.2rem',
            marginBottom: '10px',
            color: '#E3F2FD',
            fontWeight: '500'
          }}>
            We are Here for You
          </h2>
          
          <h3 style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
            lineHeight: '1.2',
            fontWeight: '700'
          }}>
            Helping People Lead<br />
            Healthy & Happy Lives
          </h3>
          
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            marginBottom: '30px',
            color: '#E8EAF6'
          }}>
            Nisi molestie fusce quis eget vitae. Aliquam senectus id
            placerat egestas sed sed venenatis nisl.
            Tincidunt faucibus facilisi vestibulum et ut congue in eget. Augue purus hendrerit tempus
            consequat ut sit.
          </p>
          
          <button style={{
            padding: '12px 30px',
            background: '#FF6B6B',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#FF5252';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = '#FF6B6B';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            Make Appointment
          </button>
        </div>

        {/* Media Section */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            width: '120px',
            height: '80px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '2px dashed rgba(255, 255, 255, 0.3)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            fontSize: '1.1rem'
          }}>
            🎥 Video Content
          </div>
          
          <div style={{
            width: '280px',
            height: '200px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '2px dashed rgba(255, 255, 255, 0.3)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            position: 'relative'
          }}>
            📸 Hero Image
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              width: '100px',
              height: '60px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px dashed rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem'
            }}>
              🎨 Shape
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleHero;
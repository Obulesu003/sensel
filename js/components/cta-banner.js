export const CtaBanner = () => {
  return `
      <section style="
        padding: 8rem 0; 
        background: #000; 
        position: relative; 
        overflow: hidden;
      ">
        <!-- Background Grid Effect -->
        <div style="
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.3;
          pointer-events: none;
        "></div>
        
        <!-- Radical Glow -->
        <div style="
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 80%; height: 80%;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%);
          filter: blur(60px);
          z-index: 1;
        "></div>
  
        <div class="container" style="position: relative; z-index: 2;">
          <div style="
            background: rgba(24, 24, 27, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 24px;
            padding: 5rem 2rem;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 0 0 1px rgba(255,255,255,0.05), 0 20px 50px -10px rgba(0,0,0,0.5);
          ">
            <!-- Top Border Accent -->
            <div style="
              position: absolute; top: 0; left: 0; width: 100%; height: 1px;
              background: linear-gradient(90deg, transparent, #22d3ee, transparent);
            "></div>
  
            <h2 style="
              font-family: 'Manrope', sans-serif; 
              font-size: 3.5rem; 
              font-weight: 800; 
              margin-bottom: 1.5rem; 
              color: white;
              letter-spacing: -0.02em;
            ">
              Ready to <span style="color: #22d3ee; text-shadow: 0 0 20px rgba(34,211,238,0.3);">Optimize</span> Your Fleet?
            </h2>
            
            <p style="
              font-size: 1.25rem; 
              max-width: 650px; 
              margin: 0 auto 3.5rem auto; 
              color: rgba(255,255,255,0.7); 
              line-height: 1.6;
            ">
              Join 1,200+ enterprises using Sensel to track, secure, and scale their operations. 
              Deployment takes less than 48 hours.
            </p>
            
            <button style="
              background: #22d3ee;
              color: #000;
              border: none;
              padding: 1.4rem 3.5rem;
              font-size: 1.1rem;
              font-weight: 700;
              border-radius: 8px;
              cursor: pointer;
              transition: all 0.3s ease;
              box-shadow: 0 0 20px rgba(34, 211, 238, 0.2);
              text-transform: uppercase;
              letter-spacing: 0.05em;
            " 
            onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 0 30px rgba(34, 211, 238, 0.4)'" 
            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 0 20px rgba(34, 211, 238, 0.2)'">
              Schedule a Free Pilot
            </button>
  
            <div style="margin-top: 2rem; font-size: 0.9rem; color: rgba(255,255,255,0.4);">
              Questions? Call us directly: <span style="color: white; border-bottom: 1px dotted rgba(255,255,255,0.3);">+91 98450 12345</span>
            </div>
            
          </div>
        </div>
      </section>
    `;
};


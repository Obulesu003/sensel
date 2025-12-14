export const Ecosystem = () => {
    return `
      <style>
        .eco-section {
          padding: 8rem 0;
          background: #000;
          color: white;
          text-align: center;
        }
        
        /* Flowchart Container */
        .eco-flow {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          margin-top: 4rem;
          flex-wrap: wrap;
        }
  
        .eco-node {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 2rem;
          border-radius: 12px;
          min-width: 200px;
          position: relative;
        }
        
        .eco-node h4 {
           color: #22d3ee;
           margin-bottom: 0.5rem;
           font-family: 'Manrope', sans-serif;
           font-weight: 700;
        }
        .eco-node p { font-size: 0.9rem; color: rgba(255,255,255,0.6); }
  
        /* Arrow Connectors */
        .eco-arrow {
          color: rgba(255,255,255,0.2);
          font-size: 1.5rem;
        }
        
        @media (max-width: 800px) {
           .eco-flow { flex-direction: column; }
           .eco-arrow { transform: rotate(90deg); }
        }
      </style>
  
      <section class="eco-section">
        <div class="container">
           <h2 style="font-family: 'Manrope', sans-serif; font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem;">
             The Sensel Ecosystem
           </h2>
           <p style="color: rgba(255,255,255,0.6);">From the edge of the network to the palm of your hand.</p>
           
           <div class="eco-flow">
              <!-- Node 1 -->
              <div class="eco-node">
                 <h4>1. Capture</h4>
                 <p>Smart Telematics Unit</p>
                 <div style="font-size: 0.8rem; margin-top: 0.5rem; opacity: 0.5;">GPS · OBD · Sensors</div>
              </div>
  
              <div class="eco-arrow">→</div>
  
              <!-- Node 2 -->
              <div class="eco-node">
                 <h4>2. Transmit</h4>
                 <p>Secure Connectivity</p>
                 <div style="font-size: 0.8rem; margin-top: 0.5rem; opacity: 0.5;">4G LTE · Satellite · GSM</div>
              </div>
  
              <div class="eco-arrow">→</div>
  
              <!-- Node 3 -->
              <div class="eco-node">
                 <h4>3. Process</h4>
                 <p>Cloud Intelligence</p>
                 <div style="font-size: 0.8rem; margin-top: 0.5rem; opacity: 0.5;">Big Data · AI Analytics</div>
              </div>
  
              <div class="eco-arrow">→</div>
  
              <!-- Node 4 -->
              <div class="eco-node">
                 <h4>4. Action</h4>
                 <p>User Interface</p>
                 <div style="font-size: 0.8rem; margin-top: 0.5rem; opacity: 0.5;">Web · Mobile · API</div>
              </div>
           </div>
        </div>
      </section>
    `;
};


export const Testimonials = () => {
    return `
      <style>
        .testi-section {
          padding: 6rem 0;
          background: #09090b;
        }
        .testi-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }
        .testi-card {
           background: linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
           border: 1px solid rgba(255,255,255,0.05);
           padding: 2.5rem;
           border-radius: 16px;
           position: relative;
        }
        .testi-quote {
           font-size: 1.2rem;
           color: rgba(255,255,255,0.9);
           font-style: italic;
           margin-bottom: 2rem;
           line-height: 1.6;
        }
        .testi-author {
           display: flex;
           align-items: center;
           gap: 1rem;
        }
        .author-avatar {
           width: 50px; height: 50px;
           background: #333;
           border-radius: 50%;
           display: flex; align-items: center; justify-content: center;
           font-weight: 700; color: white;
        }
        .author-info h5 { margin: 0; color: white; font-size: 1rem; }
        .author-info span { font-size: 0.8rem; color: #22d3ee; }
  
        @media (max-width: 800px) { .testi-grid { grid-template-columns: 1fr; } }
      </style>
  
      <section class="testi-section">
        <div class="container">
           <h2 style="font-family: 'Manrope', sans-serif; font-size: 2.5rem; font-weight: 800; text-align: center; color: white;">
             Trusted by Industry Giants
           </h2>
           
           <div class="testi-grid">
              <div class="testi-card">
                 <p class="testi-quote">
                   "Sensel's hazardous cargo solution reduced our transit violations by 90% in just three months. The VTX hardware is bomb-proof."
                 </p>
                 <div class="testi-author">
                    <div class="author-avatar">RD</div>
                    <div class="author-info">
                       <h5>Rajesh Desai</h5>
                       <span>Fleet Manager, Leading Oil & Gas PSU</span>
                    </div>
                 </div>
              </div>
  
              <div class="testi-card">
                 <p class="testi-quote">
                   "We needed a solution that worked in remote mine sites with zero coverage. Sensel's store-and-forward tech saved our operations."
                 </p>
                 <div class="testi-author">
                    <div class="author-avatar">AK</div>
                    <div class="author-info">
                       <h5>Amit Kumar</h5>
                       <span>Logistics Head, Mining Conglomerate</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    `;
};


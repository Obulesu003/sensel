export const WhySensel = () => {
    return `
    <style>
      .why-section {
        padding: 8rem 0;
        background: #09090b;
        position: relative;
        overflow: hidden;
      }
      /* Background Glow */
      .why-section::before {
        content: '';
        position: absolute;
        top: 0; left: 50%;
        transform: translateX(-50%);
        width: 100%; height: 100%;
        background: radial-gradient(circle at center, rgba(34, 211, 238, 0.05), transparent 60%);
        z-index: 0;
      }

      .why-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        position: relative;
        z-index: 1;
      }

      .why-card {
        background: rgba(255,255,255,0.02);
        border: 1px solid rgba(255,255,255,0.05);
        padding: 3rem 2rem;
        border-radius: 16px;
        transition: all 0.3s ease;
      }
      .why-card:hover {
        background: rgba(255,255,255,0.04);
        border-color: rgba(34, 211, 238, 0.3);
        transform: translateY(-5px);
      }

      .why-icon {
        width: 60px; height: 60px;
        background: rgba(34, 211, 238, 0.1);
        border-radius: 12px;
        display: flex; align-items: center; justify-content: center;
        margin-bottom: 2rem;
        color: #22d3ee; /* Cyan Accent */
      }
      
      .why-title {
        font-family: 'Manrope', sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        color: white;
        margin-bottom: 1rem;
      }
      .why-desc {
        font-family: 'Manrope', sans-serif;
        font-size: 1rem;
        color: rgba(255,255,255,0.6);
        line-height: 1.6;
      }

      @media (max-width: 900px) {
        .why-grid { grid-template-columns: 1fr; }
      }
    </style>

    <section class="why-section">
      <div class="container">
        <div style="text-align: center; margin-bottom: 5rem; position: relative; z-index: 1;">
          <h2 style="font-family: 'Manrope', sans-serif; font-size: 3rem; font-weight: 800; color: white; margin-bottom: 1rem;">
            Why Leading Enterprises <br><span style="color: #22d3ee;">Choose Sensel</span>
          </h2>
          <p style="color: rgba(255,255,255,0.6); max-width: 600px; margin: 0 auto; font-size: 1.1rem;">
            We don't just track dots on a map. We engineer intelligent decision systems.
          </p>
        </div>

        <div class="why-grid">
          <!-- Card 1 -->
          <div class="why-card">
            <div class="why-icon">
              <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <h3 class="why-title">Edge AI Hardware</h3>
            <p class="why-desc">
              Proprietary VTX hardware processes data locally on the device. Instant crash detection and driver alerts with zero cloud latency.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="why-card">
            <div class="why-icon">
              <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 class="why-title">Bank-Grade Security</h3>
            <p class="why-desc">
              End-to-end encrypted data streams. AIS-140 certified and trusted by defense and hazardous cargo sectors across India.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="why-card">
            <div class="why-icon">
              <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h3 class="why-title">99.9% Uptime SLA</h3>
            <p class="why-desc">
              Built on a redundant cloud architecture that scales with your fleet. Whether you have 50 trucks or 50,000, we never blink.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
};

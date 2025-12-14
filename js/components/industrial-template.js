import { Navbar, initNavbar } from './navbar.js';
import { Footer } from './footer.js';

window.switchTerminalTab = (tabId) => {
   // Update Tabs
   document.querySelectorAll('.terminal-tab').forEach((btn, index) => {
      const key = ['jrm', 'driver', 'esafe', 'analytics'][index];
      if (key === tabId) btn.classList.add('active');
      else btn.classList.remove('active');
   });

   // Update Content
   document.querySelectorAll('.terminal-content').forEach(content => {
      if (content.id === 'tab-' + tabId) content.classList.add('active');
      else content.classList.remove('active');
   });
};

const resolvePath = (path) => {
   if (window.location.pathname.includes('/solutions/')) {
      return '../../' + path;
   }
   return path;
};

export const IndustrialTemplate = () => {
   // Generated Assets
   const heroImg = '../../assets/generated/hazmat_hero_tanker.png';
   const jrmImg = '../../assets/generated/hazmat_jrm_map.png';
   const driverAppImg = '../../assets/generated/hazmat_driver_app.png';
   const esafeImg = '../../assets/generated/hazmat_esafe_workflow.png';
   const analyticsImg = '../../assets/generated/hazmat_analytics_dashboard.png';

   const CheckIcon = `<svg width="20" height="20" fill="none" stroke="var(--accent)" stroke-width="2" viewBox="0 0 24 24" style="min-width: 20px;"><path d="M20 6L9 17l-5-5"/></svg>`;

   return `
    <style>
      .industrial-page {
        --accent: #f59e0b; /* Safety Amber/Orange */
        --accent-glow: rgba(245, 158, 11, 0.3);
        font-family: 'Inter', sans-serif;
        background-color: #09090b;
        color: white;
        overflow-x: hidden;
      }
      .industrial-page h1, .industrial-page h2, .industrial-page h3 {
        font-family: 'Outfit', sans-serif;
      }

      /* Hero Animation */
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }

      .hero-section {
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        overflow: hidden;
      }
      
      .hero-bg {
        position: absolute;
        inset: 0;
        background: url('${heroImg}') center/cover no-repeat;
        filter: brightness(0.6);
        z-index: 1;
      }
      
      .hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 100%);
        z-index: 2;
      }

      /* Compliance Grid */
       .compliance-grid {
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         gap: 2rem;
         max-width: 900px;
         margin: 5rem auto;
         padding: 0 2rem;
       }
       .compliance-badge {
         background: rgba(255,255,255,0.03);
         border: 1px solid rgba(255,255,255,0.05);
         padding: 2rem;
         border-radius: 16px;
         text-align: center;
       }

       /* Mobile Responsiveness */
       @media (max-width: 900px) {
         .compliance-grid {
           grid-template-columns: 1fr;
         }
       }
    </style>

    <div class="industrial-page">
      ${Navbar()}
      
      <!-- HERO -->
      <section class="hero-section">
        <div class="hero-bg"></div>
        <div class="hero-overlay"></div>
        <div class="container" style="position: relative; z-index: 3; padding-left: 5vw;">
          <div style="max-width: 700px;">
            <div style="
              display: inline-flex; 
              align-items: center; 
              gap: 8px; 
              padding: 6px 16px; 
              background: rgba(245, 158, 11, 0.1); 
              border: 1px solid rgba(245, 158, 11, 0.4); 
              color: var(--accent); 
              border-radius: 100px; 
              font-weight: 600; 
              margin-bottom: 24px;
              font-size: 0.9rem;
            ">
              <span style="width: 8px; height: 8px; background: var(--accent); border-radius: 50%; display: block; box-shadow: 0 0 10px var(--accent);"></span>
              FLEET SMART™ HAZARDOUS CARGO
            </div>
            
            <h1 style="font-size: clamp(3rem, 5vw, 4.5rem); line-height: 1.1; margin-bottom: 1.5rem; font-weight: 800;">
              Zero Accidents.<br>
              <span style="color: transparent; -webkit-text-stroke: 1px white;">Zero Violations.</span>
            </h1>
            
            <p style="font-size: 1.25rem; color: rgba(255,255,255,0.7); margin-bottom: 2.5rem; line-height: 1.6; max-width: 600px;">
              The industry standard for transporting hazardous goods. PESO compliant, AIS-140 certified, and engineered for absolute safety compliance.
            </p>
          </div>
        </div>
      </section>

      <!-- HARDWARE SPECS SECTION (Blueprints) -->
      <section style="padding: 6rem 0; background: linear-gradient(to bottom, #09090b, #1a1a1a); border-bottom: 1px solid rgba(255,255,255,0.05);">
         <div class="container">
           <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start;">
              
              <!-- Device Image -->
              <div style="position: sticky; top: 100px;">
                 <div style="
                    position: absolute; 
                    inset: 0; 
                    background: radial-gradient(circle at center, rgba(245, 158, 11, 0.2), transparent 70%);
                    filter: blur(40px);
                 "></div>
                 <img src="../../assets/generated/vtx10c_device.png" style="width: 100%; position: relative; z-index: 2; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.5)); transform: scale(1.1);" alt="Sensel Fleet Smart VTX 10 C">
                 <div style="text-align: center; margin-top: 3rem;">
                    <h3 style="font-size: 2rem; font-weight: 800; letter-spacing: -0.5px;">VTX 10 C</h3>
                    <div style="display: inline-block; background: rgba(255,255,255,0.1); padding: 4px 12px; border-radius: 4px; font-size: 0.8rem; font-family: monospace; color: var(--accent); border: 1px solid rgba(255,255,255,0.1); margin-top: 0.5rem;">AIS-140 CERTIFIED</div>
                 </div>
              </div>

              <!-- Specs & Intro -->
              <div>
                 <h2 style="font-size: 2.8rem; font-weight: 700; margin-bottom: 1.5rem; line-height: 1.1;">
                    Industrial Edge <br> <span style="color: var(--accent);">Telematics Unit</span>
                 </h2>
                 <p style="font-size: 1.1rem; line-height: 1.7; color: rgba(255,255,255,0.7); margin-bottom: 3rem;">
                    Engineered for hazardous cargo operations. The VTX 10 C combines high-precision tracking with multi-sensor edge computing. 
                    <strong>PESO Compliant</strong>, <strong>IP67 Waterproof</strong>, and built to withstand extreme industrial environments.
                 </p>
                 
                 <!-- BLUEPRINT DATA SHEET -->
                 <style>
                    .spec-sheet {
                       background: rgba(0,0,0,0.6);
                       border: 1px solid rgba(255,255,255,0.1);
                       border-radius: 4px;
                       backdrop-filter: blur(10px);
                       padding: 2rem;
                    }
                    .spec-section {
                       margin-bottom: 2rem;
                    }
                    .spec-section:last-child { margin-bottom: 0; }
                    
                    .spec-header {
                       font-family: 'Inter', monospace; /* Tech feel */
                       font-size: 0.75rem;
                       text-transform: uppercase;
                       letter-spacing: 0.15em;
                       color: var(--accent);
                       margin-bottom: 1rem;
                       display: flex;
                       align-items: center;
                       gap: 1rem;
                    }
                    .spec-header::after {
                       content: '';
                       flex: 1;
                       height: 1px;
                       background: rgba(255,255,255,0.1);
                    }

                    .spec-grid {
                       display: grid; 
                       grid-template-columns: repeat(3, 1fr);
                       gap: 0.8rem 2rem;
                    }
                    .spec-item {
                       font-size: 0.85rem;
                       color: rgba(255,255,255,0.8);
                       display: flex;
                       align-items: center;
                       gap: 0.5rem;
                    }
                    .spec-item::before {
                       content: '›'; 
                       color: rgba(255,255,255,0.3);
                    }
                    
                    @media (max-width: 600px) { .spec-grid { grid-template-columns: 1fr; } }
                 </style>

                 <div class="spec-sheet">
                    <!-- SECTION 1: CORE -->
                    <div class="spec-section">
                       <div class="spec-header">01 // Hardware Architecture</div>
                       <div class="spec-grid">
                          <div class="spec-item">Input: 6 - 30V</div>
                          <div class="spec-item">Bat: 5 Hrs (850mAh)</div>
                          <div class="spec-item">Flash: 128 MB</div>
                          <div class="spec-item">IP6X Waterproof</div>
                          <div class="spec-item">Ant: Internal GSM/GPS</div>
                          <div class="spec-item">Temp: -45°C ~ +80°C</div>
                          <div class="spec-item">Dims: 85x50x15mm</div>
                          <div class="spec-item">Wt: 80g</div>
                          <div class="spec-item">LED: 2x Status</div>
                       </div>
                    </div>

                    <!-- SECTION 2: SENSORS -->
                    <div class="spec-section">
                       <div class="spec-header">02 // Sensor Interface</div>
                       <div class="spec-grid">
                          <div class="spec-item">3-Axis Accelerometer</div>
                          <div class="spec-item">Panic Button I/F</div>
                          <div class="spec-item">Fuel Sensor I/F</div>
                          <div class="spec-item">Temp Sensor I/F</div>
                          <div class="spec-item">Humidity Sensor I/F</div>
                          <div class="spec-item">Ignition Detect</div>
                          <div class="spec-item">A/C Status Detect</div>
                          <div class="spec-item">Door Sensor I/F</div>
                       </div>
                    </div>

                    <!-- SECTION 3: INTELLIGENCE -->
                    <div class="spec-section">
                       <div class="spec-header">03 // Alerts & Analytics</div>
                       <div class="spec-grid">
                          <div class="spec-item">Crash Detection</div>
                          <div class="spec-item">Harsh Braking</div>
                          <div class="spec-item">Over Speeding</div>
                          <div class="spec-item">Device Disconnect</div>
                          <div class="spec-item">Geofence Entry/Exit</div>
                          <div class="spec-item">Route Deviation</div>
                          <div class="spec-item">Offline Data Sync</div>
                          <div class="spec-item">OTA Updates</div>
                          <div class="spec-item">Bluetooth 4.0 LE</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
         </div>
      </section>

      <!-- DIFFERENTIATOR: COMPARISON MATRIX -->
      <section style="padding: 6rem 0; background: #0c0c0e;">
         <div class="container">
            <h2 style="font-size: 2.5rem; text-align: center; margin-bottom: 4rem;">The <span style="color: var(--accent);">Industrial Advantage</span></h2>
            
            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; overflow: hidden;">
               <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; border-bottom: 1px solid rgba(255,255,255,0.1); padding: 1.5rem 2rem; background: rgba(255,255,255,0.02);">
                  <div style="font-family: monospace; color: rgba(255,255,255,0.5);">FEATURE</div>
                  <div style="font-family: monospace; color: rgba(255,255,255,0.5); text-align: center;">STANDARD GPS</div>
                  <div style="font-family: monospace; color: var(--accent); text-align: center; font-weight: 700;">SENSEL VTX 10 C</div>
               </div>
               
               <!-- Row 1 -->
               <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 1.5rem 2rem; align-items: center;">
                  <div style="color: white; font-weight: 600;">Hardware Durability</div>
                  <div style="text-align: center; color: rgba(255,255,255,0.6);">Plastic Casing</div>
                  <div style="text-align: center; color: var(--accent);">IP67 Ruggedized</div>
               </div>
               <!-- Row 2 -->
               <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 1.5rem 2rem; align-items: center;">
                  <div style="color: white; font-weight: 600;">Data Processing</div>
                  <div style="text-align: center; color: rgba(255,255,255,0.6);">Cloud Only (Latency)</div>
                  <div style="text-align: center; color: var(--accent);">Edge Computing (Real-time)</div>
               </div>
               <!-- Row 3 -->
               <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 1.5rem 2rem; align-items: center;">
                  <div style="color: white; font-weight: 600;">Safety Certification</div>
                  <div style="text-align: center; color: rgba(255,255,255,0.6);">None</div>
                  <div style="text-align: center; color: var(--accent);">PESO / AIS-140</div>
               </div>
               <!-- Row 4 -->
               <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; padding: 1.5rem 2rem; align-items: center;">
                  <div style="color: white; font-weight: 600;">Battery Backup</div>
                  <div style="text-align: center; color: rgba(255,255,255,0.6);">1 - 2 Hours</div>
                  <div style="text-align: center; color: var(--accent);">5+ Hours Li-Po</div>
               </div>
            </div>
         </div>
      </section>

      <!-- FEATURE SECTIONS: COMMAND TERMINAL CONSOLE -->
      <style>
        .terminal-wrapper {
          padding: 4rem 0;
        }
        .terminal-frame {
          background: #09090b;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          box-shadow: 0 0 50px rgba(0,0,0,0.6);
          overflow: hidden;
          display: grid;
          grid-template-columns: 260px 1fr;
          min-height: 550px;
        }
        
        /* TERMINAL SIDEBAR */
        .terminal-nav {
          background: rgba(20, 20, 25, 0.6);
          border-right: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(10px);
        }
        .terminal-header {
           padding: 1.2rem 1.5rem;
           font-family: 'Inter', monospace;
           font-size: 0.7rem;
           letter-spacing: 0.15em;
           color: rgba(255,255,255,0.3);
           border-bottom: 1px solid rgba(255,255,255,0.05);
           text-transform: uppercase;
        }
        .terminal-tabs {
           flex: 1;
           display: flex;
           flex-direction: column;
        }
        .terminal-tab {
           background: transparent;
           border: none;
           border-bottom: 1px solid rgba(255,255,255,0.03);
           padding: 1.2rem 1.5rem;
           color: rgba(255,255,255,0.5);
           font-family: 'Outfit', sans-serif;
           font-size: 0.95rem;
           text-align: left;
           cursor: pointer;
           transition: all 0.2s ease;
           display: flex;
           align-items: center;
           gap: 12px;
           position: relative;
        }
        .terminal-tab:hover {
           background: rgba(255,255,255,0.03);
           color: white;
           padding-left: 1.8rem;
        }
        .terminal-tab.active {
           background: rgba(245, 158, 11, 0.08);
           color: var(--accent);
           border-right: 3px solid var(--accent);
        }
        .tab-indicator {
           font-size: 0.7rem; 
           font-family: monospace; 
           opacity: 0.6;
           background: rgba(255,255,255,0.1);
           padding: 2px 6px;
           border-radius: 4px;
        }
        .terminal-tab.active .tab-indicator {
           background: var(--accent);
           color: black;
           opacity: 1;
        }

        /* TERMINAL SCREEN */
        .terminal-screen {
           /* Tech Grid Background */
           background-color: #0c0c0e;
           background-image: 
             linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
           background-size: 40px 40px;
           
           padding: 3rem;
           position: relative;
           display: flex;
           flex-direction: column;
           justify-content: center;
        }
        
        /* Corner Accents */
        .terminal-screen::before {
           content: ''; position: absolute; top: 20px; left: 20px;
           width: 20px; height: 20px;
           border-top: 2px solid var(--accent); border-left: 2px solid var(--accent);
           opacity: 0.5;
        }
        .terminal-screen::after {
           content: ''; position: absolute; bottom: 20px; right: 20px;
           width: 20px; height: 20px;
           border-bottom: 2px solid var(--accent); border-right: 2px solid var(--accent);
           opacity: 0.5;
        }

        .terminal-content {
           display: none;
           animation: fadeIn 0.4s ease;
        }
        .terminal-content.active { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3rem; align-items: center; }
        
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        /* Screen Elements */
        .screen-status {
           font-family: monospace;
           color: var(--accent);
           font-size: 0.75rem;
           margin-bottom: 1rem;
           display: inline-block;
           border: 1px solid rgba(245, 158, 11, 0.3);
           padding: 4px 10px;
           border-radius: 4px;
           background: rgba(245, 158, 11, 0.05);
        }
        .screen-title {
           font-size: 2.5rem;
           font-weight: 800;
           margin-bottom: 1rem;
           line-height: 1.1;
           background: linear-gradient(to bottom right, #ffffff, #888);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
        }
        .screen-desc {
           color: rgba(255,255,255,0.65);
           margin-bottom: 2.5rem;
           font-size: 1.05rem;
           line-height: 1.6;
           max-width: 90%;
        }
        .screen-list {
           list-style: none;
           padding: 0;
           display: flex;
           flex-direction: column;
           gap: 1rem;
        }
        .screen-list li {
           display: flex;
           gap: 12px;
           font-size: 0.95rem;
           color: rgba(255,255,255,0.9);
           align-items: center;
           background: rgba(255,255,255,0.02);
           padding: 10px;
           border-radius: 6px;
           border-left: 2px solid rgba(255,255,255,0.1);
        }
        .screen-image-wrapper {
           position: relative;
           border-radius: 12px;
           overflow: hidden;
           border: 1px solid rgba(255,255,255,0.1);
           background: black;
           aspect-ratio: 16/10;
           box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }
        .screen-image-wrapper img {
           width: 100%;
           height: 100%;
           object-fit: cover;
           opacity: 0.95;
        }
        
        @media (max-width: 900px) {
           .terminal-frame { grid-template-columns: 1fr; min-height: auto; }
           .terminal-nav { flex-direction: row; overflow-x: auto; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.05); }
           .terminal-tab { padding: 1rem; white-space: nowrap; font-size: 0.85rem; border-bottom: none; }
           .terminal-tab.active { border-right: none; border-bottom: 3px solid var(--accent); }
           .terminal-screen { padding: 2rem; background-size: 20px 20px; }
           .terminal-content.active { grid-template-columns: 1fr; gap: 2rem; }
           .screen-image-wrapper { order: -1; aspect-ratio: 16/9; }
           .screen-title { font-size: 2rem; }
        }
      </style>

      <section class="terminal-wrapper">
         <div class="container">
            <h2 style="font-size: 2rem; text-align: center; margin-bottom: 3rem; color: rgba(255,255,255,0.9);">System Modules</h2>
            
            <div class="terminal-frame">
               
               <!-- LEFT NAV -->
               <div class="terminal-nav">
                  <div class="terminal-header">SELECT MODULE</div>
                  <div class="terminal-tabs">
                     <button class="terminal-tab active" onclick="switchTerminalTab('jrm')">
                        <span class="tab-indicator">[F1]</span> Journey Risk
                     </button>
                     <button class="terminal-tab" onclick="switchTerminalTab('driver')">
                        <span class="tab-indicator">[F2]</span> SmartDriver
                     </button>
                     <button class="terminal-tab" onclick="switchTerminalTab('esafe')">
                        <span class="tab-indicator">[F3]</span> E-Safe Workflow
                     </button>
                     <button class="terminal-tab" onclick="switchTerminalTab('analytics')">
                        <span class="tab-indicator">[F4]</span> Analytics
                     </button>
                  </div>
               </div>

               <!-- RIGHT SCREEN -->
               <div class="terminal-screen">
                  
                  <!-- TAB 1: JRM -->
                  <div id="tab-jrm" class="terminal-content active">
                     <div>
                        <span class="screen-status">>> SYSTEM_STATUS: MONITORING</span>
                        <h3 class="screen-title">Journey Risk Management</h3>
                        <p class="screen-desc">Proactive hazard mitigation system that maps improved safety zones using predictive analytics.</p>
                        <ul class="screen-list">
                           <li>${CheckIcon} Dynamic speed limit enforcement in high-risk zones</li>
                           <li>${CheckIcon} In-cabin voice alerts for upcoming hazards</li>
                           <li>${CheckIcon} Automated violation recording & coaching</li>
                        </ul>
                     </div>
                     <div class="screen-image-wrapper">
                        <img src="${jrmImg}" alt="JRM Interface">
                     </div>
                  </div>

                  <!-- TAB 2: DRIVER -->
                  <div id="tab-driver" class="terminal-content">
                     <div>
                        <span class="screen-status">>> APP_STATUS: CONNECTED</span>
                        <h3 class="screen-title">SmartDriver App</h3>
                        <p class="screen-desc">A digital co-pilot for drivers, ensuring compliance and safety through every mile.</p>
                        <ul class="screen-list">
                           <li>${CheckIcon} Digital trip checklists with photo uploads</li>
                           <li>${CheckIcon} Local language voice guidance</li>
                           <li>${CheckIcon} Motion-lock safety (app blocked while driving)</li>
                        </ul>
                     </div>
                     <div class="screen-image-wrapper">
                        <img src="${driverAppImg}" alt="Driver App">
                     </div>
                  </div>

                  <!-- TAB 3: E-SAFE -->
                  <div id="tab-esafe" class="terminal-content">
                     <div>
                        <span class="screen-status">>> WORKFLOW: ACTIVE</span>
                        <h3 class="screen-title">E-Safe-to-Load</h3>
                        <p class="screen-desc">Automated approval workflows connecting plant, transporter, and driver.</p>
                        <ul class="screen-list">
                           <li>${CheckIcon} Multi-level digital approval chain</li>
                           <li>${CheckIcon} Integration with Alco-meters & Vehicle Vetting</li>
                           <li>${CheckIcon} Audit-ready inspection history archives</li>
                        </ul>
                     </div>
                     <div class="screen-image-wrapper">
                        <img src="${esafeImg}" alt="Safety Workflow">
                     </div>
                  </div>

                  <!-- TAB 4: ANALYTICS -->
                  <div id="tab-analytics" class="terminal-content">
                     <div>
                        <span class="screen-status">>> DATA_STREAM: SYNCED</span>
                        <h3 class="screen-title">Advanced Analytics</h3>
                        <p class="screen-desc">Executive decision support with real-time fleet visibility and scorecards.</p>
                        <ul class="screen-list">
                           <li>${CheckIcon} Transporter & Driver performance scorecards</li>
                           <li>${CheckIcon} Trip-wise delay & detention analysis</li>
                           <li>${CheckIcon} Predictive ETA & Route Optimization</li>
                        </ul>
                     </div>
                     <div class="screen-image-wrapper">
                        <img src="${analyticsImg}" alt="Analytics Dashboard">
                     </div>
                  </div>

               </div>
            </div>
         </div>
         
      </section>

      <!-- COMPLIANCE SECTION -->
      <section style="padding: 5rem 0; background: linear-gradient(to top, #000, #09090b);">
         <div class="container" style="text-align: center;">
            <h2 style="font-size: 2.5rem; font-weight: 700;">Certified Compliance</h2>
            <div class="compliance-grid">
               <div class="compliance-badge">
                 <div style="font-size: 2.5rem; color: var(--accent); font-weight: 800;">PESO</div>
                 <div style="font-size: 0.9rem; color: rgba(255,255,255,0.5);">Petroleum & Explosives Safety Org</div>
               </div>
               <div class="compliance-badge">
                 <div style="font-size: 2.5rem; color: var(--accent); font-weight: 800;">AIS-140</div>
                 <div style="font-size: 0.9rem; color: rgba(255,255,255,0.5);">Automotive Industry Standard</div>
               </div>
               <div class="compliance-badge">
                 <div style="font-size: 2.5rem; color: var(--accent); font-weight: 800;">OISD</div>
                 <div style="font-size: 0.9rem; color: rgba(255,255,255,0.5);">Oil Industry Safety Directorate</div>
               </div>
            </div>
         </div>
      </section>

      <!-- IMPACT STATS -->
      <section style="padding: 6rem 0; border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05);">
        <div class="container">
           <h2 style="font-size: 2.5rem; font-weight: 700; text-align: center; margin-bottom: 4rem;">Proven <span style="color: var(--accent);">Operational Impact</span></h2>
           <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4rem; text-align: center;">
              <div>
                 <div style="font-size: 3.5rem; font-weight: 800; color: white;">40%</div>
                 <div style="color: var(--accent); font-family: monospace; letter-spacing: 0.1em; margin: 0.5rem 0;">REDUCTION</div>
                 <p style="color: rgba(255,255,255,0.6); max-width: 200px; margin: 0 auto;">In measurable road accidents within first year of deployment.</p>
              </div>
              <div>
                 <div style="font-size: 3.5rem; font-weight: 800; color: white;">100%</div>
                 <div style="color: var(--accent); font-family: monospace; letter-spacing: 0.1em; margin: 0.5rem 0;">COMPLIANCE</div>
                 <p style="color: rgba(255,255,255,0.6); max-width: 200px; margin: 0 auto;">Adherence to PESO, SIMS, and OISD safety standards.</p>
              </div>
              <div>
                 <div style="font-size: 3.5rem; font-weight: 800; color: white;">12k+</div>
                 <div style="color: var(--accent); font-family: monospace; letter-spacing: 0.1em; margin: 0.5rem 0;">HAZMAT VEHICLES</div>
                 <p style="color: rgba(255,255,255,0.6); max-width: 200px; margin: 0 auto;">Of India's largest oil and gas fleets secured by Sensel.</p>
              </div>
           </div>
        </div>
      </section>

      <!-- TRUSTED CLIENTS -->
      <section style="padding: 4rem 0; background: rgba(255,255,255,0.02);">
         <div class="container" style="text-align: center;">
            <p style="font-family: monospace; color: rgba(255,255,255,0.4); letter-spacing: 0.1em; margin-bottom: 2rem;">TRUSTED BY INDUSTRY LEADERS</p>
            <div style="display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap; opacity: 0.7; font-weight: 700; font-size: 1.5rem; color: rgba(255,255,255,0.3);">
               <span>INDIANOIL</span>
               <span>•</span>
               <span>BHARAT PETROLEUM</span>
               <span>•</span>
               <span>HINDUSTAN PETROLEUM</span>
               <span>•</span>
               <span>RELIANCE</span>
               <span>•</span>
               <span>SHELL</span>
            </div>
         </div>
      </section>

      <!-- FINAL CTA -->
      <section style="padding: 8rem 0 6rem 0; text-align: center;">
         <div class="container">
            <h2 style="font-size: 3rem; font-weight: 800; margin-bottom: 1.5rem;">Secure Your Hazardous Fleet</h2>
            <p style="color: rgba(255,255,255,0.6); font-size: 1.2rem; max-width: 600px; margin: 0 auto 3rem auto;">
               Deploy the VTX 10 C Standard today. Zero compromise on safety, total visibility on operations.
            </p>
            <button style="
               background: var(--accent); 
               color: black; 
               border: none; 
               padding: 1.2rem 3rem; 
               font-size: 1.1rem; 
               font-weight: 700; 
               border-radius: 4px; 
               cursor: pointer;
               transition: transform 0.2s;
            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
               SCHEDULE A DEMO
            </button>
         </div>
      </section>

      ${Footer()}
    </div>
  `;
};

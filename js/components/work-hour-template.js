import { Navbar, initNavbar } from './navbar.js';
import { Footer } from './footer.js';

const resolvePath = (path) => {
  if (window.location.pathname.includes('/solutions/')) {
    return '../../' + path;
  }
  return path;
};

export const WorkHourTemplate = () => {
  // USING HIGH DEFINITION STOCK IMAGES (Unsplash Source)
  const heroImg = '../../assets/generated/hero_heavy_machinery.png'; // Cinematic Construction Sunset

  // Reuse the HIGH QUALITY clean product image from Rechargeable page (Same hardware)
  const deviceImg = resolvePath('assets/images/ast3r_ac_clean.png');

  const constructionImg = '../../assets/generated/construction_jcb_site.png'; // HD Excavator
  const roiImg = '../../assets/generated/construction_crane_manager.png'; // HD Analytics/Finance

  return `
    <style>
      .work-hour-page {
        --accent: #f97316; /* Construction Orange */
        --accent-glow: rgba(249, 115, 22, 0.3);
        font-family: 'Inter', sans-serif; /* Switched to Inter for readability */
      }
      .work-hour-page h1, .work-hour-page h2, .work-hour-page h3 {
        font-family: 'Outfit', sans-serif; /* Keep Display font for headers */
      }

      /* -------------------------------------------
         ADVANCED HERO ANIMATIONS 
         ------------------------------------------- */
      @keyframes kenBurns {
        0% { transform: scale(1); }
        100% { transform: scale(1.1); }
      }
      
      .hero-bg-anim {
        animation: kenBurns 20s ease-out infinite alternate;
      }

      /* Text Reveal Mask Effect (Renamed to avoid conflict) */
      .hero-reveal {
        position: relative;
        overflow: hidden;
        display: block;
      }
      .hero-reveal span {
        display: block;
        transform: translateY(100%);
        opacity: 0; 
        animation: slideUpText 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      .hero-reveal.delay-1 span { animation-delay: 0.1s; }
      .hero-reveal.delay-2 span { animation-delay: 0.2s; }
      .hero-reveal.delay-3 span { animation-delay: 0.3s; }

      @keyframes slideUpText {
        to { transform: translateY(0); opacity: 1; }
      }
      
      /* Local Fade In */
      .fade-in {
        animation: fadeInLocal 1s ease-out forwards;
        opacity: 0;
      }
      @keyframes fadeInLocal {
        to { opacity: 1; transform: translateY(0); }
        from { opacity: 0; transform: translateY(20px); }
      }

      /* -------------------------------------------
         SCROLL ANIMATIONS 
         ------------------------------------------- */
      .scroll-reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
      }
      .scroll-reveal.active {
        opacity: 1;
        transform: translateY(0);
      }
      
      .feature-card {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        border: 1px solid transparent; /* Prepare for border transition */
      }
      .feature-card:hover {
        transform: translateY(-8px);
        background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
        border-color: rgba(249, 115, 22, 0.3) !important;
        box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px var(--accent-glow);
      }
      
      .stat-item {
        position: relative;
      }
      .stat-item::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 40px;
        width: 1px;
        background: rgba(255,255,255,0.1);
      }
      .stat-item:last-child::after {
        display: none;
      }
    </style>

    ${Navbar()}
    
    <main class="work-hour-page" style="background-color: #0c0a09; color: white;">
      
      <!-- HERO: Reference Standard Layout (Left Aligned) -->
      <section style="
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        overflow: hidden;
      ">
        <!-- Background Image with Ken Burns Effect -->
        <div class="hero-bg-anim" style="
          position: absolute;
          inset: 0;
          background: url('${heroImg}') center/cover no-repeat;
        "></div>
        
        <!-- Overlay: Exact Match to Reference -->
        <div style="
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.9) 0%,
            rgba(0,0,0,0.75) 50%,
            rgba(0,0,0,0.3) 100%
          );
          z-index: 1;
        "></div>
        
        <!-- Content -->
        <div class="container" style="position: relative; z-index: 2; padding-left: 5vw;">
          <div style="max-width: 650px;" class="fade-in">
            
            <!-- Badge -->
            <div class="hero-reveal delay-1" style="margin-bottom: 2rem;">
              <div style="
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.5rem 1rem;
                background: rgba(249, 115, 22, 0.1);
                border: 1px solid rgba(249, 115, 22, 0.3);
                border-radius: 4px;
              ">
                <span style="color: var(--accent); font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">
                  Work Hour Analytics
                </span>
              </div>
            </div>
            
            <!-- Title -->
            <h1 style="
              font-size: clamp(3rem, 6vw, 4.5rem);
              font-weight: 700;
              color: white;
              line-height: 1.1;
              margin-bottom: 1.5rem;
              letter-spacing: -0.03em;
            ">
              <div class="hero-reveal delay-1"><span>Precision Tracking.</span></div>
              <div class="hero-reveal delay-2"><span style="color: var(--accent);">Maximum ROI.</span></div>
            </h1>
            
            <!-- Subtitle -->
            <div class="hero-reveal delay-3">
              <p style="
                font-size: 1.25rem;
                color: rgba(255,255,255,0.75);
                line-height: 1.6;
                margin-bottom: 2.5rem;
                max-width: 550px;
              ">
                Stop guessing with fleet data. Our vibration-sensing technology guarantees 
                <strong style="color: white;">99.8% work-hour accuracy</strong> in the harshest environments.
              </p>
            </div>
            
            <!-- CTAs -->
            <div class="hero-reveal delay-3" style="animation-delay: 0.5s;">
              <span style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <a href="#product" style="
                  display: inline-flex;
                  align-items: center;
                  gap: 0.5rem;
                  padding: 1rem 2rem;
                  background: var(--accent);
                  color: #000;
                  border-radius: 6px;
                  font-weight: 600;
                  font-size: 1rem;
                  text-decoration: none;
                  transition: all 0.3s ease;
                  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
                " onmouseover="this.style.transform='translateY(-2px)'" 
                   onmouseout="this.style.transform='translateY(0)'">
                  View Product
                  <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                  </svg>
                </a>
                <a href="#specs" style="
                  display: inline-flex;
                  align-items: center;
                  gap: 0.75rem;
                  padding: 1rem 2rem;
                  background: rgba(255,255,255,0.05);
                  backdrop-filter: blur(5px);
                  color: white;
                  border: 1px solid rgba(255,255,255,0.2);
                  border-radius: 6px;
                  font-weight: 600;
                  font-size: 1rem;
                  text-decoration: none;
                  transition: all 0.3s ease;
                " onmouseover="this.style.borderColor='white'; this.style.backgroundColor='rgba(255,255,255,0.1)'" 
                   onmouseout="this.style.borderColor='rgba(255,255,255,0.2)'; this.style.backgroundColor='rgba(255,255,255,0.05)'">
                  Full Specifications
                </a>
              </span>
            </div>
            
          </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div style="
          position: absolute;
          bottom: 3rem;
          right: 4rem;
          display: flex;
          gap: 1rem;
          align-items: center;
          color: rgba(255,255,255,0.5);
          transform: rotate(90deg);
          transform-origin: right center;
          z-index: 2;
        ">
          <span style="font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase;">Scroll</span>
          <div style="width: 50px; height: 1px; background: rgba(255,255,255,0.3);"></div>
        </div>
      </section>

      <!-- STATS BAR -->
      <section class="scroll-reveal" style="
        background: #0a0a0a;
        border-bottom: 1px solid rgba(255,255,255,0.05);
        padding: 0;
      ">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(4, 1fr);">
            ${[
      { value: "20x", label: "ROI Guaranteed" },
      { value: "99.8%", label: "Data Accuracy" },
      { value: "IP67", label: "Military Grade" },
      { value: "3 Years", label: "Battery Life" }
    ].map(s => `
              <div class="stat-item" style="
                padding: 2.5rem 1.5rem;
                text-align: center;
              ">
                <div style="
                  font-size: clamp(1.75rem, 3vw, 2.5rem);
                  font-weight: 700;
                  color: white;
                  margin-bottom: 0.25rem;
                  letter-spacing: -0.02em;
                ">${s.value}</div>
                <div style="
                  font-size: 0.85rem;
                  color: rgba(255,255,255,0.5);
                  text-transform: uppercase;
                  letter-spacing: 0.1em;
                ">${s.label}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- FEATURES SECTION -->
      <section style="
        background: linear-gradient(180deg, #0d0d0d 0%, #0a0a0a 100%);
        padding: 8rem 0;
        border-bottom: 1px solid rgba(255,255,255,0.05);
      ">
        <div class="container">
          <div class="scroll-reveal" style="text-align: center; margin-bottom: 5rem;">
            <p style="
              font-size: 0.8rem;
              color: var(--accent);
              text-transform: uppercase;
              letter-spacing: 0.2em;
              margin-bottom: 1rem;
              font-weight: 600;
            ">Why Choose Sensel</p>
            <h2 style="
              font-size: clamp(2rem, 4vw, 3rem);
              color: white;
              font-weight: 800;
              letter-spacing: -0.02em;
            ">Precision Work Hour Monitoring</h2>
          </div>
          
          <!-- Bento Grid Layout -->
          <style>
            .bento-grid {
              display: grid;
              grid-template-columns: repeat(12, 1fr);
              grid-auto-rows: minmax(280px, auto);
              gap: 1.5rem;
              max-width: 1100px;
              margin: 0 auto;
            }
            .bento-card {
              position: relative;
              background: linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
              border-radius: 20px;
              padding: 2.5rem;
              overflow: hidden;
              border: 1px solid rgba(255,255,255,0.05);
              transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
            .bento-card:hover {
              transform: translateY(-5px);
              border-color: rgba(249, 115, 22, 0.3);
              box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(249, 115, 22, 0.1);
              background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
            }
            .bento-card h3 {
              font-size: 1.5rem;
              color: white;
              margin-bottom: 1rem;
              position: relative;
              z-index: 2;
            }
            .bento-card p {
              color: rgba(255,255,255,0.6);
              line-height: 1.6;
              margin-bottom: 1.5rem;
              position: relative;
              z-index: 2;
            }
            .bento-icon-bg {
              position: absolute;
              bottom: -20px;
              right: -20px;
              opacity: 0.05;
              transition: transform 0.5s ease;
            }
            .bento-card:hover .bento-icon-bg {
              transform: scale(1.1) rotate(5deg);
              opacity: 0.08;
            }
            
            /* Grid Spans */
            .span-7 { grid-column: span 7; }
            .span-5 { grid-column: span 5; }
            .span-4 { grid-column: span 4; }
            .span-6 { grid-column: span 6; }
            
            @media (max-width: 900px) {
              .bento-grid { grid-template-columns: 1fr; }
              .span-7, .span-5, .span-4, .span-6 { grid-column: span 1; }
            }
          </style>

          <div class="bento-grid">
            <!-- Feature 1: Main Highlight -->
            <div class="bento-card span-7 scroll-reveal">
              <div style="display: flex; flex-direction: column; height: 100%; justify-content: center;">
                <div style="width: 50px; height: 50px; background: var(--accent); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                  <svg width="24" height="24" fill="none" stroke="black" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"/></svg>
                </div>
                <h3>Vibration Sensing Tech</h3>
                <p style="font-size: 1.1rem; color: rgba(255,255,255,0.8);">
                  Advanced piezoelectric sensors distinguish actual equipment operation from transport vibration. 
                  Get <strong style="color: white">precise engine-on runtime</strong> without wiring into the alternator.
                </p>
                <div style="margin-top: auto; display: flex; gap: 1rem;">
                   <div style="background: rgba(255,255,255,0.05); padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.1);">Zero False Positives</div>
                   <div style="background: rgba(255,255,255,0.05); padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.1);">Transport Filter</div>
                </div>
              </div>
              <!-- Background Icon -->
               <svg class="bento-icon-bg" width="200" height="200" fill="currentColor" viewBox="0 0 24 24" style="color: white;"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"/></svg>
            </div>

            <!-- Feature 2: Rugged -->
            <div class="bento-card span-5 scroll-reveal delay-1">
              <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                <svg width="20" height="20" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>IP67 Rugged Build</h3>
              <p>Engineered for the harshest mining & construction sites. Water, dust, and shock proof enclosure ensuring longevity.</p>
              <ul style="list-style: none; padding: 0; color: rgba(255,255,255,0.5); font-size: 0.9rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                <li style="display: flex; gap: 6px; align-items: center;"><span style="width: 6px; height: 6px; background: var(--accent); border-radius: 50%;"></span> Waterproof</li>
                <li style="display: flex; gap: 6px; align-items: center;"><span style="width: 6px; height: 6px; background: var(--accent); border-radius: 50%;"></span> Dustproof</li>
              </ul>
              <svg class="bento-icon-bg" width="150" height="150" fill="currentColor" viewBox="0 0 24 24" style="color: white;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>

            <!-- Feature 3: Smart Alerts -->
            <div class="bento-card span-6 scroll-reveal delay-2">
               <h3>Smart Anti-Theft Alerts</h3>
               <p>Instant notifications for unauthorized movement or device tampering. Protect your assets proactively.</p>
               <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
                 <span style="border: 1px solid rgba(249, 115, 22, 0.3); color: var(--accent); padding: 0.3rem 0.8rem; border-radius: 100px; font-size: 0.8rem;">Tamper Detect</span>
                 <span style="border: 1px solid rgba(249, 115, 22, 0.3); color: var(--accent); padding: 0.3rem 0.8rem; border-radius: 100px; font-size: 0.8rem;">Geofence Exit</span>
               </div>
            </div>

            <!-- Feature 4: Connectivity -->
            <div class="bento-card span-6 scroll-reveal delay-3">
              <h3>Quad-Band Connectivity</h3>
              <p>Reliable GSM connectivity with deep-sleep modes to preserve battery life up to 3 years on a single charge.</p>
              <div style="display: flex; align-items: center; gap: 1rem; margin-top: 1rem;">
                <div style="height: 4px; flex-grow: 1; background: rgba(255,255,255,0.1); border-radius: 2px;">
                  <div style="width: 85%; height: 100%; background: var(--accent); border-radius: 2px;"></div>
                </div>
                <span style="font-size: 0.8rem; color: white;">Signal Strength</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- UNIFIED PRODUCT SHOWCASE -->
      <section id="product" style="
        background: #0a0a0a;
        padding: 5rem 0 10rem 0;
        position: relative;
      ">
        <div class="container">
          <div style="
            display: grid; 
            grid-template-columns: 0.9fr 1.1fr; 
            gap: 6rem;
            align-items: start;
            position: relative;
          ">
            
            <!-- LEFT: Sticky Product Image -->
            <div style="
              position: sticky;
              top: 100px;
              height: auto;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 2rem;
              background: radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%);
              border-radius: 20px;
              border: 1px solid rgba(255,255,255,0.05);
            ">
              <img src="${deviceImg}" alt="AST3Rc Tracker" style="
                max-width: 100%;
                width: 100%;
                height: auto;
                filter: drop-shadow(0 40px 80px rgba(0,0,0,0.6));
                transform: rotate(-5deg);
                transition: transform 0.5s ease;
              " onmouseover="this.style.transform='rotate(0deg) scale(1.05)'" 
                 onmouseout="this.style.transform='rotate(-5deg) scale(1)'">
            </div>

            <!-- RIGHT: Scrollable Content (Intro + Specs) -->
            <div class="scroll-reveal">
              <!-- Product Header -->
              <div style="margin-bottom: 4rem;">
                <p style="
                  font-size: 0.8rem;
                  color: var(--accent);
                  text-transform: uppercase;
                  letter-spacing: 0.2em;
                  margin-bottom: 1rem;
                  font-weight: 600;
                  display: inline-block;
                  border: 1px solid rgba(249, 115, 22, 0.3);
                  padding: 0.4rem 1rem;
                  border-radius: 50px;
                ">Work Hour Monitor</p>
                
                <h2 style="
                  font-size: clamp(2.5rem, 4vw, 4rem);
                  color: white;
                  font-weight: 800;
                  margin-bottom: 1.5rem;
                  letter-spacing: -0.02em;
                  line-height: 1.1;
                ">AST3Rc High Capacity</h2>
                
                <p style="
                  font-size: 1.15rem;
                  color: rgba(255,255,255,0.7);
                  line-height: 1.7;
                  margin-bottom: 2rem;
                ">
                  A robust asset tracker tailored for precise work hour measurement. 
                  Featuring a massive <strong style="color:white">5200 mAh rechargeable battery</strong>, it delivers consistent performance 
                  in the most demanding environments.
                </p>

                <!-- Feature Pills -->
                <div style="
                  display: flex;
                  flex-wrap: wrap;
                  gap: 0.75rem;
                  margin-bottom: 3rem;
                ">
                  ${[
      "Automatic Work-Hour Recording",
      "Precise Location Every 8 hrs",
      "6+ Months Operation",
      "Vibration Based Tech",
      "Web Based Reporting",
      "IP67 Rated"
    ].map(tag => `
                    <span style="
                      padding: 0.6rem 1rem;
                      background: rgba(255,255,255,0.05);
                      border: 1px solid rgba(255,255,255,0.1);
                      border-radius: 8px;
                      color: white;
                      font-size: 0.85rem;
                      font-weight: 500;
                    ">${tag}</span>
                  `).join('')}
                </div>
              </div>

              <!-- Tech Specs Table -->
              <div id="specs" style="
                background: linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
                border-radius: 16px;
                padding: 2.5rem;
                border: 1px solid rgba(255,255,255,0.06);
              ">
                <h3 style="
                  font-size: 1.5rem;
                  color: white;
                  font-weight: 700;
                  margin-bottom: 1.5rem;
                  display: flex;
                  align-items: center;
                  gap: 0.75rem;
                ">
                  <span style="width: 4px; height: 24px; background: var(--accent); border-radius: 4px;"></span>
                  Technical Specifications
                </h3>
                
                <div style="display: flex; flex-direction: column; gap: 0;">
                  ${[
      { label: "Battery Capacity", value: "5200 mAh Li-Ion" },
      { label: "Record Capacity", value: "6000+ Records" },
      { label: "Battery Life", value: "10 - 25 Months" },
      { label: "Connectivity", value: "GSM Quad-band" },
      { label: "Durability", value: "IP67 Water & Dust Proof" },
      { label: "Sensors", value: "Vibration / Accelerometer" },
      { label: "Operating Temp", value: "-10°C to +60°C" }
    ].map((spec, i) => `
                    <div style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      padding: 1.2rem 0;
                      border-bottom: 1px solid rgba(255,255,255,0.06);
                      transition: background 0.2s;
                    " onmouseover="this.style.paddingLeft='10px'; this.style.background='rgba(255,255,255,0.02)'" 
                      onmouseout="this.style.paddingLeft='0'; this.style.background='transparent'">
                      <span style="color: rgba(255,255,255,0.5); font-size: 0.95rem;">${spec.label}</span>
                      <span style="color: white; font-size: 1rem; font-weight: 600;">${spec.value}</span>
                    </div>
                  `).join('')}
                </div>

                <div style="margin-top: 2.5rem;">
                   <a href="#contact" style="
                     display: inline-flex; width: 100%; justify-content: center; padding: 1rem; 
                     background: rgba(255,255,255,0.05); color: white; border: 1px solid rgba(255,255,255,0.2);
                     border-radius: 8px; font-weight: 600; text-decoration: none; transition: all 0.2s;
                   " onmouseover="this.style.background='white'; this.style.color='black'" 
                      onmouseout="this.style.background='rgba(255,255,255,0.05)'; this.style.color='white'">
                     Download Datasheet
                   </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
                <a href="#" style="
                  display: inline-flex;
                  align-items: center;
                  gap: 0.75rem;
                  color: var(--accent);
                  text-decoration: none;
                  font-weight: 600;
                  font-size: 1rem;
                  padding-bottom: 2px;
                  border-bottom: 1px solid var(--accent);
                ">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Complete Datasheet
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- USE CASES -->
      <section style="
        background: #0a0a0a;
        padding: 6rem 0;
      ">
        <div class="container">
          <div class="scroll-reveal" style="text-align: center; margin-bottom: 5rem;">
            <p style="
              font-size: 0.8rem;
              color: var(--accent);
              text-transform: uppercase;
              letter-spacing: 0.2em;
              margin-bottom: 0.75rem;
              font-weight: 600;
            ">Applications</p>
            <h2 style="
              font-size: clamp(2rem, 4vw, 3rem);
              color: white;
              font-weight: 700;
            ">Industrial Efficiency</h2>
          </div>
          
          <!-- Use Case 1: Construction -->
          <div class="use-case-grid" style="margin-bottom: 8rem;">
            <div class="scroll-reveal">
              <h3 style="font-size: 2rem; color: white; font-weight: 700; margin-bottom: 1.5rem;">Construction Support</h3>
              <p style="color: rgba(255,255,255,0.7); font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem;">
                Streamline fleet deployment by knowing exactly how much each excavator or crane is being utilized. 
                Move under-utilized assets to high-demand sites.
              </p>
              <ul style="list-style: none; display: grid; gap: 1rem;">
                ${["Fleet utilization tracking", "Reduce unnecessary rentals", "optimize project timeline", "Prevent unauthorized use"].map(p => `
                  <li style="display: flex; align-items: center; gap: 1rem; color: rgba(255,255,255,0.8); font-size: 1rem;">
                    <div style="width: 24px; height: 24px; background: rgba(249,115,22,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--accent);">✓</div>
                    ${p}
                  </li>
                `).join('')}
              </ul>
            </div>
            <div class="scroll-reveal" style="
              border-radius: 20px;
              overflow: hidden;
              box-shadow: 0 30px 60px rgba(0,0,0,0.5);
              transition-delay: 0.2s;
            ">
              <img src="${constructionImg}" alt="Construction" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            </div>
          </div>
          
          <!-- Use Case 2: Billing -->
          <div class="use-case-grid">
            <div class="scroll-reveal" style="
              border-radius: 20px;
              overflow: hidden;
               box-shadow: 0 30px 60px rgba(0,0,0,0.5);
            ">
              <img src="${roiImg}" alt="Accurate Billing" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            </div>
            <div class="scroll-reveal" style="transition-delay: 0.2s;">
              <h3 style="font-size: 2rem; color: white; font-weight: 700; margin-bottom: 1.5rem;">Accurate Billing & Maintenance</h3>
              <p style="color: rgba(255,255,255,0.7); font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem;">
                 For equipment rental companies, bill your clients based on precise engine-on hours rather than days. 
                 Schedule maintenance based on actual wear and tear.
              </p>
              <ul style="list-style: none; display: grid; gap: 1rem;">
                ${["Transparent customer billing", "Usage-based maintenance", "Extended asset lifespan", "Digital usage records"].map(p => `
                  <li style="display: flex; align-items: center; gap: 1rem; color: rgba(255,255,255,0.8); font-size: 1rem;">
                    <div style="width: 24px; height: 24px; background: rgba(249,115,22,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--accent);">✓</div>
                    ${p}
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA SECTION -->
      <section style="
        background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(249, 115, 22, 0.02) 100%);
        padding: 5rem 0;
        border-top: 1px solid rgba(249, 115, 22, 0.2);
      ">
        <div class="container" style="text-align: center;">
          <h2 style="
            font-size: clamp(2rem, 3vw, 3rem);
            color: white;
            font-weight: 700;
            margin-bottom: 1rem;
          ">Stop Guessing, Start Saving</h2>
          <p style="
            font-size: 1.2rem;
            color: rgba(255,255,255,0.6);
            margin-bottom: 2.5rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          ">Contact our team to see how Sensel Work Hour Monitor can transform your fleet efficiency.</p>
          <a href="/index.html#contact" style="
            display: inline-block;
            padding: 1.2rem 3rem;
            background: var(--accent);
            color: #000;
            border-radius: 6px;
            font-weight: 700;
            text-decoration: none;
            font-size: 1.1rem;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 10px 30px rgba(249, 115, 22, 0.3)'" 
             onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
            Request a Quote
          </a>
        </div>
      </section>

      ${Footer()}
      <!-- RESPONSIVE STYLES -->
      <style>
        @media (max-width: 900px) {
           /* Hero */
           .work-hour-page .container { padding-left: 5% !important; }
           .work-hour-page h1 { font-size: 3.5rem !important; }
           
           /* Bento Grid */
           .bento-grid { grid-template-columns: 1fr; }
           .bento-card { min-height: auto; }
           .span-7, .span-5, .span-4, .span-6 { grid-column: span 1; }
           
           /* Product Section */
           #product .container > div {
             grid-template-columns: 1fr !important;
             gap: 3rem !important;
           }
           #product img { transform: rotate(0) !important; max-width: 80% !important; margin: 0 auto; }
           #product div[style*="position: sticky"] {
             position: relative !important;
             top: 0 !important;
             background: transparent !important;
             border: none !important;
             padding: 0 !important;
           }
           
           /* Specs */
           #specs div[style*="grid-template-columns"] {
             grid-template-columns: 1fr !important;
             max-width: 100% !important;
           }
           #specs img { max-height: 250px !important; }
           
           /* Use Case Grid Mobile */
           .use-case-grid {
             grid-template-columns: 1fr !important;
             gap: 3rem !important;
             text-align: center;
           }
           .use-case-grid p, .use-case-grid ul {
             text-align: left; /* Keep text readable */
           }
        }
        
        /* Desktop Grid Styles */
        .use-case-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
      </style>
    </main>
  `;
};

export function initWorkHourPage() {
  initNavbar();

  // Animation Observer
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
  });
}

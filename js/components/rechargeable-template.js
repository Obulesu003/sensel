import { Navbar, initNavbar } from './navbar.js';
import { Footer } from './footer.js';

const resolvePath = (path) => {
  if (window.location.pathname.includes('/solutions/')) {
    return '../../' + path;
  }
  return path;
};

export const RechargeableTemplate = () => {
  const heroImg = resolvePath('assets/images/rechargeable_hero_bg.png');
  const ast3rAcImg = resolvePath('assets/images/ast3r_ac_clean.png');
  const ast3rbImg = resolvePath('assets/images/ast3rb_clean.png');
  const ast3rAcSpecsImg = resolvePath('assets/images/ast3r_ac_clean.png');
  const ast3rbSpecsImg = resolvePath('assets/images/ast3rb_clean.png');

  return `
    <style>
      .rechargeable-page {
        --accent: #f59e0b;
        --accent-glow: rgba(245, 158, 11, 0.15);
      }
      .rechargeable-page h1, .rechargeable-page h2, .rechargeable-page h3 {
        font-family: var(--font-display);
      }
      .fade-in {
        animation: fadeIn 0.8s ease-out forwards;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .feature-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .feature-card:hover {
        transform: translateY(-4px);
        border-color: var(--accent) !important;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px var(--accent);
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
      .specs-table {
        width: 100%;
        border-collapse: collapse;
      }
      .specs-table th,
      .specs-table td {
        padding: 1rem 1.5rem;
        text-align: left;
        border-bottom: 1px solid rgba(255,255,255,0.06);
      }
      .specs-table th {
        color: rgba(255,255,255,0.5);
        font-weight: 500;
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .specs-table td {
        color: white;
        font-size: 0.95rem;
      }
      .specs-table tr:hover td {
        background: rgba(255,255,255,0.02);
      }
    </style>

    ${Navbar()}
    
    <main class="rechargeable-page">
      
      <!-- HERO: Full-Screen Cinematic -->
      <section style="
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        overflow: hidden;
      ">
        <!-- Background Image -->
        <div style="
          position: absolute;
          inset: 0;
          background: url('${heroImg}') center/cover no-repeat;
        "></div>
        
        <!-- Overlay -->
        <div style="
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.85) 0%,
            rgba(0,0,0,0.7) 50%,
            rgba(0,0,0,0.4) 100%
          );
        "></div>
        
        <!-- Content -->
        <div class="container" style="position: relative; z-index: 2;">
          <div style="max-width: 600px;" class="fade-in">
            
            <!-- Badge -->
            <div style="
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              padding: 0.5rem 1rem;
              background: rgba(245, 158, 11, 0.1);
              border: 1px solid rgba(245, 158, 11, 0.3);
              border-radius: 4px;
              margin-bottom: 2rem;
            ">
              <span style="color: var(--accent); font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">
                Rechargeable Asset Tracker
              </span>
            </div>
            
            <!-- Title -->
            <h1 style="
              font-size: clamp(3rem, 6vw, 4.5rem);
              font-weight: 700;
              color: white;
              line-height: 1.05;
              margin-bottom: 1.5rem;
              letter-spacing: -0.03em;
            ">
              Track Assets<br>
              <span style="color: var(--accent);">Wire-Free</span>
            </h1>
            
            <!-- Subtitle -->
            <p style="
              font-size: 1.25rem;
              color: rgba(255,255,255,0.7);
              line-height: 1.6;
              margin-bottom: 2.5rem;
              max-width: 500px;
            ">
              Ultra-low power GPS tracking for high-value, mobile, and non-powered assets. 
              Up to 3 years of battery life with a single charge.
            </p>
            
            <!-- CTAs -->
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
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
                transition: all 0.2s;
              ">
                View Product
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
              </a>
              <a href="#specs" style="
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                padding: 1rem 2rem;
                background: rgba(255,255,255,0.1);
                backdrop-filter: blur(10px);
                color: white;
                border: 1px solid rgba(255,255,255,0.2);
                border-radius: 6px;
                font-weight: 600;
                font-size: 1rem;
                text-decoration: none;
                transition: all 0.2s;
              ">
                Full Specifications
              </a>
            </div>
          </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div style="
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255,255,255,0.5);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        ">
          <span>Scroll</span>
          <div style="width: 1px; height: 40px; background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);"></div>
        </div>
      </section>

      <!-- STATS BAR -->
      <section style="
        background: #0a0a0a;
        border-bottom: 1px solid rgba(255,255,255,0.05);
        padding: 0;
      ">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(4, 1fr);">
            ${[
      { value: "3 Years", label: "Battery Life" },
      { value: "4G LTE", label: "Connectivity" },
      { value: "IP67", label: "Protection" },
      { value: "GPS+WiFi", label: "Positioning" }
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

      <!-- FEATURES SECTION (Moved Up) -->
      <section style="
        background: linear-gradient(180deg, #0d0d0d 0%, #0a0a0a 100%);
        padding: 6rem 0;
        border-bottom: 1px solid rgba(255,255,255,0.05);
      ">
        <div class="container">
          <div style="text-align: center; margin-bottom: 4rem;">
            <p style="
              font-size: 0.8rem;
              color: var(--accent);
              text-transform: uppercase;
              letter-spacing: 0.2em;
              margin-bottom: 0.75rem;
              font-weight: 600;
            ">Why Choose AST3R</p>
            <h2 style="
              font-size: clamp(1.75rem, 3vw, 2.5rem);
              color: white;
              font-weight: 700;
            ">Key Features</h2>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; max-width: 900px; margin: 0 auto;">
            ${[
      {
        title: "Intelligent Power Management",
        points: [
          "3000-6000 updates with single charge",
          "Programmable update rates (motion vs stationary)",
          "Auto disconnect above threshold temperature"
        ]
      },
      {
        title: "Multi-Mode Location",
        points: [
          "GPS mode for outdoor tracking",
          "GSM mode where GPS signal unavailable",
          "WiFi enabled positioning (optional)"
        ]
      },
      {
        title: "Security & Alerts",
        points: [
          "Device removal & tampering alerts",
          "Theft detection via 3-axis accelerometer",
          "Programmable vibration thresholds"
        ]
      },
      {
        title: "Connectivity & Storage",
        points: [
          "Large internal data storage for network outages",
          "Bluetooth 3.0 with internal antenna",
          "OTA firmware & configuration updates"
        ]
      }
    ].map(f => `
              <div class="feature-card" style="
                padding: 2rem;
                background: rgba(255,255,255,0.02);
                border: 1px solid rgba(255,255,255,0.06);
                border-radius: 12px;
              ">
                <h3 style="color: white; font-size: 1.1rem; font-weight: 600; margin-bottom: 1rem;">${f.title}</h3>
                <ul style="list-style: none; padding: 0; margin: 0;">
                  ${f.points.map(p => `
                    <li style="
                      display: flex;
                      align-items: flex-start;
                      gap: 0.75rem;
                      color: rgba(255,255,255,0.6);
                      font-size: 0.9rem;
                      line-height: 1.5;
                      padding: 0.4rem 0;
                    ">
                      <span style="color: var(--accent); flex-shrink: 0;">•</span>
                      ${p}
                    </li>
                  `).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- MODEL 1: AST3R (a, c) - Intro -->
      <section id="product" style="
        background: #0a0a0a;
        padding: 6rem 0;
        padding-bottom: 2rem; 
      ">
        <div class="container">
          <div style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          ">
            <!-- Left: Product Image -->
            <div style="
              display: flex;
              justify-content: center;
              align-items: center;
            ">
              <img src="${ast3rAcImg}" alt="AST3R-a/c Tracker" style="
                max-width: 350px;
                width: 100%;
                height: auto;
                filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3));
              ">
            </div>
            
            <!-- Right: Product Info -->
            <div>
              <p style="
                font-size: 0.8rem;
                color: var(--accent);
                text-transform: uppercase;
                letter-spacing: 0.2em;
                margin-bottom: 0.75rem;
                font-weight: 600;
              ">Rechargeable Asset Tracker</p>
              
              <h2 style="
                font-size: clamp(2rem, 4vw, 2.75rem);
                color: white;
                font-weight: 700;
                margin-bottom: 1rem;
                letter-spacing: -0.02em;
              ">ASSET-SMART AST3R (a, c)</h2>
              
              <p style="
                font-size: 1.05rem;
                color: rgba(255,255,255,0.6);
                line-height: 1.7;
                margin-bottom: 2rem;
              ">
                Ultra-low power, wire-free GPS tracker with customized battery options. 
                AST3Ra (2600mAh) / AST3Rc (5200mAh). 3000-6000 updates with single charge, 
                battery can run for 15-25 months.
              </p>
              
              <!-- Feature Tags -->
              <div style="
                display: flex;
                flex-wrap: wrap;
                gap: 0.75rem;
                margin-bottom: 2rem;
              ">
                ${[
      "Ultra-Low Power, Wire Free",
      "WiFi Enabled (Optional)",
      "Remote Battery Level",
      "Tamper Alerts",
      "OTA Firmware Updates",
      "Bluetooth 3.0",
      "Adaptive Power Mgmt",
      "3-axis Accelerometer"
    ].map(tag => `
                  <span style="
                    padding: 0.5rem 1rem;
                    background: rgba(245,158,11,0.1);
                    border: 1px solid rgba(245,158,11,0.25);
                    border-radius: 50px;
                    color: var(--accent);
                    font-size: 0.85rem;
                    font-weight: 500;
                  ">${tag}</span>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- MODEL 1: AST3R (a, c) - Specs -->
      <section id="specs-ast3r" style="
        background: #0a0a0a;
        padding-top: 0;
        padding-bottom: 6rem;
      ">
        <div class="container">
          <!-- Simplified Specs Grid - Directly below Intro -->
           <div style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            max-width: 1100px;
            margin: 0 auto;
            background: rgba(255,255,255,0.02);
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.06);
            overflow: hidden;
          ">
            <!-- Left: Clean Product Image -->
            <div style="
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 2rem;
              background: rgba(0,0,0,0.2);
            ">
              <img src="${ast3rAcSpecsImg}" alt="ASSET-SMART AST3R Specs" style="
                max-width: 100%;
                width: auto;
                max-height: 350px;
                filter: drop-shadow(0 20px 40px rgba(0,0,0,0.4));
              ">
            </div>
            
            <!-- Right: Specs Table -->
            <div style="padding: 3rem;">
              <h3 style="
                font-size: 1.5rem;
                color: white;
                font-weight: 700;
                margin-bottom: 1.5rem;
              ">Technical Specifications</h3>
              
              <div style="display: flex; flex-direction: column;">
                ${[
      { label: "Length", value: "80 mm" },
      { label: "Width", value: "60 mm" },
      { label: "Height", value: "35 mm" },
      { label: "Weight", value: "130-175 g" },
      { label: "Battery", value: "2600/5200 mAh Li-Ion" },
      { label: "Operating Temp", value: "-10°C to +60°C" }
    ].map(spec => `
                  <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 0;
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                  ">
                    <span style="color: rgba(255,255,255,0.5); font-size: 0.95rem;">${spec.label}</span>
                    <span style="color: white; font-size: 0.95rem; font-weight: 600;">${spec.value}</span>
                  </div>
                `).join('')}
              </div>
               <div style="margin-top: 2rem;">
                <a href="#" style="
                  display: inline-flex;
                  align-items: center;
                  gap: 0.5rem;
                  color: var(--accent);
                  text-decoration: none;
                  font-weight: 500;
                  font-size: 0.9rem;
                ">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Datasheet
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- MODEL 2: AST3Rb - Intro -->
      <section style="
        background: #0d0d0d;
        padding: 6rem 0;
        padding-bottom: 2rem;
        border-top: 1px solid rgba(255,255,255,0.05);
      ">
        <div class="container">
          <div style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          ">
            <!-- Left: Product Info -->
            <div>
              <p style="
                font-size: 0.8rem;
                color: var(--accent);
                text-transform: uppercase;
                letter-spacing: 0.2em;
                margin-bottom: 0.75rem;
                font-weight: 600;
              ">Compact Model</p>
              
              <h2 style="
                font-size: clamp(2rem, 4vw, 2.75rem);
                color: white;
                font-weight: 700;
                margin-bottom: 1rem;
                letter-spacing: -0.02em;
              ">AST3Rb</h2>
              
              <p style="
                font-size: 1.05rem;
                color: rgba(255,255,255,0.6);
                line-height: 1.7;
                margin-bottom: 2rem;
              ">
                Ultra-slim design with 2000 mAh battery. 
                2000+ updates with single charge, battery can run for 10+ months.
                Perfect for logistics crates and small high-value assets.
              </p>
              
               <!-- Feature Tags -->
              <div style="
                display: flex;
                flex-wrap: wrap;
                gap: 0.75rem;
                margin-bottom: 2rem;
              ">
                ${[
      "Ultra-Low Power",
      "2000 mAh Battery",
      "10+ Months Life",
      "Bluetooth 3.0",
      "Tamper Alerts",
      "OTA Updates"
    ].map(tag => `
                  <span style="
                    padding: 0.5rem 1rem;
                    background: rgba(245,158,11,0.1);
                    border: 1px solid rgba(245,158,11,0.25);
                    border-radius: 50px;
                    color: var(--accent);
                    font-size: 0.85rem;
                    font-weight: 500;
                  ">${tag}</span>
                `).join('')}
              </div>
            </div>
            
            <!-- Right: Product Image -->
            <div style="
              display: flex;
              justify-content: center;
              align-items: center;
            ">
              <img src="${ast3rbImg}" alt="AST3Rb Tracker" style="
                max-width: 350px;
                width: 100%;
                height: auto;
                filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3));
              ">
            </div>
          </div>
        </div>
      </section>

      <!-- MODEL 2: AST3Rb - Specs -->
      <section style="
        background: #0d0d0d;
        padding-top: 0;
        padding-bottom: 6rem;
      ">
        <div class="container">
           <div style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            max-width: 1100px;
            margin: 0 auto;
            background: rgba(255,255,255,0.02);
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.06);
            overflow: hidden;
          ">
             <!-- Left: Clean Product Image -->
            <div style="
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 2rem;
              background: rgba(0,0,0,0.2);
            ">
              <img src="${ast3rbSpecsImg}" alt="AST3Rb Specs" style="
                max-width: 100%;
                width: auto;
                max-height: 350px;
                filter: drop-shadow(0 20px 40px rgba(0,0,0,0.4));
              ">
            </div>

            <!-- Right: Specs Table -->
            <div style="padding: 3rem;">
              <h3 style="
                font-size: 1.5rem;
                color: white;
                font-weight: 700;
                margin-bottom: 1.5rem;
              ">Technical Specifications</h3>
              
              <div style="display: flex; flex-direction: column;">
                ${[
      { label: "Dimensions", value: "78 × 60 × 18 mm" },
      { label: "Weight", value: "100 g" },
      { label: "Battery", value: "2000 mAh Li-Ion" },
      { label: "Battery Life", value: "2000+ updates / 10+ months" },
      { label: "GPS", value: "L1 1575.42MHz, <2.5m CEP" },
      { label: "Cellular", value: "Quad-band 850/900/1800/1900MHz" },
      { label: "Bluetooth", value: "BT 3.0, Auto-pairing" },
      { label: "Operating Temp", value: "-10°C to +60°C" }
    ].map(spec => `
                  <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.85rem 0;
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                  ">
                    <span style="color: rgba(255,255,255,0.5); font-size: 0.9rem;">${spec.label}</span>
                    <span style="color: white; font-size: 0.9rem; font-weight: 600;">${spec.value}</span>
                  </div>
                `).join('')}
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
          <div style="text-align: center; margin-bottom: 4rem;">
            <p style="
              font-size: 0.8rem;
              color: var(--accent);
              text-transform: uppercase;
              letter-spacing: 0.2em;
              margin-bottom: 0.75rem;
              font-weight: 600;
            ">Applications</p>
            <h2 style="
              font-size: clamp(1.75rem, 3vw, 2.5rem);
              color: white;
              font-weight: 700;
            ">Built For Industry</h2>
          </div>
          
          <!-- Logistics -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; margin-bottom: 5rem;">
            <div>
              <h3 style="font-size: 1.5rem; color: white; font-weight: 700; margin-bottom: 1rem;">Logistics & Supply Chain</h3>
              <p style="color: rgba(255,255,255,0.6); font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem;">
                Track high-value shipments, cargo, and packages across long distances with real-time visibility. 
                Reduce losses and improve delivery SLAs.
              </p>
              <ul style="list-style: none; display: grid; gap: 0.5rem;">
                ${["Real-time location tracking", "Route compliance monitoring", "Delivery confirmation", "Theft prevention"].map(p => `
                  <li style="display: flex; align-items: center; gap: 0.5rem; color: rgba(255,255,255,0.7); font-size: 0.9rem;">
                    <span style="color: var(--accent);">✓</span> ${p}
                  </li>
                `).join('')}
              </ul>
            </div>
            <div style="
              border-radius: 16px;
              overflow: hidden;
              background: rgba(255,255,255,0.02);
              border: 1px solid rgba(255,255,255,0.08);
              aspect-ratio: 16/10;
            ">
              <img src="${resolvePath('assets/images/usecase_container.png')}" alt="Logistics" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          </div>
          
          <!-- Cold Chain -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
            <div style="
              border-radius: 16px;
              overflow: hidden;
              background: rgba(255,255,255,0.02);
              border: 1px solid rgba(255,255,255,0.08);
              aspect-ratio: 16/10;
            ">
              <img src="${resolvePath('assets/images/usecase_railway.png')}" alt="Cold Chain" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div>
              <h3 style="font-size: 1.5rem; color: white; font-weight: 700; margin-bottom: 1rem;">Cold Chain Monitoring</h3>
              <p style="color: rgba(255,255,255,0.6); font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem;">
                Monitor vaccines, perishables, and sensitive materials with integrated temperature sensors. 
                Get instant alerts when conditions deviate from safe ranges.
              </p>
              <ul style="list-style: none; display: grid; gap: 0.5rem;">
                ${["Temperature monitoring", "Threshold alerts", "Compliance reporting", "Chain of custody"].map(p => `
                  <li style="display: flex; align-items: center; gap: 0.5rem; color: rgba(255,255,255,0.7); font-size: 0.9rem;">
                    <span style="color: var(--accent);">✓</span> ${p}
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA SECTION -->
      <section style="
        background: linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(245,158,11,0.02) 100%);
        padding: 5rem 0;
        border-top: 1px solid rgba(245,158,11,0.2);
      ">
        <div class="container" style="text-align: center;">
          <h2 style="
            font-size: clamp(1.75rem, 3vw, 2.5rem);
            color: white;
            font-weight: 700;
            margin-bottom: 1rem;
          ">Ready to Get Started?</h2>
          <p style="
            font-size: 1.1rem;
            color: rgba(255,255,255,0.6);
            margin-bottom: 2rem;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
          ">Contact us for pricing, custom configurations, and deployment support.</p>
          <a href="/index.html#contact" style="
            display: inline-block;
            padding: 1rem 2.5rem;
            background: var(--accent);
            color: #000;
            border-radius: 6px;
            font-weight: 600;
            text-decoration: none;
            font-size: 1rem;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          " onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 10px 30px rgba(245,158,11,0.3)'" 
             onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
            Request a Demo
          </a>
        </div>
      </section>

      ${Footer()}
    </main>
  `;
};

export function initRechargeablePage() {
  initNavbar();
}

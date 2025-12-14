import { Navbar, initNavbar } from './navbar.js';
import { Footer } from './footer.js';

const resolvePath = (path) => {
  if (window.location.pathname.includes('/solutions/')) {
    return '../../' + path;
  }
  return path;
};

export const SolarTemplate = () => {
  const deviceImg = resolvePath('assets/images/ast4sli_device.png');
  const softwareImg = resolvePath('assets/images/ast4sli_software.png');
  const specSheetImg = resolvePath('assets/images/ast4sli_spec_sheet.png');
  const heroImg = resolvePath('assets/images/solar_hero_premium.png');

  return `
    <style>
      .solar-page {
        --accent: #10b981;
        --accent-glow: rgba(16, 185, 129, 0.15);
      }
      .solar-page h1, .solar-page h2, .solar-page h3 {
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
    </style>

    ${Navbar()}
    
    <main class="solar-page">
      
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
              background: rgba(16, 185, 129, 0.1);
              border: 1px solid rgba(16, 185, 129, 0.3);
              border-radius: 4px;
              margin-bottom: 2rem;
            ">
              <span style="color: var(--accent); font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">
                Solar Powered Asset Tracker
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
              Track Without<br>
              <span style="color: var(--accent);">Limits</span>
            </h1>
            
            <!-- Subtitle -->
            <p style="
              font-size: 1.25rem;
              color: rgba(255,255,255,0.7);
              line-height: 1.6;
              margin-bottom: 2.5rem;
              max-width: 500px;
            ">
              Zero wiring. Zero maintenance. 90+ days battery backup. 
              The complete solar-powered GPS solution for rail wagons, containers, and remote assets.
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
              <a href="#" style="
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
                Download Spec Sheet
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
      { value: "100%", label: "Solar Powered", icon: "☀️" },
      { value: "IP67", label: "Waterproof", icon: "💧" },
      { value: "90+", label: "Days Backup", icon: "🔋" },
      { value: "4G", label: "Dual SIM", icon: "📡" }
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

      <!-- PRODUCT SECTION - Clean Split Layout -->
      <section id="product" style="
        background: #0a0a0a;
        padding: 6rem 0;
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
              <img src="${resolvePath('assets/images/ast4sli_product.png')}" alt="AST4SLi Solar Tracker" style="
                max-width: 450px;
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
              ">Solar Powered Asset Tracker</p>
              
              <h2 style="
                font-size: clamp(2rem, 4vw, 2.75rem);
                color: white;
                font-weight: 700;
                margin-bottom: 1rem;
                letter-spacing: -0.02em;
              ">AST4SLi</h2>
              
              <p style="
                font-size: 1.05rem;
                color: rgba(255,255,255,0.6);
                line-height: 1.7;
                margin-bottom: 2rem;
              ">
                Track remote assets like containers, wagons, and trailers with zero wiring and zero maintenance. 
                Powered entirely by solar energy with 90+ days battery backup.
              </p>
              
              <!-- Simple Feature Tags -->
              <div style="
                display: flex;
                flex-wrap: wrap;
                gap: 0.75rem;
                margin-bottom: 2rem;
              ">
                ${[
      "100% Solar Powered",
      "IP67 Waterproof",
      "4G LTE",
      "Dual SIM",
      "90+ Days Backup",
      "BLE 5.0",
      "Tamper Alert",
      "GPS Tracking"
    ].map(tag => `
                  <span style="
                    padding: 0.5rem 1rem;
                    background: rgba(16,185,129,0.1);
                    border: 1px solid rgba(16,185,129,0.25);
                    border-radius: 50px;
                    color: #10b981;
                    font-size: 0.85rem;
                    font-weight: 500;
                  ">${tag}</span>
                `).join('')}
              </div>
              
              <!-- Key Specs -->
              <div style="
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 1.5rem;
                padding-top: 1.5rem;
                border-top: 1px solid rgba(255,255,255,0.1);
              ">
                <div>
                  <div style="font-size: 1.5rem; font-weight: 700; color: white;">7800</div>
                  <div style="font-size: 0.8rem; color: rgba(255,255,255,0.5);">mAh Battery</div>
                </div>
                <div>
                  <div style="font-size: 1.5rem; font-weight: 700; color: white;">IP67</div>
                  <div style="font-size: 0.8rem; color: rgba(255,255,255,0.5);">Protection</div>
                </div>
                <div>
                  <div style="font-size: 1.5rem; font-weight: 700; color: white;">IK08</div>
                  <div style="font-size: 0.8rem; color: rgba(255,255,255,0.5);">Impact Rated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- DIMENSIONS SHOWCASE - 3D Technical View -->
      <section style="
        background: linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%);
        padding: 5rem 0;
        border-top: 1px solid rgba(255,255,255,0.05);
      ">
        <div class="container">
          <div style="
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 4rem;
            align-items: center;
          ">
            <!-- Left: 3D Dimension Image -->
            <div style="
              display: flex;
              justify-content: center;
              align-items: center;
            ">
              <img src="${resolvePath('assets/images/product_dimensions.png')}" alt="AST4SLi Dimensions" style="
                max-width: 100%;
                height: auto;
              ">
            </div>
            
            <!-- Right: Technical Specs -->
            <div>
              <p style="
                font-size: 0.8rem;
                color: rgba(255,255,255,0.5);
                text-transform: uppercase;
                letter-spacing: 0.15em;
                margin-bottom: 0.75rem;
              ">Technical Specifications</p>
              
              <h2 style="
                font-size: clamp(1.5rem, 3vw, 2rem);
                color: white;
                font-weight: 700;
                margin-bottom: 1.5rem;
              ">Compact & Lightweight</h2>
              
              <div style="display: grid; gap: 1rem;">
                ${[
      { label: "Length", value: "197 mm" },
      { label: "Width", value: "83 mm" },
      { label: "Height", value: "28 mm" },
      { label: "Weight", value: "500 g" },
      { label: "Battery", value: "7800 mAh Li-Ion" },
      { label: "Operating Temp", value: "-20°C to +85°C" }
    ].map(s => `
                  <div style="
                    display: flex;
                    justify-content: space-between;
                    padding: 0.75rem 0;
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                  ">
                    <span style="color: rgba(255,255,255,0.5); font-size: 0.95rem;">${s.label}</span>
                    <span style="color: white; font-weight: 600; font-size: 0.95rem;">${s.value}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FEATURES - Detailed with White/Gray -->
      <section style="
        background: linear-gradient(180deg, #0a0a0a 0%, #111 100%);
        padding: 6rem 0;
      ">
        <div class="container">
          <div style="text-align: center; margin-bottom: 4rem;">
            <h2 style="
              font-size: 0.9rem;
              color: rgba(255,255,255,0.5);
              text-transform: uppercase;
              letter-spacing: 0.15em;
              margin-bottom: 1rem;
            ">Why Choose AST4SLi</h2>
            <h3 style="
              font-size: clamp(1.75rem, 3vw, 2.25rem);
              color: white;
              font-weight: 600;
            ">Built for Extreme Conditions</h3>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
            ${[
      {
        title: "100% Solar Powered",
        points: [
          "High-efficiency solar panel charges in all weather",
          "No external power source needed",
          "Works in low-light conditions"
        ]
      },
      {
        title: "Real-Time GPS Tracking",
        points: [
          "Live location updates via SmartFleet platform",
          "Historical route playback and analytics",
          "Accurate positioning across remote areas"
        ]
      },
      {
        title: "Rugged & Weatherproof",
        points: [
          "IP67 water and dust protection",
          "IK08 impact resistance rating",
          "Operating range: -40°C to +85°C"
        ]
      },
      {
        title: "Smart Alerts & Notifications",
        points: [
          "Motion detection and tamper alerts",
          "Customizable geofence boundaries",
          "Instant push notifications to mobile"
        ]
      },
      {
        title: "90+ Days Battery Backup",
        points: [
          "7800mAh high-capacity lithium battery",
          "Intelligent power management system",
          "Works even without sunlight for months"
        ]
      },
      {
        title: "Easy Installation",
        points: [
          "Magnetic or bolt mount options",
          "No wiring or drilling required",
          "Install in under 5 minutes"
        ]
      }
    ].map(f => `
              <div style="
                padding: 2rem;
                background: rgba(255,255,255,0.02);
                border: 1px solid rgba(255,255,255,0.08);
                border-radius: 12px;
              ">
                <h4 style="
                  color: white; 
                  font-size: 1.15rem; 
                  font-weight: 600; 
                  margin-bottom: 1rem;
                  padding-bottom: 0.75rem;
                  border-bottom: 1px solid rgba(255,255,255,0.1);
                ">${f.title}</h4>
                <ul style="list-style: none; display: grid; gap: 0.6rem;">
                  ${f.points.map(p => `
                    <li style="
                      display: flex;
                      align-items: flex-start;
                      gap: 0.6rem;
                      color: rgba(255,255,255,0.6);
                      font-size: 0.9rem;
                      line-height: 1.5;
                    ">
                      <span style="color: rgba(255,255,255,0.3); margin-top: 2px;">•</span>
                      ${p}
                    </li>
                  `).join('')}
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- USE CASES -->
      <section style="
        background: #0a0a0a;
        padding: 6rem 0;
        border-top: 1px solid rgba(255,255,255,0.05);
      ">
        <div class="container">
          <div style="text-align: center; margin-bottom: 4rem;">
            <p style="
              font-size: 0.85rem;
              color: rgba(255,255,255,0.5);
              text-transform: uppercase;
              letter-spacing: 0.15em;
              margin-bottom: 0.75rem;
            ">Applications</p>
            <h2 style="
              font-size: clamp(1.75rem, 3vw, 2.25rem);
              color: white;
              font-weight: 700;
            ">Real-World Use Cases</h2>
          </div>
          
          <!-- Use Case 1: Container Tracking -->
          <div style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
            margin-bottom: 5rem;
          ">
            <div style="
              border-radius: 16px;
              overflow: hidden;
              border: 1px solid rgba(255,255,255,0.1);
            ">
              <img src="${resolvePath('assets/images/usecase_container.png')}" alt="Container Tracking" style="
                width: 100%;
                height: auto;
                display: block;
              ">
            </div>
            <div>
              <h3 style="
                font-size: 1.5rem;
                color: white;
                font-weight: 700;
                margin-bottom: 1rem;
              ">Container Tracking</h3>
              <p style="
                color: rgba(255,255,255,0.6);
                font-size: 1rem;
                line-height: 1.7;
                margin-bottom: 1.5rem;
              ">
                Track shipping containers across ports, yards, and in-transit with real-time GPS visibility. 
                Our solar-powered tracker works without any external power connection.
              </p>
              <ul style="list-style: none; display: grid; gap: 0.6rem;">
                ${["Port to port visibility", "Yard location tracking", "Movement alerts", "No power required"].map(p => `
                  <li style="display: flex; align-items: center; gap: 0.6rem; color: rgba(255,255,255,0.7); font-size: 0.9rem;">
                    <span style="color: rgba(255,255,255,0.4);">•</span> ${p}
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
          
          <!-- Use Case 2: Railway Wagon Tracking -->
          <div style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          ">
            <div style="order: 2; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
              <img src="${resolvePath('assets/images/usecase_railway.png')}" alt="Railway Wagon Tracking" style="
                width: 100%;
                height: auto;
                display: block;
              ">
            </div>
            <div style="order: 1;">
              <h3 style="
                font-size: 1.5rem;
                color: white;
                font-weight: 700;
                margin-bottom: 1rem;
              ">Railway Wagon Tracking</h3>
              <p style="
                color: rgba(255,255,255,0.6);
                font-size: 1rem;
                line-height: 1.7;
                margin-bottom: 1.5rem;
              ">
                Monitor non-powered railway wagons and freight cars across the rail network. 
                Rugged design survives harsh rail environments and extreme temperatures.
              </p>
              <ul style="list-style: none; display: grid; gap: 0.6rem;">
                ${["Wagon fleet visibility", "Transit time monitoring", "Siding detection", "Tamper protection"].map(p => `
                  <li style="display: flex; align-items: center; gap: 0.6rem; color: rgba(255,255,255,0.7); font-size: 0.9rem;">
                    <span style="color: rgba(255,255,255,0.4);">•</span> ${p}
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA SECTION -->
      <section style="
        background: linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0.02) 100%);
        padding: 5rem 0;
        border-top: 1px solid rgba(16,185,129,0.2);
      ">
        <div class="container" style="text-align: center;">
          <h2 style="
            font-size: clamp(1.75rem, 3vw, 2.5rem);
            color: white;
            font-weight: 600;
            margin-bottom: 1rem;
          ">Ready to Get Started?</h2>
          <p style="
            color: rgba(255,255,255,0.6);
            font-size: 1.1rem;
            margin-bottom: 2rem;
          ">Contact our team for pricing and deployment options.</p>
          <a href="#" style="
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2.5rem;
            background: white;
            color: #000;
            border-radius: 6px;
            font-weight: 600;
            font-size: 1rem;
            text-decoration: none;
          ">
            Contact Sales
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </section>

    </main>

    ${Footer()}
  `;
};

export function initSolarPage() {
  initNavbar();
}

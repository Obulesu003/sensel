import { Navbar } from './navbar.js';
import { Footer } from './footer.js';

const resolvePath = (path) => {
    if (window.location.pathname.includes('/solutions/')) {
        return '../../' + path;
    }
    return path;
};

export const WorkHourTemplate = () => {
    // Using user uploads as placeholders since generation failed
    const heroBg = resolvePath('assets/images/work_hour_hero.png');
    const deviceImg = resolvePath('assets/images/work_hour_device.png');
    const constructionBg = resolvePath('assets/images/work_hour_construction.png');

    // Initialize Calculator Logic after render
    setTimeout(() => {
        const fleetInput = document.getElementById('fleet-size');
        const idleInput = document.getElementById('idle-percent');
        const savingsDisplay = document.getElementById('savings-display');
        const fleetDisplay = document.getElementById('fleet-val');
        const idleDisplay = document.getElementById('idle-val');

        if (fleetInput && idleInput) {
            const calculate = () => {
                const fleet = parseInt(fleetInput.value);
                const idle = parseInt(idleInput.value);
                const hourlyRate = 50; // Avg cost per hour
                const hoursPerMonth = 160;

                // Formula: Fleet * Hours * (Idle% / 100) * HourlyRate
                const wastedMoney = fleet * hoursPerMonth * (idle / 100) * hourlyRate;
                const potentialSavings = wastedMoney * 0.8; // Assume 80% reduction

                savingsDisplay.innerText = '$' + potentialSavings.toLocaleString();
                fleetDisplay.innerText = fleet;
                idleDisplay.innerText = idle + '%';
            };

            fleetInput.addEventListener('input', calculate);
            idleInput.addEventListener('input', calculate);
            calculate(); // Initial run
        }
    }, 500);

    return `
    <style>
      :root {
        --industrial-orange: #ff6b00;
        --industrial-dark: #0b0b0b;
        --glass-bg: rgba(255, 255, 255, 0.05);
        --glass-border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .premium-page {
        background-color: var(--industrial-dark);
        color: white;
        font-family: 'Space Grotesk', sans-serif;
        overflow-x: hidden;
      }

      .hologram-text {
        color: transparent;
        -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        position: relative;
      }
      .hologram-text::before {
        content: attr(data-text);
        position: absolute;
        left: 0;
        top: 0;
        color: white;
        clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
        animation: glitch 3s infinite;
      }

      @keyframes glitch {
        0% { clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%); transform: translate(0,0); }
        20% { clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%); transform: translate(2px,0); }
        40% { transform: translate(-2px,0); }
        100% { clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%); transform: translate(0,0); }
      }

      .range-slider {
        width: 100%;
        height: 6px;
        background: #333;
        border-radius: 3px;
        outline: none;
        -webkit-appearance: none;
      }
      .range-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        background: var(--industrial-orange);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 15px var(--industrial-orange);
      }

      .glass-panel {
        background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
        backdrop-filter: blur(20px);
        border: var(--glass-border);
        border-top: 1px solid rgba(255,255,255,0.2);
        border-radius: 24px;
      }

      .cyber-grid {
        background-image: linear-gradient(rgba(255, 107, 0, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255, 107, 0, 0.1) 1px, transparent 1px);
        background-size: 40px 40px;
        mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
      }
    </style>

    ${Navbar()}

    <main class="premium-page">
      
      <!-- 1. HERO: Industrial Futurism -->
      <section style="min-height: 100vh; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;">
        <!-- BG -->
        <div style="position: absolute; inset: 0; background: url('${heroBg}') center/cover no-repeat; opacity: 0.6; filter: hue-rotate(-10deg) contrast(1.2);"></div>
        <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, transparent, #0b0b0b 90%);"></div>
        <div class="cyber-grid" style="position: absolute; inset: 0; opacity: 0.3;"></div>

        <div class="container" style="position: relative; z-index: 10; text-align: center;">
          <h1 style="font-family: 'Outfit'; font-weight: 800; font-size: clamp(4rem, 8vw, 7rem); line-height: 0.9; margin-bottom: 2rem; text-transform: uppercase;">
            <span class="hologram-text" data-text="EFFICIENCY">EFFICIENCY</span><br>
            <span style="color: var(--industrial-orange); text-shadow: 0 0 40px rgba(255, 107, 0, 0.4);">UNLOCKED</span>
          </h1>
          
          <p style="font-size: 1.5rem; max-width: 600px; margin: 0 auto 3rem auto; color: rgba(255,255,255,0.8);">
            The only vibration-based work hour monitor that guarantees a <span style="color: white; border-bottom: 2px solid var(--industrial-orange);">20x Return on Investment</span>.
          </p>

          <a href="#calculator" style="display: inline-block; background: var(--industrial-orange); color: black; font-weight: 700; padding: 1.2rem 3rem; font-size: 1.1rem; clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%); text-decoration: none; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            CALCULATE SAVINGS
          </a>
        </div>
      </section>

      <!-- 2. INTERACTIVE ROI CALCULATOR -->
      <section id="calculator" style="padding: 8rem 0; background: #0b0b0b; position: relative;">
        <div class="container">
          <div class="glass-panel" style="padding: 4rem; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
            
            <!-- Controls -->
            <div>
              <h2 style="font-size: 2.5rem; margin-bottom: 2rem;">See Your Potential Savings</h2>
              <p style="color: rgba(255,255,255,0.6); margin-bottom: 3rem;">Adjust the sliders to match your fleet size and current estimated idle time.</p>
              
              <div style="margin-bottom: 2.5rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                  <label style="font-weight: 600;">FLEET SIZE</label>
                  <span id="fleet-val" style="color: var(--industrial-orange); font-weight: 700;">10</span>
                </div>
                <input type="range" id="fleet-size" min="1" max="100" value="10" class="range-slider">
              </div>

              <div style="margin-bottom: 2.5rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                  <label style="font-weight: 600;">IDLE TIME (%)</label>
                  <span id="idle-val" style="color: var(--industrial-orange); font-weight: 700;">30%</span>
                </div>
                <input type="range" id="idle-percent" min="0" max="100" value="30" class="range-slider">
              </div>
            </div>

            <!-- Result -->
            <div style="text-align: center; border-left: 1px solid rgba(255,255,255,0.1); padding-left: 4rem;">
               <div style="font-size: 1rem; letter-spacing: 0.2em; color: rgba(255,255,255,0.5); margin-bottom: 1rem;">ESTIMATED MONTHLY SAVINGS</div>
               <div id="savings-display" style="font-size: 5rem; font-weight: 800; color: white; line-height: 1; text-shadow: 0 0 50px rgba(255,255,255,0.2);">$12,000</div>
               <div style="margin-top: 1.5rem; color: #22c55e; font-size: 1.1rem; background: rgba(34, 197, 94, 0.1); display: inline-block; padding: 0.5rem 1rem; border-radius: 50px;">
                 Based on $50/hr avg operating cost
               </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 3. TECHNOLOGY DEEP DIVE -->
      <section style="padding: 8rem 0; background: url('${constructionBg}') fixed center/cover; position: relative;">
        <div style="position: absolute; inset: 0; background: #0b0b0b; opacity: 0.9;"></div>
        
        <div class="container" style="position: relative; z-index: 1;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center;">
            
            <!-- Graphic -->
            <div style="position: relative;">
              <div style="position: absolute; inset: -20px; border: 1px solid var(--industrial-orange); opacity: 0.3; clip-path: polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%);"></div>
              <img src="${deviceImg}" style="width: 100%; filter: drop-shadow(0 0 50px rgba(255, 107, 0, 0.2));" alt="AST3Rc">
              <!-- Overlay Pulse -->
              <div style="position: absolute; top: 50%; left: 50%; width: 200px; height: 200px; border: 2px solid var(--industrial-orange); border-radius: 50%; transform: translate(-50%, -50%); animation: pulse 2s infinite;"></div>
            </div>

            <style>
              @keyframes pulse {
                0% { width: 100px; opacity: 1; }
                100% { width: 300px; opacity: 0; }
              }
            </style>

            <!-- Text -->
            <div>
              <h2 style="font-size: 3rem; margin-bottom: 2rem;">It Feels The <br><span style="color: var(--industrial-orange);">Work Happening.</span></h2>
              <p style="font-size: 1.25rem; line-height: 1.7; color: rgba(255,255,255,0.8); margin-bottom: 2rem;">
                Standard trackers use motion. We use <strong>Advanced Vibration Sensing</strong>.
              </p>
              <p style="color: rgba(255,255,255,0.6); margin-bottom: 2rem;">
                AST3Rc distinguishes between a machine that is simply moving (being transported) and one that is working (engine running), giving you the pure runtime data needed for accurate billing.
              </p>
              
              <ul style="display: grid; gap: 1rem; color: white; font-weight: 500;">
                <li style="display: flex; gap: 1rem;"><span style="color: var(--industrial-orange);">01</span> Filters out transport vibration</li>
                <li style="display: flex; gap: 1rem;"><span style="color: var(--industrial-orange);">02</span> Detects engine idle vs load</li>
                <li style="display: flex; gap: 1rem;"><span style="color: var(--industrial-orange);">03</span> 10+ months battery life</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <!-- 4. DASHBOARD VISUAL (Clean) -->
      <section style="padding: 6rem 0; background: #0e0e0e;">
         <div class="container" style="text-align: center;">
            <p style="color: var(--industrial-orange); font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 1rem;">Command Center</p>
            <h2 style="font-size: 2.5rem; margin-bottom: 4rem;">Total Operational Visibility</h2>
            
            <div class="glass-panel" style="padding: 2rem; max-width: 900px; margin: 0 auto; min-height: 400px; display: flex; align-items: center; justify-content: center; position: relative;">
               <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(255,107,0,0.05), transparent);"></div>
               
               <!-- Simulated Chart / Data using CSS Grids -->
               <div style="width: 100%; display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
                  <div style="background: rgba(255,255,255,0.03); padding: 2rem; border-radius: 12px;">
                     <div style="font-size: 3rem; font-weight: 700;">89%</div>
                     <div style="font-size: 0.8rem; color: rgba(255,255,255,0.5);">FLEET UTILIZATION</div>
                  </div>
                  <div style="background: rgba(255,255,255,0.03); padding: 2rem; border-radius: 12px; border: 1px solid var(--industrial-orange);">
                     <div style="font-size: 3rem; font-weight: 700; color: var(--industrial-orange);">142h</div>
                     <div style="font-size: 0.8rem; color: rgba(255,255,255,0.5);">HOURS SAVED</div>
                  </div>
                  <div style="background: rgba(255,255,255,0.03); padding: 2rem; border-radius: 12px;">
                     <div style="font-size: 3rem; font-weight: 700;">4.2</div>
                     <div style="font-size: 0.8rem; color: rgba(255,255,255,0.5);">ROI MULTIPLIER (Mo)</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      ${Footer()}
    </main>
  `;
};

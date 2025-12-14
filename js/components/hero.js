const slides = [
  'assets/images/hero_fleet_highway_1765659342632.png',
  'assets/images/hero_mining_truck_1765659261889.png',
  'assets/images/hero_solar_rail_1765659281848.png',
  'assets/images/hero_hazardous_tanker_1765659298135.png',
  'assets/images/hero_construction_excavator_1765659325337.png'
];

export const Hero = ({ title, subtitle, bgImage } = {}) => {
  const isSlideshow = !bgImage;
  const initialImage = bgImage || slides[0];

  return `
    <section id="hero-section" class="hero ${isSlideshow ? 'hero-slideshow' : ''}" style="
      position: relative; 
      height: 100vh; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      text-align: center;
      color: white;
      overflow: hidden;
      background: #09090b;
    ">
      <!-- Background Image - HIGH OPACITY (0.85) -->
      <div id="hero-bg" style="
        position: absolute; top:0; left:0; width: 100%; height: 100%;
        background: url(${initialImage}) no-repeat center center/cover;
        opacity: 0.85;
        transition: background-image 1.5s ease-in-out;
      "></div>
      
      <!-- SIMPLE bottom gradient only (no vignette) -->
      <div style="
        position: absolute; bottom:0; left:0; width:100%; height: 50%;
        background: linear-gradient(to top, rgba(9,9,11,0.95), transparent);
      "></div>

      <div class="container" style="position: relative; z-index: 2; max-width: 1000px;">
        
        <!-- Trust Label (Concrete) -->
        <div class="scroll-animate" style="margin-bottom: 1.5rem; display: flex; justify-content: center;">
          <span style="
            font-size: 0.85rem; 
            text-transform: uppercase; 
            letter-spacing: 0.15em; 
            color: rgba(255,255,255,0.7);
            font-weight: 600;
            padding: 0.5rem 1rem;
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 50px;
          ">Trusted by 500+ Enterprises</span>
        </div>

        <!-- Specific Headline with Numbers -->
        <h1 class="scroll-animate delay-100" style="
          font-size: clamp(2.5rem, 5vw, 4.5rem); 
          margin-bottom: 1.5rem; 
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
        ">
          ${title || "Track <span style='color: var(--color-brand-accent)'>150,000+</span> Industrial<br>Assets in Real-Time"}
        </h1>
        
        <!-- Specific Subtitle -->
        <p class="scroll-animate delay-200" style="
          font-size: 1.25rem; 
          color: rgba(255,255,255,0.8); 
          margin: 0 auto 2.5rem auto;
          max-width: 650px;
          line-height: 1.6;
          font-weight: 400;
        ">
          ${subtitle || "Rugged telematics hardware and AI-powered analytics for mining, logistics, and hazardous cargo operations."}
        </p>
        
        <!-- TWO CTAs -->
        <div class="scroll-animate delay-300" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="#solutions" style="
            padding: 1rem 2rem; 
            background: white; 
            color: black; 
            border-radius: 8px; 
            font-weight: 600; 
            font-size: 1rem;
            transition: transform 0.2s, box-shadow 0.2s;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.4)'" 
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.3)'">
            Explore Solutions
          </a>
          <a href="#" style="
            padding: 1rem 2rem; 
            background: transparent; 
            color: white; 
            border: 1px solid rgba(255,255,255,0.3);
            border-radius: 8px; 
            font-weight: 600; 
            font-size: 1rem;
            transition: background 0.2s, border-color 0.2s;
          " onmouseover="this.style.background='rgba(255,255,255,0.1)'; this.style.borderColor='rgba(255,255,255,0.5)'" 
             onmouseout="this.style.background='transparent'; this.style.borderColor='rgba(255,255,255,0.3)'">
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  `;
};

export function initHeroSlideshow() {
  const heroBg = document.getElementById('hero-bg');
  if (!heroBg) return;

  let index = 0;
  slides.forEach(src => { new Image().src = src; });

  setInterval(() => {
    index = (index + 1) % slides.length;
    heroBg.style.backgroundImage = `url(${slides[index]})`;
  }, 5000);
}

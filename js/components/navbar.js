export const Navbar = () => {
  return `
      <style>
        .nav-link {
          text-decoration: none;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--color-brand-primary, #f97316);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }

        /* Dropdown Styles */
        .dropdown {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
        }
        .dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
        }
        .dropdown-trigger::after {
          content: '▾';
          font-size: 0.7em;
          margin-top: 2px;
        }
        .dropdown-content {
          display: none;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          min-width: 260px;
          background: rgba(24, 24, 27, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 0.5rem;
          margin-top: 1rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          z-index: 1001;
          flex-direction: column;
          gap: 2px;
        }
        /* Triangle indicator */
        .dropdown-content::before {
          content: '';
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 6px solid rgba(255,255,255,0.1);
        }
        
        .dropdown:hover .dropdown-content {
          display: flex;
          animation: slideDown 0.2s ease-out forwards;
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .dropdown-item {
          display: block;
          padding: 0.75rem 1rem;
          color: rgba(255,255,255,0.8) !important;
          text-decoration: none;
          font-size: 0.9rem;
          border-radius: 8px;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .dropdown-item:hover {
          background: rgba(255,255,255,0.08);
          color: white !important;
          transform: translateX(4px);
        }
      </style>

      <div style="position: fixed; top: 1.5rem; left: 0; width: 100%; z-index: 1000; pointer-events: none;">
      <style>
        /* Mobile Menu Styles */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 1002;
          padding: 0.5rem;
        }
        
        /* Desktop styles */
        .nav-links-desktop {
           display: flex;
           gap: 2.5rem;
           align-items: center;
           height: 100%;
        }
        
        .mobile-nav-overlay {
           display: none;
        }

        @media (max-width: 900px) {
          .navbar-pill {
            padding: 0.8rem 1.2rem !important;
            width: 90% !important;
            justify-content: space-between;
          }
          
          /* Hide desktop links */
          .nav-links-desktop {
            display: none !important;
          }

          .mobile-menu-btn {
            display: block;
          }

          /* Mobile Overlay Menu */
          .mobile-nav-overlay {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: #09090b; /* Slightly lighter/richer black */
            z-index: 1001;
            padding: 7rem 2rem 4rem 2rem;
            transform: translateX(100%);
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
            opacity: 0;
            pointer-events: auto; /* CRITICAL FIX: Re-enable clicks */
            overflow-y: auto; /* Allow scrolling if content is long */
          }
          
          .mobile-nav-overlay.active {
            transform: translateX(0);
            opacity: 1;
          }

          .mobile-link {
            font-size: 1.5rem;
            font-weight: 700;
            color: #ffffff;
            text-decoration: none;
            padding: 1rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            display: block;
            opacity: 0; /* Stagger animation start */
            transform: translateY(10px);
            transition: all 0.3s ease;
          }
          
          .mobile-nav-overlay.active .mobile-link {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.1s;
          }
          
          /* Stagger delays for items */
          .mobile-nav-overlay.active a:nth-child(1) { transition-delay: 0.1s; }
          .mobile-nav-overlay.active div:nth-child(2) { transition-delay: 0.2s; } /* Solutions container */
          .mobile-nav-overlay.active a:nth-child(3) { transition-delay: 0.3s; }
          .mobile-nav-overlay.active a:nth-child(4) { transition-delay: 0.4s; }
          
          .mobile-sub-link {
             font-size: 1.1rem;
             color: #a1a1aa;
             padding: 0.8rem 0 0.8rem 1rem;
             display: block;
             text-decoration: none;
             transition: color 0.2s;
          }
          .mobile-sub-link:active {
            color: white;
            background: rgba(255,255,255,0.05);
            border-radius: 8px;
          }
          
          /* Disable scroll when menu open */
          body.menu-open {
            overflow: hidden !important;
          }
        }
      </style>

      <!-- Navbar Container -->
      <nav class="navbar-pill" style="
        pointer-events: auto;
        width: 90%; 
        max-width: 900px;
        margin: 0 auto;
        background: rgba(24, 24, 27, 0.9); /* More opaque for contrast */
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 999px;
        padding: 0.75rem 2rem;
        display: flex; 
        justify-content: space-between; 
        align-items: center;
        box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        z-index: 1002; /* Above overlay */
        position: relative;
      ">
        <!-- Logo -->
        <a href="/sensel/index.html" style="
          font-weight: 800; 
          font-size: 1.25rem; 
          display: flex; 
          align-items: center; 
          gap: 0.5rem; 
          text-decoration: none; 
          letter-spacing: -0.02em;
          z-index: 1003;
        ">
          <div style="width: 24px; height: 24px; background: linear-gradient(135deg, #f97316, #ea580c); border-radius: 6px; box-shadow: 0 0 15px rgba(249, 115, 22, 0.4);"></div>
          <span style="color: white; font-family: 'Outfit', sans-serif;">SENSEL</span>
        </a>
        
        <!-- Mobile Toggle -->
        <button class="mobile-menu-btn" onclick="
          document.querySelector('.mobile-nav-overlay').classList.toggle('active');
          document.body.classList.toggle('menu-open');
          this.textContent = document.querySelector('.mobile-nav-overlay').classList.contains('active') ? '✕' : '☰';
        ">
          ☰
        </button>

        <!-- Desktop Links -->
        <div class="nav-links-desktop">
          <a href="/sensel/index.html" class="nav-link" style="color: white;">Home</a>
          
          <div class="dropdown">
            <a href="#" class="dropdown-trigger nav-link" style="color: rgba(255,255,255,0.7); transition: color 0.2s;">Solutions</a>
            <div class="dropdown-content">
              <a href="/sensel/solutions/rechargeable/index.html" class="dropdown-item">Asset Tracker - Rechargeable</a>
              <a href="/sensel/solutions/solar/index.html" class="dropdown-item">Asset Tracker - Solar</a>
              <a href="/sensel/solutions/work-hour/index.html" class="dropdown-item">Work Hour Management</a>
            </div>
          </div>
          
          <a href="/sensel/index.html#innovation" class="nav-link" style="color: rgba(255,255,255,0.7); transition: color 0.2s;">Innovation</a>
          <a href="/sensel/contact.html" class="nav-link" style="color: rgba(255,255,255,0.7); transition: color 0.2s;">Contact</a>
        
          <a href="/sensel/contact.html" style="
            padding: 0.6rem 1.4rem; font-size: 0.9rem; background: rgba(255,255,255,0.1); 
            color: white; border: 1px solid rgba(255,255,255,0.2); border-radius: 99px; 
            font-weight: 600; text-decoration: none; transition: all 0.2s ease;
          " onmouseover="this.style.background='white'; this.style.color='black'; this.style.transform='scale(1.05)'" 
             onmouseout="this.style.background='rgba(255,255,255,0.1)'; this.style.color='white'; this.style.transform='scale(1)'">
            Book Demo
          </a>
        </div>
      </nav>

      <!-- Mobile Full-Screen Overlay -->
      <div class="mobile-nav-overlay">
         <a href="/sensel/index.html" class="mobile-link">Home</a>
         
         <div style="padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
           <span style="font-size: 0.9rem; text-transform: uppercase; color: var(--accent); letter-spacing: 0.1em; font-weight: 600;">Solutions</span>
           <div style="margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
              <a href="/sensel/solutions/rechargeable/index.html" class="mobile-sub-link">⚡ Rechargeable Tracker</a>
              <a href="/sensel/solutions/solar/index.html" class="mobile-sub-link">☀️ Solar Tracker</a>
              <a href="/sensel/solutions/work-hour/index.html" class="mobile-sub-link">⏱️ Work Hour Monitor</a>
           </div>
         </div>
         
         <a href="/sensel/index.html#innovation" class="mobile-link">Innovation</a>
         <a href="/sensel/contact.html" class="mobile-link">Contact</a>
         
         <div style="margin-top: 2rem;">
            <a href="/sensel/contact.html" style="
              display: block; text-align: center; padding: 1rem; background: var(--accent); color: white;
              font-weight: 700; border-radius: 8px; text-decoration: none;
            ">Book a Demo</a>
         </div>
      </div>
    </div>
    `;
};


export function initNavbar() {
  const nav = document.querySelector('.navbar-pill');
  if (!nav) return;

  // Dynamic Dynamic Island Effect on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(24, 24, 27, 0.9)';
      nav.style.transform = 'translateY(-2px) scale(0.98)';
      nav.style.border = '1px solid rgba(255,255,255,0.15)';
    } else {
      nav.style.background = 'rgba(24, 24, 27, 0.75)';
      nav.style.transform = 'translateY(0) scale(1)';
      nav.style.border = '1px solid rgba(255,255,255,0.08)';
    }
  });
}

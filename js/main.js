import { Navbar, initNavbar } from './components/navbar.js';
import { Hero, initHeroSlideshow } from './components/hero.js';
import { Logos } from './components/logos.js';
import { WhySensel } from './components/why-sensel.js';
import { Ecosystem } from './components/ecosystem.js';
import { Stats, initStatsCountUp } from './components/stats.js';
import { BentoGrid } from './components/bento-grid.js';
import { Testimonials } from './components/testimonials.js';
import { CtaBanner } from './components/cta-banner.js';
import { Footer } from './components/footer.js';

const app = document.querySelector('#app');

function initSmoothScroll() {
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}

function renderLanding() {
  // Page structure: Hero → Logos → Why → Ecosystem → Stats → Solutions → Testimonials → CTA → Footer
  app.innerHTML = `
    ${Navbar()}
    ${Hero()}
    ${Logos()}
    ${BentoGrid()}
    ${WhySensel()}
    ${Ecosystem()}
    ${Stats()}
    ${Testimonials()}
    ${CtaBanner()} 
    ${Footer()}
  `;

  initNavbar();
  initHeroSlideshow();
  initScrollObserver();
  initSmoothScroll();
  initStatsCountUp(); // NEW: Count-up animation
}

function initScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
}

if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
  renderLanding();
}

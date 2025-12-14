import { SolarTemplate, initSolarPage } from './components/solar-template.js';

const app = document.querySelector('#app');

// Render the Solar-specific template
app.innerHTML = SolarTemplate();

// Initialize
initSolarPage();

// Initialize scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));

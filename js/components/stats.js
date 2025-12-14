export const Stats = () => {
  const stats = [
    { value: 150000, suffix: '+', label: 'Active Assets', id: 'stat-assets' },
    { value: 500, suffix: '+', label: 'Enterprise Clients', id: 'stat-clients' },
    { value: 15, suffix: '+', label: 'Years Experience', id: 'stat-years' },
    { value: 99.9, suffix: '%', label: 'Uptime SLA', id: 'stat-uptime' }
  ];

  return `
      <section id="stats-section" style="
        background: var(--color-bg-surface); 
        padding: 4rem 0; 
      ">
        <div class="container">
          <div style="
            display: flex; 
            flex-wrap: wrap; 
            justify-content: space-around; 
            gap: 2rem; 
            text-align: center;
            padding: 2rem;
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.05);
            border-radius: var(--radius-lg);
          ">
            ${stats.map((stat, index) => `
                <div class="scroll-animate delay-${index * 100}" style="flex: 1; min-width: 150px;">
                    <div id="${stat.id}" style="
                        font-family: var(--font-display);
                        font-size: clamp(2.5rem, 4vw, 3.5rem); 
                        font-weight: 700; 
                        margin-bottom: 0.5rem; 
                        color: white;
                        letter-spacing: -0.03em;
                    " data-target="${stat.value}" data-suffix="${stat.suffix}">
                        0${stat.suffix}
                    </div>
                    <div style="
                        font-size: 0.85rem; 
                        color: var(--color-text-muted); 
                        letter-spacing: 0.1em; 
                        text-transform: uppercase; 
                        font-weight: 600;
                    ">
                        ${stat.label}
                    </div>
                </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
};

// Count-up animation
export function initStatsCountUp() {
  const statsSection = document.getElementById('stats-section');
  if (!statsSection) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateCountUp();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

function animateCountUp() {
  const statElements = document.querySelectorAll('[data-target]');

  statElements.forEach(el => {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const duration = 2000; // 2 seconds
    const start = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = target * easeOut;

      // Format number
      if (target >= 1000) {
        el.textContent = Math.floor(current).toLocaleString() + suffix;
      } else if (target < 100) {
        el.textContent = current.toFixed(1) + suffix;
      } else {
        el.textContent = Math.floor(current) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  });
}

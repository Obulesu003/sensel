import { Navbar } from './navbar.js';
import { Footer } from './footer.js';
import { Hero } from './hero.js';
import { Icons } from './icons.js';

// Resolves paths relative to current page location
const resolvePath = (path) => {
    // If we are deep in solutions folder (e.g. /solutions/solar/index.html), go up 2 levels
    if (window.location.pathname.includes('/solutions/')) {
        return '../../' + path;
    }
    return path;
};

export const SolutionTemplate = (data) => {
    const heroImg = resolvePath(data.heroImage);

    return `
    ${Navbar()}
    
    <main data-theme="${data.theme}">
      ${Hero({
        title: data.title,
        subtitle: data.tagline,
        bgImage: heroImg
    })}

      <section class="section-padding" style="background: var(--color-bg-body);">
        <div class="container">
          <div class="grid-2">
             <div>
               <h2 style="font-size: 2.25rem; margin-bottom: 1.5rem; color: var(--color-brand-primary);">Executive Overview</h2>
               <p style="font-size: 1.1rem; color: var(--color-text-muted); margin-bottom: 2.5rem; line-height: 1.8;">
                 ${data.description}
               </p>
               
               <h3 style="margin-bottom: 1.5rem; font-size: 1.5rem;">Key Capabilities</h3>
               <ul style="list-style: none; display: grid; gap: 1rem;">
                 ${data.features.map(feat => `
                   <li style="display: flex; align-items: start; gap: 1rem; padding: 1rem; background: var(--color-bg-surface); border-radius: var(--radius-md);">
                     <div style="color: var(--color-success); width: 24px;">${Icons.Check}</div>
                     <span style="font-weight: 500; color: var(--color-text-main);">${feat}</span>
                   </li>
                 `).join('')}
               </ul>
             </div>

             <div class="card-enterprise">
               <h3 style="margin-bottom: 1.5rem; border-bottom: 1px solid var(--color-bg-surface-2); padding-bottom: 1rem; color: var(--color-brand-primary);">Technical Specifications</h3>
               <div style="display: grid; gap: 1.25rem;">
                 ${data.specs.map(spec => `
                   <div style="display: flex; justify-content: space-between; align-items: center;">
                     <span style="color: var(--color-text-muted); font-size: 0.95rem;">${spec.label}</span>
                     <span style="font-weight: 600; color: var(--color-text-main);">${spec.value}</span>
                   </div>
                 `).join('')}
               </div>
               
               <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--color-bg-surface-2);">
                  <button class="btn btn-primary" style="width: 100%">Download Datasheet</button>
               </div>
             </div>
          </div>
        </div>
      </section>
    </main>

    ${Footer()}
  `;
};

import { solutionsData } from '../data/solutions.js';

export const SolutionsGrid = () => {
    // Convert object to array for mapping
    const solutions = Object.entries(solutionsData).map(([key, data]) => ({
        ...data,
        // Use relative path from root
        link: `solutions/${key}/index.html`
    }));

    const cards = solutions.map(sol => `
        <a href="${sol.link}" class="card-enterprise" style="
            display: block;
            text-decoration: none;
            color: var(--color-text-main);
            padding: 0; /* Override default padding for full-bleed image */
            display: flex;
            flex-direction: column;
            height: 100%;
        ">
            <!-- Card Image Header -->
            <div style="
                height: 200px; 
                background: url(${sol.heroImage}) center/cover;
                border-bottom: 1px solid var(--color-bg-surface-2);
            "></div>
            
            <div style="padding: 2rem; flex-grow: 1; display: flex; flex-direction: column;">
                <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">${sol.title}</h3>
                <p style="
                    color: var(--color-text-muted); 
                    font-size: 0.95rem; 
                    margin-bottom: 1.5rem; 
                    flex-grow: 1;
                ">${sol.tagline}</p>
                
                <div style="
                    margin-top: auto; 
                    color: var(--color-brand-accent); 
                    font-weight: 600; 
                    font-size: 0.9rem; 
                    display: flex; 
                    align-items: center; 
                    gap: 0.5rem;
                ">
                    View Solution <span>→</span>
                </div>
            </div>
        </a>
    `).join('');

    return `
        <section id="solutions" class="section-padding" style="background: var(--color-bg-surface);">
            <div class="container">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Industry Solutions</h2>
                    <p style="color: var(--color-text-muted); max-width: 600px; margin: 0 auto;">
                        Tailored telematics platforms designed for the specific challenges of your industry.
                    </p>
                </div>
                <div style="
                    display: grid; 
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); 
                    gap: 2rem;
                ">
                    ${cards}
                </div>
            </div>
        </section>
    `;
};

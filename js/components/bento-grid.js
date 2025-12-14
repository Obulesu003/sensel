import { solutionsData } from '../data/solutions.js';

export const BentoGrid = () => {

    const renderCard = (key, sizeClass) => {
        const data = solutionsData[key];
        const link = `solutions/${key}/index.html`;
        const themeLabel = data.theme.toUpperCase() + ' SOLUTION';

        return `
            <a href="${link}" class="bento-card ${sizeClass} scroll-animate" style="
                position: relative;
                display: block;
                border-radius: var(--radius-lg);
                overflow: hidden;
                text-decoration: none;
                color: white;
                background: #18181b;
                border: 1px solid rgba(255,255,255,0.08);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            ">
                <!-- Image Background - HIGH OPACITY (0.85) -->
                <div class="card-bg" style="
                    position: absolute; top:0; left:0; width:100%; height:100%;
                    background: url(${data.heroImage}) center/cover;
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    opacity: 0.85;
                "></div>
                
                <!-- BOTTOM-ONLY Gradient Overlay -->
                <div style="
                    position: absolute; bottom:0; left:0; width:100%; height: 60%;
                    background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%);
                    z-index: 1;
                "></div>
                
                <!-- Content -->
                <div style="
                    position: absolute; bottom:0; left:0; width:100%;
                    padding: 2rem;
                    z-index: 2;
                ">
                    <div style="
                        font-size: 0.75rem; 
                        text-transform: uppercase; 
                        color: var(--color-brand-accent); 
                        letter-spacing: 0.15em;
                        margin-bottom: 0.75rem;
                        font-weight: 600;
                    ">${themeLabel}</div>
                    
                    <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem; font-weight: 700;">${data.title}</h3>
                    <p style="color: rgba(255,255,255,0.7); font-weight: 400; font-size: 0.95rem; max-width: 95%; line-height: 1.5;">
                        ${data.tagline}
                    </p>
                </div>
            </a>
        `;
    };

    return `
        <section id="solutions" class="section-padding" style="background: var(--color-bg-body);">
            <div class="container">
                <div class="scroll-animate" style="margin-bottom: 4rem;">
                    <h2 style="font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1rem;">Solutions Ecosystem</h2>
                    <p style="font-size: 1.15rem; color: var(--color-text-muted); max-width: 500px;">Engineered for every environment. Built to last.</p>
                </div>
                
                <style>
                    .bento-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-auto-rows: 320px;
                        gap: 1.25rem;
                    }
                    .span-tall { grid-row: span 2; }
                    .span-wide { grid-column: span 2; }
                    
                    /* HOVER GLOW */
                    .bento-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 0 40px rgba(59, 130, 246, 0.15), 0 20px 40px rgba(0,0,0,0.3);
                        border-color: rgba(59, 130, 246, 0.3);
                    }
                    .bento-card:hover .card-bg {
                        transform: scale(1.05);
                    }
                    
                    @media (max-width: 900px) {
                        .bento-grid { grid-template-columns: 1fr; grid-auto-rows: 350px; }
                        .span-tall, .span-wide { grid-column: span 1; grid-row: span 1; }
                    }
                </style>

                <div class="bento-grid">
                    ${renderCard('solar', 'span-tall')}
                    ${renderCard('fleet', 'span-wide')}
                    ${renderCard('work-hour-meter', '')}
                    ${renderCard('industrial', '')}
                    ${renderCard('cement', 'span-wide')}
                </div>
                
                <!-- View All CTA -->
                <div class="scroll-animate" style="text-align: center; margin-top: 3rem;">
                    <a href="#" style="
                        display: inline-block;
                        padding: 1rem 2rem;
                        border: 1px solid rgba(255,255,255,0.2);
                        border-radius: 8px;
                        color: white;
                        font-weight: 600;
                        transition: background 0.2s, border-color 0.2s;
                    " onmouseover="this.style.background='rgba(255,255,255,0.05)'; this.style.borderColor='rgba(255,255,255,0.4)'"
                       onmouseout="this.style.background='transparent'; this.style.borderColor='rgba(255,255,255,0.2)'">
                        View All Solutions →
                    </a>
                </div>
            </div>
        </section>
    `;
};

import { solutionsData } from '../data/solutions.js';

export const Features = () => {
    // Get the 5 solutions
    const solutionKeys = ['work-hour-meter', 'solar', 'fleet', 'industrial', 'cement'];

    // Color accents for each solution
    const accents = {
        'work-hour-meter': { color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' }, // Amber
        'solar': { color: '#22c55e', bg: 'rgba(34, 197, 94, 0.1)' },            // Green
        'fleet': { color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)' },           // Blue
        'industrial': { color: '#ef4444', bg: 'rgba(239, 68, 68, 0.1)' },       // Red
        'cement': { color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)' }           // Purple
    };

    const renderSolutionCard = (key, index) => {
        const data = solutionsData[key];
        const accent = accents[key];
        const link = `solutions/${key}/index.html`;

        return `
            <a href="${link}" class="scroll-animate delay-${index * 100}" style="
                display: block;
                padding: 2rem; 
                background: var(--color-bg-body); 
                border-radius: var(--radius-lg);
                border: 1px solid rgba(255,255,255,0.05);
                border-left: 4px solid ${accent.color};
                text-decoration: none;
                color: inherit;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            " onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.2)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                
                <!-- Solution Title -->
                <h3 style="
                    font-size: 1.25rem; 
                    font-weight: 700; 
                    margin-bottom: 0.5rem;
                    color: white;
                ">${data.title}</h3>
                
                <!-- Tagline -->
                <p style="
                    color: ${accent.color}; 
                    font-size: 0.9rem; 
                    font-weight: 500;
                    margin-bottom: 1rem;
                ">${data.tagline}</p>
                
                <!-- Description -->
                <p style="
                    color: var(--color-text-muted); 
                    font-size: 0.95rem; 
                    line-height: 1.6;
                ">${data.description}</p>
                
                <!-- Learn More -->
                <div style="
                    margin-top: 1.25rem;
                    color: ${accent.color};
                    font-size: 0.9rem;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                ">
                    Learn More 
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </a>
        `;
    };

    return `
    <section class="section-padding" style="background: var(--color-bg-surface);">
      <div class="container">
        
        <!-- Section Header -->
        <div class="scroll-animate" style="margin-bottom: 3rem; max-width: 700px;">
            <h2 style="
                font-size: clamp(2rem, 4vw, 3rem); 
                line-height: 1.15;
                margin-bottom: 1rem;
            ">
                Our <span style="color: var(--color-brand-accent)">Solutions</span>
            </h2>
            <p style="
                color: var(--color-text-secondary); 
                font-size: 1.1rem; 
                line-height: 1.7; 
            ">
                From construction sites to hazardous cargo, we have specialized telematics solutions for every industry.
            </p>
        </div>

        <!-- Solutions Grid (2 columns for better reading) -->
        <div style="
            display: grid; 
            grid-template-columns: repeat(2, 1fr); 
            gap: 1.5rem;
        ">
            ${solutionKeys.slice(0, 4).map((key, i) => renderSolutionCard(key, i)).join('')}
        </div>
        
        <!-- Fifth Solution (Full Width) -->
        <div style="margin-top: 1.5rem;">
            ${renderSolutionCard('cement', 4)}
        </div>
      </div>
    </section>
    
    <style>
        @media (max-width: 768px) {
            .section-padding > .container > div[style*="grid-template-columns"] {
                grid-template-columns: 1fr !important;
            }
        }
    </style>
  `;
};

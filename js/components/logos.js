// Trust Section - Client Logos
export const Logos = () => {
    // Placeholder company names (replace with actual logos/images later)
    const clients = [
        'Tata Steel',
        'Ultratech Cement',
        'ACC Limited',
        'JSW Steel',
        'Larsen & Toubro',
        'Adani Ports'
    ];

    return `
        <section style="
            background: var(--color-bg-body);
            padding: 4rem 0;
            border-top: 1px solid rgba(255,255,255,0.05);
            border-bottom: 1px solid rgba(255,255,255,0.05);
        ">
            <div class="container">
                <div class="scroll-animate" style="text-align: center; margin-bottom: 3rem;">
                    <p style="
                        font-size: 0.85rem; 
                        text-transform: uppercase; 
                        letter-spacing: 0.15em; 
                        color: var(--color-text-muted);
                        font-weight: 600;
                    ">Trusted by Industry Leaders</p>
                </div>
                
                <div class="scroll-animate delay-100" style="
                    display: flex; 
                    justify-content: center; 
                    align-items: center; 
                    flex-wrap: wrap;
                    gap: 3rem;
                ">
                    ${clients.map(name => `
                        <div style="
                            padding: 1rem 2rem;
                            background: rgba(255,255,255,0.03);
                            border: 1px solid rgba(255,255,255,0.05);
                            border-radius: 8px;
                            color: var(--color-text-muted);
                            font-weight: 600;
                            font-size: 0.95rem;
                            letter-spacing: 0.02em;
                            transition: all 0.2s;
                        " onmouseover="this.style.color='white'; this.style.borderColor='rgba(255,255,255,0.15)'"
                           onmouseout="this.style.color='var(--color-text-muted)'; this.style.borderColor='rgba(255,255,255,0.05)'">
                            ${name}
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
};

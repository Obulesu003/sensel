export const Footer = () => {
  const socialIcons = {
    linkedin: `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    twitter: `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    github: `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`
  };

  return `
      <footer style="background: var(--color-bg-surface); color: white; padding: 5rem 0 2rem; border-top: 1px solid rgba(255,255,255,0.05);">
        <div class="container">
          
          <!-- Main Footer Grid -->
          <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 3rem; margin-bottom: 4rem;">
            
            <!-- Brand Column -->
            <div>
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                <div style="width: 32px; height: 32px; background: var(--color-brand-primary); border-radius: 8px;"></div>
                <span style="font-size: 1.25rem; font-weight: 800; letter-spacing: -0.02em;">SENSEL</span>
              </div>
              <p style="color: var(--color-text-muted); max-width: 280px; line-height: 1.7; font-size: 0.95rem;">
                Enterprise-grade telematics solutions. ISO 9001:2008 certified. Trusted by 500+ industrial clients worldwide.
              </p>
              
              <!-- Social Icons -->
              <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                <a href="#" style="color: var(--color-text-muted); transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--color-text-muted)'">${socialIcons.linkedin}</a>
                <a href="#" style="color: var(--color-text-muted); transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--color-text-muted)'">${socialIcons.twitter}</a>
                <a href="#" style="color: var(--color-text-muted); transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--color-text-muted)'">${socialIcons.github}</a>
              </div>
            </div>
            
            <!-- Solutions Column -->
            <div>
              <h4 style="margin-bottom: 1.25rem; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-muted);">Solutions</h4>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem;">
                <li><a href="solutions/work-hour-meter/index.html" style="color: rgba(255,255,255,0.7); transition: color 0.2s; font-size: 0.95rem;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Work Hour Meter</a></li>
                <li><a href="solutions/solar/index.html" style="color: rgba(255,255,255,0.7); transition: color 0.2s; font-size: 0.95rem;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Solar Tracking</a></li>
                <li><a href="solutions/fleet/index.html" style="color: rgba(255,255,255,0.7); transition: color 0.2s; font-size: 0.95rem;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Fleet Management</a></li>
                <li><a href="solutions/industrial/index.html" style="color: rgba(255,255,255,0.7); transition: color 0.2s; font-size: 0.95rem;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Industrial / Hazardous</a></li>
                <li><a href="solutions/cement/index.html" style="color: rgba(255,255,255,0.7); transition: color 0.2s; font-size: 0.95rem;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Cement & Mining</a></li>
              </ul>
            </div>
            
            <!-- Company Column -->
            <div>
              <h4 style="margin-bottom: 1.25rem; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-muted);">Company</h4>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem;">
                <li><a href="#" style="color: rgba(255,255,255,0.7); font-size: 0.95rem;">About Us</a></li>
                <li><a href="#" style="color: rgba(255,255,255,0.7); font-size: 0.95rem;">Careers</a></li>
                <li><a href="./contact.html" style="color: rgba(255,255,255,0.7); font-size: 0.95rem;">Contact</a></li>
                <li><a href="#" style="color: rgba(255,255,255,0.7); font-size: 0.95rem;">Privacy Policy</a></li>
              </ul>
            </div>
            
            <!-- Newsletter Column -->
            <div>
              <h4 style="margin-bottom: 1.25rem; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-muted);">Stay Updated</h4>
              <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 1rem; line-height: 1.6;">Get the latest updates on industrial IoT innovations.</p>
              <div style="display: flex; gap: 0.5rem;">
                <input type="email" placeholder="Enter your email" style="
                  flex: 1;
                  padding: 0.75rem 1rem;
                  background: var(--color-bg-body);
                  border: 1px solid rgba(255,255,255,0.1);
                  border-radius: 6px;
                  color: white;
                  font-size: 0.9rem;
                  outline: none;
                ">
                <button style="
                  padding: 0.75rem 1.25rem;
                  background: var(--color-brand-primary);
                  border: none;
                  border-radius: 6px;
                  color: white;
                  font-weight: 600;
                  cursor: pointer;
                  transition: opacity 0.2s;
                " onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">Subscribe</button>
              </div>
            </div>
          </div>
          
          <!-- Bottom Bar -->
          <div style="text-align: center; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.05); color: var(--color-text-muted); font-size: 0.85rem;">
            &copy; ${new Date().getFullYear()} Sensel Telematics Pvt Ltd. All rights reserved. | Bangalore, India
          </div>
        </div>
          </div>
          
          <style>
            /* Mobile Footer Styles */
          @media (max-width: 900px) {
            footer .container > div:first-child {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
              text-align: center;
            }
            
            /* Center align flex items in column stack */
            footer .container > div:first-child > div {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            
            /* Social Icons centering */
            footer .container > div:first-child > div:nth-child(1) > div:last-child {
              justify-content: center;
            }
            
            /* Newsletter input stack */
            footer input[type="email"] {
              width: 100%;
              text-align: center;
            }
            footer button {
              width: 100%;
            }
            footer h4 {
              margin-top: 1rem;
            }
          }
        </style>
      </footer>
    `;
};

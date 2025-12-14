import { Navbar } from './navbar.js';
import { Footer } from './footer.js';

export const ContactTemplate = () => {
    return `
    ${Navbar()}
    
    <style>
      .contact-hero {
        padding: 10rem 0 6rem;
        background: #000;
        text-align: center;
        position: relative;
        overflow: hidden;
      }
      .contact-hero::after {
        content: '';
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        background: radial-gradient(circle at 50% 0%, rgba(34, 211, 238, 0.15), transparent 70%);
        pointer-events: none;
      }

      .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 4rem;
        margin-bottom: 6rem;
      }

      /* Info Cards */
      .info-card {
        background: rgba(255,255,255,0.02);
        border: 1px solid rgba(255,255,255,0.1);
        padding: 2rem;
        border-radius: 12px;
        margin-bottom: 2rem;
      }
      .info-label {
        color: #22d3ee;
        font-family: 'Manrope', monospace;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
      }
      .info-value {
        color: white;
        font-size: 1.1rem;
        font-weight: 500;
        line-height: 1.6;
      }

      /* Form */
      .contact-form-wrapper {
        background: linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
        border: 1px solid rgba(255,255,255,0.08);
        padding: 3rem;
        border-radius: 20px;
        backdrop-filter: blur(10px);
      }

      .form-group { margin-bottom: 1.5rem; }
      
      .form-label {
        display: block;
        color: rgba(255,255,255,0.7);
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
      }
      
      .form-input {
        width: 100%;
        padding: 1rem;
        background: rgba(0,0,0,0.3);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 8px;
        color: white;
        font-family: inherit;
        transition: all 0.2s;
      }
      .form-input:focus {
        border-color: #22d3ee;
        outline: none;
        background: rgba(0,0,0,0.5);
      }
      
      .submit-btn {
        width: 100%;
        padding: 1rem;
        background: #22d3ee;
        color: black;
        border: none;
        border-radius: 8px;
        font-weight: 700;
        cursor: pointer;
        transition: transform 0.2s;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .submit-btn:hover { transform: translateY(-2px); }

      @media (max-width: 900px) {
        .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
        .contact-form-wrapper { padding: 1.5rem; }
      }
    </style>

    <div style="background: #09090b; min-height: 100vh;">
      
      <!-- Hero -->
      <section class="contact-hero">
        <div class="container" style="position: relative; z-index: 2;">
          <h1 style="font-family: 'Manrope', sans-serif; font-size: 3.5rem; font-weight: 800; color: white; margin-bottom: 1rem;">
            Get in Touch
          </h1>
          <p style="color: rgba(255,255,255,0.6); font-size: 1.2rem; max-width: 500px; margin: 0 auto;">
            Ready to optimize your fleet? Our enterprise team is ready to deploy.
          </p>
        </div>
      </section>

      <!-- Main Content -->
      <section class="container">
        <div class="contact-grid">
          
          <!-- LEFT: Info -->
          <div>
            <div class="info-card">
              <div class="info-label">Headquarters</div>
              <div class="info-value">
                Sensel Telematics Pvt Ltd.<br>
                #23, 2nd Floor, 3rd Main,<br>
                Electronic City Phase 1,<br>
                Bangalore - 560100, India
              </div>
            </div>

            <div class="info-card">
              <div class="info-label">Sales Inquiry</div>
              <div class="info-value">
                +91 98450 12345<br>
                sales@sensel.in
              </div>
            </div>

            <div class="info-card">
              <div class="info-label">Customer Support</div>
              <div class="info-value">
                1800-123-4567 (Toll Free)<br>
                support@sensel.in
              </div>
            </div>
          </div>

          <!-- RIGHT: Form -->
          <div class="contact-form-wrapper">
            <h3 style="color: white; font-size: 1.5rem; margin-bottom: 2rem; font-weight: 700;">Send a Message</h3>
            <form onsubmit="event.preventDefault(); alert('Message Sent! We will contact you shortly.');">
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="form-group">
                  <label class="form-label">First Name</label>
                  <input type="text" class="form-input" placeholder="John" required>
                </div>
                <div class="form-group">
                  <label class="form-label">Last Name</label>
                  <input type="text" class="form-input" placeholder="Doe" required>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Work Email</label>
                <input type="email" class="form-input" placeholder="john@company.com" required>
              </div>

              <div class="form-group">
                <label class="form-label">Company Name</label>
                <input type="text" class="form-input" placeholder="Acme Logistics">
              </div>

              <div class="form-group">
                <label class="form-label">Interested In</label>
                <select class="form-input" style="cursor: pointer;">
                  <option>Industrial / Hazardous Telematics</option>
                  <option>General Fleet Management</option>
                  <option>Mining & Cement Solutions</option>
                  <option>Work Hour Monitoring</option>
                  <option>Other</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Message</label>
                <textarea class="form-input" rows="4" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" class="submit-btn">Send Inquiry</button>
            </form>
          </div>

        </div>
      </section>

      ${Footer()}
    </div>
  `;
};

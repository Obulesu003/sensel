# Sensel Telematics - Enterprise Edition (Static)

A high-performance, enterprise-grade website for Sensel Telematics.
**Zero Dependencies. Pure HTML, CSS, JS.**

## Overview
- **Visuals**: Photorealistic hero imagery for 5 industry verticals.
- **Design**: Professional Enterprise Theme (Navy/White) with no experimental features.
- **Architecture**: Modular ES6 JavaScript components without a build step.

## How to Run
This project uses ES Modules (`<script type="module">`). For security reasons, modern browsers require these files to be served via HTTP, not `file://`.

### Recommended Method
1. Open this folder in **VS Code**.
2. Install the **Live Server** extension.
3. Right-click `index.html` and choose **"Open with Live Server"**.

### Python Method
```bash
# In this directory
python -m http.server
# Go to http://localhost:8000
```

## Structure
- `index.html`: Main landing page.
- `solutions/`: Individual product pages (e.g., `solutions/solar/index.html`).
- `css/`: Theme and styles.
- `js/`: Application logic.
- `assets/`: Images and icons.

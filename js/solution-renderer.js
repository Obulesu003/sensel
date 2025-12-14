import { solutionsData } from './data/solutions.js';
import { SolutionTemplate } from './components/solution-template.js';
import { initNavbar } from './components/navbar.js';

document.addEventListener('DOMContentLoaded', () => {
    // Get the key from the body attribute
    const key = document.body.dataset.solutionKey;
    const app = document.querySelector('#app');

    if (key && solutionsData[key]) {
        // Render the template
        app.innerHTML = SolutionTemplate(solutionsData[key]);
        initNavbar();
        document.title = `${solutionsData[key].title} | Sensel Telematics`;
    } else {
        app.innerHTML = `
            <div style="padding: 4rem; text-align: center;">
                <h1>Solution Not Found</h1>
                <p>The requested solution "${key}" does not exist.</p>
                <a href="../../index.html">Return Home</a>
            </div>
        `;
    }
});

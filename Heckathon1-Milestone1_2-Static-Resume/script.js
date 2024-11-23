"use strict";
// Function to toggle visibility of the Skills section
function toggleSkills() {
    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
    else {
        console.error('Skills section element not found');
    }
}

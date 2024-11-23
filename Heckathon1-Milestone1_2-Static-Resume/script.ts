// Function to toggle visibility of the Skills section
function toggleSkills(): void {
    const skillsSection = document.getElementById('skills-section') as HTMLElement | null;
    
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    } else {
        console.error('Skills section element not found');
    }
}

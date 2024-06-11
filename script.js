document.addEventListener('DOMContentLoaded', function () {
    // Show the initial section ('about')
    showSection('about');

    // Add click event listeners to the buttons
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });
});

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';

        // Scroll to the selected section
        selectedSection.scrollIntoView({ behavior: 'smooth' });
    }
}



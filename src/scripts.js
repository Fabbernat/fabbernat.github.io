// src/scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year in footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
});
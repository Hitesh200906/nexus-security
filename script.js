// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const modal = document.getElementById('authModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const createAccountBtn = document.getElementById('createAccountBtn');
    const heroGetStarted = document.getElementById('heroGetStarted');
    const planBtns = document.querySelectorAll('.plan-btn');
    const googleSignIn = document.getElementById('googleSignIn');

    // Function to open modal
    function openModal() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Event listeners for opening modal
    if (createAccountBtn) createAccountBtn.addEventListener('click', openModal);
    if (heroGetStarted) heroGetStarted.addEventListener('click', openModal);
    planBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const plan = btn.getAttribute('data-plan');
            // You can store the selected plan in session/localStorage if needed
            // For now, just open modal
            openModal();
        });
    });

    // Close modal when clicking the × or outside the modal content
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Google sign-in simulation (demo)
    if (googleSignIn) {
        googleSignIn.addEventListener('click', () => {
            // In a real app, you'd redirect to OAuth endpoint
            alert('This is a demo. In the full version, you would be redirected to Google OAuth.');
            closeModal();
        });
    }

    // Simple scroll animation for plan cards (optional)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.plan-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Improved floating elements animation
    const floatingElements = document.querySelectorAll('.floating-element');
    
    // Enhanced scroll effect with performance optimization
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                floatingElements.forEach((element, index) => {
                    const speed = 0.2 + (index * 0.1);
                    const offset = lastScrollY * speed;
                    
                    element.style.transform = `translateY(${offset}px) translateX(${index % 2 === 0 ? offset * 0.3 : -offset * 0.3}px)`;
                });
                ticking = false;
            });
            ticking = true;
        }
    });

    // Mobile navigation toggle with accessibility improvements
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-content') && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Highlight active nav link while scrolling
const sections = document.querySelectorAll('.fullscreen-section');
const navLinks = document.querySelectorAll('.nav-links a');

function highlightNav() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const headerHeight = document.querySelector('.modern-nav').offsetHeight;
        
        if (window.scrollY >= (sectionTop - headerHeight - 50)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNav);
highlightNav(); // Run once on load

    // Gallery image click handler
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="close-lightbox">&times;</span>
                    <img src="${this.style.backgroundImage.slice(5, -2)}" alt="Gallery image">
                </div>
            `;
            document.body.appendChild(lightbox);
            
            // Close lightbox
            lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });

    // Form submission with fetch API
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.innerHTML;
            
            try {
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                
                // Replace with your actual form handling
                const response = await fetch('https://formsubmit.co/ajax/your@email.com', {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(Object.fromEntries(formData))
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                } else {
                    throw new Error(result.message || 'Failed to send message');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again later.');
            } finally {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }

   // Smooth scrolling for navigation links with offset
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Calculate header height
            const headerHeight = document.querySelector('.modern-nav').offsetHeight;
            // Get target position with offset
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            // Smooth scroll to target
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update URL without page reload
            history.pushState(null, null, targetId);
            
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            const navToggle = document.querySelector('.nav-toggle');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
});
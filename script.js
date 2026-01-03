// Mobile Sidebar Menu
const hamburger = document.getElementById('hamburger');
const mobileSidebar = document.getElementById('mobileSidebar');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

// Open sidebar
hamburger.addEventListener('click', () => {
    mobileSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('sidebar-open');
});

// Close sidebar
const closeSidebar = () => {
    mobileSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('sidebar-open');
};

closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when clicking on a link
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
const desktopImages = document.querySelectorAll('.faq-image-container img');
const isDesktop = window.innerWidth >= 1024;

// Open first FAQ item by default on desktop
if (isDesktop) {
    const firstItem = faqItems[0];
    firstItem.classList.add('active');
    const firstImageId = firstItem.getAttribute('data-image');
    desktopImages.forEach(img => {
        if (img.getAttribute('data-faq') === firstImageId) {
            img.classList.add('active');
        }
    });
}

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const imageId = item.getAttribute('data-image');
        const isCurrentlyActive = item.classList.contains('active');
        
        // On desktop, don't allow closing the active item
        if (isDesktop && isCurrentlyActive) {
            return;
        }
        
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item (on mobile) or open it (on desktop)
        if (isDesktop) {
            item.classList.add('active');
        } else {
            item.classList.toggle('active');
        }
        
        // Update desktop image
        if (item.classList.contains('active')) {
            desktopImages.forEach(img => {
                img.classList.remove('active');
                if (img.getAttribute('data-faq') === imageId) {
                    img.classList.add('active');
                }
            });
        } else {
            desktopImages.forEach(img => {
                img.classList.remove('active');
            });
        }
    });
});

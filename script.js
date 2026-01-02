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

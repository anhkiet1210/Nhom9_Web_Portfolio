'use strict';

// 1. KHAI BÁO HÀM CALLBACK JSONP ĐỂ NHẬN DỮ LIỆU
window.loadPortfolioData = function(data) {
    // Hàm này sẽ tự động thực thi ngay khi file portfolio-data.js được tải xong
    renderSkills(data.skills);
    renderProjects(data.projects);
};

// 2. LOGIC RENDER KỸ NĂNG VÀ DỰ ÁN
function renderSkills(skills) {
    const skillsContainer = document.getElementById('skillsContainer');
    if (!skillsContainer || !skills) return;
    
    skillsContainer.innerHTML = '';
    skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill-card';
        span.textContent = skill;
        skillsContainer.appendChild(span);
    });
}

function renderProjects(projects) {
    const projectsContainer = document.getElementById('projectsContainer');
    if (!projectsContainer || !projects) return;

    projectsContainer.innerHTML = '';
    projects.forEach(proj => {
        const techString = proj.technologies ? proj.technologies.join(' · ') : '';
        projectsContainer.innerHTML += `
            <article class="project-card" data-category="${proj.category || 'web'}">
                <img src="${proj.image}" alt="${proj.name}" class="project-image" onerror="this.style.display='none'">
                <div class="project-content">
                    <h3 class="project-title">${proj.name}</h3>
                    <p class="project-description">${proj.description}</p>
                    <p class="project-technologies">${techString}</p>
                    <div class="project-links">
                        <a href="${proj.githubUrl}" target="_blank" class="project-link">Mã nguồn <span><img src="./assets/icons/external-link.svg" width="24" height="24"></span></a>
                    </div>
                </div>
            </article>
        `;
    });
    initProjectFilter();
}

// 3. LOGIC BỘ LỌC DỰ ÁN
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectsContainer = document.getElementById('projectsContainer');
    
    if (!filterBtns.length || !projectsContainer) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            const cards = projectsContainer.querySelectorAll('.project-card');

            cards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// 4. KHỞI TẠO CÁC TÍNH NĂNG GIAO DIỆN KHI DOM SẴN SÀNG
document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode
    const darkModeBtn = document.getElementById('darkModeToggle');
    if (darkModeBtn) {
        const icon = darkModeBtn.querySelector('img');
        const savedMode = localStorage.getItem('portfolio-dark-mode');
        
        if (savedMode === 'true') {
            document.body.classList.add('dark-mode');
            if (icon) icon.src = './assets/icons/sun.svg';
        }

        darkModeBtn.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-mode');
            if (icon) icon.src = isDark ? './assets/icons/sun.svg' : './assets/icons/moon.svg';
            localStorage.setItem('portfolio-dark-mode', String(isDark));
        });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navLinks.classList.remove('active'));
        });
    }

    // Scroll To Top
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            scrollToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });
        scrollToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Tabs chuyển đổi (Resume & Contact)
    function setupTabs(btnSelector, panelSelector, isDataTarget = false) {
        const buttons = document.querySelectorAll(btnSelector);
        const panels = document.querySelectorAll(panelSelector);
        
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));
                
                btn.classList.add('active');
                const targetId = isDataTarget ? btn.getAttribute('data-target') : btn.getAttribute('data-tab');
                const targetPanel = document.getElementById(targetId);
                
                if (targetPanel) targetPanel.classList.add('active');
            });
        });
    }

    setupTabs('.tab-btn', '.tab-content', true);
    setupTabs('.os-tab', '.tab-panel', false);

    // Copy Email
    const copyBtn = document.getElementById('copyEmailBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const email = 'huynhanhkiet457@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                const originalContent = copyBtn.innerHTML;
                copyBtn.innerHTML = '<span>✔️</span> Đã chép!';
                setTimeout(() => copyBtn.innerHTML = originalContent, 2000);
            });
        });
    }
});
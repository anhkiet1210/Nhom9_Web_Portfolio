
/* =====================================================
   GROUP 09 PORTFOLIO
   Members Data & Rendering
   ===================================================== */

// ===== 01. MEMBERS DATA =====

const members = [
    {
        id: 1,
        name: "Huỳnh Anh Kiệt",
        avatar: "./avatar/HuynhAnhKiet.jpg",
        portfolioUrl: "./HuynhAnhKiet/index.html"
    },
    {
        id: 2,
        name: "Lương Thanh Tọa",
        avatar: "./LuongThanhToa/images/avata.jpg",
        portfolioUrl: "./LuongThanhToa/index.html"
    },
    {
        id: 3,
        name: "Nguyễn Quốc Huy",
        avatar: "./NguyenQuocHuy/avatar.jpg",
        portfolioUrl: "./NguyenQuocHuy/index.html"
    },
    {
        id: 4,
        name: "Phạm Hồng Thái",
        avatar: "./avatar/Thai.png",
        portfolioUrl: "./Pham_Hong_Thai/index.html"
    },
    {
        id: 5,
        name: "Từ Ngọc Toàn",
        avatar: "./TuNgocToan/Avatar.jpg",
        portfolioUrl: "./TuNgocToan/TuNgocToan.html"
    },
    {
        id: 6,
        name: "Phạm Quốc Huy",
        avatar: "./Pham_Quoc_Huy/images/avatar.jpg",
        portfolioUrl: "./Pham_Quoc_Huy/index.html"
    }
];


// ===== 02. RENDER MEMBERS =====

function renderMembers() {
    const membersGrid = document.getElementById("membersGrid");

    if (!membersGrid) return;

    membersGrid.innerHTML = members.map((member) => {
        const orderNumber = String(member.id).padStart(2, "0");

        return `
            <a href="${member.portfolioUrl}" class="member-card">

                <div class="card-img-wrapper">
                    <img
                        src="${member.avatar}"
                        alt="${member.name}"
                        loading="lazy"
                    >
                </div>

                <div class="card-content">

                    <span class="member-number">
                        MEMBER ${orderNumber}
                    </span>

                    <h3 class="member-name">
                        ${member.name}
                    </h3>

                    <span class="view-btn">
                        VIEW PORTFOLIO
                    </span>

                </div>

            </a>
        `;
    }).join("");
}


// ===== 03. HEADER SCROLL EFFECT =====

function initHeader() {
    const header = document.querySelector("header");

    if (!header) return;

    window.addEventListener("scroll", () => {
        header.classList.toggle("sticky", window.scrollY > 50);
    });
}


// ===== 04. MOBILE NAVIGATION =====

function initMobileMenu() {
    const mobileToggle = document.querySelector(".mobile-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (!mobileToggle || !navMenu) return;

    mobileToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");

        mobileToggle.setAttribute("aria-expanded", isOpen);
    });

    // Đóng menu sau khi chọn liên kết
    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            mobileToggle.setAttribute("aria-expanded", "false");
        });
    });
}


// ===== 05. BACK TO TOP =====

function initBackToTop() {
    const backToTop = document.querySelector(".back-to-top");

    if (!backToTop) return;

    window.addEventListener("scroll", () => {
        backToTop.classList.toggle("active", window.scrollY > 400);
    });

    backToTop.addEventListener("click", (event) => {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// ===== 06. SCROLL REVEAL =====

function initScrollReveal() {
    const elements = document.querySelectorAll(
        ".member-card, .section-header, .about-content"
    );

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    elements.forEach((element) => {
        observer.observe(element);
    });
}


// ===== 07. INITIALIZATION =====

document.addEventListener("DOMContentLoaded", () => {

    renderMembers();

    initHeader();

    initMobileMenu();

    initBackToTop();

    initScrollReveal();

});

/**
 * U-Dream Website - Vanilla JavaScript
 * 슬라이더, 메뉴, 애니메이션 등 모든 기능 구현
 */

// ============================================================================
// 슬라이더 기능
// ============================================================================
class HeroSlider {
  constructor() {
    this.slides = [
      {
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663586085724/H654X2Z7TbhTWmTkQswMXY/udream-hero-01-QSXFh3taGJzdyTf2JUpsC9.webp",
        eyebrow: "U-DREAM MAIN COMMUNITY",
        title: "함께 만드는 대학 생활의 새로운 흐름",
        description: "유드림은 동아리와 학생 커뮤니티를 더 가깝게 연결하는 시작점입니다. 참여하고, 탐색하고, 연결되는 흐름을 하나의 메인페이지에 담았습니다.",
      },
      {
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663586085724/H654X2Z7TbhTWmTkQswMXY/udream-hero-02-cRjLyyUTxBqiAbqi9grjBn.webp",
        eyebrow: "CLUBS · PEOPLE · STORY",
        title: "관심 있는 활동을 더 쉽게 찾고 연결하세요",
        description: "학술, 공연, 봉사, 체육 등 다양한 동아리의 분위기와 활동을 직관적으로 확인하고, 오픈채팅과 인스타그램으로 자연스럽게 이어지도록 구성했습니다.",
      },
    ];

    this.currentSlide = 0;
    this.autoPlayInterval = null;
    this.init();
  }

  init() {
    this.renderSlide();
    this.attachEventListeners();
    this.startAutoPlay();
  }

  renderSlide() {
    const slide = this.slides[this.currentSlide];
    const sliderImg = document.querySelector(".hero-slider img");
    const eyebrow = document.querySelector(".hero-eyebrow");
    const title = document.querySelector(".hero-title");
    const description = document.querySelector(".hero-description");

    if (sliderImg) sliderImg.src = slide.image;
    if (eyebrow) eyebrow.textContent = slide.eyebrow;
    if (title) title.textContent = slide.title;
    if (description) description.textContent = slide.description;

    this.updateIndicators();
  }

  updateIndicators() {
    const dots = document.querySelectorAll(".slide-dot");
    dots.forEach((dot, index) => {
      if (index === this.currentSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  attachEventListeners() {
    // 이전 슬라이드 버튼
    const prevBtn = document.querySelector(".slide-btn[data-action='prev']");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => this.prevSlide());
    }

    // 다음 슬라이드 버튼
    const nextBtn = document.querySelector(".slide-btn[data-action='next']");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => this.nextSlide());
    }

    // 슬라이드 인디케이터
    const dots = document.querySelectorAll(".slide-dot");
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToSlide(index));
    });
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.renderSlide();
    this.resetAutoPlay();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.renderSlide();
    this.resetAutoPlay();
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.renderSlide();
    this.resetAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.renderSlide();
    }, 5000);
  }

  resetAutoPlay() {
    clearInterval(this.autoPlayInterval);
    this.startAutoPlay();
  }
}

// ============================================================================
// 모바일 메뉴 기능
// ============================================================================
class MobileMenu {
  constructor() {
    this.menuToggle = document.querySelector(".menu-toggle");
    this.mobileMenu = document.querySelector(".mobile-menu");
    this.init();
  }

  init() {
    if (this.menuToggle) {
      this.menuToggle.addEventListener("click", () => this.toggle());
    }

    // 메뉴 항목 클릭 시 메뉴 닫기
    const menuItems = document.querySelectorAll(".mobile-menu-item");
    menuItems.forEach((item) => {
      item.addEventListener("click", () => this.close());
    });
  }

  toggle() {
    if (this.mobileMenu) {
      this.mobileMenu.classList.toggle("active");
    }
  }

  close() {
    if (this.mobileMenu) {
      this.mobileMenu.classList.remove("active");
    }
  }
}

// ============================================================================
// 네비게이션 링크 기능
// ============================================================================
class Navigation {
  constructor() {
    this.init();
  }

  init() {
    // 로고 클릭 시 맨 위로 스크롤
    const logoBtn = document.querySelector(".logo-btn");
    if (logoBtn) {
      logoBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // 네비게이션 링크
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.handleNavClick(link);
      });
    });

    // 모바일 메뉴 링크
    const mobileMenuItems = document.querySelectorAll(".mobile-menu-item");
    mobileMenuItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        this.handleNavClick(item);
      });
    });

    // 버튼 링크
    const buttons = document.querySelectorAll("[data-scroll-to]");
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute("data-scroll-to");
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  handleNavClick(element) {
    const text = element.textContent.trim();
    this.showPlaceholderMessage(text);
  }

  showPlaceholderMessage(text) {
    // 간단한 alert 또는 toast 메시지
    alert(`${text} 메뉴는 나중에 이름과 연결 경로를 변경할 수 있습니다.`);
  }
}

// ============================================================================
// 외부 링크 처리
// ============================================================================
class ExternalLinks {
  constructor() {
    this.init();
  }

  init() {
    const externalLinks = document.querySelectorAll("a[target='_blank']");
    externalLinks.forEach((link) => {
      link.setAttribute("rel", "noreferrer");
    });
  }
}

// ============================================================================
// 페이지 초기화
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 슬라이더 초기화
  new HeroSlider();

  // 모바일 메뉴 초기화
  new MobileMenu();

  // 네비게이션 초기화
  new Navigation();

  // 외부 링크 처리
  new ExternalLinks();

  // 현재 연도 업데이트
  const yearElements = document.querySelectorAll("[data-year]");
  yearElements.forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});

// ============================================================================
// 유틸리티 함수
// ============================================================================

/**
 * 요소가 뷰포트에 보이는지 확인
 */
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

/**
 * 스크롤 시 애니메이션 트리거
 */
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((el) => observer.observe(el));
}

// 페이지 로드 후 관찰 시작
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", observeElements);
} else {
  observeElements();
}

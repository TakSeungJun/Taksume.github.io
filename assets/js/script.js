'use strict';


// ============================================================
// Utility
// ============================================================

const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};


// ============================================================
// Sidebar
// ============================================================

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}


// ============================================================
// Page Navigation
// ============================================================

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");


navigationLinks.forEach((navLink) => {

  navLink.addEventListener("click", function () {

    // textContent + trim을 사용해 HTML 줄바꿈/공백에 영향받지 않도록 함
    const targetPage = this.textContent.trim().toLowerCase();

    pages.forEach((page) => {

      if (page.dataset.page === targetPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }

    });


    navigationLinks.forEach((link) => {
      link.classList.remove("active");
    });

    this.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

  });

});


// ============================================================
// CV Print / Save as PDF
// ============================================================

const printCvBtn = document.querySelector("[data-print-cv]");

if (printCvBtn) {

  printCvBtn.addEventListener("click", function () {
    window.print();
  });

}


// ============================================================
// Direct URL: #cv
// ============================================================

if (window.location.hash === "#cv") {

  const cvNav = Array.from(navigationLinks).find(
    (link) => link.textContent.trim().toLowerCase() === "cv"
  );

  if (cvNav) {
    cvNav.click();
  }

}

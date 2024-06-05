//set current year
const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();

//toggle mobile nav
const menuBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector("header");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

//scroll-behavior smooth
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll back to top
    if (href === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    //scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile nav
    header.classList.remove("nav-open");
  });
});

//sticky nav
const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHero);

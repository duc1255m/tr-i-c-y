// Hiệu ứng xuất hiện khi cuộn đến phần tử
const sections = document.querySelectorAll(".intro-section");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
}

sections.forEach(section => section.classList.add("fade-in"));
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
const logo=document.getElementById("logo");
logo.addEventListener("click",()=>{
  window.location.href="index.html"
});
// Toggle menu
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Flash sale countdown
function startCountdown(duration) {
  let timer = duration, hours, minutes, seconds;
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  setInterval(() => {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hoursEl.textContent = hours < 10 ? "0" + hours : hours;
    minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;

    if (--timer < 0) timer = duration;
  }, 1000);
}

startCountdown(3 * 3600); // đếm ngược 3 tiếng

// Buy button
document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("🛒 Sản phẩm đã được thêm vào giỏ hàng!");
  });
});
// Lọc sản phẩm theo danh mục
const tabs = document.querySelectorAll(".tab");
const categories = document.querySelectorAll(".gift-category");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Xóa class active ở tất cả tab
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // Ẩn tất cả danh mục
    categories.forEach(cat => cat.classList.remove("active"));

    // Hiện danh mục được chọn
    const category = tab.getAttribute("data-category");
    const selected = document.querySelector(`.gift-category.${category}`);
    if (selected) selected.classList.add("active");
  });
});
document.querySelectorAll('.slider-container').forEach(container => {
  const track = container.querySelector('.story-track');
  const prevBtn = container.querySelector('.prev-btn');
  const nextBtn = container.querySelector('.next-btn');
  
  let index = 0;
  const items = container.querySelectorAll('.story-item');
  const visibleCount = 4; // số item hiển thị 1 lần
  const itemWidth = items[0].offsetWidth + 20; // cộng margin

  nextBtn.addEventListener('click', () => {
    if (index < items.length - visibleCount) {
      index++;
      track.style.transform = `translateX(-${itemWidth * index}px)`;
    }
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      track.style.transform = `translateX(-${itemWidth * index}px)`;
    }
  });

  // Cập nhật lại khi resize
  window.addEventListener('resize', () => {
    track.style.transform = `translateX(-${itemWidth * index}px)`;
  });
});
const all=document.getElementById("all");
all.addEventListener("click",()=>{
  window.location.href="product.html"
});
const openBtn = document.getElementById("openLoginBtn");
openBtn.addEventListener("click", () => {
    window.location.href = "account/account.html"; 
});
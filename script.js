// === TOGGLE MENU ===
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// === FLASH SALE COUNTDOWN ===
function startCountdown(duration) {
  let timer = duration, hours, minutes, seconds;
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  setInterval(() => {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    if (hoursEl && minutesEl && secondsEl) {
      hoursEl.textContent = hours < 10 ? "0" + hours : hours;
      minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
      secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
    }

    if (--timer < 0) timer = duration;
  }, 1000);
}
startCountdown(3 * 3600); // Đếm ngược 3 tiếng

// === BUY BUTTON ===
document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("🛒 Sản phẩm đã được thêm vào giỏ hàng!");
  });
});

// === LỌC SẢN PHẨM THEO DANH MỤC ===
const tabs = document.querySelectorAll(".tab");
const categories = document.querySelectorAll(".gift-category");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    categories.forEach(cat => cat.classList.remove("active"));
    const category = tab.getAttribute("data-category");
    const selected = document.querySelector(`.gift-category.${category}`);
    if (selected) selected.classList.add("active");
  });
});

// === SLIDER CHO CÂU CHUYỆN / SẢN PHẨM ===
document.querySelectorAll('.slider-container').forEach(container => {
  const track = container.querySelector('.story-track');
  const prevBtn = container.querySelector('.prev-btn');
  const nextBtn = container.querySelector('.next-btn');
  const items = container.querySelectorAll('.story-item');
  if (!track || !prevBtn || !nextBtn || items.length === 0) return;

  let index = 0;
  const visibleCount = 4;
  const itemWidth = items[0].offsetWidth + 20;

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

  window.addEventListener('resize', () => {
    track.style.transform = `translateX(-${itemWidth * index}px)`;
  });
});

// === NÚT "XEM TẤT CẢ" ===
const allBtn = document.getElementById("all");
if (allBtn) {
  allBtn.addEventListener("click", () => {
    window.location.href = "product.html";
  });
}

// === POPUP ĐĂNG NHẬP / QUÊN MẬT KHẨU ===
const openBtn = document.getElementById("openLoginBtn");
const popupLogin = document.getElementById("loginPopup");
const popupForgot = document.getElementById("forgotPopup");
const overlay = document.getElementById("overlay");
const closeLogin = document.getElementById("closePopup");
const closeForgot = document.getElementById("closeForgot");
const forgotLink = document.getElementById("forgotLink");
const backToLogin = document.getElementById("backToLogin");

// Mở popup đăng nhập
if (openBtn) {
  openBtn.addEventListener("click", () => {
    popupLogin.style.display = "block";
    overlay.style.display = "block";
  });
}

// Đóng popup đăng nhập
if (closeLogin) {
  closeLogin.addEventListener("click", () => {
    popupLogin.style.display = "none";
    overlay.style.display = "none";
  });
}

// Ẩn popup khi bấm overlay
if (overlay) {
  overlay.addEventListener("click", () => {
    popupLogin.style.display = "none";
    popupForgot.style.display = "none";
    overlay.style.display = "none";
  });
}

// Mở popup quên mật khẩu
if (forgotLink) {
  forgotLink.addEventListener("click", (e) => {
    e.preventDefault();
    popupLogin.style.display = "none";
    popupForgot.style.display = "block";
  });
}

// Đóng popup quên mật khẩu
if (closeForgot) {
  closeForgot.addEventListener("click", () => {
    popupForgot.style.display = "none";
    overlay.style.display = "none";
  });
}

// Quay lại đăng nhập
if (backToLogin) {
  backToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    popupForgot.style.display = "none";
    popupLogin.style.display = "block";
  });
}

// === FORM ĐĂNG NHẬP ===
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Đăng nhập thành công!");
    window.location.href = "login.html"; // ✅ chuyển sang trang tài khoản
  });
}

// === FORM QUÊN MẬT KHẨU ===
const forgotForm = document.getElementById("forgotForm");
if (forgotForm) {
  forgotForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Liên kết đặt lại mật khẩu đã được gửi tới email của bạn!");
    popupForgot.style.display = "none";
    overlay.style.display = "none";
  });
}

// === LOGO TRỞ VỀ TRANG CHỦ ===
const logo = document.getElementById("logo");
if (logo) {
  logo.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

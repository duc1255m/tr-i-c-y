document.addEventListener("DOMContentLoaded", () => {
  // ===== Nút mở trang tài khoản =====
  const openBtn = document.getElementById("openLoginBtn");
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      window.location.href = "account/account.html";
    });
  }

  // ===== Logo quay về trang chủ =====
  const logo = document.getElementById("logo");
  if (logo) {
    logo.addEventListener("click", () => {
      window.location.href = "login.html"; // hoặc "index.html" nếu bạn có trang chủ riêng
    });
  }

  // ===== Xử lý giỏ hàng =====
  const unitPrice = 9660000;

  function formatCurrency(value) {
    return value.toLocaleString("vi-VN") + "₫";
  }

  function updateTotal(quantity) {
    const subtotal = unitPrice * quantity;
    const subtotalEl = document.getElementById("subtotal");
    const totalEl = document.getElementById("total");

    if (subtotalEl) subtotalEl.innerText = formatCurrency(subtotal);
    if (totalEl) totalEl.innerText = formatCurrency(subtotal);
  }

  // ===== Nút tăng / giảm số lượng =====
  const qtyInput = document.getElementById("quantity");
  const minusBtn = document.getElementById("minus");
  const plusBtn = document.getElementById("plus");

  function updateQuantity(change) {
    if (!qtyInput) return;
    let quantity = parseInt(qtyInput.value) || 1;
    quantity += change;
    if (quantity < 1) quantity = 1;
    qtyInput.value = quantity;
    updateTotal(quantity);
  }

  if (minusBtn) minusBtn.addEventListener("click", () => updateQuantity(-1));
  if (plusBtn) plusBtn.addEventListener("click", () => updateQuantity(1));

  // ===== Nút "Xác nhận" =====
  const confirmBtn = document.querySelector(".confirm-btn");
  if (confirmBtn) {
    confirmBtn.addEventListener("click", () => {
      alert("Đơn hàng của bạn đã được xác nhận!");
      window.location.href = "checkout.html"; // Trang xác nhận đơn hàng
    });
  }
});

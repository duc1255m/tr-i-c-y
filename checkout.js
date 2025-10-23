// Đơn giá sản phẩm
const unitPrice = 9660000;

// Hàm định dạng tiền tệ
function formatCurrency(value) {
  return value.toLocaleString("vi-VN") + "đ";
}

// Hàm thay đổi số lượng
function changeQuantity(change) {
  const quantityInput = document.getElementById("quantity");
  let quantity = parseInt(quantityInput.value) || 1;

  quantity += change;
  if (quantity < 1) quantity = 1;

  quantityInput.value = quantity;
  updateTotal(quantity);
}

// Hàm cập nhật tổng tiền
function updateTotal(quantity) {
  const subtotal = unitPrice * quantity;
  document.getElementById("subtotal").innerText = formatCurrency(subtotal);
  document.getElementById("total").innerText = formatCurrency(subtotal);
}

// --- Khi trang được load ---
document.addEventListener("DOMContentLoaded", () => {
  updateTotal(1); // khởi tạo tổng tiền ban đầu

  // Xử lý nút Đặt hàng
  const orderBtn = document.querySelector(".place-order");

  if (orderBtn) {
    orderBtn.addEventListener("click", (e) => {
      e.preventDefault(); // ngăn load lại form

      alert("🎉 Cảm ơn bạn đã đặt hàng tại GENTLEMAN!\nĐơn hàng của bạn đang được xử lý.");
      
      // Chuyển về trang chủ (đổi tên nếu bạn dùng file khác)
      window.location.href = "login.html"; 
      // 👉 nếu trang chủ của bạn là index.html thì đổi lại:
      // window.location.href = "index.html";
    });
  }

  // Khi bấm vào logo → quay lại trang chủ
  const logo = document.getElementById("logo");
  if (logo) {
    logo.addEventListener("click", () => {
      window.location.href = "login.html"; 
    });
  }
});

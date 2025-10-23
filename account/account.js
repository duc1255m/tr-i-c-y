document.addEventListener("DOMContentLoaded", () => {
  const sidebarItems = document.querySelectorAll(".sidebar ul li");
  const content = document.querySelector(".content");

  sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
      // Xóa active cũ
      sidebarItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      const text = item.textContent.trim();

      // --- Nếu bấm "Đơn đặt hàng" ---
      if (text.includes("Đơn đặt hàng")) {
        content.innerHTML = `
          <h2>Đơn đặt hàng gần đây</h2>
          <table class="order-table">
            <thead>
              <tr>
                <th>Mã đơn</th>
                <th>Ngày đặt</th>
                <th>Trạng thái</th>
                <th>Tổng tiền</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#12345</td>
                <td>20/10/2025</td>
                <td><span class="status delivered">Đã giao</span></td>
                <td>2.350.000₫</td>
                <td><button class="detail-btn">Xem chi tiết</button></td>
              </tr>
              <tr>
                <td>#12344</td>
                <td>15/10/2025</td>
                <td><span class="status pending">Đang xử lý</span></td>
                <td>1.500.000₫</td>
                <td><button class="detail-btn">Xem chi tiết</button></td>
              </tr>
            </tbody>
          </table>
        `;

        // ✅ Chờ DOM cập nhật rồi mới gán sự kiện click
        setTimeout(() => {
          const detailButtons = document.querySelectorAll(".detail-btn");
          detailButtons.forEach(btn => {
            btn.addEventListener("click", () => {
              window.location.href = "../cart.html"; // đổi đúng đường dẫn
            });
          });
        }, 0);
      }

      // --- Nếu bấm "Chi tiết đơn hàng" ---
      else if (text.includes("Chi tiết đơn hàng")) {
        content.innerHTML = `
          <h2>Chi tiết đơn hàng</h2>
          <div class="order-detail">
            <img src="images/order-item.jpg" alt="Sản phẩm" class="order-img">
            <div class="order-info">
              <p><b>Tên sản phẩm:</b> Táo FUJI khắc chữ</p>
              <p><b>Số lượng:</b> 1</p>
              <p><b>Tổng tiền:</b> 2.350.000₫</p>
              <p><b>Trạng thái:</b> Đã giao</p>
            </div>
          </div>
        `;
      }

      // --- Nếu bấm "Địa chỉ" ---
      else if (text.includes("Địa chỉ")) {
        content.innerHTML = `
          <h2>Địa chỉ giao hàng</h2>
          <p><b>Họ tên:</b> Minh Anh</p>
          <p><b>Địa chỉ:</b> 123 Nguyễn Trãi, Thanh Xuân, Hà Nội</p>
          <p><b>Số điện thoại:</b> 0901 234 567</p>
          <button class="edit-btn">Chỉnh sửa địa chỉ</button>
        `;
      }

      // --- Nếu bấm "Đăng xuất" ---
      else if (text.includes("Đăng xuất")) {
        window.location.href = "../index.html";
      }
    });
  });
});
  const logo = document.getElementById("logo");
  if (logo) {
    logo.addEventListener("click", () => {
      window.location.href = "../login.html"; // hoặc "index.html" nếu bạn có trang chủ riêng
    });
  }
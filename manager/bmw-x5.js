
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const pickup = document.getElementById("pickup").value;
  const returnd = document.getElementById("return").value;

  if (pickup && returnd) {
    // Hiển thị popup thành công
    document.getElementById("successPopup").style.display = "flex";
  } else {
    alert("⚠️ Vui lòng chọn cả ngày nhận và ngày trả xe.");
  }
});

// Đóng popup khi nhấn nút
document.getElementById("closePopup").addEventListener("click", function() {
  document.getElementById("successPopup").style.display = "none";
});
const openBtn = document.getElementById("openLoginBtn");
openBtn.addEventListener("click", () => {
    window.location.href = "../account/account.html"; 
});
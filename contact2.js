document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const inputs = form.querySelectorAll("input");
  const button = form.querySelector(".btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn load lại trang

    let valid = true;
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        input.style.borderColor = "red";
        valid = false;
      } else {
        input.style.borderColor = "#ccc";
      }
    });

    if (!valid) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    // Nếu hợp lệ
    alert("✅ Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.");
    form.reset(); // Reset form sau khi gửi
  });
});
const openBtn = document.getElementById("openLoginBtn");
openBtn.addEventListener("click", () => {
    window.location.href = "account/account.html"; 
});
const logo=document.getElementById("logo");
logo.addEventListener("click",()=>{
  window.location.href="login.html"
}
);
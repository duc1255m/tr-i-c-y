document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Ngăn form submit reload lại trang

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !phone || !message) {
    alert('Vui lòng điền đầy đủ thông tin!');
    return;
  }

  // Giả lập gửi thông tin
  console.log("Thông tin đã gửi:");
  console.log("Họ và tên:", name);
  console.log("Email:", email);
  console.log("Số điện thoại:", phone);
  console.log("Nội dung:", message);

  alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
  
  // Reset form sau khi gửi
  document.getElementById('contactForm').reset();
});

const logo=document.getElementById("logo");
logo.addEventListener("click",()=>{
  window.location.href="index.html"
}
);
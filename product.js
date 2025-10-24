const products = [
  // Trái cây
  { id: 0, name: "Quýt Summerina Úc", price: 269000, origin: "uc", category: "traicay", img: "images/F5.jpg" },
  { id: 1, name: "Táo Fuji Khắc Chữ", price: 399000, origin: "nhat", category: "traicay", img: "images/F4.jpg" },
  { id: 2, name: "Lê Hàn Quốc", price: 354000, origin: "hanquoc", category: "traicay", img: "images/F3.jpg" },
  { id: 3, name: "Cherry Canada Size 8.5", price: 779000, origin: "canada", category: "traicay", img: "images/cherry.jpg" },
  { id: 4, name: "Dâu Tây Nhật Bản", price: 659000, origin: "nhat", category: "traicay", img: "images/dâu tây.jpg" },
  { id: 5, name: "Nho Xanh Shine Muscat", price: 899000, origin: "nhat", category: "traicay", img: "images/F2.jpg" },
  { id: 6, name: "Cam Ai Cập", price: 189000, origin: "aicap", category: "traicay", img: "images/cam.jpg" },
  { id: 7, name: "Táo Envy New Zealand", price: 299000, origin: "newzealand", category: "traicay", img: "images/F4.jpg" },
  { id: 8, name: "Việt Quất Mỹ", price: 469000, origin: "my", category: "traicay", img: "images/việt quất.jpg" },
  { id: 9, name: "Bơ 034 Lâm Đồng", price: 99000, origin: "vietnam", category: "traicay", img: "images/bơ.jpg" },
  { id: 10, name: "Thanh Long Ruột Đỏ", price: 69000, origin: "vietnam", category: "traicay", img: "images/thanh long.jpg" },
  { id: 11, name: "Xoài Cát Hòa Lộc", price: 119000, origin: "vietnam", category: "traicay", img: "images/xoài.jpg" },

  // Giỏ quà
  { id: 12, name: "Giỏ Quà Chúc Mừng", price: 999000, origin: "vietnam", category: "qua", img: "images/g1.jpg" },
  { id: 13, name: "Giỏ Quà Happy Birthday", price: 1199000, origin: "vietnam", category: "qua", img: "images/g2.jpg" },
  { id: 14, name: "Giỏ Quà Tết Sum Vầy", price: 1499000, origin: "vietnam", category: "qua", img: "images/gq tết.jpg" },
  { id: 15, name: "Giỏ Quà Premium Gold", price: 1899000, origin: "vietnam", category: "qua", img: "images/gq pre.jpg" },
  { id: 16, name: "Giỏ Quà Trái Cây Cao Cấp", price: 1599000, origin: "vietnam", category: "qua", img: "images/gq tc cao cấp.jpg" },
  { id: 17, name: "Giỏ Quà Sức Khỏe", price: 1399000, origin: "vietnam", category: "qua", img: "images/gq sk.jpg" },
  { id: 18, name: "Giỏ Quà Tình Thân", price: 999000, origin: "vietnam", category: "qua", img: "images/tình thân.jpg" },
  { id: 19, name: "Giỏ Quà Doanh Nghiệp", price: 2099000, origin: "vietnam", category: "qua", img: "images/doanh nghiệp.jpg" },

  // Nước ép & sinh tố
  { id: 20, name: "Nước Ép Táo Tươi", price: 189000, origin: "vietnam", category: "nuoc", img: "images/nc ép táo.jpg" },
  { id: 24, name: "Sinh Tố Dâu Tây", price: 119000, origin: "vietnam", category: "nuoc", img: "images/st dâu.jpg" },
  { id: 25, name: "Sinh Tố Xoài", price: 109000, origin: "vietnam", category: "nuoc", img: "images/st xoài.jpg" },
  { id: 26, name: "Nước Ép Lựu", price: 179000, origin: "vietnam", category: "nuoc", img: "images/nc lựu.jpg" },
  { id: 27, name: "Sinh Tố Chuối", price: 89000, origin: "vietnam", category: "nuoc", img: "images/st chuối.jpg" },
  { id: 28, name: "Nước Ép Cà Rốt", price: 119000, origin: "vietnam", category: "nuoc", img: "images/nc cà rốt.jpg" },
  { id: 29, name: "Sinh Tố Việt Quất", price: 149000, origin: "vietnam", category: "nuoc", img: "images/st việt quất.jpg" }
];

const grid = document.getElementById("productGrid");

function renderProducts(list) {
  grid.innerHTML = "";
  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>${p.price.toLocaleString()}đ</p>
      <button class="buy-btn" data-id="${p.id}">CHỌN MUA</button>
    `;
    grid.appendChild(card);
  });

  // Khi bấm "CHỌN MUA" → sang trang chi tiết có id trên URL
  document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      window.location.href = `manager/${productId}.html`;
    });
  });
}

renderProducts(products);

// Bộ lọc
document.querySelectorAll(".category, .origin, input[name='price']").forEach(el => {
  el.addEventListener("change", applyFilters);
});

document.getElementById("sort").addEventListener("change", applyFilters);

function applyFilters() {
  const selectedCategories = [...document.querySelectorAll(".category:checked")].map(el => el.value);
  const selectedOrigins = [...document.querySelectorAll(".origin:checked")].map(el => el.value);
  const selectedPrice = document.querySelector("input[name='price']:checked")?.value;
  const sortValue = document.getElementById("sort").value;

  let filtered = [...products];

  if (selectedCategories.length)
    filtered = filtered.filter(p => selectedCategories.includes(p.category));

  if (selectedOrigins.length)
    filtered = filtered.filter(p => selectedOrigins.includes(p.origin));

  if (selectedPrice) {
    const [min, max] = selectedPrice.split("-").map(Number);
    filtered = filtered.filter(p => p.price >= min * 1000 && p.price <= max * 1000);
  }

  if (sortValue === "price-asc")
    filtered.sort((a, b) => a.price - b.price);
  else if (sortValue === "price-desc")
    filtered.sort((a, b) => b.price - a.price);

  renderProducts(filtered);
}
const logo=document.getElementById("logo");
logo.addEventListener("click",()=>{
  window.location.href="index.html"
}
);
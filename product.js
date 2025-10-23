const products = [
  { id: 0, name: "Quýt Summerina Úc", price: 269000, origin: "uc", category: "traicay", img: "images/F5.jpg" },
  { id: 1, name: "Táo Fuji Khắc Chữ", price: 399000, origin: "nhat", category: "traicay", img: "images/F4.jpg" },
  { id: 2, name: "Lê Hàn Quốc", price: 354000, origin: "vietnam", category: "traicay", img: "images/F3.jpg" },
  { id: 3, name: "Cherry Canada Size 8.5", price: 779000, origin: "my", category: "traicay", img: "images/F6.jpg" },
  { id: 4, name: "Giỏ Quà Chúc Mừng", price: 999000, origin: "vietnam", category: "qua", img: "images/g1.jpg" },
  { id: 5, name: "Giỏ Quà Happy Birthday", price: 1199000, origin: "vietnam", category: "qua", img: "images/g2.jpg" },
  { id: 6, name: "Nước Ép Táo Tươi", price: 189000, origin: "vietnam", category: "nuoc", img: "images/F2.jpg" },
    { id: 7, name: "Quýt Summerina Úc", price: 269000, origin: "uc", category: "traicay", img: "images/F5.jpg" },
  { id: 8, name: "Táo Fuji Khắc Chữ", price: 399000, origin: "nhat", category: "traicay", img: "images/F4.jpg" },
  { id: 9, name: "Chanh Dây Tím Okinawa", price: 354000, origin: "vietnam", category: "traicay", img: "images/F3.jpg" },
  { id: 10, name: "Cherry Canada Size 8.5", price: 779000, origin: "my", category: "traicay", img: "images/F6.jpg" },
  { id: 11, name: "Giỏ Quà Chúc Mừng", price: 999000, origin: "vietnam", category: "qua", img: "images/g1.jpg" },
  { id: 12, name: "Giỏ Quà Happy Birthday", price: 1199000, origin: "vietnam", category: "qua", img: "images/g2.jpg" },
  { id: 13, name: "Nước Ép Táo Tươi", price: 189000, origin: "vietnam", category: "nuoc", img: "images/F2.jpg" },
    { id: 14, name: "Giỏ Quà Happy Birthday", price: 1199000, origin: "vietnam", category: "qua", img: "images/g2.jpg" },
  { id: 15, name: "Nước Ép Táo Tươi", price: 189000, origin: "vietnam", category: "nuoc", img: "images/F2.jpg" },
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
// === Toggle menu mobile ===
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("header nav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// === Form Pendaftaran ===
document.getElementById("daftar-form").addEventListener("submit", function(event){
  event.preventDefault();

  // Ambil data dari form
  let nama = document.getElementById("nama").value;
  let nisn = document.getElementById("nisn").value;
  let email = document.getElementById("email").value;
  let telepon = document.getElementById("telepon").value;
  let alamat = document.getElementById("alamat").value;

  // Nomor WhatsApp tujuan (format internasional tanpa +, ganti dengan nomor adminmu)
  let nomorWA = "6281279680662";

  // Pesan WhatsApp
  let pesan = `Halo Admin, saya ingin mendaftar:\n\n` +
              `Nama: ${nama}\n` +
              `NISN: ${nisn}\n` +
              `Email: ${email}\n` +
              `Telepon: ${telepon}\n` +
              `Alamat: ${alamat}`;

  // Redirect ke WhatsApp
  let url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
});


// === Form Kontak (direct ke WhatsApp) ===
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Ambil data input
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    // Nomor WhatsApp tujuan (format internasional tanpa +)
    const phone = "6281279680662";

    // Template pesan
    const text = `Halo, saya ${nama}%0AEmail: ${email}%0A%0A${pesan}`;

    // Redirect ke WhatsApp
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");

    contactForm.reset();
  });
}


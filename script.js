// === Toggle menu mobile ===
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("header nav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// === Form Pendaftaran ===
const daftarForm = document.getElementById("daftar-form");
if (daftarForm) {
  daftarForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Pendaftaran berhasil dikirim! Kami akan menghubungi Anda melalui email.");
    daftarForm.reset();
  });
}

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




new TypeIt("#animation", {
  strings: "",
  cursor: false,
}).go();
new TypeIt("#animationTeks", {
  strings: "",
  cursor: false,
}).go();

const kanan = document.querySelector("#kanan");
const kiri = document.querySelector("#kiri");
const gambar = document.querySelector("#gambar");
const cetak = document.querySelector("#cetak");
const cetak2 = document.querySelector("#cetak2");
const cetak3 = document.querySelector("#cetak3");
const lihat = document.querySelector("#lihat");


const button = document.querySelector(".btn");
const pesan = document.querySelector('textarea[name="pesan"]');
const email = document.querySelector("input[name='email']");
const Nama = document.querySelector("input[name='nama']");
const form = document.querySelector('form');

cetak.style.fontSize = "20px";
cetak2.style.fontSize = "20px";
cetak3.style.fontSize = "20px";


let imgChannels = [
  "asset/skill/Screenshot 2025-10-10 101619.png",
  "asset/skill/Screenshot 2025-10-10 095348.png",
];

let i = 1;
kiri.disabled = true;

function render() {
  switch (i) {
    case 1:
      gambar.innerHTML = `<img src="${imgChannels[1 -1]}" alt="Channel ${i}">`;
      lihat.href = "";
      cetak.textContent = "Nama project: Yuumigo ";
      cetak2.textContent =
        "ini adalah web E-comerce, tujuan dari web ini aalah untuk mempermudah transaksi jual beli. ";
      cetak3.textContent =
        "Web ini di buat menggunakan tools: HTML, CSS, JS, dan Figma untuk desainnya. ";
        

      kiri.disabled = true;
      kanan.disabled = false;
      break;

    case 2:
      gambar.innerHTML = `<img src="${imgChannels[2 -1]}" alt="Channel ${i}">`;
      lihat.href = "";
      cetak.textContent = "Nama project: Web Stream";
      cetak2.textContent =
        "ini adalah web streaming film, tujuan dari web ini adalah untuk mempermudah user menonton film secara online.";
      cetak3.textContent =
        "web ini di buat menggunakan tools: HTML, CSS dan Figma untuk desainnya. ";

      kiri.disabled = false;
      kanan.disabled = true; // Disabled karena ini gambar terakhir
      break;

    default:
      gambar.innerHTML = `<img src="${imgChannels[0]}" alt="Channel 1">`;
      lihat.href = "";
      cetak.textContent = "Nama project: Yuumigo ";
      cetak2.textContent =
        "ini adalah web E-comerce, tujuan dari web ini aalah untuk mempermudah transaksi jual beli. ";
      cetak3.textContent =
        "Web ini di buat menggunakan tools: HTML, CSS, JS, dan Figma untuk desainnya. ";
        
      break;
  }
}

render();



kiri.addEventListener("click", function () {
  i--;
  if (i < 1) {
    i = 1;
    return;
  }

  render();
});

kanan.addEventListener("click", function () {
  i++;
  if (i > imgChannels.length) {
    alert("Cooming soon");
    i = imgChannels.length;
    return;
  }
  render();
});

button.addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah form submit default
  
  // Validasi form (opsional)
  if (Nama.value && email.value && pesan.value) {
    // Submit form
    form.submit();
    
    // Kosongkan input setelah submit
    setTimeout(() => {
      Nama.value = "";
      email.value = "";
      pesan.value = "";
    }, 100);
  } else {
    alert("Mohon lengkapi semua field!");
  }
});


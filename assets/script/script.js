
// FUNGSI WAKTU //
// DATA ARRAY //
const namedays = ["MINGGU", "SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU"];
console.log(namedays);
const months = ["JANUARI", "FEBRUARI", "MARET", "APRIL", "MEI", "JUNI", "JULI", "AGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DESEMBER"];
console.log(months);

// VARTIABLES // // DEFAULT FORMAT WAKTU //
let iniFormatJam12Mode = true; // TRUE = 12 JAM, FALSE = 24 JAM

// MENAMBAHKAN AWAL 0 PADA ANGKA KURANG DARI 10 //
// MENGGUKAN OPERATOR TERNARY VERSI SINGKAT DARI IF/ELSE //
function tambahNolAwal(angka) {
    return angka < 10 ? '0' + angka : angka;
}

// UBAH FORMAT WAKTU  JIKA FORMAT WAKTU TIDAK SAMA DENGAN format123 //
function gantiFormat() {
    iniFormatJam12Mode = !iniFormatJam12Mode;
    // AMBIL TAG HTML MELALUI ID //
    const buttonFormatWaktu = document.getElementById('toggle-btn');
    if (iniFormatJam12Mode) {
        buttonFormatWaktu.innerHTML = "12 JAM"; // UBAH ISI BUTTON JADI 12 JAM
    } else {
        buttonFormatWaktu.innerHTML = "24 JAM"; // UBAH ISI BUTTON JADI 24 JAM
    }
    tampilkanWaktu(); // PANGGIL FUNGSI tampilkanWaktu UNTUK MENGUPDATE WAKTU
}

// FUNGSI UNTUK MENAMPILKAN WAKTU //
function tampilkanWaktu() {
    const sekarang = new Date(); // AMBIL WAKTU SEKARANG
    let jam = sekarang.getHours(); // AMBIL JAM
    let menit = sekarang.getMinutes(); // AMBIL MENIT
    let detik = sekarang.getSeconds(); // AMBIL DETIK
    let ampm = ""; // VARIABEL UNTUK AM/PM KALAU FORMAT 12 JAM DIGUNAKAN

    let ucapanSalam = ""; // VARIABEL UNTUK UCAPAN SALAM
    if (jam >= 0 && jam < 4) {
        ucapanSalam = "DINI HARI";
    } else if (jam < 11) {
        ucapanSalam = "PAGI";
    } else if (jam < 15) {
        ucapanSalam = "SIANG";
    } else if (jam < 18) {
        ucapanSalam = "SORE";
    } else {
        ucapanSalam = "MALAM";
    }
    document.getElementById('display-greeting').innerHTML = ucapanSalam; // TAMPILKAN UCAPAN SALAM
    if (iniFormatJam12Mode) {
        ampm = jam >= 12 ? ' PM' : ' AM'; // TENTUKAN AM/PM
        jam = jam % 12; // KONVERSI JAM KE FORMAT 12 JAM
        jam = jam ? jam : 12; // JIKA JAM 0, UBAH MENJADI 12
    } else {
        ampm = ""; // KOSONGKAN AM/PM UNTUK FORMAT 24 JAM //
    }
    // TAMPILKAN WAKTU DENGAN MENAMBAHKAN AWAL 0 JIKA PERLU //
    document.getElementById('display-time').innerHTML = tambahNolAwal(jam) + ':' + tambahNolAwal(menit) + ':' + tambahNolAwal(detik);

    document.getElementById('display-ampm').innerHTML = ampm; // TAMPILKAN AM/PM //
    // TAMPILKAN TANGGAL //
    let hari = sekarang.getDay(); // AMBIL HARI 
    let tanggal = sekarang.getDate(); // AMBIL TANGGAL
    let bulan = sekarang.getMonth(); // AMBIL BULAN
    let tahun = sekarang.getFullYear(); // AMBIL TAHUN

    document.getElementById('display-date').innerHTML = namedays[hari] + ', ' + tambahNolAwal(tanggal) + ' ' + months[bulan] + ' ' + tahun;
}
// PERBARUI WAKTU SETIAP DETIK  DARI LAPTOP //
setInterval(tampilkanWaktu, 1000);

// END FUNGSI WAKTU //

// KONFIGURASI THEME BACKGROUND//
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 220, "density": { "enable": true, "value_area": 1000 } },
        "color": { "value": "#ff0000" },
        "shape": { "type": "circle" },
        "opacity": { "value": 1.5 },
        "size": { "value": 5, "random": true },
        "line_linked": {
            "enable": true, "distance": 150, "color": "#ff0000", "opacity": 0.4, "width": 1
        },
        "move": { "enable": true, "speed": 4 }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" }
        }
    },
    "retina_detect": true
});
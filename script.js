// Contoh Program If Else
// Validasi Input

let namaAkun = "hildaMV";
let sandi = "Jeonghan10";

if (namaAkun === "hildaMV" && sandi === "Jeonghan10") {
  console.log("Anda telah berhasil masuk!!");
} else {
  console.log("Anda telah gagal masuk. Silahkan periksa kembali username dan password Anda.");
}


// Contoh Program Nested If
// Penilaian UAS

let nilaiUAS = 85;
let presensi = 16;

if (presensi >= 13 && presensi <= 16) {
  console.log("Anda memiliki presensi yang baik.");

  if (nilaiUAS >= 70) {
    console.log("Nilai UAS Anda di atas rata-rata, selamat Anda lulus ujian!!");
  } else {
    console.log("Nilai UAS Anda di bawah rata-rata, maaf Anda tidak lulus ujian.");
  }
} else if (presensi >= 0 && presensi <= 12) {
  console.log("Anda memiliki presensi yang kurang.");
} else {
    console.log("Nilai presensi tidak valid.")
}


// Contoh Program Switch Case
// Perhitungan Total Hari dalam Sebulan

let bulan = "Mei";
let hari;

switch (bulan) {
  case "Januari":
  case "Maret":
  case "Mei":
  case "Juli":
  case "Agustus":
  case "Oktober":
  case "Desember":
    hari = 31;
    break;
  case "April":
  case "Juni":
  case "September":
  case "November":
    hari = 30;
    break;
  case "Februari":
    hari = "28 atau 29";
    break;
  default:
    hari = "Bulan tidak valid";
    break;
}

console.log("Total hari dalam bulan " + bulan + " adalah " + hari + " hari.");


// Contoh Program For Statement
// Mengidentifikasi Kata

let word = "Hilda";

for (let i = 0; i < word.length; i++) {
  console.log("Karakter ke-" + (i + 1) + ": " + word[i]);
}


// Contoh Program While
// Mencetak Antrian

let antrian = 2;

while (antrian <= 10) {
  console.log("Antrian ke-" + antrian);
  antrian++;
}


// Contoh Program Do While
// Mencetak Bulan

let month = 1;

do {
  console.log("Bulan ke-" + month);
  month++;
} while (month <= 12);


// Contoh Program Function
// Mendefinisikan sebuah fungsi bernama 'sapaan'

function sapaan(nama) {
    let pesanSapaan = "Halo, nama saya " + nama + ". Senang berkenalan dengan kalian!";
    return pesanSapaan;
  }
  
  let pesan = sapaan("Hilda");
  console.log(pesan); 
  
// Mendapatkan elemen-elemen dengan kelas 'change-text'
const textElements = document.getElementsByClassName('change-text');
// Mendapatkan elemen-elemen dengan kelas 'change-button'
const buttons = document.getElementsByClassName('change-button');

// Daftar teks yang akan ditampilkan
const texts = [ 
    "Disini akan dijelaskan secara singkat gimana cara memakainya",
    "Monggo diliat dibawah ya"
];
let clickCount = 0;

// Menambahkan event listener untuk menangani klik pada tombol
// Mengakses tombol pertama dalam koleksi (karena Anda mungkin hanya memiliki satu tombol dengan kelas tersebut)
buttons[0].addEventListener('click', function() {
    clickCount++;
    const newText = texts[clickCount % texts.length];
    // Mengubah isi dari semua elemen dengan kelas 'change-text'
    for (let i = 0; i < textElements.length; i++) {
        textElements[i].textContent = newText;
    }
});

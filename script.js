// Data nilai (array of object)
const dataNilai = [
    { matkul: "Algoritma & Struktur Data", nilai: 85, grade: "AB", sks: 3 },
    { matkul: "Basis Data", nilai: 82, grade: "AB", sks: 3 },
    { matkul: "Pemrograman Berorientasi Objek", nilai: 80, grade: "B", sks: 3 },
    { matkul: "Teknologi Informasi & Aplikasi Bisnis Berkembang", nilai: 88, grade: "A", sks: 3 },
    { matkul: "Statistika & Probabilitas", nilai: 86, grade: "A", sks: 2 },
    { matkul: "Arsitektur & Organisasi Komputer", nilai: 84, grade: "AB", sks: 2 },
    { matkul: "Interaksi Manusia dan Komputer", nilai: 80, grade: "B", sks: 2 }
];

// Menampilkan data ke tabel nilai
function tampilkanNilai(data) {
    const tbody = document.querySelector("#tabelNilai tbody");
    if (!tbody) return;

    // Kosongkan tabel dulu
    tbody.innerHTML = "";

    data.forEach(function (item, index) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.matkul}</td>
            <td>${item.sks}</td>
            <td>${item.nilai}</td>
            <td><span class="grade">${item.grade}</span></td>
        `;

        tbody.appendChild(row);
    });
}

// Menampilkan pesan dengan efek fadeIn (jQuery)
function tampilkanPesan(selector, teks) {
    $(selector).hide().text(teks).fadeIn(300);
}

// Filter berdasarkan rentang nilai
$("#btnFilter").on("click", function () {
    const minVal = $("#nilaiMin").val();
    const maxVal = $("#nilaiMax").val();

    // Validasi input kosong
    if (minVal === "" || maxVal === "") {
        tampilkanPesan("#pesanFilter", "Masukkan nilai minimum dan maksimum terlebih dahulu.");
        return;
    }

    const nilaiMin = Number(minVal);
    const nilaiMax = Number(maxVal);

    // Validasi minimum tidak boleh lebih besar dari maksimum
    if (nilaiMin > nilaiMax) {
        tampilkanPesan("#pesanFilter", "Nilai minimum tidak boleh lebih besar dari nilai maksimum.");
        return;
    }

    // Ambil data yang nilainya sesuai rentang
    const hasilFilter = dataNilai.filter(function (item) {
        return item.nilai >= nilaiMin && item.nilai <= nilaiMax;
    });

    tampilkanNilai(hasilFilter);

    if (hasilFilter.length === 0) {
        tampilkanPesan("#pesanFilter", "Tidak ada matkul pada rentang nilai ini.");
    } else {
        tampilkanPesan("#pesanFilter",
            `Ada ${hasilFilter.length} matkul pada rentang nilai ${nilaiMin} - ${nilaiMax}.`);
    }
});

// Filter berdasarkan grade
$("#btnGrade").on("click", function () {
    const gradeDipilih = $("#filterGrade").val();

    // Jika grade belum dipilih, tampilkan semua data
    if (gradeDipilih === "") {
        tampilkanPesan("#pesanGrade", "Pilih grade terlebih dahulu.");
        tampilkanNilai(dataNilai);
        return;
    }

    // Ambil data yang gradenya sesuai pilihan
    const hasilGrade = dataNilai.filter(function (item) {
        return item.grade === gradeDipilih;
    });

    tampilkanNilai(hasilGrade);
    tampilkanPesan("#pesanGrade", `Ada ${hasilGrade.length} matkul dengan grade ${gradeDipilih}.`);
});

// Tombol tampilkan semua (reset filter)
$("#btnSemua").on("click", function () {
    $("#nilaiMin, #nilaiMax").val("");
    $("#filterGrade").val("");
    $("#pesanFilter, #pesanGrade").text("");

    tampilkanNilai(dataNilai);
});

// Animasi muncul saat di-scroll
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

reveals.forEach(function (reveal) {
    observer.observe(reveal);
});

// Tampilkan semua data saat halaman pertama dibuka
tampilkanNilai(dataNilai);
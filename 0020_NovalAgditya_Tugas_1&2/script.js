const dataNilai = [
    {
        matkul: "Algoritma & Struktur Data",
        nilai: 85,
        sks: 3,
        grade: "AB"
    },
    {
        matkul: "Basis Data",
        nilai: 82,
        sks: 3,
        grade: "AB"
    },
    {
        matkul: "Pemrograman Berorientasi Objek",
        nilai: 80,
        sks: 3,
        grade: "B"
    },
    {
        matkul: "Teknologi Informasi & Aplikasi Bisnis Berkembang",
        nilai: 88,
        sks: 3,
        grade: "A"
    },
    {
        matkul: "Statistika & Probabilitas",
        nilai: 86,
        sks: 2,
        grade: "A"
    },
    {
        matkul: "Arsitektur & Organisasi Komputer",
        nilai: 84,
        sks: 2,
        grade: "AB"
    },
    {
        matkul: "Interaksi Manusia dan Komputer",
        nilai: 80,
        sks: 2,
        grade: "B"
    }
];

function hitungRataRata(data) {
    let total = 0;

    for (const m of data) {
        total += m.nilai;
    }

    return total / data.length;
}

function cariGrade(data, grade) {
    return data.filter(m => m.grade === grade);
}

function tentukanHasil(rataRata) {
    if (rataRata >= 85) {
        return "Ruajin banget (A)";
    } else if (rataRata >= 80) {
        return "Mayan rajin (B)";
    } else if (rataRata >= 70) {
        return "Gak rajin (C)";
    } else {
        return "Ojok mbolos ae! (D)";
    }
}

function hitungTotalSKS(data) {
    let totalSKS = 0;

    for (const m of data) {
        totalSKS += m.sks;
    }

    return totalSKS;
}

const rataRata = hitungRataRata(dataNilai);
const gradeA = cariGrade(dataNilai, "A");
const Hasil = tentukanHasil(rataRata);
const totalSKS = hitungTotalSKS(dataNilai);

console.log("Rekapan Nilai Saya DiSemester 2");
console.log("Nilai rata rata:", rataRata.toFixed(2));
console.log("Matkul yang dapat nilai A:", gradeA);
console.log("Hasil nilai:", Hasil);
console.log("Total SKS:", totalSKS);
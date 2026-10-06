const dataNilai = [
    {
        matkul: "Algoritma & Struktur Data",
        nilai: 85,
        grade: "AB",
        sks: 3
    },
    {
        matkul: "Basis Data",
        nilai: 82,
        grade: "AB",
        sks: 3
    },
    {
        matkul: "Pemrograman Berorientasi Objek",
        nilai: 80,
        grade: "B",
        sks: 3
    },
    {
        matkul: "Teknologi Informasi & Aplikasi Bisnis Berkembang",
        nilai: 88,
        grade: "A",
        sks: 3
    },
    {
        matkul: "Statistika & Probabilitas",
        nilai: 86,
        grade: "A",
        sks: 2
    },
    {
        matkul: "Arsitektur & Organisasi Komputer",
        nilai: 84,
        grade: "AB",
        sks: 2
    },
    {
        matkul: "Interaksi Manusia dan Komputer",
        nilai: 80,
        grade: "B",
        sks: 2
    }
];

function tampilkanNilai(data) {
    const tbody = document.querySelector("#tabelNilai tbody");

    if (!tbody) return;

    tbody.innerHTML = "";

    data.forEach((item, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.matkul}</td>
            <td>${item.sks}</td>
            <td>${item.nilai}</td>
            <td>
                <span class="grade">${item.grade}</span>
            </td>
        `;

        tbody.appendChild(row);
    });
}

const btnGrade = document.getElementById("btnGrade");

if (btnGrade) {
    btnGrade.addEventListener("click", function () {
        const gradeDipilih = document.getElementById("filterGrade").value;
        const pesanGrade = document.getElementById("pesanGrade");

        if (gradeDipilih === "") {
            pesanGrade.textContent = "Pilih nilai sek";
            tampilkanNilai(dataNilai);
            return;
        }

        const hasilGrade = dataNilai.filter(function (item) {
            return item.grade === gradeDipilih;
        });

        tampilkanNilai(hasilGrade);

        pesanGrade.textContent =
            `Ada ${hasilGrade.length} matkul nilai e ${gradeDipilih}.`;
    });
}

const btnFilter = document.getElementById("btnFilter");
const btnReset = document.getElementById("btnReset");

if (btnFilter) {
    btnFilter.addEventListener("click", function () {
        const nilaiMin = Number(document.getElementById("nilaiMin").value);
        const nilaiMax = Number(document.getElementById("nilaiMax").value);
        const pesanFilter = document.getElementById("pesanFilter");

        if (
            document.getElementById("nilaiMin").value === "" ||
            document.getElementById("nilaiMax").value === ""
        ) {
            pesanFilter.textContent = "Monggo masukno nilai minimum dan maksimum nya dlu.";
            return;
        }

        if (nilaiMin > nilaiMax) {
            pesanFilter.textContent = "Nilai minimum gabole lebih besar dari nilai maksimum.";
            return;
        }

        const hasilFilter = dataNilai.filter(function (item) {
            return item.nilai >= nilaiMin && item.nilai <= nilaiMax;
        });

        tampilkanNilai(hasilFilter);

        if (hasilFilter.length === 0) {
            pesanFilter.textContent = "Gaada nilai matkul di rentang nilai ini.";
        } else {
            pesanFilter.textContent =
                `Ada ${hasilFilter.length} matkul di rentang nilai ${nilaiMin} - ${nilaiMax}.`;
        }
    });
}

if (btnReset) {
    btnReset.addEventListener("click", function () {
        document.getElementById("nilaiMin").value = "";
        document.getElementById("nilaiMax").value = "";
        document.getElementById("pesanFilter").textContent = "";

        tampilkanNilai(dataNilai);
    });
}

tampilkanNilai(dataNilai);
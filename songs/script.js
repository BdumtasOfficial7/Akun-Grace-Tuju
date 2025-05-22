const lyrics = {
      tanpa: `Tiara Andini - Tanpa Cinta
[Intro]
C G Am F

[Verse]
C                  F
Aku mencitaimu tanpa syarat
C                     F
Aku rela menunggu sangat lama
Dm                 A
Katamu suatu saat aku pasti
     F             G
Jadi cintamu satu cintamu

[Chorus]
      C            E        Am
Aku ingin kau menerima seluruh hatiku
      Dm               C           G
Aku ingin kau mengerti di jiwaku hanya kamu
        C            E        Am
Namun bila kau tak bisa menerima aku
        F           G         C
Lebih baik ku hidup tanpa cinta` ,

      bintang: `Nidji - Laskar Pelangi
[Intro]
G C G C

[Verse]
G         C
Mimpi adalah kunci
    Em           D
Untuk kita menaklukkan dunia
G         C
Berlarilah tanpa lelah
     Em             D
Sampai engkau meraihnya

[Chorus]
C       D
Laskar pelangi
G         Em
Takkan terikat waktu
C       D
Bebaskan mimpimu
G          Em
Di angkasa...`,

      sampai: `Sheila On 7 - Dan
[Intro]
C G Am F

[Verse]
C      G         Am
Dan... bila esok datang kembali
       F         G       C
Seperti sedia kala di dalam pelukmu
       G         Am
Mungkin takkan pernah ku temui
     F        G
Cinta seperti ini

[Chorus]
F        G
Sampai kapan kau akan
    C          Am
Terus menyiksa hatiku
F        G       C
Takkan ku lepas dirimu`
    };

    const fileMap = {
      satu: "satu.pdf",
      bintang: "nidji-laskar-pelangi.pdf",
      sampai: "sheila-dan.pdf"
    };

    function selectSong() {
      const selected = document.getElementById("songSelect").value;
      displayLyrics(selected);
    }

    function displayLyrics(key) {
      const lyricsArea = document.getElementById("lyricsDisplay");
      lyricsArea.textContent = lyrics[key] || "Lirik tidak ditemukan.";
    }

    function filterOptions() {
      const input = document.getElementById("searchInput").value.toLowerCase();
      const select = document.getElementById("songSelect");

      for (let i = 0; i < select.options.length; i++) {
        const option = select.options[i];
        const text = option.text.toLowerCase();
        option.style.display = text.includes(input) || option.value === "" ? "block" : "none";
      }
    }

    function handleKey(event) {
      if (event.key === "Enter") {
        const input = document.getElementById("searchInput").value.toLowerCase();
        const select = document.getElementById("songSelect");
        for (let i = 0; i < select.options.length; i++) {
          const option = select.options[i];
          if (option.text.toLowerCase().includes(input)) {
            select.value = option.value;
            displayLyrics(option.value);
            break;
          }
        }
      }
    }

    function downloadPDF() {
      const selected = document.getElementById("songSelect").value;
      if (!selected || !fileMap[selected]) {
        alert("Pilih lagu terlebih dahulu.");
        return;
      }
      const link = document.createElement('a');
      link.href = fileMap[selected];
      link.download = fileMap[selected];
      link.click();
    }
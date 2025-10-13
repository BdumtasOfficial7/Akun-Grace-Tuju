const lyrics = {
      hatikupercaya: `Edward Chen - Hatiku Percaya
[Intro]
F G Am F C G C

[Verse]
C       Em     Am          G
Saat ku tak melihat jalan-Mu
F        Em     Dm         G
Saat ku tak mengerti rencana-Mu
Am       Em    C            F
Namun tetap kupegang janji-Mu
Dm       Em    F     G    C
Pengharapanku hanya pada-Mu

[Chorus]
        F   G  C
Hatiku per-ca-ya
        F   G  C
hatiku per-ca-ya
        F   E  Am
hatiku per-ca-ya
   F       C   G  C
s'lalu ku per-ca-ya`,

      oholynight: `Mariah Carey - O Holy Night
[Intro]
C C C C (arpeggio)

[Verse]
C       C
O Holy Night
      F                 C   C
The stars are brightly shining
          C             G              C
It is the night of our dear Saviour's birth
C             C        F             C  C
Long lay the world in sin and error pining
            Em            Dm            Am
'Til He appeared and the soul felt its worth

[Bridge]
     G       G        C             C
A thrill of hope the weary world rejoices
     G       G       C                C
For yonder breaks a new and glorious morn

[Refrain]
Am 2x          Em 2x   
Fall on your knees

   Dm 2x             Am 2x
O hear the angels' voices

   C G     F 2x    C G                   C 2x
O night divine, o night when Christ was born

   G 2x    C F     C G              C
O night divine, o night, o night divine`,

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
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

      o_holy_night_mariah_carey: `Mariah Carey - O Holy Night
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

      o_holy_night_morissette_amon: `Morissete Amon - O Holy Night
[intro]
G G G G (arpeggio)

[verse]
G       G
O Holy Night
      C                 G   G
The stars are brightly shining
          G             D              G
It is the night of our dear Saviour's birth
G             G        C             G  G
Long lay the world in sin and error pining
            Bm            Am            Em
'Til He appeared and the soul felt its worth

[Bridge]
     D       D        G             G
A thrill of hope the weary world rejoices
     D       D       G                G
For yonder breaks a new and glorious morn

[Refrain]
Em             Bm   
Fall on your knees

   Am 2x             Em
O hear the angels' voices

   G D     G C     G D                   G
O night divine, o night when Christ was born

   D       G C     G D              G
O night divine, o night, o night divine`,

      draw_me_close_to_you: `Draw Me Close To You
[Intro]
Am Dsus G D7

[Verse 1]
G                 C
 Draw me close to you
Dsus              G
    Never let me go
Em                     C
  I lay it all down again
Dsus                       Em
    To hear you say that I'm your friend

[Verse 2]
G G7            C
  You are my desire
Dsus                  G
    No one else will do
Em                           C
  'Cause nothing else could take your place
Dsus                        Em
    To feel the warmth of your embrace

G                  Am
 Help me find the way,
D7              G    Dsus  D7
Bring me back to you


[Chorus]
G         D     C
You're all I want
G          D    C     Dsus 
 You're all I ever needed
G          D     C
 You're all I want
Am              D         G
  Help me know you are near`,

    lingkupiku: `Jacqlien Celosse - Lingkupiku
[intro]
  

[verse 1]
Lingkupiku
Dengan sayap-Mu
Naungiku
Dalam kuasa-Mu

[chorus]
Di saat badai bergelora
Ku akan terbang bersama-Mu
Bapa Kau Raja atas s'mesta
Ku tenang s'bab Kau Allahku

[verse 2]
Jiwaku tenang
Dalam Kristus
Lihat kuasa-Nya
Dalam keheningan`,

    betapa_hatiku: `Nikita - Betapa Hatiku
[intro]

[verse 1]
Betapa hatiku
berterima kasih Yesus
Kau mengasihiku
Kau memilikiku

[chorus]
Hanya ini Tuhan persembahanku
Segenap hidupku jiwa dan ragaku
S'bab tak kumiliki harta kekayaan
Yang cukup berarti
tuk kupersembahkan

Hanya ini Tuhan permohonanku
Terimalah Tuhan persembahanku
Pakailah hidupku sebagai alatMu
seumur hidupku`
    };

    const fileMap = {
      hatikupercaya: "",
      o_holy_night_mariah_carey: "",
      o_holy_night_morissette_amon: "",
      draw_me_close_to_you: "",
      lingkupiku: "",
      betapa_hatiku: ""
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
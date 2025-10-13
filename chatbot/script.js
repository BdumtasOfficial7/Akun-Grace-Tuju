const chatBox = document.getElementById("chatBox");
    const userInput = document.getElementById("userInput");

    // Database pertanyaan & jawaban
    const knowledgeBase = [
      { q: ["halo", "hai"], a: [{ type: "text", content: "Halo! Senang bisa membantu kamu belajar 😊" }] },
      { q: ["baik", "ok","okay","oke"], a: [{ type: "text", content: "Ada yang bisa saya bantu?" }] },
      { q: ["apa yang bisa kamu lakukan"], a: [{ type: "text", content: "Untuk saat ini saya bisa menjawab semua pertanyaan tentang istilah-istilah yang digunakan dalam musik.\n\nKamu bisa mengetik:\n- 'Apa yang dimaksud dengan .... (istilah)?'\n- 'Jelaskan tentang .... (istilah)'\n- '.... (istilah) adalah...'\nuntuk mengetahui istilah yang ingin kamu pelajari." }, { type: "text", content: "Saya masih dalam tahap pengembangan, dan nanti akan lebih canggih lagi..." }] },
      { q: ["da capo", "d.c.", "d.c", "dc"], a: [{ type: "text", content: "Da Capo (D.C.) artinya 'kembali ke awal'. Contoh: D.C. al Fine = kembali ke awal lalu berhenti di Fine." }] },
      { q: ["dal segno", "d.s."], a: [{ type: "text", content: "Dal Segno (D.S.) artinya kembali ke tanda segno. Contoh: D.S. al Fine = kembali ke segno lalu berhenti di Fine." }] },
      { q: ["accelerando", "accel.", "accel"], a: [
        { type: "text", content: "Accelerando atau accel adalah istilah dari bahasa Itali dalam musik yang berarti secara bertahap menjadi lebih cepat, atau semakin lama semakin cepat." }
      ]},
      { q: ["adagio"], a: [
        { type: "text", content: "Adagio adalah istilah dari bahasa Itali dalam musik yang berarti tempo yang digunakan adalah lambat, sekitar 66–75 bpm. Lebih cepat dari Largo tapi lebih lambat dari Andante." }
      ]},
      { q: ["allegretto"], a: [
        { type: "text", content: "Allegretto adalah istilah musik dari bahasa Itali yang artinya cepat, atau riang gembira. Allegretto lebih santai dari Allegro, sekitar 98–109 bpm." }
      ]},
      { q: ["allegro"], a: [{ type: "text", content: "Allegro adalah istilah musik dari bahasa Itali yang berarti cepat dan ceria. Tempo sekitar 120–168 bpm dengan suasana riang serta bersemangat." }] },
      { q: ["andante"], a: [{ type: "text", content: "Andante artinya tempo seperti berjalan santai, tidak cepat dan tidak lambat. Kisaran 76–108 bpm." }] },
      { q: ["cantabile"], a: [{ type: "text", content: "Cantabile artinya 'seperti bernyanyi'. Ini menunjuk pada gaya bermain, bukan tempo. Lagu harus dimainkan dengan ekspresif, seolah-olah suara manusia yang bernyanyi." }] },
      { q: ["crescendo", "cresc.", "cresc"], a: [{ type: "text", content: "Crescendo berarti semakin lama semakin keras. Volume suara bertambah secara bertahap." }] },
      { q: ["decrescendo", "decresc.", "decresc"], a: [{ type: "text", content: "Decrescendo berarti semakin lama semakin lembut. Volume suara menurun secara perlahan." }] },
      { q: ["diminuendo", "dim", "dimin"], a: [{ type: "text", content: "Diminuendo (dim.) artinya semakin lama semakin lembut, sama seperti decrescendo." }] },
      { q: ["fine"], a: [{ type: "text", content: "Fine artinya 'Akhir' atau tanda selesai." }] },
      { q: ["forte","f"], a: [{ type: "text", content: "Forte (f) artinya 'keras' atau 'nyaring'." }] },
      { q: ["fortissimo", "ff"], a: [{ type: "text", content: "Fortissimo (ff) artinya 'sangat keras' atau 'sangat nyaring'." }] },
      { q: ["legato"], a: [{ type: "text", content: "Legato artinya memainkan nada dengan halus, menyambung tanpa jeda. \n\nContohnya:" },
        { type: "image", content: "" },
      ] },
      { q: ["lento"], a: [{ type: "text", content: "Lento artinya 'lambat'. Kisaran tempo sekitar 40–60 bpm." }] },
      { q: ["mezzo"], a: [{ type: "text", content: "Mezzo artinya 'setengah' atau 'cukup'. Contoh: mezzo piano (mp) = cukup lembut, mezzo forte (mf) = cukup keras." }] },
      { q: ["mezzo forte", "mf"], a: [{ type: "text", content: "Mezzo Forte (mf) artinya 'cukup keras'. Dinamikanya di antara mezzo piano (cukup lembut) dan forte (keras)." }] },
      { q: ["mezzo piano", "mp"], a: [{ type: "text", content: "Mezzo Piano (mp) artinya 'cukup lembut'. Dinamikanya di antara piano (lembut) dan mezzo forte (cukup keras)." }] },
      { q: ["moderato"], a: [{ type: "text", content: "Moderato artinya 'sedang'. Contoh: allegro moderato = agak cepat." }] },
      { q: ["piano", "p"], a: [{ type: "text", content: "Piano (p) artinya 'lembut' atau 'pelan'." }] },
      { q: ["pianissimo", "pp"], a: [{ type: "text", content: "Pianissimo (pp) artinya 'sangat lembut'." }] },
      { q: ["poco"], a: [{ type: "text", content: "Poco artinya 'sedikit'." }] },
      { q: ["rallentando", "rall"], a: [{ type: "text", content: "Rallentando artinya secara bertahap semakin lambat." }] },
      { q: ["ritardando", "ritard."], a: [{ type: "text", content: "Ritardando artinya secara bertahap semakin lambat." }] },
      { q: ["ritenuto", "riten.", "riten"], a: [{ type: "text", content: "Ritenuto artinya menahan tempo (tiba-tiba lebih lambat)." }] },
      { q: ["rit."], a: [{ type: "text", content: "istilah 'Rit.' bisa berarti 'ritardando' atau 'ritenuto'. Mana yang ingin kamu ketahui?" }] },
      { q: ["staccato", "stacc."], a: [{ type: "text", content: "Staccato artinya nada dimainkan terputus-putus, singkat." }] },
      { q: ["tempo"], a: [{ type: "text", content: "Tempo artinya kecepatan musik. Contoh: a tempo = kembali ke tempo semula." }] },
      { q: ["8va", "8"], a: [{ type: "text", content: "8va berarti ottava atau octave. \nArtinya kamu harus memainkan nada-nada itu 1 (satu) oktave lebih tinggi atau lebih rendah." }] },
      { q: ["titik", "dot"], a: [{ type: "text", content: "titik (.) disebut dot. biasanya diletakan di atas, di bawah, dan di samping not." },
        { type: "image", content: "" },
      ] },
      { q: ["tanda lebih besar", "simbol lebih besar", "lambang lebih besar", ">"], a: [{ type: "text", content: "Tanda atau simbol ini disebut 'tanda lebih besar' (>). Dalam musik, biasanya diletakan di atas atau di bawah not, yang berarti aksen. Artinya, harus ada penekanan pada nada." }] },
      { q: ["fermata", "seperti mata"], a: [{ type: "text", content: "Fermata adalah sebuah simbol seperti mata, biasanya diletakan di atas not atau di bawah not. \nTanda ini berfungsi untuk memberitahu pemain musik untuk jeda untuk waktu yang lebih lama dari yang ditentukan oleh durasi tertulisnya." }] },
      { q: ["m.m. not 1/4 = ", "not 1/4 = ", "not satuperempat =", "not seperempat =", "crotchet =", "quarter note ="], a: [{ type: "text", content: "Simbol 'crotchet = (angkat)' ini menunjukkan tempo yang digunakan.\n\nContoh:" },
      { type: "image", content: "" },
      ] },
      { q: ["m.m."], a: [{ type: "text", content: "M.M. adalah singkatan dari Maelzel's Metronome." }] },
      { q: ["repeat marks", "tanda pengulangan"], a: [{ type: "text", content: "Tanda pengulangan adalah tanda untuk menyampaikan kepada pemain untuk mengulang lagu ke tanda pengulangan yang lain." }] },
      { q: ["garis"], a: [{ type: "text", content: "Garis dalam penulisan not balok bisa berarti banyak hal..." },
      { type: "image", content: "" },
      ] },
      { q: ["a"], a: [{ type: "text", content: "Dalam musik 'a' berasal dari bahasa Itali yang artinya dalam bahasa inggris: at, to, by, for, in, dan 'in the style of'.\n\n Biasanya 'a' digabung dengan kata lain seperti: 'a tempo'." }] },
      { q: ["al", "alla"], a: [{ type: "text", content: "Dalam musik 'Al' atau 'Alla' adalah istilah dalam bahasa Italia yang digunakan dalam partitur.\n\nAl dalam musik artinya 'ke'. \nBiasanya dipakai untuk menunjukkan arah atau tujuan dalam partitur.\nContohnya:\n- 'Da Capo al Fine' => kembali ke awal sampai ke tanda Fine.\n- 'Dal Segno al Coda' => dari tanda segno sampai ke coda.\n\nDengan kata lain, 'Al' seperti kata penghubung di petunjuk bermain musik.\n\n\n'Alla' artinya 'dengan gaya ...' atau 'seperti ...'\nDipakai untuk menunjukkan karakter atau gaya bermain.\n\nContohnya:\n- 'Alla marcia' => dengan gaya mars (seperti lagu barisan).\n- 'Alla breve => tanda birama 2/2 (sering disebut 'cut time'), dimainkan agak cepat.\n- 'Alla turca => dengan gaya Turki (contoh: Mozart - Rondo Alla Turca)." }] },
      { q: ["allargando"], a: [{ type: "text", content: "Allargando artinya: melebar; menjadi sedikit lebih lambat dan biasanya sedikit lebih keras." }] },
      { q: ["andantino"], a: [{ type: "text", content: "Andantino artinya sedikit lebih cepat dari andante." }] },
      { q: ["assai"], a: [{ type: "text", content: "Assai artinya sangat. Contohnya: 'allegro assai' = sangat cepat." }] },
      { q: ["con", "col"], a: [{ type: "text", content: "Con atau col artinya 'with' dalam bahasa inggris." }] },
      { q: ["dolce", "dol.", "dol"], a: [{ type: "text", content: "'Dolce' berasal dari bahasa Itali yang berarti 'manis', 'lembut', atau 'halus'.\n\nIni merupakan petunjuk ekspresi untuk pemain musik.\n\nKetika tertulis 'dolce' di partitur, maka:\n1. Nada harus dimainkan dengan lembut dan penuh perasaan.\n2. Sentuhan jari ringan, tidak menghentak.\n3. Musik harus terasa emosional, menimbulkan kesan lembut, penuh kasih, atau romantis." }] },
      { q: ["e", "ed"], a: [{ type: "text", content: "'e' atau 'ed' dalam bahasa Itali berarti: 'and' (bahasa inggris)." }] },
      { q: ["espressivo", "espress.", "espr."], a: [{ type: "text", content: "espressivo atau 'espress.' atau 'espr.' adalah istilah dalam bahasa Itali yang artinya ekspresif." }] },
      { q: ["fortepiano", "fp"], a: [{ type: "text", content: "Fortepiano atau 'fp' adalah istilah dari bahasa Itali yang artinya: keras, lalu segera lembut.\n\nIni merupakan instruksi untuk memainkan nada 'keras' pada awalnya, kemudian langsung setelah itu menjadi 'lembut'.\n\nPenerapannya berbeda-beda, tergantung alat musik apa yang digunakan.\n\n- Pada piano: tekan tuts dengan keras sekali, lalu segera kurangi tekanan sehingga suara cepat menjadi lembut.\n\n- Pada biola: gesek awal dengan tenaga kuat, lalu segera kendurkan agar bunyinya lembut." }] },
      { q: ["giocoso"], a: [{ type: "text", content: "Giocoso adalah istilah musik dari bahasa Itali yang artinya: riang, ceria." }] },
      { q: ["grave"], a: [{ type: "text", content: "Grave adalah istilah musik dari bahasa Itali yang artinya: sangat lambat, khidmat." }] },
      { q: ["grazioso"], a: [{ type: "text", content: "Grazioso adalah istilah musik dari bahasa Itali yang artinya: anggun, penuh keindahan." }] },
      { q: ["larghetto"], a: [{ type: "text", content: "Larghetto adalah istilah musik dari bahasa Itali yang artinya: agak lambat, tapi tidak selambat largo." }] },
      { q: ["largo"], a: [{ type: "text", content: "Largo adalah istilah musik dari bahasa Itali yang artinya: lambat, agung." }] },
      { q: ["ma"], a: [{ type: "text", content: "'ma' berasal dari bahasa Itali yang berarti 'tetapi' atau 'namun'.\n\nFungsinya adalah kata penghubung dalam petunjuk musik.\n\nKetika ada 'ma', biasanya menghubungkan dua instruksi yang berbeda.\nContohnya:\n\n- Allegro ma non troppo => cepat, tetapi tidak terlalu cepat." }] },
      { q: ["maestoso"], a: [{ type: "text", content: "Maestoso adalah istilah musik dari bahasa Itali yang artinya: agung, megah." }] },
      { q: ["meno"], a: [{ type: "text", content: "Meno berasal dari bahasa Itali yang artinya: 'kurang' atau 'lebih sedikit'. Biasanya dipakai untuk mengurangi sesuatu: bisa tempo, dinamika, atau ekspresi.\n\nContohnya:\n- Meno allegro => kurang cepat daripada allegro. jadi sedikit lebih santai.\n\n- Meno forte => kurang keras. Lebih lembut dari forte." }] },
      { q: ["molto"], a: [{ type: "text", content: "Molto berasal dari bahasa Itali yang artinya: 'sangat', 'sekali', atau 'banyak'.\n\nIni dipakai sebagai penguat untuk istilah lain.\n\nContohnya:\n- Molto allegro => sangat cepat.\n\n- Molto crescendo => semakin banyak naiknya volume.\n\n- Molto dolce => mainkan sangat manis/lembut, lebih lembut dari 'dolce' biasa." }] },
      { q: ["mosso", "moto"], a: [{ type: "text", content: "'Mosso' berasal dari bahasa Itali 'muovere' yang artinya bergerak.\n\n'Moto' artinya 'gerakan'.\n=> Keduanya berhubungan dengan pergerakan musik, terutama soal tempo.\n\nKegunaan:\n- Mosso biasanya dipakai untuk menunjukkan perubahan tempo.\nContohnya:\n- Moso moderato => dengan gerakan sedang.\n\nMoto lebih sering dipakai untuk memberi karakter pada musik.\nContohnya:\n- Con moto => dengan gerakan. Artinya jangan terlalu statis; agak hidup.\n\n- Poco moto => dengan sedikit gerakan." }] },
      { q: ["non"], a: [{ type: "text", content: "Non artinya 'tidak'" }] },
      { q: ["piu"], a: [{ type: "text", content: "Piu artinya lebih" }] },
      { q: ["presto"], a: [{ type: "text", content: "Presto artinya cepat. Lebih cepat dari allegro." }] },
      { q: ["senza"], a: [{ type: "text", content: "Senza artinya 'tanpa'." }] },
      { q: ["sf", "sfz", "sforzando", "sforzato"], a: [{ type: "text", content: "Sforzando atau sforzato biasa disingkat 'sf' atau 'sfz' artinya ditekankan, dengan aksen kuat." }] },
      { q: ["simile", "sim."], a: [{ type: "text", content: "Simile atau disingkat 'sim.' adalah kata dalam bahasa Itali yang artinya 'dengan cara yang sama'." }] },
      { q: ["sostenuto"], a: [{ type: "text", content: "Sostenuto adalah kata dari bahasa Itali yang artinya 'sustain'. Maksudnya adalah, nada dijaga agar tetap panjang dan menyatu." }] },
      { q: ["tenuto"], a: [{ type: "text", content: "Tenuto berasal dari bahasa Itali yang berarti 'ditahan' atau 'dijaga panjangnya'." }, { type: "text", content: "Dalam musik tanda tenuto ( - ) artinya not tersebut harus:\n\n1. Ditekan atau dimainkan dengan tidak dipersingkat.\n\n2. Sedikit lebih kuat atau diberi penekanan lembut dibantingkan not di sekitarnya." }] },
      { q: ["troppo"], a: [{ type: "text", content: "Troppo berasal dari bahasa Itali yang berarti 'terlalu' atau 'secara berlebihan'." }, { type: "text", content: "Dalam musik, troppo tidak berdiri sendiri. Biasanya troppo dipasangkan dengan istilah yang lain.\nContohnya:\n\n- Allegro ma non troppo => Cepat, tapi tidak terlalu cepat\n\n- Adagio ma non troppo => Lambat, tapi tidak terlalu lambat\n\n- Presto troppo => Terlalu cepat" }] },
      { q: ["vivace", "vivo"], a: [{ type: "text", content: "Vivace atau vivo berasal dari bahasa Itali yang artinya berhubungan dengan kehidupan, semangat, dan keceriaan." }, { type: "text", content: "Dalam musik, Vivace artinya: dimainkan dengan tempo cepat dan ceria, penuh energi dan bersemangat.\n\nTemponya sekitar 140-160 bpm." }] },
      { q: ["adagietto"], a: [{ type: "text", content: "Adagietto berasal dari bahasa Itali yang artinya tempo lambat tapi tidak terlalu lambat, atau lebih ringan dan mengalir daripada Adagio.\n\nBiasanya digunakan untuk bagian musik yang lembut, tenang, dan ekspresif, tetapi tidak terlalu berat atau sedih.\n\nTemponya sekitar 70-80 bpm." }] },
      { q: ["ad libitum", "ad lib."], a: [{ type: "text", content: "Ad libitum atau biasa disingkat ad lib., adalah istilah yang berasal dari bahasa Latin yang artinya 'sesuai kehendak' atau 'sebebasnya'.\n\nBerarti, pemain bebas menentukan cara, tempo, atau ekspresi saat memainkan bagian tertentu, dan tidak harus mengikuti ketukan atau notasi secara kaku." }, { type: "text", content: "Ada 3 konteks umum penggunaannya:\n\n1. Tempo bebas => Pemain boleh mempercepat atau memperlambat sesuka hati untuk menambah ekspresi.\n\n2. Improvisasi => Pemain boleh menambah atau mengubah melodi.\n\n3. Instrumen opsional => Artinya bagian instrumen tersebut boleh dimainkan atau tidak." }] },
      { q: ["agitato"], a: [{ type: "text", content: "Agitato berasal dari bahasa Itali dan sering muncul dalam musik klasik untuk menunjukkan emosi dan karakter permainan." }, { type: "text", content: "Secara harfia 'agitato' berarti 'gelisah,' 'bergejolak,' atau 'tergesa-gesa.'\n\nArtinya, nada dimainkan dengan penuh ketegangan dan dinamis. Biasanya disertai tempo agak cepat atau berdenyut tidak tenang." }] },
      { q: ["alla breve"], a: [{ type: "text", content: "Alla breve berasal dari bahasa Itali yang berarti ;'menggunakan jenis not minim (half note) sebagai satu ketukan.'\n\nArtinya musik dimainkan dalam birama 2/2 - jadi setiap ketukan utama = not setengah (minim)." }] },
      { q: ["amore"], a: [{ type: "text", content: "Amore berasal dari bahasa Itali yang berarti 'Cinta.'\n\nDalam musik 'amore' digunakan untuk menunjukkan bahwa bagian musik itu harus dimainkan dengan penuh perasaan, kasih dan kelembutan." }, { type: "text", content: "Biasanya muncul sebagai tambahan pada petunjuk ekspresi.\nContohnya:\n\n- 'Con amore' => Dengan cinta\n\n- Dolce e con amore => Mainkan dengan suara lembut dan hangat." }] },
      { q: ["anima"], a: [{ type: "text", content: "Anima berasal dari bahasa Itali dan Latin yang secara harfiah berarti 'jiwa', 'semangat', atau 'roh.'" }, { type: "text", content: "Dalam musik, anima berarti: 'mainkan dengan penuh semangat.'\nArtinya, musiknya tidak boleh datar atau kaku, tapi pemain harus mengekspresikan emosi dengan hidup dan berenergi, seolah nada-nada itu punya roh di dalamnya." }] },
      { q: ["animato"], a: [{ type: "text", content: "Animato berasal dari bahasa Itali yang artinya: dihidupkan, bersemangat, dan penuh kehidupan.\n\nKegunaan dalam musik menunjukkan gaya atau tempo permainan.\n\nMakna praktisnya: Tingkatkan tempo dan energi - buat musik terasa bergerak dan berdenyut dengan semangat." }] },
      { q: ["ben"], a: [{ type: "text", content: "Ben berasal dari bahasa Itali, yang artinya 'dengan baik' atau 'dengan jelas'.\n\nBiasanya kata ini tidak berdiri sendiri, tapi digunakan bersama istilah lain.\nContohnya:\n\n- Ben legato => dengan legato yang baik dan halus.\n\n- ben sostenuto => dengan penahanan nada yang baik atau mantap." }] },
      { q: ["brio"], a: [{ type: "text", content: "Brio berasal dari bahasa Itali yang artinya semangat, energi, atau gairah.\n\nNuansanya lebih ke energi yang berapi-api dan hidup.\n\nKesannya seperti permainan yang 'menyala', kuat, dan penuh gairah." }] },
      { q: ["comodo"], a: [{ type: "text", content: "Istilah comodo atau dibaca ko-mo-do, berasal dari bahasa Itali yang berarti 'nyaman' atau 'santai'.\n\n'Comodo' berarti musik harus dimainkan dalam tempo atau gaya yang nyaman dan tidak terburu-buru, terasa alami bagi pemain maupun pendengar." }] },
      { q: ["deciso"], a: [{ type: "text", content: "Deciso berasal dari bahasa Itali yang berarti 'tegas', 'mantap', atau 'penuh keyakinan'.\n\nDalam musik, Deciso menunjukkan bahwa bagian musik tersebut harus dimainkan:\n\n- dengan ketegasan\n- penuh keyakinan\n- nada dan ritmenya harus jelas\n- tenpa keraguan atau lembek" }] },
      { q: ["delicato"], a: [{ type: "text", content: "Delicato berasal dari bahasa Itali yang berarti 'halus', 'lembut', atau penuh kepekaan'.\n\nDalam musik, delicato menunjukkan bahwa bagian musik harus dimainkan:\n- dengan kelembutan dan kehalusan\n- dengan sentuhan ringan dan penuh rasa\n- tanpa tekanan berat atau keras" }] },
      { q: ["energico"], a: [{ type: "text", content: "Energico berasal dari bahasa Itali yang berarti: 'dengan energi', 'bertenaga', atau 'kuat dan penuh semangat'.\n\nJika tertulis energico, berarti musik harus dimainkan:\n- dengan kekuatan dan semangat penuh\n- tegas dan mantap dalam ritme dan dinamika\n- memberi kesan energi yang mengalir dan berdaya dorong" }] },
      { q: ["forza"], a: [{ type: "text", content: "Forza dari bahasa Itali artinya 'kekuatan' atau 'tenaga'.\n\nDalam musik, istilah ini menunjukkan bahwa bagian tersebut harus dimainkan dengan kuat, penuh daya, dan bertenaga." }] },
      { q: ["largamente"], a: [{ type: "text", content: "Largamente berasal dari bahasa Itali, dari kata 'largo', yang berarti lebar.\n\nDalam konteks musik, ketika tertulis 'largamente', maka pemain diharapkan memainkan musik:\n- dengan tempo agak lambat atau tenang\n- nada panjang dan penuh ekspresi\n- dengan perasaan agung, luas, dan tidak terburu-buru" }] },
      { q: ["leggiero"], a: [{ type: "text", content: "Leggiero (dibaca: led-je-ro) berasal dari bahasa Itali yang berarti: 'ringan', 'lembut', atau 'lincah'.\n\nJika kamu melihat tanda leggiero pada partitur, maka kamu harus memainkan nada-nada dengan ringan, lembut, dan tanpa tekanan berat. \n\nNada-nadanya harus mengalir cepat dan halus, seperti melayang di udara." }] },
      { q: ["marcato", "marc."], a: [{ type: "text", content: "Marcato berasal dari bahasa Itali yang berarti 'ditandai' atau 'ditekankan'.\n\nJika kamu melihat tanda 'marcato', biasanya tertulis 'marcato' atau disingkat dengan simbol ^ di atas not, maka: mainkan setiap nada dengan penekanan yang kuat dan jelas, sehingga terdengar tegas, jelas, dan menonjol dari lainnya." }] },
      { q: ["marziale"], a: [{ type: "text", content: "Marziale berasal dari bahasa Itali yang berarti 'militer' atau 'bersifat seperti perang'.\n\nJika tertulis marziale, berarti musik harus dimainkan: dengan gaya militer, yaitu tegas, gagah, berirama seperti barisan tentara.\n\nRitme harus kuat, stabil, dan bersemangat, seolah menggambarakan langkah-langkah prajurit yang sedang berbaris." }] },
      { q: ["mesto"], a: [{ type: "text", content: "Mesto berasalah dari bahasa Itali yang berarti 'sedih', 'muram', atau 'melankolis'.\n\nBiasanya digunakan sebagai petunjuk ekspresi pada lagu yang ingin disampaikan dengan perasan duka atau kesedihan yang mendalam." }] },
      { q: ["pesante"], a: [{ type: "text", content: "Pesante adalah istilah dari bahasa Itali yang berarti 'berat', kokoh', atau 'dengan tekanan yang kuat'.\n\nBukan berarti dimainkan keras (forte), tapi berat dan tegas, seperti langkah yang mantap dan penuh tenaga." }] },
      { q: ["prima", "primo"], a: [{ type: "text", content: "Prima dan Primo sama-sama berasal dari bahasa Itali yang berarti 'pertama', tapi penggunaannya berbeda, tergantung konteks dan jenis katanya.\n\nPrimo (maskulin), berarti 'yang pertama'. Biasanya digunakan untuk alat musik atau bagian pertama dalam duet." }, { type: "text", content: "Contohnya:\n\n- Primo dalam duet piano => pemain pertama. Biasanya memainkan bagian atas).\n\n- Piano primo = pemain piano pertama (melodi utama)." }, { type: "text", content: "Prima (feminim) berarti juga 'yang pertama' tapi bentuk feminim. Biasanya digunakan dalam konteks instruksi atau pengulangan.\n\nContoh:\n\n- Da capo al prima volta = kembali ke awal hingga bagian 'pertama kali'." }] },
      { q: ["risoluto"], a: [{ type: "text", content: "Risoluto berasal dari bahasa Itali yang berarti tegas, mantap, atau penuh keyakinan." }, { type: "text", content: "Jika kamu melihat kata 'risoluto' pada partitur, berarti musik harus dimainkan dengan:\n\n- tekad yang kuat\n- nada yang jelas dan tidak ragu-ragu\n- irama stabil dan penuh keyakinan" }] },
      { q: ["ritmico"], a: [{ type: "text", content: "Ritmico adalah istilah musik dari bahasa Itali yang berarti berirama atau dengan ritme yang kuat dan jelas." }, { type: "text", content: "Jika kamu melihat ritmico di partitur, itu artinya musik harus dimainkan dengan:\n\n- Tekanan kuat pada irama\n- Pola ritme yang teratur dan terasa jelas\n- Energi dan semangat yang mengikuti ketukan" }, { type: "text", content: "Cara bermain:\n\n- Pada piano atau gitar => jaga ketukan agar terasa stabil dan 'groovy'\n-Pada drum atau perkusi => tekankan ritme utama agar pendengar bisa merasakan beat-nya\n- Pada vokal atau paduan suara => nyanyikan dengan artikulasi ritmis yang jelas" }] },
      { q: ["rubato"], a: [{ type: "text", content: "Rubato berasal dari bahasa Itali yang berarti 'mencuri waktu', 'atau 'memainkan tempo dengan bebas'." },{ type: "text", content: "Rubato menunjukkan bahwa pemain tidak mengikuti tempo secara kaku, tetapi sedikit memperlambat atau mempercepat bagian tertentu agar terasa lebih ekspresif dan hidup." }] },
      { q: ["scherzando", "scherzoso"], a: [{ type: "text", content: "Scherzando dan Scherzoso sama-sama berasal dari bahasa Itali dari kata dasar 'scherzo' yang berarti 'lelucon', 'bercanda' atau 'gembira'.\n\nKeduanya memberi petunjuk bahwa musik harus dimainkan dengan ringan, ceria, dan penuh permainan." }, { type: "text", content: "Cara bermain:\n\n- Gunakan nada ringan, artikulasi jelas, dan dinamika lincah.\n- Hindari tekanan berat, buat musik terdengar riang dan bersemangat." }] },
      { q: ["seconda", "secondo"], a: [{ type: "text", content: "Seconda berasal dari bahasa Itali yang artinya 'kedua'.\n\nSeconda digunakan untuk menunjukkan bagian atau pemain kedua, biasanya dalam duet, ansambel, atau instruksi pengulangan.\n\nContohnya:\n- Primo = pertama\n- Seconda = kedua" }] },
      { q: ["semplice"], a: [{ type: "text", content: "Semplice dari bahasa Itali yang berarti 'sederhana' atau 'dengan sederhana'.\n\nKalau tertulis 'semplice' pada partitur, artinya lagu atau bagian itu harus dimainkan dengan sederhana, polos, tidak berlebihan, dan alami, minim ornament." }] },
      { q: ["sempre"], a: [{ type: "text", content: "Sempre dari bahasa Itali artinya 'selalu', 'terus-menerus', atau 'senantiasa'.\n\nDalam musik, ini digunakan untuk memberi tahu pemain agar terus mempertahankan instruksi tertentu sepenjang bagian, sampai ada tanda baru yang mengubahnya." }, { type: "text", content: "Contoh:\n\n- sempre piano (sempre f) => selalu lembut. Jangan tiba-tiba naik volume kecuali ada tanda lain.\n- sempre legato => mainkan terus menerus dengan legato, jangan terputus." }] },
      { q: ["stringendo"], a: [{ type: "text", content: "Stringendo berasal dari bahasa Itali yang berarti 'menekan' atau 'menyempitkan'.\n\nDalam musik, ini dipakai sebagai petunjuk ekspresi untuk: semakin cepat sedikit demi sedikit (accelerating), dan biasanya dengan nuansa makin tegang/intens." }, { type: "text", content: "Stringendo sering muncul menjelang klimaks atau saat transisi menuju bagian baru.\n\nBisa juga disertai peningkatan dinamika (lebih keras) agar berefek dramatis." }] },
      { q: ["subito"], a: [{ type: "text", content: "Subito berasal dari bahasa Itali yang berarti 'tiba-tiba'.\n\nDalam musik, 'subito' adalah petunjuk agar pemain melakukan perubahan drastis dan langsung." }, { type: "text", content: "Contoh:\n\n-subito piano (sub. p) => langsung lembut, meskipun bar sebelumnya keras.\n- subito staccato => mendadak staccato." }] },
      { q: ["tanto"], a: [{ type: "text", content: "Tanto berasal dari bahasa Itali yang artinya 'sangat', 'begitu', 'banyak', 'amat'.\n\nDalam konteks musik, tanto dipakai untuk menekankan ukuran/derajat sesuatu (tempo, dinamika, ekspresi)." }, { type: "text", content: "Biasanya 'tanto' tidak berdiri sendiri, melainkan digabung dengan istilah lain.\n\nContohnya:\n\nAllegro ma non tanto = cepat, tetapi tidak begitu cepat." }, { type: "text", content: "Tanto sering dipakai dalam bentuk negatif. Contohnya:\n\nnon tanto = tidak terlalu" }] },
      { q: ["tranquillo"], a: [{ type: "text", content: "Tranquillo berasal dari bahasa Itali yang artinya 'tenang', 'damai', 'hening', 'penuh ketenangan'.\n\nDalam musik, ini adalah tanda ekspresi supaya bagian dimainkan dengan rasa tenang, tidak gelisah, lembut, dan stabil." }, { type: "text", content: "Cara Pemakaian:\n\n- Andante tranquillo => tempo sedang dengan suasana tenang.\n- Poco piu tranquillo => sedikit lebih tenang.\n- Tranquillo, ma espressivo => tenang, tapi tetap ekspresif.\n- Sempre tranquillo => tetap tenang sepanjang bagian." }] },
      { q: ["triste", "tristamente"], a: [{ type: "text", content: "Triste atau tristamente berasal dari bahasa Itali yang artinya 'sedih' atau 'mainkan dengan sedih'." }] },
      { q: ["volta"], a: [{ type: "text", content: "Volta dari bahasa Itali yang artinya 'waktu' atau 'giliran'.\n\nDi partitur, volta digunakan untuk menunjukkan bagian ulangan - yaitu bagian musik yang dimainkan pada giliran pertama, kedua, dan seterusnya." }, { type: "text", content: "Volta digunakan bersama angka (1,2,3,dst) untuk menandai bagian berbeda yang dimainkan pada setiap pengulangan." }] },
      { q: ["perdendosi"], a: [{ type: "text", content: "Perdendosi adalah istilah musik dari bahasa Itali yang artinya 'menghilang secara perlahan' atau 'lenyap sedikit demi sedikit'." }, { type: "text", content: "Ketika tertulis perdendosi di partitur, pemain diminta untuk:\n\n- Memperlambat tempo secara bertahap,\n- Menurunkan volume (dinamika) secara perlahan,\n- Buat musik semakin lama semakin lembut dan akhirnya seolah menghilang." }] },
      { q: ["mormorando"], a: [{ type: "text", content: "Mormorando adalah istilah dalam bahasa Itali yang berarti 'berbisik' atau 'bergumam pelan'." }, { type: "text", content: "Jika ada istilah 'mormorando' di partitur, maka musik harus dimainkan:\n\n- dengan sangat lembut,\n- halus seperti bisikan atau gumaman,\n- dengan nuansa misterius, tenang, dan lembut." }] },
      { q: ["un"], a: [{ type: "text", content: "Un adalah istilah musik yang berasal dari bahasa Itali yang artinya 'satu' atau 'sebuah' (a/one).\n\n'un' hampir tidak pernah berdiri sendiri - biasanya digunakan bersama kat lain untuk memberikan nuansa 'sedikit', 'satu', atau 'sebuah hal tertentu'." }, { type: "text", content: "Un berfungsi sebagai artikel tak tentu seperti kata 'a' atau 'one' dalam bahasa Inggris.\n\nContohnya:\n\n- un poco = sedikit\n- un poco meno forte = sedikit kurang keras" }] },
      { q: ["dolente"], a: [{ type: "text", content: "Dolente berasal dari bahasa Itali yang berarti 'sedih', 'duka', atau 'penuh penderitaan'." }, { type: "text", content: "Ketika tertulis dolente di partitur, maka musik harus dimainkan dengan:\n\n- ekspresi kesedihan yang mendalam,\n- nada lembut dan penuh perasaan,\n- seolah-olah pemain merasakan duka atau kehilangan" }] },
      { q: ["lusingando"], a: [{ type: "text", content: "Lusingando berasal dari bahasa Itali yang artinya 'memikat', 'menyenangkan', 'memuji dengan lembut'." }, { type: "text", content: "Ketika tertulis lusingando di partitur, maka musik harus dimainkan dengan:\n\n- nada lembut dan menawan\n- gaya yang halus, ekspresif, dan menggoda pendengar\n- seolah-olah musiknya sedang membujuk atau merayu dengan keindahan suara" }] },
      { q: ["smorz.", "smorz"], a: [{ type: "text", content: "Smorz. merupakan singkatan dari istilah musik Itali 'smorzando', yang artinya 'memadam', 'memudarkan', atau 'menghilang perlahan'." }, { type: "text", content: "Jika tertulis smorz. atau smorzando di partitur maka pemain harus:\n\n- menurunkan volume (dinamika) secara bertahap\n- memperlambat tempo sedikit demi sedikit\n- seolah pada atau lenyap perlahan, seperti nyala lilin yang meredup" }] },
      { q: ["quasi"], a: [{ type: "text", content: "Quasi dari bahasa Itali yang artinya 'sepert' atau 'seolah-olah'." }, { type: "text", content: "Quasi digunakan untuk memberi perbandingan gaya atau karakter.\n\nArtinya bagian tersebut harus dimainkan menyerupai gaya yang disebut setelah kata 'quasi'.\n\nBukan benar-benar itu, tapi meniru suasananya." }, { type: "text", content: "Cara bermain:\n\n- Dengarkan atau rasakan karakter yang dibandingkan (misalnya allegro, recitativo, fantasia),\n- Mainkan dengan nuansa menyerupai - bukan meniru secara teknis, tapi secara emosi dan gaya." }] },
      { q: ["valse"], a: [{ type: "text", content: "Valse adalah istilah dalam bahasa Perancis yang berarti 'waltz' - yaitu terian tiga ketukan (3/4) yang lembut, mengalun, dan berputar." }, { type: "text", content: "Dalam musik, 'valse' adalah jenis komposisi atau gaya permainan yang mengikuti irama khas tarian waltz." }, { type: "text", content: "Ciri-ciri musik Valse:\n\n- Birama 3/4 = tiga ketukan dalam satu bar:\n=> KUAT (ONE) - lemah (two) - lemah (three)" }] },
      { q: ["mouvement"], a: [{ type: "text", content: "Mouvement berasal dari bahasa Perancis yang berarti 'gerakan' (movement)." }, { type: "text", content: "Dalam konteks musik klasik, istilah ini memiliki dua makna utama tergantung konteksnya:" }, { type: "text", content: "1. Sebagai bagian dari karya musik besar\n\nDalam sonata, simfoni, konserto, atau suite, 'mouvement' berarti bagian atau bab dari keseluruhan karya.\n\nMisalnya:\n\n- Simfoni biasanya terdiri dari 4 mouvements (gerakan):\n   a. Allegro (cepat)\n   b. Adagio (lambat)\n   c. Scherzo atau Menuet (tarian ringan, 3/4)\n   d. Finale (cepat dan kuat)\n\nContoh:\n'Symphonie No. 5 de Beethoven - 1er mouvement: Allegro conbrio'\n= Simfoni No. 5 karya Beethoven - Gerakan pertama: Allegro con brio." }, { type: "text", content: "2. Sebagai petunjuk ekspresi atau tempo\n\nDalam partitur, 'mouvement' juga bisa berarti pergerakan tempo atau karakter musik.\n\nMisalnya:\n\n- 'Avec mouvement' = dengan gerakan -> dimainkan dengan semangat, tidak lambat\n- 'Un peu de mouvement' = sedikit lebih cepat" }] },

      // ISTILAH-ISTILAH GITAR
      { q: ["bagian gitar", "komponen gitar"], a: [{ type: "text", content: "Berikut ini bagian-bagian gitar:\n\n- Kepala Gitar\n- Penyetel Senar\n- Nut\n- Leher Gitar\n- Fingerboard / Fretboard (papan jari)\n- Frets\n- Badan Gitar\n- Lubang suara\n- Pickup\n- Bridge\n- Saddle\n- Pickguard\n- Senar\n- Volume knob\n- Tone knob\n- Pickup selector switch\n- Strap Button\n- Output jack" }] },
      { q: ["head", "kepala gitar"], a: [{ type: "text", content: "Kepala gitar atau 'head' atau 'headstock' adalah bagian paling atas gitar, yang fungsinya sebagai tempat menyetel senar (tuning) agar menghasilkan nada yang tepat." }] },
      { q: ["tuning key", "tuning pegs", "machine head", "penyetel senar"], a: [{ type: "text", content: "Penyetel senar (tuning keys; tuning pegs; machine heads) digunakan untuk mengencangkan atau mengendurkan senar." }] },
      { q: ["nut"], a: [{ type: "text", content: "Nut adalah batang kecil, biasanya dari tulang, plastik, atau logam, yang menahan senar di antara headstock dan fingerboard." }] },
      { q: ["neck", "leher gitar"], a: [{ type: "text", content: "Leher Gitar (neck) adalah bagian panjang yang dipegang dengan tangan yang dominan, yang fungsinya sebagai tempat jari menekan senar untuk menghasilkan nada." }] },
      { q: ["fret"], a: [{ type: "text", content: "Frets adalah logam tipis melintang di fingerboard untuk menentukan tinggi nada.\n\nSemakin dekat ke body maka nadanya semakin tinggi." }] },
      { q: ["fingerboard", "fretboard"], a: [{ type: "text", content: "Fingerboard atau Fretboard adalah papan tempat jari menekan senar. Posisinya ada di leher gitar (neck)." }] },
      { q: ["position marker", "penanda posisi"], a: [{ type: "text", content: "Penanda Posisi (position marker) adalah titik atau tanda kecil di fingerboard gitar yang membantu pemain mengetahui posisi fret dengan cepat tanpa harus melihat satu per satu." }] },
      { q: ["soundhole", "lubang suara"], a: [{ type: "text", content: "Lubang suara (soundhole) adalah lubang pada gitar akustik yang berfungsi untuk menguatkan getaran senar." }] },
      { q: ["body"], a: [{ type: "text", content: "Body atau badan gitar adalah bagian besar gitar yang bersentuhan dengan tubuh pemain.\n\nFungsinya untuk menghasilkan dan memperkuat suara." }] },
      { q: ["pickguard"], a: [{ type: "text", content: "pickguard adalah pelindung body dari goresan pick saat dimainkan." }] },
      { q: ["pickup"], a: [{ type: "text", content: "Pickup adalah salah satu bagian pada gitar elektrik untuk menangkap getaran senar dan mengubahnya menjadi sinyal listrik." }] },
      { q: ["saddle gitar", "saddle guitar", "saddle"], a: [{ type: "text", content: "Saddle adalah bagian kecil di atas bridge yang membantu menentukan tinggi senar dari fretboard." }] },
      { q: ["pickup selector switch"], a: [{ type: "text", content: "Pickup selector switch merupakan fitur pada gitar elektrik yang berfungsi untuk memilih pickup mana yang digunakan." }] },
      { q: ["tone", "volume controls"], a: [{ type: "text", content: "Volume control adalah kenop (knob) pada gitar - terutama pada gitar elektrik - yang berfungsi untuk mengatur keras atau lembutnya suara yang keluar dari gitar ke amplifier." }] },
      { q: ["bridge gitar"], a: [{ type: "text", content: "Bridge adalah tempat ujung bawah senar ditambatkan." }] },
      { q: ["output jack"], a: [{ type: "text", content: "Output jack adalah lubang colokan pada gitar, biasanya terletak di body bagian bawah atau samping, yang merupakan tempat untuk menyambungkan kabel gitar (kabel jack) ke amplifier, efek pedal, atau alat rekam." }] },
      { q: ["tuning", "stem"], a: [{ type: "text", content: "Tuning atau stem dalam musik berarti menyetel senar agar setiap senar menghasilkan nada yang tepat sesuai standar nada yang diinginkan." }] },
      { q: ["playing position", "posisi bermain gitar", "posisi dalam bermain gitar", "posisi saat memegang gitar", "posisi saat bermain gitar"], a: [{ type: "text", content: "Saat bermain gitar pada umumnya posisi yang nyaman adalah seperti gambar di bawah ini..." }, { type: "image", content: "" }] },
      { q: ["note", "not"], a: [{ type: "text", content: "Note (dibaca: nout) adalah istilah dalam musik yang berarti nada atau bunyi tertentu dengan tinggi (pitch) dan durasi (lama waktu) tertentu." }] },
      { q: ["whole note", "whole not", "not penuh", "note penuh", "semibreve", "semi breve"], a: [{ type: "text", content: "Semibreve (dibaca: semi-briv) adalah nada utuh (whole note) dalam musik. Ini adalah nada dengan durasi terpanjang di antara not-not dasar - biasanya bernilai 4 ketukan dalam tanda birama 4/4." }] },
      { q: ["half note", "half not", "not setengah", "note setengah", "not 1/2", "minim"], a: [{ type: "text", content: "Minim (disebut juga half note dalam bahasa Inggris) adalah notasi musik yang bernilai dua ketukan dalam tanda birama 4/4." }] },
      { q: ["quarter note", "crotchet", "not 1/4"], a: [{ type: "text", content: "Crotchet atau disebut juga quarter note adalah notasi musik yang bernilai satu ketukan dalam tanda birama 4/4." }] },
      { q: ["staff", "staf"], a: [{ type: "text", content: "Staff atau staf dalam bahasa Indonesia disebut juga paranada, adalah lima garis dan empat spasi yang digunakan untuk menulis notasi musik." }] },
      { q: ["ledger lines", "garis bantu", "garis tambahan"], a: [{ type: "text", content: "Ledger line, dalam bahasa Indonesia disebut garis tambahan, adalah garis kecil yang ditambahkan di atas atau di bawah paranada (staff) untuk menulis nada-nada yang terlalu tinggi atau terlalu rendah." }] },
      { q: ["clef", "tanda kunci"], a: [{ type: "text", content: "Clef (dibaca: klef) atau 'tanda kunci', adalah simbol di awal paranada (staff) yang menentukan nada pada garis-garis serta spasi di paranada tersebut." }] },
      { q: ["measure", "bar"], a: [{ type: "text", content: "Bar, dalam bahasa Indonesia disebut birama, adalah bagian atau potongan kecil dalam musik yang dibatasi oleh garis vertikal yang disebut garis birama (bar line) di dalam staff (paranada)." }] },
      { q: ["meters", "time signatures", "tanda birama"], a: [{ type: "text", content: "Tanda birama adalah simbol angka dalam bentuk pecahan, yang terletak di sebelah kiri paranada (staff), yang berfungsi untuk menunjukkan berapa ketukan (beat) dalam satu birama (bar) dan nilai not yang dihitung sebagai satu ketukan." }] },
      { q: ["whole rest", "tanda istirahat penuh", "tanda diam semibreve"], a: [{ type: "text", content: "Tanda istirahat penuh atau tanda diam semibreve - dalam bahasa inggris 'whole rest', adalah simbol diam atau tidak berbunyi selama 4 ketukan penuh dalam birama 4/4. " }] },
      { q: ["half rest"], a: [{ type: "text", content: "" }] },
      { q: ["quarter rest"], a: [{ type: "text", content: "" }] },
      { q: ["accidentals"], a: [{ type: "text", content: "" }] },
      { q: ["sharp"], a: [{ type: "text", content: "" }] },
      { q: ["flat"], a: [{ type: "text", content: "" }] },
      { q: ["eighth note"], a: [{ type: "text", content: "" }] },
      { q: ["eighth rest"], a: [{ type: "text", content: "" }] },
      { q: ["pickup measure", "pickups"], a: [{ type: "text", content: "" }] },
      { q: ["ties"], a: [{ type: "text", content: "" }] },
      { q: ["dots"], a: [{ type: "text", content: "" }] },
      { q: ["tab", "tablature"], a: [{ type: "text", content: "" }] },
      { q: ["minor pattern"], a: [{ type: "text", content: "" }] },
      { q: ["major pattern"], a: [{ type: "text", content: "" }] },
    ];

      // Tambahkan pesan ke layar
  function addMessage(content, sender, type="text") {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);

    if (type === "text") {
      msg.textContent = content;
    } else if (type === "image") {
      msg.innerHTML = `<img src="${content}" alt="gambar pembelajaran">`;
    } else if (type === "pdf") {
      msg.innerHTML = `<a href="${content}" target="_blank">📄 Unduh PDF</a>`;
    }

    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // Hitung kemiripan 2 string
  function similarity(s1, s2) {
    let longer = s1.toLowerCase();
    let shorter = s2.toLowerCase();
    if (longer.length < shorter.length) {
      let temp = longer;
      longer = shorter;
      shorter = temp;
    }
    let longerLength = longer.length;
    if (longerLength === 0) return 1.0;
    return (longerLength - editDistance(longer, shorter)) / longerLength;
  }

  // Levenshtein Distance
  function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    let costs = [];
    for (let i = 0; i <= s1.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= s2.length; j++) {
        if (i === 0) {
          costs[j] = j;
        } else {
          if (j > 0) {
            let newValue = costs[j - 1];
            if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
              newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
            }
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }

  // === Tanya balik jika ambigu ===
  function askUserChoice(matches) {
    addMessage("Saya menemukan beberapa kata kunci. Mau penjelasan tentang yang mana?", "bot");
    speak("Saya menemukan beberapa kata kunci. Mau penjelasan tentang yang mana?");

    matches.forEach(match => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = match.keyword;
      btn.onclick = () => {
        showAnswers(match.answers);
      };
      chatBox.appendChild(btn);
    });

    // Tombol untuk "Semua"
    const allBtn = document.createElement("button");
    allBtn.className = "choice-btn";
    allBtn.style.background = "#28a745";
    allBtn.textContent = "Semua";
    allBtn.onclick = () => {
      matches.forEach(match => {
        showAnswers(match.answers);
      });
    };
    chatBox.appendChild(allBtn);

    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showAnswers(answers) {
    let spokenText = "";
    answers.forEach(part => {
      addMessage(part.content, "bot", part.type);
      if (part.type === "text") spokenText += part.content + " ";
    });
    if (spokenText) speak(spokenText);
  }

  // Cari jawaban
  function botReply(userText) {
    const text = userText.toLowerCase().trim();
    let replies = [];
    let bestMatch = { word: "", score: 0 };
    let matches = []; // simpan banyak keyword yg cocok

    // Cari keyword cocok
    for (let item of knowledgeBase) {
      for (let keyword of item.q) {
        let sim = similarity(text, keyword);
        let regex = new RegExp("\\b" + keyword.toLowerCase() + "\\b", "i");
        if (regex.test(text) || sim >= 0.8) {
          matches.push({ keyword, answers: item.a });
        }
        if (sim > bestMatch.score) {
          bestMatch = { word: keyword, score: sim };
        }
      }
    }

    // Jika lebih dari 1 hasil, tanyakan balik
    if (matches.length > 1) {
      askUserChoice(matches);
      return;
    }

    // Kalau 1 hasil saja → jawab langsung
    if (matches.length === 1) {
      showAnswers(matches[0].answers);
      return;
    }

    // Kalau tidak ada
    replies = [{ type: "text", content: "Maaf, saya belum punya jawaban untuk itu. Coba tanyakan hal lain 😊" }];
    showAnswers(replies);

    // Kalau typo tapi mirip
    if (bestMatch.score < 1 && bestMatch.score >= 0.5) {
      addMessage(`Maksud kamu: "${bestMatch.word}"?`, "bot");
    }
  }

  // Kirim pesan teks
  function sendMessage() {
    const text = userInput.value.trim();
    if (text === "") return;
    addMessage(text, "user");
    userInput.value = "";
    setTimeout(() => botReply(text), 600);
  }

  // Text-to-Speech
  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";
    speechSynthesis.speak(utterance);
  }

  // Voice Recognition
  function startVoice() {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Browser kamu tidak mendukung voice recognition.");
      return;
    }
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "id-ID";
    recognition.start();

    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      addMessage(transcript, "user");
      setTimeout(() => botReply(transcript), 600);
    };
  }

  // Enter untuk kirim
  userInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
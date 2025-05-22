const fretboard = document.getElementById("fretboard");
  const fretLabels = document.getElementById("fretLabels");
  const strings = 6;
  const visibleFrets = 6;
  let startFret = 1;
  let dots = [];

  const chordShapes = {
    C: [
      { string: 2, fret: 1, finger: 1 },
      { string: 4, fret: 2, finger: 2 },
      { string: 5, fret: 3, finger: 3 },
    ],
    Cm: [
      { string: 5, fret: 3, finger: 1 },
      { string: 4, fret: 5, finger: 3 },
      { string: 3, fret: 5, finger: 4 },
      { string: 2, fret: 4, finger: 2 },
      { string: 1, fret: 3, finger: 1 },
    ],
    CM7: [
      { string: 5, fret: 3, finger: 1 },
      { string: 4, fret: 5, finger: 3 },
      { string: 3, fret: 4, finger: 4 },
      { string: 2, fret: 5, finger: 2 },
      { string: 1, fret: 3, finger: 1 },
    ],
    Cm7: [
      { string: 5, fret: 3, finger: 1 },
      { string: 4, fret: 5, finger: 3 },
      { string: 3, fret: 3, finger: 1 },
      { string: 2, fret: 4, finger: 2 },
      { string: 1, fret: 3, finger: 1 },
    ],
    Csus4: [
      { string: 5, fret: 3, finger: 1 },
      { string: 4, fret: 5, finger: 2 },
      { string: 3, fret: 5, finger: 3 },
      { string: 2, fret: 6, finger: 4 },
      { string: 1, fret: 3, finger: 1 },
    ],
    C7sus4: [
      { string: 5, fret: 3, finger: 1 },
      { string: 4, fret: 5, finger: 2 },
      // { string: 3, fret: 5, finger: 3 },
      { string: 2, fret: 6, finger: 4 },
      { string: 1, fret: 3, finger: 1 },
    ],
    C6: [
      // { string: 5, fret: 3, finger: 1 },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 2, finger: 3 },
      { string: 2, fret: 1, finger: 1 },
      { string: 1, fret: 3, finger: 4 },
    ],
    Cm6: [
      // { string: 5, fret: 3, finger: 1 },
      { string: 4, fret: 5, finger: 2 },
      { string: 3, fret: 5, finger: 3 },
      { string: 2, fret: 4, finger: 1 },
      { string: 1, fret: 5, finger: 4 },
    ],
    C7: [
      { string: 5, fret: 3, finger: 3 },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 3, finger: 4 },
      { string: 2, fret: 1, finger: 1 },
      // { string: 1, fret: 3, finger: 1 },
    ],
    C9: [
      { string: 5, fret: 3, finger: 2 },
      { string: 4, fret: 2, finger: 1 },
      { string: 3, fret: 3, finger: 3 },
      { string: 2, fret: 3, finger: 3 },
      { string: 1, fret: 3, finger: 3 },
    ],
    C11: [
      { string: 5, fret: 3, finger: 2 },
      // { string: 4, fret: 2, finger: 1 },
      { string: 3, fret: 3, finger: 3 },
      { string: 2, fret: 3, finger: 4 },
      { string: 1, fret: 1, finger: 1 },
    ],
    C13: [
      { string: 5, fret: 3, finger: 2 },
      { string: 4, fret: 2, finger: 1 },
      { string: 3, fret: 3, finger: 3 },
      { string: 2, fret: 3, finger: 3 },
      { string: 1, fret: 5, finger: 4 },
    ],
    Cmadd9: [
      { string: 5, fret: 3, finger: 2 },
      { string: 4, fret: 1, finger: 1 },
      // { string: 3, fret: 3, finger: 3 },
      { string: 2, fret: 3, finger: 3 },
      // { string: 1, fret: 5, finger: 4 },
    ],
    Cadd9: [
      { string: 5, fret: 4, finger: 2 },
      { string: 4, fret: 3, finger: 1 },
      // { string: 3, fret: 3, finger: 3 },
      { string: 2, fret: 4, finger: 3 },
      // { string: 1, fret: 5, finger: 4 },
    ],
    Cm9: [
      { string: 5, fret: 3, finger: 2 },
      { string: 4, fret: 1, finger: 1 },
      { string: 3, fret: 3, finger: 3 },
      { string: 2, fret: 3, finger: 4 },
      // { string: 1, fret: 5, finger: 4 },
    ],
    CM9: [
      { string: 5, fret: 3, finger: 1 },
      { string: 4, fret: 5, finger: 3 },
      { string: 3, fret: 4, finger: 2 },
      { string: 2, fret: 3, finger: 1 },
      { string: 1, fret: 3, finger: 1 },
    ],
    Caug: [
      { string: 5, fret: 3, finger: 3 },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 1, finger: 1 },
      { string: 2, fret: 1, finger: 1 },
      // { string: 1, fret: 3, finger: 1 },
    ],
    Cdim7: [
      { string: 6, fret: 2, finger: 3 },
      { string: 4, fret: 1, finger: 1 },
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 1, finger: 1 },
      // { string: 1, fret: 3, finger: 1 },
    ],
    C0: [
      { string: 5, fret: 3, finger: 1 },
      { string: 4, fret: 4, finger: 2 },
      { string: 3, fret: 5, finger: 4 },
      { string: 2, fret: 4, finger: 3 },
      // { string: 1, fret: 3, finger: 1 },
    ],
    C5: [
      { string: 5, fret: 3, finger: 1 },
      { string: 4, fret: 5, finger: 3 },
    ],
    Ckresm: [
      { string: 5, fret: 4, finger: 1 },
      { string: 4, fret: 6, finger: 3 },
      { string: 3, fret: 6, finger: 4 },
      { string: 2, fret: 5, finger: 2 },
      { string: 1, fret: 4, finger: 1 },
    ],
    Gm: [
      { string: 6, fret: 3, finger: 1 },
      { string: 5, fret: 5, finger: 3 },
      { string: 4, fret: 5, finger: 4 },
      { string: 3, fret: 3, finger: 1 },
      { string: 2, fret: 3, finger: 1 },
      { string: 1, fret: 3, finger: 1 },
    ],
    G: [
      { string: 1, fret: 3, finger: 3 },
      { string: 5, fret: 2, finger: 2 },
      { string: 6, fret: 3, finger: 1 },
    ],
    Gkresm: [
      { string: 6, fret: 4, finger: 1 },
      { string: 5, fret: 6, finger: 3 },
      { string: 4, fret: 6, finger: 4 },
      { string: 3, fret: 4, finger: 1 },
      { string: 2, fret: 4, finger: 1 },
      { string: 1, fret: 4, finger: 1 },
    ],
    D: [
      { string: 1, fret: 2, finger: 2 },
      { string: 2, fret: 3, finger: 3 },
      { string: 3, fret: 2, finger: 1 },
    ],
    DM7: [
      { string: 1, fret: 3, finger: 4 },
      { string: 2, fret: 3, finger: 3 },
      { string: 3, fret: 2, finger: 1 },
    ],
    Dm: [
      { string: 1, fret: 1, finger: 1 },
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 3, finger: 3 },
    ],
    A: [
      { string: 2, fret: 2, finger: 3 },
      { string: 3, fret: 2, finger: 2 },
      { string: 4, fret: 2, finger: 1 },
    ],
    Am: [
      { string: 2, fret: 1, finger: 1 },
      { string: 3, fret: 2, finger: 3 },
      { string: 4, fret: 2, finger: 2 },
    ],
    Akres: [
      { string: 5, fret: 1, finger: 1 },
      { string: 4, fret: 3, finger: 2 },
      { string: 3, fret: 3, finger: 3 },
      { string: 2, fret: 3, finger: 4 },
      { string: 1, fret: 1, finger: 1 },
    ],
    E: [
      { string: 3, fret: 1, finger: 1 },
      { string: 4, fret: 2, finger: 3 },
      { string: 5, fret: 2, finger: 2 },
    ],
    Em: [
      { string: 4, fret: 2, finger: 3 },
      { string: 5, fret: 2, finger: 2 },
    ],
    F: [
      { string: 1, fret: 1, finger: 1 },
      { string: 2, fret: 1, finger: 1 },
      { string: 3, fret: 2, finger: 2 },
      { string: 4, fret: 3, finger: 3 },
    ],
    Fm: [
      { string: 1, fret: 1, finger: 1 },
      { string: 2, fret: 1, finger: 1 },
      { string: 3, fret: 1, finger: 1 },
      { string: 4, fret: 3, finger: 4 },
      { string: 5, fret: 3, finger: 3 },
      { string: 6, fret: 1, finger: 1 },
    ],
    Fkresm: [
      { string: 6, fret: 2, finger: 1 },
      { string: 5, fret: 4, finger: 3 },
      { string: 4, fret: 4, finger: 4 },
      { string: 3, fret: 2, finger: 1 },
      { string: 2, fret: 2, finger: 1 },
      { string: 1, fret: 2, finger: 1 },
    ],
    B: [
      { string: 1, fret: 2, finger: 1 },
      { string: 5, fret: 2, finger: 1 },
      { string: 4, fret: 4, finger: 2 },
      { string: 3, fret: 4, finger: 3 },
      { string: 2, fret: 4, finger: 4 },
    ],
    Bm: [
      { string: 1, fret: 2, finger: 1 },
      { string: 5, fret: 2, finger: 1 },
      { string: 2, fret: 3, finger: 2 },
      { string: 4, fret: 4, finger: 3 },
      { string: 3, fret: 4, finger: 4 },
    ]
  };

  function buildFretboard() {
    fretboard.innerHTML = "";
    fretLabels.innerHTML = '<div></div>'; // kosongkan kolom pertama

    startFret = parseInt(document.getElementById("startFret").value) || 1;

    // Buat label fret
    for (let f = 0; f < visibleFrets; f++) {
      const label = document.createElement("div");
      label.textContent = `F${startFret + f}`;
      fretLabels.appendChild(label);
    }

    // Buat fretboard
    for (let s = strings; s >= 1; s--) {
      for (let f = 0; f <= visibleFrets; f++) {
        const cell = document.createElement("div");
        if (f === 0) {
          cell.className = "stringLabel";
          cell.textContent = `S${s}`;
        } else {
          cell.className = "cell";
          const fretNum = startFret + f - 1;
          cell.dataset.string = s;
          cell.dataset.fret = fretNum;
          cell.addEventListener("click", () => toggleDot(cell, s, fretNum));
        }
        fretboard.appendChild(cell);
      }
    }
  }

  function toggleDot(cell, string, fret) {
    if (cell.querySelector(".dot")) {
      cell.querySelector(".dot").remove();
      dots = dots.filter(d => !(d.string === string && d.fret === fret));
    } else {
      const dot = document.createElement("div");
      dot.className = "dot";
      dot.textContent = "";
      cell.appendChild(dot);
      dots.push({ string, fret });
    }
  }

  function showChord(name) {
    resetDots();
    chordShapes[name].forEach(pos => {
      const fret = pos.fret + startFret - 1;
      const cell = document.querySelector(`.cell[data-string='${pos.string}'][data-fret='${fret}']`);
      if (cell) {
        const dot = document.createElement("div");
        dot.className = "dot";
        dot.textContent = pos.finger;
        cell.appendChild(dot);
        dots.push({ string: pos.string, fret });
      }
    });
  }

  function playChord() {
    dots.forEach(pos => {
      const audio = new Audio(`audio/string${pos.string}_fret${pos.fret}.mp3`);
      audio.play();
    });
  }

  function resetDots() {
    document.querySelectorAll(".dot").forEach(dot => dot.remove());
    dots = [];
  }

  document.getElementById("chordSelect").addEventListener("change", (e) => {
    showChord(e.target.value);
  });

  document.getElementById("startFret").addEventListener("input", () => {
    buildFretboard();
    showChord(document.getElementById("chordSelect").value);
  });

  // Inisialisasi awal
  buildFretboard();
  showChord("C");
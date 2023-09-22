//<============= bangun datar  ==========>
function customButton(bentuk) {
  document.getElementById("bangunDatarLuas1").textContent = bentuk;
  document.getElementById("bangunDatarLuas2").textContent = bentuk;
  document.getElementById("bangunDatarKeliling1").textContent = bentuk;
  document.getElementById("bangunDatarKeliling2").textContent = bentuk;
  //<=============== tampilan yang muncul ==========>
  const tampilanD = document.getElementById("default");
  const tampilanL = document.getElementById("tampilanLuas");
  const tampilanK = document.getElementById("tampilanKeliling");
  const tombolLuasDiLuas = document.getElementById("LuasDalamLuas");
  const tombolKelilingDiLuas = document.getElementById("KelilingDalamLuas");
  const tombolLuasDiKeliling = document.getElementById("LuasDalamKeliling");
  const tombolKelilingDiKeliling = document.getElementById(
    "KelilingDalamKeliling"
  );
  const tampilanTombolFlexLuas = document.getElementById("flexBoxLuas");
  const tampilanTombolFlexKeliling = document.getElementById("flexBoxKeliling");

  tombolLuasDiLuas.addEventListener("click", function () {
    tampilanL.style.display = "block";
    tampilanK.style.display = "none";
  });
  tombolKelilingDiLuas.addEventListener("click", function () {
    tampilanL.style.display = "none";
    tampilanK.style.display = "block";
    tampilanTombolFlexKeliling.style.display = "block";
  });
  tombolLuasDiKeliling.addEventListener("click", function () {
    tampilanL.style.display = "block";
    tampilanK.style.display = "none";
    tampilanTombolFlexLuas.style.display = "block";
  });
  tombolKelilingDiKeliling.addEventListener("click", function () {
    tampilanL.style.display = "none";
    tampilanK.style.display = "block";
  });
  //<=============== Tampilan ============>
  const inputLuas2 = document.querySelector(".nilaiLuas1");
  const inputLuas3 = document.querySelector(".nilaiLuas2");
  const inputKeliling2 = document.querySelector(".nilaiKeliling1");
  const inputKeliling3 = document.querySelector(".nilaiKeliling2");
  const plusInputLuas = document.querySelector(".plusInputLuas");
  const plusInputKeliling = document.querySelector(".plusInputKeliling");
  const inputLuas1 = document.getElementById("nilaiLuas");
  const inputKeliling1 = document.getElementById("nilaiKeliling");
  const gambarLuas = document.querySelector(".gambarLuas img");
  const gambarKeliling = document.querySelector(".gambarKeliling img");
  const keteranganL1 = document.querySelector(".ketL1");
  const keteranganL2 = document.querySelector(".ketL2");
  const keteranganL3 = document.querySelector(".ketL3");
  const keteranganK1 = document.querySelector(".ketK1");
  const keteranganK2 = document.querySelector(".ketK2");
  const keteranganK3 = document.querySelector(".ketK3");
  const rumusL = document.querySelector(".rumusL");
  const rumusK = document.querySelector(".rumusK");
  const rumusnyaL = document.querySelector(".rumusnyaL");
  const rumusnyaK = document.querySelector(".rumusnyaK");
  //<=========================== tampilan tombol =========================>
  const tombolLuas = document.getElementById("hitungLuas");
  const tombolKeliling = document.getElementById("hitungKeliling");
  const penyimpanL = document.getElementById("penyimpanLuas");
  const penyimpanK = document.getElementById("penyimpanKeliling");
  const hasilL = document.getElementById("hasilLuas");
  const hasilK = document.getElementById("hasilKeliling");
  const tombolHapusLuas = document.getElementById("hapusLuas");
  const tombolHapusKeliling = document.getElementById("hapusKeliling");
  //<=========================== tampilan Persegi =========================>

  if (bentuk === "Persegi") {
    tampilanD.style.display = "none";
    tampilanL.style.display = "block";
    tampilanK.style.display = "none";
    tampilanTombolFlexLuas.style.display = "block";
    inputLuas1.placeholder = "sisi";
    inputKeliling1.placeholder = "sisi";
    inputLuas1.style.display = "block";
    inputKeliling1.style.display = "none";
    plusInputLuas.style.display = "none";
    plusInputKeliling.style.display = "none";
    tombolLuas.style.display = "block";
    tombolKeliling.style.display = "none";
    keteranganL3.style.display = "none";
    gambarLuas.src = "assets/persegi.png";
    gambarLuas.width = 220;
    gambarLuas.height = 220;
    gambarLuas.alt = "persegi";
    rumusL.textContent = "L = S x S";
    keteranganL1.innerHTML = "L = Luas";
    keteranganL2.innerHTML = "S = Sisi";
    rumusnyaL.textContent = " S x S";
    document
      .getElementById("LuasDalamKeliling")
      .addEventListener("click", function () {
        rumusL.textContent = "L = S x S";
        keteranganL1.textContent = "L = Luas";
        keteranganL2.textContent = "S = Sisi";
        inputLuas1.style.display = "block";
        plusInputLuas.style.display = "none";
        plusInputKeliling.style.display = "none";
        rumusnyaL.textContent = " S x S";
        tombolLuas.style.display = "block";
        tombolKeliling.style.display = "none";
      });
    document
      .getElementById("KelilingDalamLuas")
      .addEventListener("click", function () {
        rumusK.textContent = "K = 4 x S";
        keteranganK1.textContent = "K = Keliling";
        keteranganK2.textContent = "S = Sisi";
        rumusnyaK.textContent = " 4 x S";
        keteranganK3.style.display = "none";
        gambarKeliling.src = "assets/persegi.png";
        gambarKeliling.width = 220;
        gambarKeliling.height = 220;
        gambarKeliling.alt = "persegi";
        inputKeliling1.style.display = "block";
        plusInputLuas.style.display = "none";
        plusInputKeliling.style.display = "none";
        tombolLuas.style.display = "none";
        tombolKeliling.style.display = "block";
        penyimpanK.textcontent = "";
      });
    tombolLuas.addEventListener("click", function () {
      const sisiL = parseFloat(inputLuas1.value);
      if (isNaN(sisiL) || sisiL <= 0) {
        alert("Mohon diisi sisinya dengan angka");
        return false;
      } else {
        hasilL.textContent = " " + sisiL * sisiL;
        penyimpanL.textContent = " " + sisiL + " x " + sisiL;
      }
      inputLuas1.value = "";
      return true;
    });
    tombolKeliling.addEventListener("click", function () {
      const sisiK = parseFloat(inputKeliling1.value);
      if (isNaN(sisiK) || sisiK <= 0) {
        alert("Mohon diisi sisinya dengan angka");
      } else {
        hasilK.textContent = " " + 4 * sisiK;
        penyimpanL.textContent = " " + "4" + " x " + sisiK;
      }
      inputKeliling1.value = "";
    });
  } else if (bentuk === "Persegi Panjang") {
    tampilanD.style.display = "none";
    tampilanL.style.display = "block";
    tampilanK.style.display = "none";
    tampilanTombolFlexLuas.style.display = "block";
    keteranganL3.style.display = "block";
    inputLuas1.style.display = "none";
    inputKeliling1.style.display = "none";
    plusInputLuas.style.display = "block";
    plusInputKeliling.style.display = "block";
    inputLuas2.placeholder = "panjang";
    inputLuas3.placeholder = "lebar";
    inputKeliling2.placeholder = "panjang";
    inputKeliling3.placeholder = "lebar";
    tombolLuas.style.display = "block";
    tombolKeliling.style.display = "none";
    gambarLuas.src = "assets/persegi-panjang.png";
    gambarLuas.width = 250;
    gambarLuas.height = 250;
    gambarLuas.alt = "persegiPanjang";
    rumusL.textContent = "L = P x l";
    keteranganL1.textContent = "L = Luas";
    keteranganL2.textContent = "P = Panjang";
    keteranganL3.textContent = "l = Lebar";
    rumusnyaL.textContent = " P x l";
    document
      .getElementById("LuasDalamKeliling")
      .addEventListener("click", function () {
        rumusL.textContent = "L = P x l";
        keteranganL1.textContent = "L = Luas";
        keteranganL2.textContent = "P = Panjang";
        keteranganL3.textContent = "l = Lebar";
        rumusnyaL.textContent = " P x l";
        tombolLuas.style.display = "block";
        tombolKeliling.style.display = "none";
        inputLuas1.style.display = "none";
        plusInputLuas.style.display = "block";
        plusInputKeliling.style.display = "none";
      });
    document
      .getElementById("KelilingDalamLuas")
      .addEventListener("click", function () {
        penyimpanK.textcontent = "";
        inputKeliling1.style.display = "none";
        plusInputKeliling.style.display = "block";
        plusInputLuas.style.display = "none";
        tombolLuas.style.display = "none";
        tombolKeliling.style.display = "block";
        gambarKeliling.src = "assets/persegi-panjang.png";
        gambarKeliling.width = 250;
        gambarKeliling.height = 250;
        gambarKeliling.alt = "persegiPanjang";
        keteranganK3.style.display = "block";
        rumusK.textContent = "K = 2 x (P + l)";
        keteranganK1.textContent = "K = Keliling";
        keteranganK2.textContent = "P = Panjang";
        keteranganK3.textContent = "l = Lebar";
        rumusnyaK.textContent = " 2 x (P + l)";
      });
    tombolLuas.addEventListener("click", function () {
      const hasilLuasPP = inputLuas2.value;
      const hasilLuasPl = inputLuas3.value;
      if (hasilLuasPP > "" && hasilLuasPl <= "") {
        alert("Mohon diisi Lebarnya");
      } else if (hasilLuasPl > "" && hasilLuasPP <= "") {
        alert("Mohon diisi Panjangnya");
      } else if (hasilLuasPP <= 0 && hasilLuasPl <= 0) {
        alert("Mohon diisi panjang dan lebarnya");
      } else {
        hasilL.textContent = " " + hasilLuasPP * hasilLuasPl;
      }
      penyimpanL.textContent = " " + hasilLuasPP + " x " + hasilLuasPl;
      inputLuas2.value = "";
      inputLuas3.value = "";
    });
    tombolKeliling.addEventListener("click", function () {
      const hasilKelilingPP = inputKeliling2.value;
      const hasilKelilingPl = inputKeliling3.value;
      if (hasilKelilingPP > "" && hasilKelilingPl <= "") {
        alert("Mohon diisi Lebarnya");
      } else if (hasilKelilingPl > "" && hasilKelilingPP <= "") {
        alert("Mohon diisi Panjangnya");
      } else if (hasilKelilingPP <= 0 && hasilKelilingPl <= 0) {
        alert("Mohon diisi panjang dan lebarnya");
      } else {
        hasilK.textContent = " " + hasilKelilingPP * hasilKelilingPl;
      }
      penyimpanL.textContent = " " + hasilKelilingPP + " x " + hasilKelilingPl;
      inputKeliling2.value = "";
      inputKeliling3.value = "";
    });
  } else if (bentuk === "Segitiga") {
    tampilanD.style.display = "none";
    tampilanL.style.display = "block";
    tampilanK.style.display = "none";
    tampilanTombolFlexLuas.style.display = "block";
    keteranganL3.style.display = "block";
    inputLuas1.style.display = "none";
    inputKeliling1.style.display = "none";
    plusInputLuas.style.display = "block";
    plusInputKeliling.style.display = "block";
    inputLuas2.placeholder = "panjang";
    inputLuas3.placeholder = "lebar";
    inputKeliling2.placeholder = "panjang";
    inputKeliling3.placeholder = "lebar";
    tombolLuas.style.display = "block";
    tombolKeliling.style.display = "none";
    gambarLuas.src = "assets/segitiga.png";
    gambarLuas.width = 250;
    gambarLuas.height = 250;
    gambarLuas.alt = "segitiga";
    rumusL.textContent = "L = P x l";
    keteranganL1.textContent = "L = Luas";
    keteranganL2.textContent = "P = Panjang";
    keteranganL3.textContent = "l = Lebar";
    rumusnyaL.textContent = " P x l";
    document
      .getElementById("LuasDalamKeliling")
      .addEventListener("click", function () {
        rumusL.textContent = "L = P x l";
        keteranganL1.textContent = "L = Luas";
        keteranganL2.textContent = "P = Panjang";
        keteranganL3.textContent = "l = Lebar";
        rumusnyaL.textContent = " P x l";
        tombolLuas.style.display = "block";
        tombolKeliling.style.display = "none";
        inputLuas1.style.display = "none";
        plusInputLuas.style.display = "block";
        plusInputKeliling.style.display = "none";
      });
    document
      .getElementById("KelilingDalamLuas")
      .addEventListener("click", function () {
        penyimpanK.textcontent = "";
        inputKeliling1.style.display = "none";
        plusInputKeliling.style.display = "block";
        plusInputLuas.style.display = "none";
        tombolLuas.style.display = "none";
        tombolKeliling.style.display = "block";
        gambarKeliling.src = "assets/segitiga.png";
        gambarKeliling.width = 250;
        gambarKeliling.height = 250;
        gambarKeliling.alt = "segitiga";
        keteranganK3.style.display = "block";
        rumusK.textContent = "K = 2 x (P + l)";
        keteranganK1.textContent = "K = Keliling";
        keteranganK2.textContent = "P = Panjang";
        keteranganK3.textContent = "l = Lebar";
        rumusnyaK.textContent = " 2 x (P + l)";
      });
    tombolLuas.addEventListener("click", function () {
      const hasilLuasPP = inputLuas2.value;
      const hasilLuasPl = inputLuas3.value;
      if (hasilLuasPP > "" && hasilLuasPl <= "") {
        alert("Mohon diisi Lebarnya");
      } else if (hasilLuasPl > "" && hasilLuasPP <= "") {
        alert("Mohon diisi Panjangnya");
      } else if (hasilLuasPP <= 0 && hasilLuasPl <= 0) {
        alert("Mohon diisi panjang dan lebarnya");
      } else {
        hasilL.textContent = " " + hasilLuasPP * hasilLuasPl;
      }
      penyimpanL.textContent = " " + hasilLuasPP + " x " + hasilLuasPl;
      inputLuas2.value = "";
      inputLuas3.value = "";
    });
    tombolKeliling.addEventListener("click", function () {
      const hasilKelilingPP = inputKeliling2.value;
      const hasilKelilingPl = inputKeliling3.value;
      if (hasilKelilingPP > "" && hasilKelilingPl <= "") {
        alert("Mohon diisi Lebarnya");
      } else if (hasilKelilingPl > "" && hasilKelilingPP <= "") {
        alert("Mohon diisi Panjangnya");
      } else if (hasilKelilingPP <= 0 && hasilKelilingPl <= 0) {
        alert("Mohon diisi panjang dan lebarnya");
      } else {
        hasilK.textContent = " " + hasilKelilingPP * hasilKelilingPl;
      }
      penyimpanL.textContent = " " + hasilKelilingPP + " x " + hasilKelilingPl;
      inputKeliling2.value = "";
      inputKeliling3.value = "";
    });
  } else if (bentuk === "Trapesium") {
    tampilanD.style.display = "none";
    tampilanL.style.display = "block";
    tampilanK.style.display = "none";
    tampilanTombolFlexLuas.style.display = "block";
    keteranganL3.style.display = "block";
    inputLuas1.style.display = "none";
    inputKeliling1.style.display = "none";
    plusInputLuas.style.display = "block";
    plusInputKeliling.style.display = "block";
    inputLuas2.placeholder = "panjang";
    inputLuas3.placeholder = "lebar";
    inputKeliling2.placeholder = "panjang";
    inputKeliling3.placeholder = "lebar";
    tombolLuas.style.display = "block";
    tombolKeliling.style.display = "none";
    gambarLuas.src = "assets/trapesium.png";
    gambarLuas.width = 250;
    gambarLuas.height = 250;
    gambarLuas.alt = "trapesium";
    rumusL.textContent = "L = P x l";
    keteranganL1.textContent = "L = Luas";
    keteranganL2.textContent = "P = Panjang";
    keteranganL3.textContent = "l = Lebar";
    rumusnyaL.textContent = " P x l";
    document
      .getElementById("LuasDalamKeliling")
      .addEventListener("click", function () {
        rumusL.textContent = "L = P x l";
        keteranganL1.textContent = "L = Luas";
        keteranganL2.textContent = "P = Panjang";
        keteranganL3.textContent = "l = Lebar";
        rumusnyaL.textContent = " P x l";
        tombolLuas.style.display = "block";
        tombolKeliling.style.display = "none";
        inputLuas1.style.display = "none";
        plusInputLuas.style.display = "block";
        plusInputKeliling.style.display = "none";
      });
    document
      .getElementById("KelilingDalamLuas")
      .addEventListener("click", function () {
        penyimpanK.textcontent = "";
        inputKeliling1.style.display = "none";
        plusInputKeliling.style.display = "block";
        plusInputLuas.style.display = "none";
        tombolLuas.style.display = "none";
        tombolKeliling.style.display = "block";
        gambarKeliling.src = "assets/trapesium.png";
        gambarKeliling.width = 250;
        gambarKeliling.height = 250;
        gambarKeliling.alt = "trapesium";
        keteranganK3.style.display = "block";
        rumusK.textContent = "K = 2 x (P + l)";
        keteranganK1.textContent = "K = Keliling";
        keteranganK2.textContent = "P = Panjang";
        keteranganK3.textContent = "l = Lebar";
        rumusnyaK.textContent = " 2 x (P + l)";
      });
    tombolLuas.addEventListener("click", function () {
      const hasilLuasPP = inputLuas2.value;
      const hasilLuasPl = inputLuas3.value;
      if (hasilLuasPP > "" && hasilLuasPl <= "") {
        alert("Mohon diisi Lebarnya");
      } else if (hasilLuasPl > "" && hasilLuasPP <= "") {
        alert("Mohon diisi Panjangnya");
      } else if (hasilLuasPP <= 0 && hasilLuasPl <= 0) {
        alert("Mohon diisi panjang dan lebarnya");
      } else {
        hasilL.textContent = " " + hasilLuasPP * hasilLuasPl;
      }
      penyimpanL.textContent = " " + hasilLuasPP + " x " + hasilLuasPl;
      inputLuas2.value = "";
      inputLuas3.value = "";
    });
    tombolKeliling.addEventListener("click", function () {
      const hasilKelilingPP = inputKeliling2.value;
      const hasilKelilingPl = inputKeliling3.value;
      if (hasilKelilingPP > "" && hasilKelilingPl <= "") {
        alert("Mohon diisi Lebarnya");
      } else if (hasilKelilingPl > "" && hasilKelilingPP <= "") {
        alert("Mohon diisi Panjangnya");
      } else if (hasilKelilingPP <= 0 && hasilKelilingPl <= 0) {
        alert("Mohon diisi panjang dan lebarnya");
      } else {
        hasilK.textContent = " " + hasilKelilingPP * hasilKelilingPl;
      }
      penyimpanL.textContent = " " + hasilKelilingPP + " x " + hasilKelilingPl;
      inputKeliling2.value = "";
      inputKeliling3.value = "";
    });
  } else if (bentuk === "Jajar Genjang") {
    tampilanD.style.display = "none";
    tampilanL.style.display = "block";
    tampilanK.style.display = "none";
    tampilanTombolFlexLuas.style.display = "block";
    keteranganL3.style.display = "block";
    inputLuas1.style.display = "none";
    inputKeliling1.style.display = "none";
    plusInputLuas.style.display = "block";
    plusInputKeliling.style.display = "block";
    inputLuas2.placeholder = "panjang";
    inputLuas3.placeholder = "lebar";
    inputKeliling2.placeholder = "panjang";
    inputKeliling3.placeholder = "lebar";
    tombolLuas.style.display = "block";
    tombolKeliling.style.display = "none";
    gambarLuas.src = "assets/jajar-genjang.png";
    gambarLuas.width = 250;
    gambarLuas.height = 250;
    gambarLuas.alt = "jajarGenjang";
    rumusL.textContent = "L = P x l";
    keteranganL1.textContent = "L = Luas";
    keteranganL2.textContent = "P = Panjang";
    keteranganL3.textContent = "l = Lebar";
    rumusnyaL.textContent = " P x l";
    document
      .getElementById("LuasDalamKeliling")
      .addEventListener("click", function () {
        rumusL.textContent = "L = P x l";
        keteranganL1.textContent = "L = Luas";
        keteranganL2.textContent = "P = Panjang";
        keteranganL3.textContent = "l = Lebar";
        rumusnyaL.textContent = " P x l";
        tombolLuas.style.display = "block";
        tombolKeliling.style.display = "none";
        inputLuas1.style.display = "none";
        plusInputLuas.style.display = "block";
        plusInputKeliling.style.display = "none";
      });
    document
      .getElementById("KelilingDalamLuas")
      .addEventListener("click", function () {
        penyimpanK.textcontent = "";
        inputKeliling1.style.display = "none";
        plusInputKeliling.style.display = "block";
        plusInputLuas.style.display = "none";
        tombolLuas.style.display = "none";
        tombolKeliling.style.display = "block";
        gambarKeliling.src = "assets/jajar-genjang.png";
        gambarKeliling.width = 250;
        gambarKeliling.height = 250;
        gambarKeliling.alt = "jajarGenjang";
        keteranganK3.style.display = "block";
        rumusK.textContent = "K = 2 x (P + l)";
        keteranganK1.textContent = "K = Keliling";
        keteranganK2.textContent = "P = Panjang";
        keteranganK3.textContent = "l = Lebar";
        rumusnyaK.textContent = " 2 x (P + l)";
      });
    tombolLuas.addEventListener("click", function () {
      const hasilLuasPP = inputLuas2.value;
      const hasilLuasPl = inputLuas3.value;
      if (hasilLuasPP > "" && hasilLuasPl <= "") {
        alert("Mohon diisi Lebarnya");
      } else if (hasilLuasPl > "" && hasilLuasPP <= "") {
        alert("Mohon diisi Panjangnya");
      } else if (hasilLuasPP <= 0 && hasilLuasPl <= 0) {
        alert("Mohon diisi panjang dan lebarnya");
      } else {
        hasilL.textContent = " " + hasilLuasPP * hasilLuasPl;
      }
      penyimpanL.textContent = " " + hasilLuasPP + " x " + hasilLuasPl;
      inputLuas2.value = "";
      inputLuas3.value = "";
    });
    tombolKeliling.addEventListener("click", function () {
      const hasilKelilingPP = inputKeliling2.value;
      const hasilKelilingPl = inputKeliling3.value;
      if (hasilKelilingPP > "" && hasilKelilingPl <= "") {
        alert("Mohon diisi Lebarnya");
      } else if (hasilKelilingPl > "" && hasilKelilingPP <= "") {
        alert("Mohon diisi Panjangnya");
      } else if (hasilKelilingPP <= 0 && hasilKelilingPl <= 0) {
        alert("Mohon diisi panjang dan lebarnya");
      } else {
        hasilK.textContent = " " + hasilKelilingPP * hasilKelilingPl;
      }
      penyimpanL.textContent = " " + hasilKelilingPP + " x " + hasilKelilingPl;
      inputKeliling2.value = "";
      inputKeliling3.value = "";
    });
  } else if (bentuk === "Belah Ketupat") {
    tampilanD.style.display = "none";
    tampilanL.style.display = "block";
    tampilanK.style.display = "none";
    tampilanTombolFlexLuas.style.display = "block";
    keteranganL3.style.display = "block";
    inputLuas1.style.display = "none";
    inputKeliling1.style.display = "none";
    plusInputLuas.style.display = "block";
    plusInputKeliling.style.display = "block";
    inputLuas2.placeholder = "panjang";
    inputLuas3.placeholder = "lebar";
    inputKeliling2.placeholder = "panjang";
    inputKeliling3.placeholder = "lebar";
    tombolLuas.style.display = "block";
    tombolKeliling.style.display = "none";
    gambarLuas.src = "assets/belah-ketupat.png";
    gambarLuas.width = 250;
    gambarLuas.height = 250;
    gambarLuas.alt = "belahKetupat";
    rumusL.textContent = "L = P x l";
    keteranganL1.textContent = "L = Luas";
    keteranganL2.textContent = "P = Panjang";
    keteranganL3.textContent = "l = Lebar";
    rumusnyaL.textContent = " P x l";
    document
      .getElementById("LuasDalamKeliling")
      .addEventListener("click", function () {
        rumusL.textContent = "L = P x l";
        keteranganL1.textContent = "L = Luas";
        keteranganL2.textContent = "P = Panjang";
        keteranganL3.textContent = "l = Lebar";
        rumusnyaL.textContent = " P x l";
        tombolLuas.style.display = "block";
        tombolKeliling.style.display = "none";
        inputLuas1.style.display = "none";
        plusInputLuas.style.display = "block";
        plusInputKeliling.style.display = "none";
      });
    document
      .getElementById("KelilingDalamLuas")
      .addEventListener("click", function () {
        penyimpanK.textcontent = "";
        inputKeliling1.style.display = "none";
        plusInputKeliling.style.display = "block";
        plusInputLuas.style.display = "none";
        tombolLuas.style.display = "none";
        tombolKeliling.style.display = "block";
        gambarKeliling.src = "assets/belah-ketupat.png";
        gambarKeliling.width = 250;
        gambarKeliling.height = 250;
        gambarKeliling.alt = "belahKetupat";
        keteranganK3.style.display = "block";
        rumusK.textContent = "K = 2 x (P + l)";
        keteranganK1.textContent = "K = Keliling";
        keteranganK2.textContent = "P = Panjang";
        keteranganK3.textContent = "l = Lebar";
        rumusnyaK.textContent = " 2 x (P + l)";
      });
    tombolLuas.addEventListener("click", function () {
      const hasilLuasPP = inputLuas2.value;
      const hasilLuasPl = inputLuas3.value;
      if (hasilLuasPP > "" && hasilLuasPl <= "") {
        alert("Mohon diisi Lebarnya");
      } else if (hasilLuasPl > "" && hasilLuasPP <= "") {
        alert("Mohon diisi Panjangnya");
      } else if (hasilLuasPP <= 0 && hasilLuasPl <= 0) {
        alert("Mohon diisi panjang dan lebarnya");
      } else {
        hasilL.textContent = " " + hasilLuasPP * hasilLuasPl;
      }
      penyimpanL.textContent = " " + hasilLuasPP + " x " + hasilLuasPl;
      inputLuas2.value = "";
      inputLuas3.value = "";
    });
    tombolKeliling.addEventListener("click", function () {
      const hasilKelilingPP = inputKeliling2.value;
      const hasilKelilingPl = inputKeliling3.value;
      if (hasilKelilingPP > "" && hasilKelilingPl <= "") {
        alert("Mohon diisi Lebarnya");
      } else if (hasilKelilingPl > "" && hasilKelilingPP <= "") {
        alert("Mohon diisi Panjangnya");
      } else if (hasilKelilingPP <= 0 && hasilKelilingPl <= 0) {
        alert("Mohon diisi panjang dan lebarnya");
      } else {
        hasilK.textContent = " " + hasilKelilingPP * hasilKelilingPl;
      }
      penyimpanL.textContent = " " + hasilKelilingPP + " x " + hasilKelilingPl;
      inputKeliling2.value = "";
      inputKeliling3.value = "";
    });
  } else if (bentuk === "Layang-Layang") {
    tampilanD.style.display = "none";
    tampilanL.style.display = "block";
    tampilanK.style.display = "none";
    tampilanTombolFlexLuas.style.display = "block";
    keteranganL3.style.display = "block";
    inputLuas1.style.display = "none";
    inputKeliling1.style.display = "none";
    plusInputLuas.style.display = "block";
    plusInputKeliling.style.display = "block";
    inputLuas2.placeholder = "panjang";
    inputLuas3.placeholder = "lebar";
    inputKeliling2.placeholder = "panjang";
    inputKeliling3.placeholder = "lebar";
    tombolLuas.style.display = "block";
    tombolKeliling.style.display = "none";
    gambarLuas.src = "assets/layang-layang.png";
    gambarLuas.width = 250;
    gambarLuas.height = 250;
    gambarLuas.alt = "layangLayang";
    rumusL.textContent = "L = P x l";
    keteranganL1.textContent = "L = Luas";
    keteranganL2.textContent = "P = Panjang";
    keteranganL3.textContent = "l = Lebar";
    rumusnyaL.textContent = " P x l";
    document
      .getElementById("LuasDalamKeliling")
      .addEventListener("click", function () {
        rumusL.textContent = "L = P x l";
        keteranganL1.textContent = "L = Luas";
        keteranganL2.textContent = "P = Panjang";
        keteranganL3.textContent = "l = Lebar";
        rumusnyaL.textContent = " P x l";
        tombolLuas.style.display = "block";
        tombolKeliling.style.display = "none";
        inputLuas1.style.display = "none";
        plusInputLuas.style.display = "block";
        plusInputKeliling.style.display = "none";
      });
    document
      .getElementById("KelilingDalamLuas")
      .addEventListener("click", function () {
        penyimpanK.textcontent = "";
        inputKeliling1.style.display = "none";
        plusInputKeliling.style.display = "block";
        plusInputLuas.style.display = "none";
        tombolLuas.style.display = "none";
        tombolKeliling.style.display = "block";
        gambarKeliling.src = "assets/layang-layang.png";
        gambarKeliling.width = 250;
        gambarKeliling.height = 250;
        gambarKeliling.alt = "layangLayang";
        keteranganK3.style.display = "block";
        rumusK.textContent = "K = 2 x (P + l)";
        keteranganK1.textContent = "K = Keliling";
        keteranganK2.textContent = "P = Panjang";
        keteranganK3.textContent = "l = Lebar";
        rumusnyaK.textContent = " 2 x (P + l)";
      });
    tombolLuas.addEventListener("click", function () {
      const hasilLuasPP = inputLuas2.value;
      const hasilLuasPl = inputLuas3.value;
      if (hasilLuasPP > "" && hasilLuasPl <= "") {
        alert("Mohon diisi Lebarnya");
      } else if (hasilLuasPl > "" && hasilLuasPP <= "") {
        alert("Mohon diisi Panjangnya");
      } else if (hasilLuasPP <= 0 && hasilLuasPl <= 0) {
        alert("Mohon diisi panjang dan lebarnya");
      } else {
        hasilL.textContent = " " + hasilLuasPP * hasilLuasPl;
      }
      penyimpanL.textContent = " " + hasilLuasPP + " x " + hasilLuasPl;
      inputLuas2.value = "";
      inputLuas3.value = "";
    });
    tombolKeliling.addEventListener("click", function () {
      const hasilKelilingPP = inputKeliling2.value;
      const hasilKelilingPl = inputKeliling3.value;
      if (hasilKelilingPP > "" && hasilKelilingPl <= "") {
        alert("Mohon diisi Lebarnya");
      } else if (hasilKelilingPl > "" && hasilKelilingPP <= "") {
        alert("Mohon diisi Panjangnya");
      } else if (hasilKelilingPP <= 0 && hasilKelilingPl <= 0) {
        alert("Mohon diisi panjang dan lebarnya");
      } else {
        hasilK.textContent = " " + hasilKelilingPP * hasilKelilingPl;
      }
      penyimpanL.textContent = " " + hasilKelilingPP + " x " + hasilKelilingPl;
      inputKeliling2.value = "";
      inputKeliling3.value = "";
    });
  } else if (bentuk === "Lingkaran") {
    tampilanD.style.display = "none";
    tampilanL.style.display = "block";
    tampilanK.style.display = "none";
    tampilanTombolFlexLuas.style.display = "block";
    keteranganL3.style.display = "block";
    inputLuas1.style.display = "none";
    inputKeliling1.style.display = "none";
    plusInputLuas.style.display = "block";
    plusInputKeliling.style.display = "block";
    inputLuas2.placeholder = "panjang";
    inputLuas3.placeholder = "lebar";
    inputKeliling2.placeholder = "panjang";
    inputKeliling3.placeholder = "lebar";
    tombolLuas.style.display = "block";
    tombolKeliling.style.display = "none";
    gambarLuas.src = "assets/lingkaran.png";
    gambarLuas.width = 250;
    gambarLuas.height = 250;
    gambarLuas.alt = "lingkaran";
    rumusL.textContent = "L = P x l";
    keteranganL1.textContent = "L = Luas";
    keteranganL2.textContent = "P = Panjang";
    keteranganL3.textContent = "l = Lebar";
    rumusnyaL.textContent = " P x l";
    document
      .getElementById("LuasDalamKeliling")
      .addEventListener("click", function () {
        rumusL.textContent = "L = P x l";
        keteranganL1.textContent = "L = Luas";
        keteranganL2.textContent = "P = Panjang";
        keteranganL3.textContent = "l = Lebar";
        rumusnyaL.textContent = " P x l";
        tombolLuas.style.display = "block";
        tombolKeliling.style.display = "none";
        inputLuas1.style.display = "none";
        plusInputLuas.style.display = "block";
        plusInputKeliling.style.display = "none";
      });
    document
      .getElementById("KelilingDalamLuas")
      .addEventListener("click", function () {
        penyimpanK.textcontent = "";
        inputKeliling1.style.display = "none";
        plusInputKeliling.style.display = "block";
        plusInputLuas.style.display = "none";
        tombolLuas.style.display = "none";
        tombolKeliling.style.display = "block";
        gambarKeliling.src = "assets/lingkaran.png";
        gambarKeliling.width = 250;
        gambarKeliling.height = 250;
        gambarKeliling.alt = "lingkaran";
        keteranganK3.style.display = "block";
        rumusK.textContent = "K = 2 x (P + l)";
        keteranganK1.textContent = "K = Keliling";
        keteranganK2.textContent = "P = Panjang";
        keteranganK3.textContent = "l = Lebar";
        rumusnyaK.textContent = " 2 x (P + l)";
      });
    tombolLuas.addEventListener("click", function () {
      const hasilLuasPP = inputLuas2.value;
      const hasilLuasPl = inputLuas3.value;
      if (hasilLuasPP > "" && hasilLuasPl <= "") {
        alert("Mohon diisi Lebarnya");
      } else if (hasilLuasPl > "" && hasilLuasPP <= "") {
        alert("Mohon diisi Panjangnya");
      } else if (hasilLuasPP <= 0 && hasilLuasPl <= 0) {
        alert("Mohon diisi panjang dan lebarnya");
      } else {
        hasilL.textContent = " " + hasilLuasPP * hasilLuasPl;
      }
      penyimpanL.textContent = " " + hasilLuasPP + " x " + hasilLuasPl;
      inputLuas2.value = "";
      inputLuas3.value = "";
    });
    tombolKeliling.addEventListener("click", function () {
      const hasilKelilingPP = inputKeliling2.value;
      const hasilKelilingPl = inputKeliling3.value;
      if (hasilKelilingPP > "" && hasilKelilingPl <= "") {
        alert("Mohon diisi Lebarnya");
      } else if (hasilKelilingPl > "" && hasilKelilingPP <= "") {
        alert("Mohon diisi Panjangnya");
      } else if (hasilKelilingPP <= 0 && hasilKelilingPl <= 0) {
        alert("Mohon diisi panjang dan lebarnya");
      } else {
        hasilK.textContent = " " + hasilKelilingPP * hasilKelilingPl;
      }
      penyimpanL.textContent = " " + hasilKelilingPP + " x " + hasilKelilingPl;
      inputKeliling2.value = "";
      inputKeliling3.value = "";
    });
  }

  tombolHapusLuas.addEventListener("click", function () {
    hasilL.textContent = "";
    penyimpanL.textContent = "";
  });
  tombolHapusKeliling.addEventListener("click", function () {
    hasilL.textContent = "";
    penyimpanL.textContent = "";
  });
}

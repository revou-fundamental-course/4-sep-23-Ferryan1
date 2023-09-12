//<===== bangun datar di Luas =====>

function customButton(bentuk) {
  document.getElementById("bangunDatarLuas1").textContent = bentuk;
  document.getElementById("bangunDatarLuas2").textContent = bentuk;
  document.getElementById("bangunDatarKeliling1").textContent = bentuk;
  document.getElementById("bangunDatarKeliling2").textContent = bentuk;
}

//<===== tampilan yang muncul =====>

const tampilanD = document.getElementById("default");
const tampilanL = document.getElementById("tampilanLuas");
const tampilanK = document.getElementById("tampilanKeliling");
const tombolMuncul = document.getElementById("persegi");
const tombolLuasDiLuas = document.getElementById("LuasDalamLuas");
const tombolKelilingDiLuas = document.getElementById("KelilingDalamLuas");
const tombolLuasDiKeliling = document.getElementById("LuasDalamKeliling");
const tombolKelilingDiKeliling = document.getElementById(
  "KelilingDalamKeliling"
);
const tampilanTombolFlexLuas = document.getElementById("flexBoxLuas");
const tampilanTombolFlexKeliling = document.getElementById("flexBoxKeliling");

tombolMuncul.addEventListener("click", function () {
  tampilanD.style.display = "none";
  tampilanL.style.display = "block";
  tampilanK.style.display = "none";
  tampilanTombolFlexLuas.style.display = "block";
});

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

//<===== tampilan hasil luas =====>

const hasilL = document.getElementById("hasilLuas");
const tombolL = document.getElementById("hitungLuas");
const nilaiL = document.getElementById("nilaiLuas");
const penyimpanL = document.getElementById("penyimpanLuas");
const hapusL = document.getElementById("hapusLuas");

tombolL.addEventListener("click", function () {
  const hasilLuas = nilaiL.value;
  hasilL.textContent = hasilLuas * hasilLuas;
  penyimpanL.textContent = hasilLuas + " x " + hasilLuas;
});

hapusL.addEventListener("click", function () {
  hasilL.textContent = "";
  penyimpanL.textContent = "" + " x " + "";
});

//<===== tampilan hasil luas =====>

const nilaiK = document.getElementById("nilaiKeliling");
const tombolK = document.getElementById("hitungKeliling");
const penyimpanK = document.getElementById("penyimpanKeliling");
const hasilK = document.getElementById("hasilKeliling");
const hapusK = document.getElementById("hapusKeliling");

tombolK.addEventListener("click", function () {
  const hasilKeliling = nilaiK.value;
  const dikali = 4;
  hasilK.textContent = dikali * hasilKeliling;
  penyimpanK.textContent = "x " + hasilKeliling;
});

hapusK.addEventListener("click", function () {
  hasilK.textContent = "";
  penyimpanK.textContent = "x " + "";
});

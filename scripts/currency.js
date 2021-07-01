var usd = document.getElementById("usd");
var euro = document.getElementById("euro");
var bdt = document.getElementById("bdt");

usd.addEventListener("input", changeValusd);
euro.addEventListener("input", changeValeuro);
bdt.addEventListener("input", changeValbdt);

function nullVal() {
    usd.value = "";
    euro.value = "";
    bdt.value = "";
}

function changeValusd() {
  var usdVal = usd.value;

  if (usdVal === "") {
    nullVal();
    return;
  }

  var euroCon = Number(usdVal) * 0.84;
  var bdtCon = Number(usdVal) * 84.87;
  euro.value = euroCon;
  bdt.value = bdtCon;
}

function changeValeuro() {
  var euroVal = euro.value;

  if (euroVal === "") {
    nullVal();
    return;
  }

  var usdCon = Number(euroVal) * 1.19;
  var bdtCon = Number(euroVal) * 100.65;
  usd.value = usdCon;
  bdt.value = bdtCon;
}

function changeValbdt() {
  var bdtVal = bdt.value;

  if(bdtVal === "") {
    nullVal();
    return;
  }

  var usdCon = Number(bdtVal) * 0.012;
  var euroCon = Number(bdtVal) * 0.0099;
  usd.value = usdCon;
  euro.value = euroCon;
}

var div = 360 / 6;
var radius = 150;
var parentdiv = document.getElementById("parentdiv");
var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2); //assumes parent is square
var offsetToChildCenter = 20;
var totalOffset = offsetToParentCenter - offsetToChildCenter;
for (var i = 1; i <= 6; ++i) {
  var childdiv = document.createElement("div");
  childdiv.className = "div2";
  childdiv.style.position = "absolute";
  var y = Math.sin(div * i * (Math.PI / 180)) * radius;
  var x = Math.cos(div * i * (Math.PI / 180)) * radius;
  childdiv.style.top = (y + totalOffset).toString() + "px";
  childdiv.style.left = (x + totalOffset).toString() + "px";
  parentdiv.appendChild(childdiv);
}

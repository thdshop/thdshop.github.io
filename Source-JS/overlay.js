// Troll
var icons = document.querySelectorAll("#icons a");
var overlay = document.querySelector(".overlay");
var overlay2 = document.querySelector(".overlay2");
var exit = document.querySelectorAll(".exit");

icons[0].onclick = () => {
  overlay.style.visibility = "visible";
  overlay.style.transform = "translateX(0)";
  exit[0].onclick = () => {
    overlay.style.transform = "translateX(100%)";
    overlay.style.visibility = "hidden";
  };
};
icons[1].onclick = () => {
  overlay2.style.visibility = "visible";
  overlay2.style.transform = "translateX(0)";
  exit[1].onclick = () => {
    overlay2.style.transform = "translateX(100%)";
    overlay2.style.visibility = "hidden";
  };
};
icons[2].onclick = () => {
  swal("Ú òa", "Không có gì đâu nhé :>");
};

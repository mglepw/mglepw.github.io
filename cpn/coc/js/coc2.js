// cpn_coc
var coc = document.getElementById("coc");
coc.setAttribute("id", "coc");
var coc_img1 = document.createElement("img");
var coc_img2 = document.createElement("img");
var coc_img3 = document.createElement("img");
var coc_img4 = document.createElement("img");
var coc_img5 = document.createElement("img");

var object_coc = new Mgl_acpn();
object_coc.setEffect("fade, scrollRight");
object_coc.setLength(226, 226);
object_coc.setNodeUp(coc);
object_coc.append_elem(coc_img1, "http://mglepw.github.io/cpn/coc/img/tw1.png");
object_coc.append_elem(coc_img2, "http://mglepw.github.io/cpn/coc/img/tw2.png");
object_coc.append_elem(coc_img3, "http://mglepw.github.io/cpn/coc/img/tw3.png");
object_coc.append_elem(coc_img4, "http://mglepw.github.io/cpn/coc/img/tw4.png");
object_coc.append_elem(coc_img5, "http://mglepw.github.io/cpn/coc/img/tw5.png");
object_coc.createGUI();
object_coc.play();

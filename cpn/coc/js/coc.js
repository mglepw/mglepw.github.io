// cpn_coc
var coc = document.getElementById("coc");
var coc_img1 = document.createElement("img");
var coc_img2 = document.createElement("img");
var object_coc = new Mgl_acpn();
object_coc.setLength(266, 266);
object_coc.append_list_elem([coc_img1, coc_img2]);
object_coc.append_list_img(["http://mglepw.github.io/cpn/coc/1.png", "http://mglepw.github.io/cpn/coc/2.png"]);
object_coc.setNodeUp(coc);

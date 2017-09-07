// Variant- 07/09/2017
var vrt = document.getElementById("vrt");
var object_vrt = new Mgl_acpn2();
object_vrt.setEffect("scrollLeft");
object_vrt.setLength(226, 226);
object_vrt.setNodeUp(vrt);
object_vrt.append_elem("http://mglepw.github.io/cpn/vrt/img/vrt1.png");
object_vrt.append_elem("http://mglepw.github.io/cpn/vrt/img/vrt2.png");
object_vrt.append_elem("http://mglepw.github.io/cpn/vrt/img/vrt3.png");
object_vrt.createGUI();
object_vrt.setTimeout(6400);
object_vrt.play();

/*
* Farmácia Santa Branca
* Anuncio feito em 13/09/2017
*/
var sb = document.getElementById("sb");
var object_sb = new Mgl_acpn2();
object_sb.setEffect("turnLeft");
object_sb.setLength(226, 226);
object_sb.setNodeUp(sb);
object_sb.append_elem("http://mglepw.github.io/cpn/sb/img/sb1.png");
object_sb.append_elem("http://mglepw.github.io/cpn/sb/img/sb2.png");
object_sb.append_elem("http://mglepw.github.io/cpn/sb/img/sb3.png");
object_sb.createGUI();
object_sb.play();

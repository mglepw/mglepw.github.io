// plasfran
var plasfran = document.getElementById("plasfran");
var object_plasfran = new Mgl_acpn2();
object_plasfran.setEffect("fade");
object_plasfran.setLength(226, 226);
object_plasfran.setNodeUp(plasfran);
object_plasfran.append_elem("http://mglepw.github.io/cpn/pl/img/pl1.png");
object_plasfran.append_elem("http://mglepw.github.io/cpn/pl/img/pl2.png");
object_plasfran.createGUI();
object_plasfran.setTimeout(6400);
object_plasfran.play();

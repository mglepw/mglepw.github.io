// radio
var radio = document.getElementById("radio");
var object_radio = new Mgl_acpn2();
object_radio.setEffect("fade");
object_radio.setLength(226, 226);
object_radio.setNodeUp(radio);
object_radio.append_elem("http://mglepw.github.io/cpn/radio/img/bdl.png");
object_radio.append_elem("http://mglepw.github.io/cpn/radio/img/ccm.png");
object_radio.createGUI();
object_radio.setTimeout(9400);
object_radio.play();

var btcr = document.getElementById("btcr");
var btcr_img1 = document.createElement("img");
var btcr_img2 = document.createElement("img");
var btcr_img3 = document.createElement("img");
var btcr_img4 = document.createElement("img");

var object_btrc = new Mgl_acpn();
object_btrc.setEffect("fade");
object_btrc.setLength(226, 226);
object_btrc.setNodeUp(btcr);
object_btrc.append_elem(btcr_img1, "http://mglepw.github.io/cpn/btcr/img/img1.png");
object_btrc.append_elem(btcr_img2, "http://mglepw.github.io/cpn/btcr/img/img2.png");
object_btrc.append_elem(btcr_img3, "http://mglepw.github.io/cpn/btcr/img/img3.png");
object_btrc.append_elem(btcr_img4, "http://mglepw.github.io/cpn/btcr/img/img4.png");
object_btrc.createGUI();
object_btrc.play();

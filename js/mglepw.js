var jquery = document.createElement("script");
var jcycle = document.createElement("script");
jquery.setAttribute("src", "http://mglepw.github.io/js/jquery-1.12.3.min.js");
jcycle.setAttribute("src", "http://mglepw.github.io/js/jquery.cycle.all.js");
document.getElementsByTagName("head")[0].appendChild(jquery);
document.getElementsByTagName("head")[0].appendChild(jcycle);

var Mgl_acpn = function() {
	this.list_elem = []
	this.list_img = [];
	this.append_img_list_elem = function(list_elem) {
		for (var i in list_elem) {
			this.list_elem.append(list_elem)
		}
	}
	this.append_img_list_img = function(list_img) {
		for (var i in list_img) {
			this.list_img.append(list_img)
		}
	}
	this.setLength = function(list_elem, width, heigth) {
		for (var i in list) {
			list_elem[i].setAttribute("width", width);
			list_elem[i].setAttribute("height", height);
		}
	}
	this.setPng = function() {
		for (var i = 0; i < this.list_elem.length; i++) {
			this.list_elem[i].setAttribute("src", this.list_img[i]);
		}
	}
	this.setParentNode = function(parentNode) {
		for (var i = 0; i < this.list_elem.length; i++) {
			parentNode.appendChild(this.list_elem[i]);
		}
	}
}

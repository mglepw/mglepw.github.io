var jquery = document.createElement("script");
var jquery_cycle = document.createElement("script");
jquery.setAttribute("src", "http://mglepw.github.io/js/jquery-1.12.3.min.js");
jquery_cycle.setAttribute("src", "http://mglepw.github.io/js/jquery.cycle.all.js");
document.getElementsByTagName("head")[0].appendChild(jquery);
document.getElementsByTagName("head")[0].appendChild(jquery_cycle);

var Mgl_acpn = function() {
	this.list_elem = []
	this.list_img = [];
	this.append_list_elem = function(list_elem) {
		for (var i in list_elem) {
			this.list_elem.push(list_elem)
		}
	}
	this.append_list_img = function(list_img) {
		for (var i in list_img) {
			this.list_img.push(list_img)
		}
	}
	this.setLength = function(width, heigth) {
		for (var i = 0; i < this.list_elem.length; i++) {
			this.list_elem[i].setAttribute("width", width);
			this.list_elem[i].setAttribute("height", height);
		}
	}
	this.setPng = function() {
		for (var i = 0; i < this.list_elem.length; i++) {
			this.list_elem[i].setAttribute("src", this.list_img[i]);
		}
	}
	this.setIdNodeUp = function(nodeUp) {
		for (var i in this.list_elem) {
			nodeUp.appendChild(this.list_elem);
		}
	}
}

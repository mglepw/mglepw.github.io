var Mgl_acpn2 = function() {
	this.list_elem = [];
	this.nodeUp = null;
	this.effect = "scrollDown";
	this.width = 226;
	this.height = 226;
	this.delay = 1000;

	this.append_elem = function(img) {
		var elem = document.createElement("img");
		elem.setAttribute("src", img);
		elem.setAttribute("width", this.width);
		elem.setAttribute("height", this.height);
		this.list_elem.push(elem);
	}
	this.setLength = function(wght, hght) {
		this.weight = wght;
		this.height = hght;
	}
	this.setDelay = function(delay) {
		this.delay = delay;
	}
	this.setNodeUp = function(nUp) {
		this.nodeUp = nUp;
	}
	this.createGUI = function() {
		for (var i = 0; i < this.list_elem.length; i++) {
			this.nodeUp.appendChild(this.list_elem[i]);
		}
	}
	this.setEffect = function(effct) {
		this.effect = effct;
	}
	this.play = function() {
		$(this.nodeUp).cycle({
			fx: this.effect,
			delay: this.delay
		});
	}
}

"use strict";
window.onload = function(){
	dom.hide(document.getElementById("savebutton"));
	var xmlhttp = new XMLHttpRequest();
		xmlhttp.open('GET', 'http://localhost:2399/speaker', true);
		xmlhttp.setRequestHeader('X-WLPAPI', '23456');
		xmlhttp.onload = function () {
		    dom.parseJSON(this.responseText);
		};
		xmlhttp.send();
}
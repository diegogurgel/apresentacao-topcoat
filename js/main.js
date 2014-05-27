window.onload = function(){

	togglePainel();
	toggleConfig();
	var btnDrawer = document.querySelector(".drawer-icon");
	var btnConfig = document.querySelector(".btn-config");
	var btnDark = document.querySelector('.btn-dark');
	var btnLight = document.querySelector(".btn-light");
	var linksMenu = document.querySelectorAll('aside li');
	btnDrawer.onclick = togglePainel;
	btnConfig.onclick = toggleConfig;
	btnDark.onclick = setThemeDark;
	btnLight.onclick = setThemeLigth;

	linksMenu.forEach = Array.prototype.forEach;

	linksMenu.forEach(function(item){
		item.onclick = togglePainel;
	});
	var keyPressCount = 0;
	var itemFocus = document.getElementsByTagName('article')[0];
	document.onkeydown= function(key){
		console.log(key);
		if(key.keyCode == 39){
			if( itemFocus.nextElementSibling){
			itemFocus = itemFocus.nextElementSibling;
				document.location.hash = "#"+itemFocus.getElementsByTagName('h1')[0].id;
			}else{
				itemFocus = document.getElementsByTagName('article')[0];
			}

			
		}else if(key.keyCode==37){

		}
	}


}

function togglePainel () {
	var drawerPainel = document.getElementsByTagName('aside')[0];
	if(drawerPainel.className=="hide"){
		drawerPainel.className = "";
	}else{
		drawerPainel.className = "hide";
	}

}
function toggleConfig(){
	console.log("ok2");
	var configPainel = document.querySelector('.config-container');
	if(configPainel.className=="config-container hide-config"){
		configPainel.className = "config-container";
	}else{
		configPainel.className = "config-container hide-config";
	}

}

function setThemeLigth(){
	this.className = "topcoat-button btn-light pressed";
	document.querySelector('.btn-dark').className = "topcoat-button btn-dark";
	cssLink = document.getElementsByTagName("link")[0];
	document.querySelector(".topcoat-list").className = "topcoat-list"
	cssLink.href = "topcoat/css/topcoat-mobile-light.min.css";
	document.querySelector(".main-content").className = "main-content";
	document.querySelector("aside").className = "";



}
function setThemeDark() {
	this.className = "topcoat-button btn-dark pressed";
	document.querySelector('.btn-light').className = "topcoat-button btn-light";
	cssLink = document.getElementsByTagName("link")[0];
	document.querySelector(".topcoat-list").className = "topcoat-list dark"
	
	cssLink.href = "topcoat/css/topcoat-mobile-dark.min.css";
	document.querySelector(".main-content").className = "main-content dark";
	document.querySelector("aside").className = "dark";
}
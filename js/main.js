window.onload = function(){
	
	var btnDrawer = document.querySelector(".drawer-icon");
	var btnConfig = document.querySelector(".btn-config");
	var btnDark = document.querySelector('.btn-dark');
	var btnLight = document.querySelector(".btn-light");
	btnDrawer.onclick = togglePainel;
	btnConfig.onclick = toggleConfig;

	
	btnDark.onclick = setThemeDark;
	btnLight.onclick = setThemeLigth;


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
	cssLink.href = "topcoat/css/topcoat-mobile-light.min.css";
}
function setThemeDark() {
	this.className = "topcoat-button btn-dark pressed";
	document.querySelector('.btn-light').className = "topcoat-button btn-light";
	cssLink = document.getElementsByTagName("link")[0];
	cssLink.href = "topcoat/css/topcoat-mobile-dark.min.css";
}
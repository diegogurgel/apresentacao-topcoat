window.onload = function(){
	
	var btnDrawer = document.querySelector(".drawer-icon");
	var btnConfig = document.querySelector(".btn-config");
	console.log(btnConfig);
	btnDrawer.onclick = togglePainel;
	btnConfig.onclick = toggleConfig;

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
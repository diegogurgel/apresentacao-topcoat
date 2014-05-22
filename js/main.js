window.onload = function(){
	console.log("ok");
	var btnDrawer = document.querySelector(".btn-drawer");
	var drawerPainel = document.getElementsByTagName('aside')[0];

	btnDrawer.onclick = function(){
		if(drawerPainel.className=="hide"){
			drawerPainel.className = "";
		}else{
			drawerPainel.className = "hide";
		}
		
	}
}
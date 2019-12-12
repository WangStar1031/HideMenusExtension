var timer = setInterval( function(){
	HideMenus();
});
function HideMenus(){
	var arrLis = $("nav.global-header>.container ul.global-header__navbar-links li");
	if( arrLis.length > 1){
		clearInterval(timer);
		for( var i = 0; i < arrLis.length; i++){
			if( i != 0){
				arrLis.eq(i).hide();
			}
		}
	}
}
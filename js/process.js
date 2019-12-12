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

var btnTimer = setInterval( function(){
	HideButtons();
});
// var bBtn1 = false;
// var bBtn2 = false;
function HideButtons(){
	if( $(".bp-summary__hero-cta-fixed").length){
		$(".bp-summary__hero-cta-fixed").hide();
		clearInterval( btnTimer);
	}
	// if( !bBtn1){
	// 	var arrBtns = $("button.payment-drawer__gylp-button");
	// 	for( var i = 0; i < arrBtns.length; i++){
	// 		if( arrBtns.eq(i).innerHTML.toLocaleLowerCase() == "get your local price"){
	// 			arrBtns.eq(i).hide();
	// 			break;
	// 		}
	// 	}
	// }
	// if( !bBtn2){

	// }
	// if( bBtn1 && bBtn2) {
	// 	clearInterval( btnTimer);
	// }
}
$(document).ready(function(){
	//showStaggeredList('#users')
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal({dismissible: true, opacity: 0});
     $(".button-collapse").sideNav();
});
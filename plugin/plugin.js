/******************** PLUGIN **********************/

(function ( $ ) {
    
    $.fn.animateMe = function (animType, animTime, animDelay) {
        console.log('animation start');
        
        this.each(function functionName() {
            // TODO: animate
        });

        console.log('animation ends');
        
        return this;
    };
}( jQuery ));



/******************** MAIN SCRIPT **********************/

$(document).ready(function() {

    $('.list').animateMe();
    
});
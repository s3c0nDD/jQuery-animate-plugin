/******************** PLUGIN **********************/

(function ( $ ) {
    /**
     * function animateMe(animType, animTime, animDelay)
     * @param {string} animType - ['fadeIn', 'fadeOut']
     * @param {number} animType - greater than 0
     * @param {number} animDelay - greater or equal than 0
     * @returns {Object}
     */
    $.fn.animateMe = function (animType, animTime, animDelay) {
        // Check if animation type is available
        var availableAnims = [
            'fadeIn',
            'fadeOut'
            // TODO: can add another if wanna to
        ]
        if ( $.inArray(animType, availableAnims) === -1 )
            return $.error('Not available animation type!'); 

        // Check if animation time arguments makes sense
        if ( typeof (animTime) !== 'number' || typeof (animDelay) !== 'number' ) 
            return $.error('Animation times types are wrong (required: number)');
        
        if ( !(animTime > 0) || !(animDelay >= 0) ) 
            return $.error('Wrong animation times!')
        
        // NOW WE CAN (try) REALLY Animate 
        this.each(function () {
            var self = this,
                $children = $(this).children();
            //TODO: animate here
        });
        
        // chaining stupid!
        return this;
    };
}( jQuery ));



/******************** MAIN SCRIPT **********************/

$(document).ready(function() {

    $('.list').animateMe('fadeIn', 500, 200);
    
});
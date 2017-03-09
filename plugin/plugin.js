/******************** PLUGIN **********************/

(function ( $ ) {
    /**
     * function animateMe
     * @param {string} anim - string containing an animation type or whatever
     * @param {object} config - configuration object required for animation
     * @returns {object} - jQuery object
     */
    $.fn.animateMe = function (anim, config) {
         
        this.each(function () {
            var self = this,
                $children = $(this).children();
            //TODO: animate here
        });
        
        // remember chaining stupid!
        return this;
    };
}( jQuery ));



/******************** MAIN SCRIPT **********************/

$(document).ready(function() {

    $('.list').animateMe('fadeIn', 500, 200);
    
});
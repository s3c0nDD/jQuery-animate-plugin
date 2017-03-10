/******************** PLUGIN **********************/

(function ( $ ) {
    /**
     * function animateMe
     * @param {string} animName - string containing an animation type or whatever
     * @param {object} config - configuration object required for animation
     * @returns {object} - jQuery object
     */
    $.fn.animateMe = function (animName, config) {

        var self = this;

        if (typeof animName === 'string') {

            self.each(function () {
                var el = self, 
                    $children = $(el).children();

                window['$'](self)[animName](config);
                
                $children.each(function () {
                    // TODO
                });
                
            });

        } else {
            console.log("some error");
        }
        
        return this;
    };
}( jQuery ));



/******************** MAIN SCRIPT **********************/

$(document).ready(function() {
    
    $('#list1').animateMe('fadeOut',configs[0]).animateMe('fadeIn',configs[0]);
    $('#list2').animateMe('fadeOut',configs[1]);
    // $('#list3').animateMe('fadeOut',configs[2]);    
    $('h1').animateMe('css',configs[2])
        

    // console.log( window['$']('.list')['fadeOut']('slow') )
    
});

var configs = [
    { duration: 3000 },
    { duration: 4000 },
    { color: 'red' }
];
var animations = [
    'fadeOut',
    'fadeIn',
    'fadeTo'
];
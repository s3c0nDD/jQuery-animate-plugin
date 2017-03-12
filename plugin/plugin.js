/******************** PLUGIN **********************/

(function ( $ ) {
    /**
     * function animateMe
     * @param {string} animName - string containing an animation type or whatever
     * @param {object} config - configuration object required for animation
     * @param {number} delay - miliseconds which describe delay beetween each child anim invoke 
     * @returns {object} - jQuery object
     */
    $.fn.animateMe = function (animName, delay, config) {

        var self = this;
        if (animName === undefined || delay === undefined)
            $.error('wrong function parameters')

        if (
            typeof animName === 'string' && 
            typeof delay === 'number' && delay >= 0 ) {
                $(self).children().each(function(i, el) {
                    window['$'](el)['delay'](delay*i)[animName](config);    
                });
            } else
                $.error("something went wrong, probably bad arguments given");
        
        return self;
    };
}( jQuery ));



/******************** MAIN SCRIPT **************like a temple  hiwhd m********/

$(document).ready(function() {

    $('#list1')
        .animateMe('fadeOut', delays[0], configs[2])
        // .delay(3000)
        // .animateMe('fadeIn', delays[1], configs[2]);
    /* TODO: #lsit2 adn list3 does not last same long, because of using delay in line 21*/
    $('#list2').animateMe('fadeOut',delays[3], configs[1]);
    $('#list3').animateMe('fadeOut', delays[3], configs[3]);   
    
    // $('.title').animateMe('fadeout',delays[3], configs[2])
            
});

var delays = [ 50, 100, 200, 400 ];
var configs = [
    { duration: 1000 },
    { duration: 2000 },
    { duration: 3000 },
    { duration: 4000 },
    { color: 'red' }
];
var animations = [
    'fadeOut',
    'fadeIn',
    'fadeTo'
];
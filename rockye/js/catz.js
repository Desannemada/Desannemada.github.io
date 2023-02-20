
// Implement a super simple (non-standard) version of bind, if not already there.
if (!Function.prototype.bind){
    Function.prototype.bind = function (bind){
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var self = this;
        return function(){
            return self.apply(bind, arguments);
        };
    };
}

// Find out some specific browser stuff
var CSS = {};
(function(){

    var styles = document.createElement('div').style;

    var test_properties = function(properties){
        return properties.filter(function(prop){
            return (styles[prop] !== undefined);
        })[0];
    };

    CSS.transform = test_properties([
        'transform',
        'WebkitTransform',
        'MozTransform',
        'msTransform',
        'OTransform'
    ]);

})();


// Credit mr.doob and paul irish.
// http://paulirish.com/2011/requestanimationframe-for-smart-animating
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame   ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

document.addEventListener('DOMContentLoaded', function(){
    // Color links
    var colors = ['blue', 'orange', 'green', 'red', 'teal', 'purple', 'yellow'];
    Array.prototype.forEach.call(document.querySelectorAll('a'), function(link){
        link.className += ' ' + colors[Math.floor(Math.random() * colors.length)];
    });

    // Add more/less functionality to context menu.
    var context = document.querySelector('.context');
    if(context){
        var control = context.querySelector('a.context-control');

        control.addEventListener('click', function(){
            var text = control.textContent.toLowerCase();

            if (text == 'close'){
                context.className += ' less';
                control.innerHTML = 'wut the wut?';
            } else {
                context.className = context.className.replace('less', '');
                control.innerHTML = 'close';
            }
        }, false);
    }
}, false);

// var speed=150; // speed of wobbling, lower is faster
// var height=3; // height of wobbling in pixels
// var alink=''; // page to link text to (set to ="" for no link)

/****************************
*    Wobbly Text Effect     *
*(c) 2003-6 mf2fm web-design*
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
****************************/
// var wobtxt, wobble, wobcnt=0;
// window.onload=function() { if (document.getElementById) {
//   var i, wobli;
//   wobble=document.getElementById('wobble');
//   wobtxt=wobble.firstChild.nodeValue;
//   while (wobble.childNodes.length) wobble.removeChild(wobble.childNodes[0]);
//   for (i=0; i<wobtxt.length; i++) {
//     wobli=document.createElement('span');
//     wobli.setAttribute('id', 'wobb'+i);
//     wobli.style.position='relative';
//     wobli.appendChild(document.createTextNode(wobtxt.charAt(i)));
//     if (alink) {
//       wobli.style.cursor='pointer';
//       wobli.onclick=function() { top.location.href=alink; }
//     }
//     wobble.appendChild(wobli);
//   }
//   setInterval('wobbler()', speed);
// }}

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// function wobbler() {
//   for (var i=0; i<wobtxt.length; i++) document.getElementById('wobb'+i).style.top=Math.round(height*Math.sin(i+wobcnt))+'px'
//   wobcnt++;
// }

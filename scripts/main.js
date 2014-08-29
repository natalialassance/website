(function() {
    'use strict';
/*
    var menuButton = document.getElementById('menuCall');

    function menuToggle() {
        var menu = document.getElementById('menu');
        var status = menu.getAttribute('data-open');
        if(status === 'true') {
            menu.setAttribute('data-open', 'false');
        } else {
            menu.setAttribute('data-open', 'true');
        }
    }
*/

    [].slice.call(document.getElementsByTagName('a')).forEach(function(element) {
      if(element.href.indexOf(document.location.host) == -1) {
        element.target = '_blank';
      }
    });

    //menuButton.addEventListener('click', menuToggle, false);

})();
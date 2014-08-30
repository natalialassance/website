

(function() {
    'use strict';

    var menuButton = document.getElementById('menuCall');
    var menuClose = document.getElementById('menuClose');
    var contactLink = document.getElementById('contactLink');

    function animateScroll(from,to,time) {
        var body = document.body;
        var start = new Date().getTime(),
            timer = setInterval(function() {
                var step = Math.min(1,(new Date().getTime()-start)/time);
                body['scrollTop'] = (from+step*(to-from))+"";

                if( step == 1) clearInterval(timer);
            },25);
        body.style['scrollTop'] = from+"";
    }

    function menuToggle() {
        var menu = document.getElementById('menu');
        var status = menu.getAttribute('data-open');
        if(status === 'true') {
            menu.setAttribute('data-open', 'false');
            menuClose.style.display = 'none';
        } else {
            menu.setAttribute('data-open', 'true');
            menuClose.style.display = 'block';
        }
    }
    function smoothScroll() {
        var target = document.getElementById('bottom').offsetTop;
        animateScroll(0, target, 500);
    }

    [].slice.call(document.getElementsByTagName('a')).forEach(function(element) {
      if(element.href.indexOf(document.location.host) == -1) {
        element.target = '_blank';
      }
    });

    menuButton.addEventListener('click', menuToggle, false);
    menuClose.addEventListener('click', menuToggle, false);
    contactLink.addEventListener('click', smoothScroll, false);

})();
(function() {

    var el = Array.prototype.slice.call(document.querySelectorAll('.page-nav a'));

    function scrollTo(to, duration) {
        var start = window.pageYOffset,
            change = to - start,
            currentTime = 0,
            increment = 20;


        var animateScroll = function(){        
            currentTime += increment;              
            var val = Math.easeInOutQuad(currentTime, start, change, duration);              
            window.scrollTo(0, val);
            console.log(val);
            if(currentTime < duration) {            
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }

    // Based on Shop Direct Internal Library

    //t = current time
    //b = start value
    //c = change in value
    //d = duration
    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    el.forEach(function(ops){        
        ops.addEventListener('click', function(e) {            
            e.preventDefault();
            var section = document.getElementById(ops.getAttribute('href').replace('#', ''));
            var topPos = section.offsetTop;
            scrollTo(topPos-10, 600);            
        });
    });
}());
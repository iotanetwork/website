01
$(function(){
02
    $('a[href*=#]').click(function() {
03
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
04
        &amp;amp;&amp;amp; location.hostname == this.hostname) {
05
            var $target = $(this.hash);
06
            $target = $target.length &amp;amp;&amp;amp; $target || $('[name=' + this.hash.slice(1) +']');
07
            if ($target.length) {
08
                var targetOffset = $target.offset().top;
09
                $('html,body').animate({scrollTop: targetOffset}, 1000);
10
                return false;
11
            }
12
        }
13
    });
14
});

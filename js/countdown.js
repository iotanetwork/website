(function() {
    var startDate = '';
    var endDate = '';
    var actualDate;

    var $timer = $('[data-countdown="container"]');
    var $title = $timer.find('[data-countdown="title"]');
    var $time_date = $timer.find('[data-countdown="time_date"]');

    var title;
    var timeInterval;

    function updateTimer() {
        startDate = document.getElementById('start_date').getAttribute('value');
        endDate = document.getElementById('end_date').getAttribute('value');

        if (getRemaining(startDate).total > 0)
        {
            actualDate = startDate;
            title = 'Time to start';
//            document.getElementById('blocks_start').removeAttribute('style');
//            document.getElementById('blocks_end').setAttribute('style', "display: none;");
//            document.getElementById('participate_button').removeAttribute('style');
//            document.getElementById('participate_button2').setAttribute('style', "display: none;");
        }
        else
        {
            actualDate = endDate;
            title = 'Time left';
//            document.getElementById('blocks_end').removeAttribute('style');
//            document.getElementById('blocks_start').setAttribute('style', "display: none;");
//            document.getElementById('participate_button').setAttribute('style', "display: none;");
//            document.getElementById('participate_button2').removeAttribute('style');
        }

        var finished = document.getElementById('finished').getAttribute('value');
        var t = getRemaining(actualDate);
        mdate = t.days + " days, " + t.hours + ":" + t.minutes + ":" + t.seconds;

        var now_date = new Date().getTime();
        var end_data = parseInt(endDate) * 1000;
        if ( now_date > end_data || finished === 'true') {
//            document.getElementById('participate_button').removeAttribute('style');
//            document.getElementById('participate_button2').setAttribute('style', "display: none;");
//            document.getElementById('blocks_to_end').innerText = '0';
            mdate = "FINALIZED!";
            clearInterval(timeInterval);
        }

        $time_date.html(mdate);

        $timer.fadeIn();
        $title.html(title);
    }

    function TimerInit() {
        updateTimer();
        timeInterval = setInterval(updateTimer, 1000);
    }

    function getRemaining(timestamp) {
        var t = parseInt(timestamp) * 1000 - new Date().getTime();
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            'total': t,
            'days': days,
            'hours': hours <= 9 ? '0' + hours : hours,
            'minutes': minutes <= 9 ? '0' + minutes : minutes,
            'seconds': seconds <= 9 ? '0' + seconds : seconds,
            'unit': days == 1 ? 'day' : 'days'
        }
    }

    window.TimerInit = TimerInit;
})();
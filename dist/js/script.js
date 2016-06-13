$("#user-card, h1").fadeIn(800);

$('#block-center').css({
    "height": $('#myVideo').height() + 'px'
});

$('#videoContainerBackground').css({
    "height": $('#myVideo').height() + 'px'
});

$('#balckBackground').css({
    "height": $('#myVideo').height() + 'px'
});

$(window).resize(function() {
    $('#block-center').css({
        "height": $('#myVideo').height() + 'px'
    });

    $('#videoContainerBackground').css({
        "height": $('#myVideo').height() + 'px'
    });

    $('#balckBackground').css({
        "height": $('#myVideo').height() + 'px'
    });
});
$('#balckBackground h1').on('click', function() {
    $('#myVideo').get(0).paused ? $('#myVideo').get(0).play() : $('#myVideo').get(0).pause();
})

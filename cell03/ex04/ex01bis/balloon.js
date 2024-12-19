$(document).ready(function() {
    const colors = ['red', 'green', 'blue'];
    let currentSize = 200;
    let colorIndex = 0;

    $('#balloon').click(function() {
        currentSize += 10;
        if (currentSize > 420) {
            currentSize = 200;
            colorIndex = 0;
        } else {
            colorIndex = (colorIndex + 1) % colors.length;
        }

        updateBalloon();
    });

    $('#balloon').mouseleave(function() {
        currentSize = Math.max(200, currentSize - 5);
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        updateBalloon();
    });

    function updateBalloon() {
        $('#balloon').css({
            width: currentSize + 'px',
            height: currentSize + 'px',
            backgroundColor: colors[colorIndex]
        });
    }
});

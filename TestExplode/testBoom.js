$(document).ready(function(){

    let boom = function(){

        let width = $('img').css('width');
        let height = $('img').css('height');
        let imgUrl = $('img').attr('src');
        let pieceSize = 20;
        let duration = 1000;
        let sx, sy, count = 0, n = width/pieceSize, m = height/pieceSize;
        let gravity = false;
        $('img').hide();
        $('#wrapper').css({
            background: `url(${imgUrl})`,
            position: 'relative',
            //  perspective: 300,
            width: width,
            height: height,
            cursor: 'pointer'
        });

        function makePiece(x, y) {
            for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                    let newPiece = document.createElement('div');
                    console.dir(newPiece);
                    $(newPiece).attr('id', i + '-' + j);
                    $(newPiece).css({
                        width: pieceSize,
                        height: pieceSize,
                        position: 'absolute',
                        background: `url(${imgUrl}) no-repeat`,
                        top: i * pieceSize,
                        left: j * pieceSize,
                        backgroundPosition: -j*pieceSize + 'px ' + (-i*pieceSize) + 'px',
                    });
                    console.dir(newPiece);
                    $('#wrapper').append(newPiece);
                }
            }

            $('#wrapper').css('background', '');
            $('body').css('overflow', 'Hidden');

            for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                    sx = j * pieceSize < x ? -1 * Math.random() * duration : Math.random() * duration;
                    sy = Math.abs(sx * (i*pieceSize-y)/(j*pieceSize-x));
                    sy = i * pieceSize < y ? -sy : sy;
                    if (!gravity) {
                        $(`#${i}-${j}`).animate({
                            top: '+='+sy,
                            left: '+='+sx,
                            opacity: 0
                        }, Math.random()*duration+duration,'swing', function(){
                            $(this).animate({
                                top: i * pieceSize,
                                left: j * pieceSize,
                                opacity: 1
                            }, duration*1.5, 'swing',function(){
                                count++;
                                if (count == 400) {
                                    $('#wrapper').css({
                                        background: 'url('+imgUrl+') no-repeat'
                                    }).children('div').remove();
                                    $('body').css({
                                        overflow: 'visible'
                                    });
                                    count = 0;
                                }
                            });
                        })
                    }
                }
            }
        }//end makePiece

        $('#wrapper').click(function(e){
            console.dir(e)
            let centerX = e.pageX - $('#wrapper').offset().left,
            centerY = e.pageY - $('#wrapper').offset().top;
            makePiece(centerX,centerY);
            console.dir(centerX);
            console.dir(centerY);
        })
        return $('#wrapper');
    }
    boom();

});//end ready
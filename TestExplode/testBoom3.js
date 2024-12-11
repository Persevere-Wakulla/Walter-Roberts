const wrap = document.getElementById('wrapper');
const boomImg = document.getElementById('boom'); //This will be an input for the function
// console.dir(boomImg);
let imgUrl = boomImg.attributes.src.nodeValue;
let width = boomImg.width;
let height = boomImg.height;
let pieceSize = 20; //This will be an input for the function
let dura = 5000; //This will be an input for the function

//Set the wrapper dimensions to the img size
wrap.style.width = `${width}px`;
wrap.style.height = `${height}px`;
//make it's position relative
wrap.style.position = 'relative';
//figure out how many pieces in the x-direction (n) and y-direction (m)
let n = width / pieceSize; //how many columns
let m = height / pieceSize; //how many rows
//Build the image from small pieces
for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        let newPiece = document.createElement('div');
        newPiece.classList.add('piece');
        newPiece.setAttribute('id', `${i}-${j}`);
        with(newPiece.style){
            // backgroundColor = 'green';
            width = `${pieceSize}px`;
            height = `${pieceSize}px`;
            position = 'absolute';
            top = `${i*pieceSize}px`;
            left = `${j*pieceSize}px`;
            backgroundPositionY = `-${i*pieceSize}px`;
            backgroundPositionX = `-${j*pieceSize}px`;
            backgroundImage = `url(${imgUrl})`;
        }//end with
        wrap.appendChild(newPiece);
    }//end j
}//end i
//Tell img to display none now that it is built from pieces
boomImg.style.display = 'none';

//Blow on click
wrap.addEventListener('click', (ev) => {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let signx = j*pieceSize < ev.target.offsetLeft ? -1 : 1;
            let signy = i*pieceSize < ev.target.offsetTop ? -1 : 1;
            let sx = signx * Math.random() * dura;
            let sy = signy*Math.abs(sx * (i*pieceSize-ev.target.offsetTop)/(j*pieceSize-ev.target.offsetLeft)); //i-y j-x
            // console.dir(`i: ${i}, j: ${j}, ${sy}`);
            // sy = i * pieceSize < ev.target.offsetTop ? -sy : sy; //200 is y
            let newBack, hor, vert, nL, nT;
            let nW = width/2;
            let nH = height/2;
            if(i*pieceSize >= height/2){vert = 'bottom'}
            else{vert = 'top'}
            if(j*pieceSize >= width/2){hor = 'right'}
            else{hor = 'left'}
            let quad = vert + ' ' + hor;
            switch(quad){
                case 'top left':
                    newBack = 'url(./images/Grid-Layout-1.png)';
                    nL = (j*pieceSize) - (3*pieceSize);
                    nT = (i*pieceSize) - (3*pieceSize);
                    break;
                case 'top right':
                    newBack = 'url(./images/Flex-Layout-2.png)';
                    nL = (j*pieceSize) + (3*pieceSize);
                    nT = (i*pieceSize) - (3*pieceSize);
                    break;
                case 'bottom left':
                    newBack = 'url(./images/ProfileCard.png)';
                    nL = (j*pieceSize) - (3*pieceSize);
                    nT = (i*pieceSize) + (3*pieceSize);
                    break;
                case 'bottom right':
                    newBack = 'url(./images/blog-preview-card.png';
                    nL = (j*pieceSize) +(3*pieceSize);
                    nT = (i*pieceSize) + (3*pieceSize);
                    break;
                default:
                    console.log(quad);
            }
            // console.dir((Math.abs(ev.target.offsetLeft - (i*pieceSize))+Math.abs(ev.target.offsetTop - (j*pieceSize))+.01)/100);
            // console.dir(i*pieceSize);
            let bit = document.getElementById(`${i}-${j}`);
            let animProps = [
                {transform: `rotate3d(0,0,0,0deg)`, opacity: 1, left: `${j*pieceSize}px`, top: `${i*pieceSize}px`, easing: 'ease-out'},
                {transform: `rotate3d(${signy}1,${signx}2,${signx}1,3960deg)`, opacity: 0, left: `${(j*pieceSize)+sx}px`, top: `${(i*pieceSize)+sy}px`, offset: 0.5, easing: 'ease-in-out'},
                {transform: `rotate3d(0,0,0,0deg)`, opacity: 1, left: `${nL}px`, top: `${nT}px`, backgroundImage: newBack, backgroundSize: `${nW}px ${nH}px`}
            ];
            let animTime = {
                duration: dura,
                fill: 'forwards'
            };
            bit.animate(animProps, animTime);
        }//end j
    }//end i
    console.dir(ev);
});//end click

//--------jquery-----way---------------------------/////////
// $(`#${i}-${j}`).animate({
//     borderRadius: '25% 15px',
//     top: `+=${sy}`,
//     left: `+=${sx}`,
//     rotate: `${3960/((Math.abs(ev.target.offsetLeft - (i*pieceSize))+Math.abs(ev.target.offsetTop - (j*pieceSize))+.01)/100)}deg`,
//     opacity: 0
// }, Math.random()*duration+duration, 'swing', function(){
//     $(this).animate({
//         borderRadius: '0% 0px',
//         top: i*pieceSize,
//         left: j*pieceSize,
//         rotate: `0deg`,
//         opacity: 1
//     }, duration*1.5, 'swing');
// });
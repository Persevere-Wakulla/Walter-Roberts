const wrap = document.getElementById('wrapper');
const boomImg = document.getElementById('boom'); //This will be an input for the function
// console.dir(boomImg);
let imgUrl = boomImg.attributes.src.nodeValue;
let width = boomImg.width;
let height = boomImg.height;
let pieceSize = 20; //This will be an input for the function
let duration = 3000; //This will be an input for the function

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
            backgroundColor = 'green';
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
            sx = j * pieceSize < ev.target.offsetLeft ? -1 * Math.random() * duration : Math.random() * duration; //200 is x
            sy = Math.abs(sx * (i*pieceSize-ev.target.offsetTop)/(j*pieceSize-ev.target.offsetLeft)); //i-y j-x
            sy = i * pieceSize < ev.target.offsetTop ? -sy : sy; //200 is y
            console.dir((Math.abs(ev.target.offsetLeft - (i*pieceSize))+Math.abs(ev.target.offsetTop - (j*pieceSize))+.01)/100);
            // console.dir(i*pieceSize);
            $(`#${i}-${j}`).animate({
                borderRadius: '25% 15px',
                top: `+=${sy}`,
                left: `+=${sx}`,
                rotate: `${3960/((Math.abs(ev.target.offsetLeft - (i*pieceSize))+Math.abs(ev.target.offsetTop - (j*pieceSize))+.01)/100)}deg`,
                opacity: 0
            }, Math.random()*duration+duration, 'swing', function(){
                $(this).animate({
                    borderRadius: '0% 0px',
                    top: i*pieceSize,
                    left: j*pieceSize,
                    rotate: `0deg`,
                    opacity: 1
                }, duration*1.5, 'swing');
            });
        }//end j
    }//end i
    console.dir(ev);
});//end click



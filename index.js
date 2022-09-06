var size = 46 * 20;

var whiteboard = document.createElement('div');
whiteboard.style.backgroundColor = 'AliceBlue';
whiteboard.style.width = '90%';
whiteboard.style.margin = 'auto';
whiteboard.style.padding = '2%';
var pixelDiv = document.createElement('div');

var currentColor = document.createElement('div');
currentColor.style.width = '60px';
currentColor.style.height = '20px';
currentColor.style.backgroundColor = 'white';
currentColor.style.float = 'left';
currentColor.style.border = 'solid 2px';
currentColor.style.margin = '10px';

for (var i = 0; i < size; i++) {
    var tile = document.createElement('div');
    tile.style.backgroundColor = 'white';
    tile.style.width = '2%';
    tile.style.paddingBottom = '2%'; //max-heigh=inherit
    tile.style.float = 'left';
    tile.style.borderStyle = 'solid';
    tile.style.borderWidth = '1px';
    tile.className = 'tile';
    pixelDiv.appendChild(tile);
}
var mouseDown = true;
document.body.onmousedown = () => {
    mouseDown = true;
};
document.body.onmouseup = () => {
    mouseDown = false;
};
//check if mouse is down, if it is, then wherever mouse pass, change color
pixelDiv.addEventListener('mouseover', function (e) {
    if (mouseDown) {
        e.target.style.backgroundColor = currentColor.style.backgroundColor;
    }
});
//click div to change color
pixelDiv.addEventListener('click', function (e) {
    e.target.style.backgroundColor = currentColor.style.backgroundColor;
});
//doubleclick to change div to white color
pixelDiv.addEventListener('dblclick', function (e) {
    e.target.style.backgroundColor = 'white';
});
whiteboard.appendChild(pixelDiv);

var colorDiv = document.createElement('div');
for (var i = 0; i < 49; i++) {
    var colorCircle = document.createElement('div');
    colorCircle.style.width = '20px';
    colorCircle.style.height = '20px';
    colorCircle.style.borderRadius = '50%';
    colorCircle.style.float = 'left';
    colorCircle.style.margin = '10px';
    colorCircle.style.border = 'solid 1px';
    colorCircle.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    colorDiv.appendChild(colorCircle);
}
var currentColorText = document.createElement('div');
currentColorText.textContent = 'Current Color >';
currentColorText.style.float = 'left';
currentColorText.style.margin = '10px';
colorDiv.addEventListener('click', function (e) {
    currentColor.style.backgroundColor = e.target.style.backgroundColor;
})
colorDiv.appendChild(currentColorText);
colorDiv.appendChild(currentColor);
var reset = document.createElement('button');
reset.textContent = 'Reset';
reset.style.margin = '10px';
reset.addEventListener('click', function () {
    var tiles = document.getElementsByClassName('tile');
    console.log(tiles);
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].style.backgroundColor = 'white';
    }
    currentColor.style.backgroundColor = 'white';
})
whiteboard.appendChild(colorDiv);
whiteboard.appendChild(reset);
document.body.appendChild(whiteboard);

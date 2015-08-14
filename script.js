
function checkerBoard() {

  for (var i = 0; i < 63; i++) {

    var body = document.querySelector('body');
    var checker = document.createElement('div');

    checker.style.float = "left";
    checker.style.paddingBottom = '11.1%';
    checker.style.width = '11.1%';
    checker.opacity= '0.5';

    if (i % 2 === 0) {
      checker.style.backgroundColor = randomColor();
      body.appendChild(checker);
    } else if (i % 1 === 0) {
      checker.style.backgroundColor = randomColor();
      body.appendChild(checker);
    }
  }

}

function randomColor() {

  var colorArray = '0123456789abcdef'.split('');
  var color = '#';

  for (var i = 0; i < 6; i ++) {
      color += colorArray[Math.floor(Math.random() * 16)];
  }
  return color;
}

function reset() {
  document.body.innerHTML = '';
}



  var audio = new Audio('liebestod.mp3');
  audio.play();



  setInterval(reset, 2000);
  setInterval(checkerBoard, 2000);









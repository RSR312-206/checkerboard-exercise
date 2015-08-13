function checker(randomColor) {
  var body = document.querySelector('body');
  var checker = document.createElement('div');

  checker.style.backgroundColor = randomColor;
  checker.style.float = "left";
  checker.style.paddingBottom = '11.1%';
  checker.style.width = '11.1%';

  body.appendChild(checker);
}

  function randomColor() {
    var colorArray = '0123456789abcdef'.split('');
    var color = '#';

    for (var i = 0; i < 6; i ++) {
        color += colorArray[Math.floor(Math.random() * 16)];
    }
    return color;
  }

for (var i = 0; i <= 62; i++)
  if (i % 2 === 0) {
    checker(randomColor());
  } else if (i % 1 === 0) {
    checker(randomColor());
  }


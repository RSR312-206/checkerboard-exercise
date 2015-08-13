// Your JS goes here
function checker(color) {
  var body = document.querySelector('body');
  var checker = document.createElement('div');

  checker.style.backgroundColor = color;
  checker.style.float = "left";
  checker.style.paddingBottom = '11.1%';
  checker.style.width = '11.1%';

  body.appendChild(checker);

}

for (var i = 0; i <= 62; i++)
  if (i % 2 === 0) {
    checker('red');
  } else if (i % 1 === 0) {
    checker('black');
  }


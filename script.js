var buttonclass = document.querySelector('.opslaan');
var button = document.querySelector('section > article:nth-child(2) > button');
var buttonnext = document.querySelector('section > article:nth-child(3) > button');

var verandering = function () {
    button.classList.add('opgeslagen');
    button.innerHTML = 'Opgeslagen';
};

var verandering2 = function () {
    buttonnext.classList.add('opgeslagen2');
    buttonnext.innerHTML = 'Opgeslagen';
};

button.addEventListener('click', verandering);
buttonnext.addEventListener('click', verandering2);


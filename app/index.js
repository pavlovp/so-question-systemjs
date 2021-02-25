import { AlertBox } from './alert-box/alert-box';

import writeText from 'lib';

const alertUser = new AlertBox();

console.log('Entry script loaded!');

$( () => {
    const alertButton = document.getElementById('js-button');
    alertButton.addEventListener('click', alertUser.sayHi);

    const pTagButton = document.getElementById('js-write-text-button');
    const pTag = document.querySelector('p');

    pTagButton.addEventListener('click', () => {
        writeText()
    });
});

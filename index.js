import first from './first.html';
import second from './second.html';
import third from './third.html';
import fourth from './fourth.html';

const routes = {
    first: first,
    second: second,
    third: third,
    fourth: fourth
};

const content = document.querySelector('#content');

window.navTo = address => {
    const html = routes[address];
    if (!html)
        throw new Error('404: page not found')

    window.history.pushState(address, null, address);
    content.innerHTML = html;
}
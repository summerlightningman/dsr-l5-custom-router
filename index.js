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

const replaceHTML = address => {
    content.innerHTML = routes[address] || '';
}

window.navTo = address => {
    window.history.pushState(address, null, address);
    replaceHTML(address);
}

window.addEventListener('popstate', e => {
    window.history.replaceState(e.state, '', e.state);
    replaceHTML(e.state);
});
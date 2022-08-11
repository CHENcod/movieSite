
const url = () => { location.href = '../home.html' }

function gotoHome(sec) {
    setTimeout(url, sec);
}

gotoHome(3000);
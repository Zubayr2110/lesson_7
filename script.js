const  inp1 = document.getElementById('password')
const  inp2 = document.getElementById('email')

localStorage.setItem('user', String(email))
function loginF() {
    location.href = "./index.html";
}

function getLocalStorage() {
    if (localStorage.getItem('users')) {
       return JSON.parse(localStorage.getItem('users'))
    } else {
        return []
    }
}

function addToLocalStorage(user) {
    const data = { user };
    const items = getLocalStorage();
    items.push(data);
    localStorage.setItem('users', JSON.stringify(items));
}
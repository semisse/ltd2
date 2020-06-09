const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const cross = document.querySelector('.close');
if (burger) {
    burger.addEventListener('click', (e) => {
        e.preventDefault();
        navigation.classList.add("open");
    });
}
if (cross) {
    cross.addEventListener('click', (e) => {
        e.preventDefault();
        navigation.classList.remove("open");
    });
}
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

const navElement = document.body.querySelector("nav");
const listItem = navElement.children[0].children;
for (let i = 0; i < listItem.length; i++) {
    const link = listItem[i].getElementsByTagName("a");
    link[0].addEventListener("click", (e) => {
        e.preventDefault();
        const destination = link[0].innerHTML;
        navigation.classList.remove("open");
        const section = document.getElementById(destination.toLowerCase());
        section.scrollIntoView();
    });
}
const $ = (id) => document.getElementById(id);
const switchBtn = document.querySelector('input[type="checkbox');
const nav = $('nav');
console.log(nav);
const toggleIcon = $('toggle-icon');
const image1 = $('image1');
const image2 = $('image2');
const image3 = $('image3');
const textBox = $('textbox');

function imageMode(color) {
    image1.src = `./img/undraw_coffee_time_e8cw_${color}_mode.svg`
    image2.src = `./img/undraw_drink_coffee_v3au_${color}_mode.svg`
    image3.src = `./img/undraw_in_love_6sq2_${color}_mode.svg`
}

function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50% )';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50% )' : 'rgb(0 0 0 / 50%)';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    toggleIcon.children[1].style.transition = '2s';
    toggleIcon.children[0].textContent = isDark ? 'DARK MODE' : 'LIGHT MODE';
    isDark ? imageMode('light') : imageMode('dark');
}

switchBtn.onchange = (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleDarkLightMode(true);
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleDarkLightMode(false);
        localStorage.setItem('theme', 'light');
    }
}

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        switchBtn.checked = true;
        toggleDarkLightMode(true);
    }
}
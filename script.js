// белая/темная тема
const nightThemeBtn = document.getElementById("night-theme-btn")

nightThemeBtn.addEventListener("click", function () {
    document.body.classList.toggle("night-theme")

    const theme = localStorage.getItem("theme")

    if (theme === "night-theme") {
        localStorage.setItem("theme", "")
    } else {
        localStorage.setItem("theme", "night-theme")
    }
})


// курсор
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})


// Прогресс линия внизу сайта (фиксированная)
function progressBar() {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = scroll / height * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
}
window.addEventListener('scroll', progressBar);


//бургер меню
$(".menu").hide();
$("*").on("click", (e) => {
    if ($(e.target).is(".menu, .menu ul, .menu svg, .menu svg path, .nav__container")) {
        return false;
    }

    $(".menu").hide();
})
const menu = () => {
    $(".menu").toggle();
}


// анимации плавного появления слов (Обо мне, навыки, портфолио, прайс, сертификаты)
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.price-animation, .works-animation, .skills-animation, .about-me-animation');

for (let elm of elements) {
    observer.observe(elm);
}

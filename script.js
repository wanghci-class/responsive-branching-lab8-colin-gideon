let defaulted = document.getElementById("default");
let darkMode = document.getElementById("darkmode")
let lightMode = document.getElementById("lightmode");

function defaultTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        console.log('Dark mode')
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        console.log('Light mode')
    }
}

defaulted.addEventListener("click", function(ev) {
    ev.preventDefault();
    document.body.classList.remove("dark");
    defaultTheme();
});

darkMode.addEventListener("click", function(ev) {
    ev.preventDefault();
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
});

lightMode.addEventListener("click", function(ev) {
    ev.preventDefault();
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
});
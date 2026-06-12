
const btnSaibaMais = document.getElementById("btnSaibaMais");
const secaoDetalhes = document.getElementById("detalhes");

btnSaibaMais.addEventListener("click", () => {

    secaoDetalhes.scrollIntoView({ behavior: "smooth" });
});


const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;


if (localStorage.getItem("tema") === "dark") {
    body.classList.add("dark-mode");
    darkModeToggle.innerText = "☀️ Modo Claro";
}


darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
        darkModeToggle.innerText = "☀️ Modo Claro";
        localStorage.setItem("tema", "dark");
    } else {
        darkModeToggle.innerText = "🌙 Modo Escuro";
        localStorage.setItem("tema", "light");
    }
});

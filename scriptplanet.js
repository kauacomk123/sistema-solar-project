const planetData = {
    Mercúrio: "É o planeta mais próximo do Sol e o menor do Sistema Solar.",
    Vênus: "Conhecido por suas altas temperaturas e atmosfera densa de CO₂.",
    Terra: "Nosso lar! O único planeta conhecido com vida.",
    Marte: "O planeta vermelho, com possibilidade de água congelada.",
    Júpiter: "O maior planeta do Sistema Solar, famoso pela sua Grande Mancha Vermelha.",
    Saturno: "Famoso por seus lindos anéis compostos de gelo e rochas.",
    Urano: "Um gigante gasoso que gira 'de lado'.",
    Netuno: "Planeta azul e frio, o mais distante do Sol.",
    Plutão: "Agora considerado planeta anão, mas ainda fascinante!"
};

const modal = document.getElementById("planet-modal");
const modalTitle = document.getElementById("planet-name");
const modalText = document.getElementById("planet-description");
const closeBtn = document.querySelector(".modal .close");

document.querySelectorAll("[data-planet]").forEach(planet => {
    planet.addEventListener("click", () => {
        const name = planet.getAttribute("data-planet");
        console.log("Clicou em:", name);
        modalTitle.textContent = name;
        modalText.textContent = planetData[name];
        modal.classList.remove("hidden");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});
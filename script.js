/* =========================================
   KAROL OS
   PERSONAL ANALYSIS SYSTEM
========================================= */


const analyzeButton = document.getElementById("analyzeBtn");
const analysisPanel = document.getElementById("analysisText");
const analysisStatus = document.getElementById("analysisStatus");


/* =========================================
   ANIMAR ESTADÍSTICAS
========================================= */

function animateStats() {

    const bars = document.querySelectorAll(".progress-bar");

    bars.forEach(bar => {

        const value = bar.dataset.value;

        setTimeout(() => {

            bar.style.width = `${value}%`;

        }, 300);

    });

}


animateStats();


/* =========================================
   ANÁLISIS
========================================= */

const analysisData = [

    {
        title: "CREADOR",
        text:
        "Tu perfil muestra una inclinación muy fuerte hacia crear cosas. " +
        "No solamente quieres consumir tecnología: quieres construir videojuegos, " +
        "interfaces, sistemas, historias y conceptos propios."
    },

    {
        title: "EXPLORADOR",
        text:
        "Has pasado por HTML, CSS, JavaScript, C, C++, C#, PHP, SQL, " +
        "Android, App Inventor, diseño UI y otras tecnologías. " +
        "Eso indica una curiosidad considerable, aunque también existe un riesgo: " +
        "querer aprender demasiadas cosas simultáneamente."
    },

    {
        title: "MENTALIDAD",
        text:
        "Una característica recurrente es que no te conformas demasiado rápido. " +
        "Cuando algo no funciona, normalmente vuelves a preguntar, pruebas otra ruta " +
        "y buscas entender qué ocurrió."
    },

    {
        title: "FORTALEZA",
        text:
        "Tu fortaleza principal probablemente no sea dominar una tecnología específica. " +
        "Es tu capacidad de convertir ideas abstractas en proyectos concretos."
    },

    {
        title: "DEBILIDAD",
        text:
        "Tu mayor riesgo es la dispersión. Tienes suficientes intereses como para " +
        "empezar diez proyectos antes de terminar uno. El siguiente nivel no consiste " +
        "en aprender más cosas: consiste en terminar más cosas."
    },

    {
        title: "EVOLUCIÓN",
        text:
        "Has mostrado interés en medir tu progreso, organizar entrenamientos, " +
        "registrar resultados y analizar tus propios procesos. Eso es una característica " +
        "útil cuando se combina con paciencia."
    },

    {
        title: "VEREDICTO",
        text:
        "El sistema no detecta un personaje terminado. Detecta un personaje en desarrollo. " +
        "Y eso cambia completamente la interpretación de tus estadísticas."
    }

];


async function runAnalysis() {

    analyzeButton.disabled = true;

    analysisStatus.textContent = "ANALYZING...";

    analysisStatus.style.color = "#ff4f5e";


    analysisPanel.innerHTML = "";


    for (let i = 0; i < analysisData.length; i++) {

        const item = analysisData[i];

        const paragraph = document.createElement("p");

        paragraph.innerHTML =
            `<span class="highlight">[${item.title}]</span> ${item.text}`;

        analysisPanel.appendChild(paragraph);


        await delay(650);

    }


    analysisStatus.textContent = "ANALYSIS COMPLETE";

    analysisStatus.style.color = "#6cff9b";

    analyzeButton.disabled = false;

}


function delay(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}


analyzeButton.addEventListener("click", runAnalysis);


/* =========================================
   TERMINAL
========================================= */

const terminalText = document.getElementById("terminalText");

const terminalMessages = [

    "initializing personal system...",
    "loading memories...",
    "loading projects...",
    "loading failures...",
    "loading ideas...",
    "loading lessons...",
    "loading unfinished projects...",
    "loading persistence...",
    "calculating potential...",
    "ERROR: potential exceeds measurable parameters.",
    "system recommendation: KEEP GOING."

];


let messageIndex = 0;
let characterIndex = 0;


function typeTerminal() {

    if (messageIndex >= terminalMessages.length) {

        messageIndex = 0;

    }


    const currentMessage = terminalMessages[messageIndex];


    if (characterIndex < currentMessage.length) {

        terminalText.textContent += currentMessage[characterIndex];

        characterIndex++;

        setTimeout(typeTerminal, 35);

    } else {

        setTimeout(() => {

            terminalText.textContent = "";

            characterIndex = 0;

            messageIndex++;

            typeTerminal();

        }, 1800);

    }

}


typeTerminal();


/* =========================================
   HOVER SOUND-LIKE EFFECT
========================================= */

const cards = document.querySelectorAll(
    ".stat-card, .project, .skill-node"
);


cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.setProperty(
            "text-shadow",
            "0 0 8px rgba(108,255,155,.25)"
        );

    });


    card.addEventListener("mouseleave", () => {

        card.style.removeProperty("text-shadow");

    });

});


/* =========================================
   CONSOLE
========================================= */

console.log(`
╔══════════════════════════════════╗
║          K A R O L   O S         ║
╠══════════════════════════════════╣
║ STATUS: ONLINE                   ║
║ MODE: SELF ANALYSIS              ║
║                                  ║
║ Curiosity ............... 97     ║
║ Creativity .............. 94     ║
║ Resilience .............. 88     ║
║ Programming ............. 86     ║
║                                  ║
║ SYSTEM MESSAGE:                 ║
║                                  ║
║ "No estás terminado."            ║
╚══════════════════════════════════╝
`);

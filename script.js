// Lista de botões a serem ocultados e desativados
const botoesParaOcultar = [
    "Settings",
    "Create New Team",
    "Logout",
    "What's New",
    "Premium Plans",
    "API Access",
    "Library",
    "FAQ & Help"
];

// Função para ocultar e desativar botões específicos
function bloquearElementos() {
    botoesParaOcultar.forEach(nomeBotao => {
        document.querySelectorAll("button, a, div, span").forEach(elemento => {
            if (elemento.innerText.trim() === nomeBotao) {
                elemento.style.display = "none"; // Oculta o botão
                elemento.style.pointerEvents = "none"; // Impede cliques
            }
        });
    });

    let menuSuspenso = document.querySelector('[data-testid="menu-container"]');
    if (menuSuspenso) {
        menuSuspenso.style.display = "none";
        menuSuspenso.style.pointerEvents = "none";
    }

    let botaoMenu = document.querySelector('[data-testid="menu-button"]');
    if (botaoMenu) {
        botaoMenu.style.display = "none";
        botaoMenu.style.pointerEvents = "none";
    }

    let elementosOcultos = document.querySelectorAll('[class*="hidden"], [class*="dropdown"], [class*="menu"], [role="menu"]');
    elementosOcultos.forEach(elemento => {
        elemento.style.display = "none";
        elemento.style.pointerEvents = "none";
    });
}

// Criar um Observer para monitorar mudanças no DOM
const observer = new MutationObserver(bloquearElementos);
observer.observe(document.body, { childList: true, subtree: true });

// Executar a função imediatamente ao iniciar
bloquearElementos();

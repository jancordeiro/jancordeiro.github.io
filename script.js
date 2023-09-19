// Capturar o botão de alternância de modo
const modeToggle = document.getElementById('mode-toggle');

// Adicionar um ouvinte de evento para alternar entre os modos
modeToggle.addEventListener('click', function () {
const body = document.body;

// Verificar qual modo está atualmente ativado
if (body.classList.contains('light-mode')) {
    // Se o modo claro estiver ativado, mude para o modo escuro
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    modeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else {
    // Se o modo escuro estiver ativado, mude para o modo claro
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    modeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
}
});
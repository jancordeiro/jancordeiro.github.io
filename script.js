const modeToggle = document.getElementById('mode-toggle');
const nav = document.getElementById('navbar');
const body = document.body;

// Escuta um evento ou clique para iniciar a função
modeToggle.addEventListener('click', function () {

// Verificar qual modo está atualmente ativado
if (body.classList.contains('light-mode')) {
// Se o modo claro estiver ativado, mude para o modo escuro
    	body.classList.remove('light-mode');
    	body.classList.add('dark-mode');
	nav.classList.remove('bg-light', 'navbar-light');
	nav.classList.add('bg-dark', 'navbar-dark');
    	modeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
	}

else {
// Se o modo escuro estiver ativado, mude para o modo claro
    	body.classList.remove('dark-mode');
    	body.classList.add('light-mode');
	nav.classList.remove('bg-dark', 'navbar-dark');
	nav.classList.add('bg-light', 'navbar-light');
    	modeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
	}
});

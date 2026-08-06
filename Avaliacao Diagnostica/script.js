    const hamburger = document.querySelector('.hamburger');
    const topo = document.querySelector('.topo');

    hamburger.addEventListener('click', () => {
        topo.classList.toggle('ativo');
    });
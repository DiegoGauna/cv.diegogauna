/* Código de Javascript para as funcionalidades da página */

/* Funcionalidade do formulário de contato */
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // para previnir que a página faça reload no submit
    alert('Message sent successfully! Thank you for reaching out.');
    // mensagem de alerta depois da submissão
    this.reset();
});

/* um smooth scrool para os links */
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

/* para destacar a seção do menu com o scroll */
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY + 100; // ajustar a posição para o cabeçalho
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            menuLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`.menu a[href="#${sectionId}"]`).classList.add('active');
        }
    });
});

/* animação de fade-in para as seções */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

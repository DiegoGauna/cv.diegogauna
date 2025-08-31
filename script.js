/* código da funcionalidade do formulário */

/* simular uma submissão do formulário */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message sent successfully! Thank you for reaching out.');
        this.reset();
    });
}

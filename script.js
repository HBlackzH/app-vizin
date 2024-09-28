// Adicione aqui qualquer funcionalidade JavaScript que você queira implementar
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Mensagem enviada! Entraremos em contato em breve.');
        form.reset();
    });
});

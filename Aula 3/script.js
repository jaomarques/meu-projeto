document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector('.formcontainer form');
    const mensagemStatus = document.querySelector('#mensagem-status');   
    
    if (formulario && mensagemStatus) {
        formulario.addEventListener('submit', (event) => {

            event.preventDefault();
         
            const nome = formulario.querySelector('#name').value.trim();
            const email = formulario.querySelector('#email').value.trim();
            const mensagem = formulario.querySelector('#mensagem').value.trim();

            if (nome == '' || email == '' || mensagem == '') {
                mensagemStatus.innerHTML= '<p>Por favor, preencha todos os campos.</p>';
                mensagemStatus.className = 'status-error';
            } else {    
                mensagemStatus.innerHTML = '<p>Mensagem enviada com sucesso!</p>';
                mensagemStatus.className = 'status-success';
                formulario.reset(); 

            }
            return;
        });
    }
}); 
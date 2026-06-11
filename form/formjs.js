document.addEventListener('DOMContentLoaded'), () => {
    const form = document.getElementById('cadastroform');
    const cpf = document.getElementById('cpf');
    const tel = document.getElementById('tel');

    cpf.addEventListener('input', (e)); {
        let value = e.target.value.replace(/\D/g,"");
        value = value.replace(/(\d{3})(\d)/)
    
    
    }
}
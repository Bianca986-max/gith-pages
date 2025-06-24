function validarFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const filme = document.getElementById("filme").value.trim();
    const mensagem = document.getElementById("mensagem");

    if (nome === "" || filme === "") {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        mensagem.style.color = "red";
        return false;
    }

    mensagem.textContent = `Obrigada pela sugestão, ${nome}! 💖`;
    mensagem.style.color = "green";
    return false; // para não recarregar a página
}

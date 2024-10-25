function sendMessage() {
    var userMessage = document.getElementById("userMessage").value;
    var messageBox = document.getElementById("messages");

    if (userMessage.trim() !== "") {
        // Exibir mensagem do usuário
        var userMessageElement = document.createElement("p");
        userMessageElement.innerHTML = "<b>Você:</b> " + userMessage;
        messageBox.appendChild(userMessageElement);

        // Exibir resposta de Vohar após 1 segundo
        setTimeout(function () {
            var responseMessage = document.createElement("p");
            responseMessage.innerHTML = "<b>Vohar:</b> Continue assim, você está perto... Decifre o código 741 - é uma chave!";
            messageBox.appendChild(responseMessage);
            messageBox.scrollTop = messageBox.scrollHeight; // Rola até o fim do chat
        }, 1000);

        // Limpa o campo de texto
        document.getElementById("userMessage").value = "";
    }
}

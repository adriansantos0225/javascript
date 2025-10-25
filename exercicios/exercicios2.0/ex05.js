class Logger {
  // propriedade estática: compartilhada por toda a classe
  static logs = [];

  // método estático que registra uma mensagem
  static registrar(mensagem) {
    // adiciona a mensagem ao array estático
    this.logs.push(mensagem);

    // exibe confirmação no console
    console.log(`Log registrado: ${mensagem}`);
  }

  // método estático que mostra todos os logs registrados
  static mostrarLogs() {
    if (this.logs.length === 0) {
      console.log("Nenhum log registrado.");
      return;
    }

    console.log("=== Logs registrados ===");
    this.logs.forEach((msg, index) => {
      console.log(`${index + 1}. ${msg}`);
    });
    console.log("=========================");
  }

  // (opcional) método estático para limpar os logs
  static limparLogs() {
    this.logs = [];
    console.log("Logs limpos.");
  }
}

// Exemplo de uso:
Logger.registrar("Usuário fez login");
Logger.registrar("Usuário atualizou perfil");
Logger.registrar("Usuário fez logout");

Logger.mostrarLogs();

// limpar e verificar
Logger.limparLogs();
Logger.mostrarLogs();

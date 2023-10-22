class Contador {
  constructor(duracion) {
    this.duracion = duracion;
    this.tiempoInicial = 0;
    this.contadorIniciado = true; // Iniciar automáticamente al crear el contador
  }

  detener() {
    this.contadorIniciado = false;
  }

  mostrar() {
    if (this.contadorIniciado) {
      let tiempoTranscurrido = floor((millis() - this.tiempoInicial) / 1000);
      let segundosRestantes = this.duracion - tiempoTranscurrido;

      if (segundosRestantes < 0) {
        segundosRestantes = 0;
      }

      let minutos = floor(segundosRestantes / 60);
      let segundos = segundosRestantes % 60;

      textSize(40);
      textAlign(CENTER, CENTER);
      text(minutos + ':' + nf(segundos, 2), 400, 70);

      if (minutos === 0 && segundos === 0) {
        this.detener();
      }
    }
  }
}

export default class Calculadora {
  sumar(sumando1, sumando2) {
    return sumando1 + sumando2;
  }
  restar(minuendo, sustrayendo) {
    return minuendo - sustrayendo;
  }
  multiplicar(factor1, factor2) {
    return factor1 * factor2;
  }

  dividir(numerador, denominador) {
    if (denominador == 0) {
      throw new Error("La división entre cero no está definida");
    } else {
      return numerador / denominador;
    }
  }
}

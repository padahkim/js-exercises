/*
 *
 * π μ΄ κ³³μ μ νΈλ¦¬ν° ν¨μλ€μ΄ λͺ¨μ¬μ¬λ κ³³μλλ€.
 * κ΄μ¬μμΌμλ©΄ κ΅¬κ²½ν΄λ³΄μλ, μ§κΈ ν¬κ² μ€μν λΆλΆμ μλλλ€.
 *
 */

// κ³ μ ν IDλ₯Ό μμ±ν΄μ£Όλ ν¨μμλλ€.
export function guidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

// options κ°μ²΄μ μμ±λ€μ target κ°μ²΄μ μμ±μΌλ‘ νμ₯ν΄μ£Όλ ν¨μμλλ€.
export function extend(target, options) {
  for (const prop in options) {
    target[prop] = options[prop];
  }
}

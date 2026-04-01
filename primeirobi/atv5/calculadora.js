const valorConta = 100;
const percentualGorjeta = 15;

const gorjeta = valorConta * (percentualGorjeta / 100);
const totalPagar = valorConta + gorjeta;

console.log(`Valor da Conta: R$${valorConta.toFixed(2)}, Gorjeta (${percentualGorjeta}%): R$${gorjeta.toFixed(2)}, Total a pagar: R$${totalPagar.toFixed(2)}`);

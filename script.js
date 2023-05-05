// Pega a data completa
let data = new Date()
document.write(data)
document.write("<br><br>")

// pega o dia da data
let data1 = new Date().getDate()
document.write(data1)
document.write("<br><br>")

// pega o dia da data com o 0
let data2 = new Date().getDate()
document.write(('0'+ data2).slice(0-2)) // slice define  aqtd de dígitos
document.write("<br><br>")

// Pega o mês
let data3 = new Date().getMonth()+1 // somando 1 pois ele pegou a posição/índice do mes no array de meses (jan-dez)
document.write(data3)
document.write("<br><br>")

// Pega o ano
let data4 = new Date().getFullYear()
document.write(data4)
document.write("<br><br>")

// Pega o dia
let data5 = new Date().getDay()
document.write(data5)
document.write("<br><br>")

// Pega a data em um array
let data6 = new Date()
let diaDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
document.write(diaDaSemana[data6.getDay()])
document.write("<br><br>")

// Pega data padrão Americano
let data7 = new Date()
document.write(data7.toDateString())
document.write("<br><br>")

// Pega data padrão do navegador
let data8 = new Date()
document.write(data8.toLocaleDateString());
document.write("<br><br>")

// Formatação de data completa
let data9 = new Date()
let dia =('0' + data9.getDate()).slice(-2)
let mes = data9.getMonth()
let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
let ano = data9.getFullYear()
document.write(dia + ' de ' + meses[mes] + ' de ' + ano);
document.write("<br><br>")
